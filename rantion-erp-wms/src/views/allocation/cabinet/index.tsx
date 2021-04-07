/*
 * @Description:装柜信息
 * @Author: owen
 * @Date: 2021-02-23 09:55:18
 * @LastEditTime: 2021-03-06 21:11:00
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { containerTypeFilter, shippingTypeFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'
import CabinetDetail from './cabinetDetail'
import { containerDetailExport } from '@/utils/downloadApi'
@Component({
	name: 'Cabinet',
	components: { CabinetDetail }
})
export default class Cabinet extends TablePage {
	public tableData: Array<defs.wms.AllocationContainerResponseDto> = []
	public searchForm: API.wms.allocationContainer.list.Params = {}
	public seletedData: any = []
	@Ref('CabinetDetail') readonly CabinetDetailRef!: HTMLFormElement
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

	public hasSelected() {
		return this.rowSelection.selectedRowKeys.length > 0
	}
	mounted() {
		this.search()
	}

	show(record: object) {
		this.CabinetDetailRef.init(record)
		console.log('record', record)
	}

	print() {
		console.log('hello')
	}

	//导出装柜信息明细汇总
	async expContainerDetail() {
		//console.log(this.rowSelection.selectedRows)
		const info = this.rowSelection.selectedRows
			.map((item: API.wms.allocationContainer.list.Params) => {
				return item.containerNo
			})
			.join(',')
		console.log(info)

		await containerDetailExport(info)
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
						<a-form-model-item prop="containerNo" label="货柜编码">
							<a-input v-model={this.searchForm.containerNo} />
						</a-form-model-item>
						<a-form-model-item label="装柜类型" prop="containerType">
							<form-config v-model={this.searchForm.containerType} prop="containerType" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="containerNo" label="销售店铺">
									<a-input prop="containerNo" />
								</a-form-model-item>
								<a-form-model-item label="运输方式" prop="shippingType">
									<form-config v-model={this.searchForm.shippingType} prop="shippingType" />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="来源仓">
									<form-warehouse-code v-model={this.searchForm.sourceWarehouseCode} />
								</a-form-model-item>
								<a-form-modelItem prop="beginDeliveryTime" label="装柜时间">
									{() => (
										<span>
											<a-date-picker v-model={this.searchForm.beginCreateTime} prop="beginDeliveryTime" placeholder="开始日期" />
											-
											<a-date-picker v-model={this.searchForm.endCreateTime} prop="beginDeliveryTime" placeholder="结束日期" />
										</span>
									)}
								</a-form-modelItem>
							</span>
						) : null}

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
					<a-button type="primary" icon="vertical-align-bottom" disabled={!this.hasSelected()} on-click={this.expContainerDetail}>
						导出装柜明细
					</a-button>
				</div>
				<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="货柜编码" dataIndex="containerNo" key="containerNo" />
					<a-table-column title="装柜类型" dataIndex="containerType" key="containerType" customRender={(val: string | number) => containerTypeFilter(val)} />
					<a-table-column title="运输方式" dataIndex="shippingType" key="shippingType" customRender={(val: string | number) => shippingTypeFilter(val)} />
					<a-table-column title="货柜容积(L)" dataIndex="containerVolume" key="containerVolume" />
					<a-table-column title="实装产品体积" dataIndex="realVolume" key="realVolume" />
					<a-table-column title="实装率" dataIndex="actualRate" key="actualRate" />
					<a-table-column title="来源仓" dataIndex="sourceWarehouseCode" key="sourceWarehouseCode" />
					<a-table-column title="目标仓" dataIndex="targetWarehouseCode" key="targetWarehouseCode" />
					<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" />
					<a-table-column title="装柜时间" dataIndex="createTime" key="createTime" customRender={(time: any) => timestampToTime(time)} />

					<a-table-column title="操作" align="center">
						{(record: defs.wms.WarehousePositionResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.show(record)}>查看</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<cabinetDetail ref="CabinetDetail" />
			</div>
		)
	}
	public async getInit(params: API.wms.allocationContainer.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.allocationContainer.list.request(params)
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
