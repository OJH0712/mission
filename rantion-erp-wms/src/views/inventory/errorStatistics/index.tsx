/*
 * @盘点误差统计报表
 * @Author: owen
 * @Date: 2021-02-20 16:21:09
 * @LastEditTime: 2021-03-05 17:25:03
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { timestampToTime } from '../../../utils/date'
import InventoryDetail from '../countingOrder/components/inventoryDetail'

@Component({
	name: 'ErrorStatistics',
	components: {
		InventoryDetail
	}
})
export default class ErrorStatistics extends TablePage {
	public tableData: Array<defs.wms.InventoryErrorListResponseDto> = []
	public searchForm: API.wms.inventoryMaster.getInventoryErrorList.Params = {}
	public isShow = false
	@Ref('inventoryDetail') readonly inventoryDetailRef!: HTMLFormElement
	mounted() {
		this.search()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	show(record: object) {
		this.inventoryDetailRef.init(record, this.isShow)
	}
	print() {
		console.log('hello')
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
							<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} prop="warehouseCode" placeholder="请选择适用仓库" />
						</a-form-model-item>
						<a-form-modelItem prop="sku" label="SKU">
							<a-input v-model={this.searchForm.sku} prop="sku" />
						</a-form-modelItem>
						{this.expand ? (
							<span>
								<a-form-model-item prop="auditor" label="审核人">
									<form-sysUser v-model={this.searchForm.auditor} prop="auditor" />
								</a-form-model-item>
								<a-form-model-item prop="auditTime" label="审核时间">
									<a-input-group compact>
										<a-date-picker v-model={this.searchForm.auditBeginTime} prop="auditTime" />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-date-picker v-model={this.searchForm.auditEndTime} prop="auditEndTime" />
									</a-input-group>
								</a-form-model-item>
								<a-form-model-item prop="quantityVariance" label="数量差异">
									<a-input-group compact>
										<a-input-number v-model={this.searchForm.varianceBegin} prop="varianceBegin" />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number v-model={this.searchForm.varianceEnd} prop="varianceEnd" />
									</a-input-group>
								</a-form-model-item>
								<a-form-modelItem prop="icno" label="盘点单号">
									<a-input v-model={this.searchForm.sku} prop="icno" />
								</a-form-modelItem>
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
				<a-table
					rowKey={(record: { id: any }, index: any) => `complete${record.id}${index}`}
					dataSource={this.tableData}
					scroll={{ x: 1500 }}
					loading={this.loading}
					pagination={false}
					class="white-space-nowrap"
				>
					<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="盘点单号" dataIndex="icno" key="icno" align="center" />
					<a-table-column title="SKU" dataIndex="sku" key="sku" align="center" />
					<a-table-column title="库位信息" dataIndex="warehouseCode" key="warehouseCode" align="center" />
					<a-table-column title="数量差异" dataIndex="quantityVariance" key="quantityVariance" align="center" />
					<a-table-column title="审核人" dataIndex="auditor" key="auditor" align="center" />
					<a-table-column title="审核时间" dataIndex="auditTime" key="auditTime" align="center" customRender={(time: string) => timestampToTime(time)} />
					<a-table-column title="操作" align="center" key="action">
						{(record: defs.wms.InventoryErrorListResponseDto) => (
							<a-space size="middle">
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

	public async getInit(params: API.wms.inventoryMaster.getInventoryErrorList.Params) {
		this.loading = true
		const { data, success } = await API.wms.inventoryMaster.getInventoryErrorList.request(params)
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
		this.searchForm = {}
		this.search()
	}
}
