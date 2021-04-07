/*
 * @Description:盘点单查看详情
 * @Author: owen
 * @Date: 2021-02-26 10:18:23
 * @LastEditTime: 2021-03-08 20:39:27
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { isEmpty, map } from 'ramda'

@Component({
	name: 'inventoryDetail'
})
export default class InventoryDetail extends TablePage {
	@Ref('remark') readonly remarkRef!: HTMLFormElement
	public tableData: any = []
	public tableData2: Array<any> = []
	public tableData3: Array<any> = []
	public calcVisible = false
	public warehouseName: string
	public isShow: boolean
	public hasSelected: boolean
	public icno: string
	curRecord: any
	remarkMessage: ''
	remarkVisible = false
	async init(record: any, isShow: boolean, hasSelected: boolean) {
		this.curRecord = record
		this.isShow = isShow
		this.calcVisible = true
		this.warehouseName = record.warehouseName
		this.icno = record.icno
		this.hasSelected = hasSelected
		const { data, success } = await API.wms.inventoryMaster.getIcnoDetailList.request({ icno: record.icno })
		if (success) {
			this.tableData = map((item: any) => {
				return {
					...item,
					warehouseName: this.warehouseName
				}
			}, data)
		}
	}

	cancel() {
		this.remarkMessage = ''
		this.calcVisible = false
		this.tableData = []
		this.tableData2 = []
		this.tableData3 = []
	}
	public clear(): void {
		throw new Error('Method not implemented.')
	}
	async hangdleClick(val: number) {
		console.log(val)

		if (val == 2) {
			if (!isEmpty(this.tableData3)) return
			const { data, success } = await API.wms.inventoryMaster.getInventoryProfitList.request({ icno: this.icno })
			if (success) {
				this.tableData2 = map((item: any) => {
					return {
						...item,
						warehouseName: this.warehouseName
					}
				}, data)
			}
		} else if (val == 3) {
			if (!isEmpty(this.tableData3)) return
			const { data, success } = await API.wms.inventoryMaster.getInventoryLossesList.request({ icno: this.icno })
			if (success) {
				this.tableData3 = map((item: any) => {
					return {
						...item,
						warehouseName: this.warehouseName
					}
				}, data)
			}
		} else {
			if (!isEmpty(this.tableData)) return
		}
	}
	async auditResult() {
		if (isEmpty(this.tableData)) {
			this.$message.error('缺少盘点明细')
			return
		}
		this.remarkVisible = true
		this.$nextTick(() => {
			this.remarkRef.focus()
		})
	}
	async create() {
		const data: defs.wms.InventoryMasterRequestDto = {
			checkType: this.curRecord.checkType,
			inventoryPositions: this.curRecord.inventoryPositions,
			inventoryType: this.curRecord.inventoryType,
			planBeginTime: this.curRecord.planBeginTime,
			planEndTime: this.curRecord.planEndTime,
			warehouseCode: this.curRecord.warehouseCode,
			warehouseName: this.curRecord.warehouseName,
			icno: this.icno
		}
		await API.wms.inventoryMaster.auditResult.request(data, { remark: this.remarkMessage })
		console.log('auditResult')
		this.remarkVisible = false
	}
	remarkClose() {
		this.remarkVisible = false
	}
	public render() {
		return (
			<div>
				<a-modal title="盘点单明细" align="center" visible={this.calcVisible} footer={null} on-ok={this.create} on-cancel={this.cancel} ok-text="生成盘点单" cancel-text="关闭" width={1200}>
					<a-tabs defaultActiveKey="1" align="left" onChange={(val: number) => this.hangdleClick(val)}>
						<a-tab-pane key="1" tab="盘点单明细" name="first">
							<a-table dataSource={this.tableData} rowKey="id" pagination={false}>
								<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
								<a-table-column title="数量" dataIndex="inventoryQty" key="inventoryQty" align="center" />
								<a-table-column title="sku" dataIndex="sku" key="sku" align="center" />
								<a-table-column title="库位信息" dataIndex="positionCode" key="positionCode" align="center" />
								<a-table-column title="箱号" dataIndex="barcode" key="barcode" align="center" />
								<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
								<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" />
								<a-table-column title="操作人" dataIndex="operator" key="operator" align="center" />
							</a-table>
						</a-tab-pane>
						<a-tab-pane key="2" tab="盘盈记录" force-render name="second">
							<a-table dataSource={this.tableData2} rowKey="id" pagination={false}>
								<a-table-column title="sku" dataIndex="sku" key="sku" align="center" />
								<a-table-column title="数量" dataIndex="inventoryQty" key="inventoryQty" align="center" />
								<a-table-column title="库位信息" dataIndex="positionCode" key="positionCode" align="center" />
								<a-table-column title="箱号" dataIndex="barcode" key="barcode" align="center" />
							</a-table>
						</a-tab-pane>
						<a-tab-pane key="3" tab="盘亏记录" name="third">
							<a-table dataSource={this.tableData3} rowKey="id" pagination={false}>
								<a-table-column title="sku" dataIndex="sku" key="sku" align="center" />
								<a-table-column title="数量" dataIndex="inventoryQty" key="inventoryQty" align="center" />
								<a-table-column title="库位信息" dataIndex="positionCode" key="positionCode" align="center" />
								<a-table-column title="箱号" dataIndex="barcode" key="barcode" align="center" />
							</a-table>
						</a-tab-pane>
					</a-tabs>
					<div v-show={this.isShow} class="table-footer">
						<a-button type="primary" disabled={!this.hasSelected} on-click={this.auditResult}>
							发起盘点结果审核
						</a-button>

						<a-button type="primary" on-click={this.cancel}>
							关闭
						</a-button>
					</div>
					<a-modal title="请输入备注" visible={this.remarkVisible} on-cancel={this.remarkClose} on-ok={this.create}>
						<a-input ref="remark" v-model={this.remarkMessage} />
					</a-modal>
				</a-modal>
			</div>
		)
	}
	public search() {
		console.log('search')
	}
}
