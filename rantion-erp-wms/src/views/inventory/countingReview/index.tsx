/*
 * 盘点结果审核
 * @Author: owen
 * @Date: 2021-02-20 16:21:00
 * @LastEditTime: 2021-02-28 18:26:21
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import InventoryDetail from '../countingOrder/components/inventoryDetail'
@Component({
	name: 'CountingReview',
	components: { InventoryDetail }
})
export default class CountingReview extends TablePage {
	@Ref('inventoryDetail') readonly inventoryDetailRef!: HTMLFormElement
	public tableData: Array<defs.wms.InventoryMasterResponseDto> = []
	// public searchForm: API.wms.inventoryMaster.list.Params = {}
	public searchForm: API.wms.inventoryMaster.list.Params = { inventoryStatus: 35 }
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		// type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.InventoryDetailRecordResponseDto>) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
		}
	}
	isShow = false
	public hasSelected() {
		return this.rowSelection.selectedRowKeys.length > 0
	}
	mounted() {
		this.search()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}

	//盘点结果审核 确认
	async orderConfirm(record: any) {
		const { success } = await API.wms.inventoryMaster.affirm.request({ icno: record.icno })
		if (success) {
			this.$message.success('确定盘点单成功')
			this.search()
		}
	}
	//盘点结果审核 驳回
	async orderReject(record: any) {
		const { success } = await API.wms.inventoryMaster.reject.request({ icno: record.icno })
		if (success) {
			this.$message.success('已驳回')
			this.search()
		}
	}

	//盘点结果审核 查看
	show(record: object) {
		console.log('show', record)
		this.inventoryDetailRef.init(record, this.isShow, this.hasSelected)
	}

	public render() {
		return (
			<div>
				<div class="top-search-from">
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.searchForm
							}
						}}
					>
						<a-form-model-item prop="warehouseCode" label="适用仓库">
							<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
						</a-form-model-item>
						<a-form-modelItem prop="fono" label="盘点单号">
							<a-input v-model={this.searchForm.icno} />
						</a-form-modelItem>
						{this.expand ? (
							<span>
								<a-form-model-item prop="createTime" label="创建时间">
									<a-date-picker v-model={this.searchForm.createTime} prop="createTime" />
								</a-form-model-item>
								<a-form-model-item prop="auditTime" label="审核时间">
									<a-date-picker v-model={this.searchForm.auditTime} prop="auditTime" />
								</a-form-model-item>
							</span>
						) : null}

						{/* 待完成 */}

						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
							<a class="expand" on-click={this.toggle.bind(this)}>
								{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
							</a>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button type="primary" disabled={!this.hasSelected()}>
						批量确认盘点结果
					</a-button>
				</div>
				<a-table rowSelection={this.rowSelection} dataSource={this.tableData} scroll={{ x: 1500 }} loading={this.loading} rowKey="id" pagination={false} class="white-space-nowrap">
					<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="盘点单号" dataIndex="icno" key="icno" align="center" />
					<a-table-column title="盘点类型" dataIndex="inventoryType" key="inventoryType" align="center" />
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" />
					<a-table-column title="操作" align="center">
						{(record: defs.wms.InventoryMasterResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.orderConfirm(record)}>确认</a>
								{/* <a-popconfirm title="确定驳回吗？" ok-text="确定" cancel-text="取消" onConfirm={() => this.orderReject(record)}>
									<a>驳回</a>
								</a-popconfirm> */}
								<a on-click={() => this.orderReject(record)}>驳回</a>
								<a on-click={() => this.show(record)}>查看</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<inventoryDetail ref="inventoryDetail" />
			</div>
		)
	}
	public async getInit(params: API.wms.inventoryMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.inventoryMaster.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = { inventoryStatus: 35 }

		this.search()
	}
}
