/*
 * @Author: Chan
 * @Date: 2021-02-20 16:14:17
 * @LastEditTime: 2021-02-23 11:27:14
 * @LastEditors: Chan
 * @Description: 调整适用仓库
 */
import { isNil, concat, without } from 'ramda'
import { Component, Vue } from 'vue-property-decorator'
const columns = [
	{
		title: '仓库名称',
		dataIndex: 'warehouseName',
		key: 'warehouseName'
	}
]
@Component
export default class SetWarehouse extends Vue {
	setWareHouseVisible = false
	wareHouseList: Array<defs.wms.WarehouseResponseDto> = []
	itemCode = ''
	channelCode = ''
	total = 0
	rowSelection = {
		selectedRowKeys: [],
		selections: true,
		type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.WarehouseResponseDto>) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
		}
	}
	wareHouseForm: API.wms.warehouse.availableList.Params = {
		pageNumber: 1,
		pageSize: 10
	}
	init(ids: string[], providerCode: string, channelCode: string) {
		this.setWareHouseVisible = true
		this.selectWareHouseAllList()
		this.getWareHouseById(ids)
		this.itemCode = providerCode
		this.channelCode = channelCode
	}
	loadmore() {
		let { pageNumber } = this.wareHouseForm
		!isNil(pageNumber) && pageNumber++ && this.$set(this.wareHouseForm, 'pageNumber', pageNumber)
		this.selectWareHouseAllList()
	}
	cancel() {
		this.wareHouseList = []
		this.setWareHouseVisible = false
		this.wareHouseForm = {
			pageNumber: 1,
			pageSize: 10
		}
	}

	async handleOk() {
		const rows = this.rowSelection.selectedRows.map((item) => {
			return {
				channelCode: this.channelCode,
				providerCode: this.itemCode,
				warehouseCode: (item as defs.wms.WarehouseResponseDto).warehouseCode,
				warehouseName: (item as defs.wms.WarehouseResponseDto).warehouseName
			}
		})
		const notSelectedList = without(this.rowSelection.selectedRows, this.wareHouseList).map((item) => {
			return {
				channelCode: this.channelCode,
				providerCode: this.itemCode,
				warehouseCode: (item as defs.wms.WarehouseResponseDto).warehouseCode,
				warehouseName: (item as defs.wms.WarehouseResponseDto).warehouseName
			}
		})
		const { success } = await API.wms.logisticsChannelWarehouse.updateBatchByLogisticsChannel.request({
			addParams: rows,
			deleteParams: notSelectedList
		})
		if (success) {
			this.$notification.success({
				description: '设置成功',
				message: '提示'
			})
		}
		this.cancel()
		this.$emit('search')
	}
	// 查询当前已设置的仓库
	async getWareHouseById(ids: string[]) {
		this.$set(this.rowSelection, 'selectedRowKeys', ids)
	}
	// 分页查询所有仓库
	async selectWareHouseAllList() {
		const wareHouseForm = this.wareHouseForm
		const { data, success } = await API.wms.warehouse.availableList.request(wareHouseForm)
		if (success && !isNil(data)) {
			this.total = data.total || 0
			this.wareHouseList = concat(this.wareHouseList, data.list || [])
		}
	}

	get tableFooter() {
		return this.total > this.wareHouseList.length ? (
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<a-button size="small" on-click={this.loadmore}>
					加载更多
				</a-button>
			</div>
		) : null
	}
	public render() {
		return (
			<a-modal destroyOnClose title="适用仓库设置" visible={this.setWareHouseVisible} on-ok={this.handleOk} on-cancel={this.cancel}>
				<a-table
					hideDefaultSelections={true}
					columnTitle="是否适用于该服务渠道"
					scroll={{ y: 500 }}
					pagination={false}
					bordered
					rowKey="id"
					columns={columns}
					data-source={this.wareHouseList}
					row-selection={this.rowSelection}
				/>
				{this.tableFooter}
			</a-modal>
		)
	}
}
