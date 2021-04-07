/*
 * @Description:调拨历史
 * @Author: owen
 * @Date: 2021-02-23 09:55:32
 * @LastEditTime: 2021-03-02 19:56:01
 */
import { Component } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { batchStatusFilter, requisitionStatusFilter, requisitionTypeFilter, shippingTypeFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'

@Component({
	name: 'History'
})
export default class History extends TablePage {
	public tableDataBatch: Array<defs.wms.AllocationBatchResponseDto> = [] //调拨批次
	public tableData: Array<defs.wms.AllocationMasterResponseDto> = [] //调拨单
	public searchFormBatch: API.wms.allocationBatch.list.Params = {} //调拨批次
	public searchForm: API.wms.allocationMaster.list.Params = {} //调拨单
	public loading2 = false
	mounted() {
		this.search()
		this.searchBetch()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	show(record: object) {
		console.log('record', record)
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
								model: this.searchFormBatch
							}
						}}
					>
						<a-form-model-item prop="abno" label="调拨批次号">
							<a-input allowClear v-model={this.searchFormBatch.abno} />
						</a-form-model-item>
						<a-form-model-item label="调拨类型" prop="requisitionType">
							<form-config v-model={this.searchFormBatch.type} prop="requisitionType" />
						</a-form-model-item>
						<a-form-model-item label="运输方式" prop="shippingType">
							<form-config v-model={this.searchFormBatch.shippingType} prop="shippingType" />
						</a-form-model-item>
						<a-form-model-item prop="warehouseCode" label="来源仓">
							<form-warehouse-code v-model={this.searchFormBatch.sourceWarehouseCode} />
						</a-form-model-item>
						<a-form-model-item prop="warehouseCode" label="目标仓">
							<form-warehouse-code v-model={this.searchFormBatch.targetWarehouseCode} />
						</a-form-model-item>
						<a-form-modelItem prop="beginDeliveryTime" label="出库时间">
							<a-range-picker v-model={this.searchFormBatch.beginDeliveryTime} prop="beginDeliveryTime" />
						</a-form-modelItem>
						<a-form-model-item class="right">
							<a-button type="primary" icon="search" on-click={this.searchBetch} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clearBatch}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>

				<a-table loading={this.loading2} rowKey="id" pagination={false}>
					<a-table-column title="调拨批次号" dataIndex="abno" key="abno" />
					<a-table-column title="调拨类型" dataIndex="type" key="type" customRender={(val: string | number) => requisitionTypeFilter(val)} />
					<a-table-column title="运输方式" dataIndex="shippingType" key="shippingType" customRender={(val: string | number) => shippingTypeFilter(val)} />
					<a-table-column title="状态" dataIndex="status" key="status" customRender={(val: string | number) => batchStatusFilter(val)} />
					<a-table-column title="来源仓" dataIndex="sourceWarehouseCode" key="sourceWarehouseCode" />
					<a-table-column title="目标仓" dataIndex="targetWarehouseCode" key="targetWarehouseCode" />
					<a-table-column title="调拨出库时间" dataIndex="deliveryTime" key="deliveryTime" customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" />
				</a-table>
				{/* <div class="fenye"><a-pagination v-model={this.current} total={this.total} showTotal={(total: number) => `共 ${total} 条`} onShowSizeChange={this.handleSizeChange.bind(this)} onChange={this.handleCurrentChange.bind(this)} show-size-changer defaultPageSize={this.pageSize} /></div> */}

				{/* 调拨单 */}
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
						<a-form-model-item prop="aono" label="调拨单号">
							<a-input allowClear v-model={this.searchForm.aono} />
						</a-form-model-item>
						<a-form-model-item label="调拨类型" prop="requisitionType">
							<form-config v-model={this.searchForm.type} prop="requisitionType" />
						</a-form-model-item>
						<a-form-model-item label="运输方式" prop="shippingType">
							<form-config v-model={this.searchForm.shippingType} prop="shippingType" />
						</a-form-model-item>
						<a-form-model-item prop="warehouseCode" label="来源仓">
							<form-warehouse-code v-model={this.searchForm.sourceWarehouseCode} />
						</a-form-model-item>
						<a-form-model-item prop="warehouseCode" label="目标仓">
							<form-warehouse-code v-model={this.searchForm.targetWarehouseCode} />
						</a-form-model-item>
						<a-form-model-item label="状态" prop="status">
							<form-config v-model={this.searchForm.status} prop="requisitionStatus" />
						</a-form-model-item>
						<a-form-model-item prop="pickno" label="拣货单号">
							<a-input v-model={this.searchForm.pickno} />
						</a-form-model-item>
						<a-form-model-item prop="fbaAccount" label="FBA账号">
							<a-input allowClear v-model={this.searchForm.fbaAccount} />
						</a-form-model-item>
						<a-form-model-item prop="pickBy" label="拣货人">
							<a-input v-model={this.searchForm.pickBy} />
						</a-form-model-item>
						<a-form-model-item prop="tradeCompanyCode" label="交易主体">
							<a-input v-model={this.searchForm.tradeCompanyCode} />
						</a-form-model-item>
						<a-form-modelItem prop="deliveryTime" label="出库时间">
							<a-range-picker v-model={this.searchForm.deliveryTime} prop="deliveryTime" />
						</a-form-modelItem>
						<a-form-model-item prop="boxQty" label="箱数">
							<a-input-group compact>
								<a-input-number style={{ width: '81px' }} v-model={this.searchForm.boxQty} />
								<span style={{ width: '12px', textAlign: 'center' }}> - </span>
								<a-input-number style={{ width: '81px' }} v-model={this.searchForm.boxQty} />
							</a-input-group>
						</a-form-model-item>

						<a-form-model-item class="right">
							<a-button type="primary" icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<a-table dataSource={this.tableData} scroll={{ x: 1500 }} rowKey="id" pagination={false}>
					<a-table-column title="调拨单号" dataIndex="aono" key="aono" align="center" />
					<a-table-column title="调拨类型" dataIndex="type" key="type" align="center" customRender={(val: string | number) => requisitionTypeFilter(val)} />
					<a-table-column title="运输方式" dataIndex="shippingType" key="shippingType" align="center" customRender={(val: string | number) => shippingTypeFilter(val)} />
					<a-table-column title="状态" dataIndex="status" key="status" align="center" customRender={(val: string | number) => requisitionStatusFilter(val)} />
					<a-table-column title="来源仓" dataIndex="sourceWarehouseCode" key="sourceWarehouseCode" align="center" />
					<a-table-column title="目标仓" dataIndex="targetWarehouseCode" key="targetWarehouseCode" align="center" />
					<a-table-column title="是否含税" dataIndex="taxFlag" key="taxFlag" align="center" />
					<a-table-column title="交易主体" dataIndex="tradeCompanyCode" key="tradeCompanyCode" align="center" />
					<a-table-column title="FBA账号" dataIndex="fbaAccount" key="fbaAccount" align="center" />
					<a-table-column title="shipment" dataIndex="shipment" key="shipment" align="center" />
					<a-table-column title="拣货单号" dataIndex="pickno" key="pickno" align="center" />
					<a-table-column title="调拨批次号" dataIndex="abno" key="abno" align="center" />
					<a-table-column title="调拨人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" align="center" />
				</a-table>
			</div>
		)
	}
	public async getInit(params: API.wms.allocationBatch.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.allocationBatch.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableDataBatch = data.list || []
			this.total = data.total || 0
		}
	}
	public async getInit2(params: API.wms.allocationBatch.list.Params) {
		this.loading2 = true
		const { data, success } = await API.wms.allocationMaster.list.request(params)
		this.loading2 = false
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
	public searchBetch(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchFormBatch)
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clearBatch() {
		this.searchFormBatch = {}
		this.searchBetch()
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}
}
