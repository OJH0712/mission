/*
 * @Description:查看出库单详情
 * @Author: owen
 * @Date: 2021-03-04 15:14:22
 * @LastEditTime: 2021-03-04 19:15:15
 */
import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { F, T, isNil } from 'ramda'
import { deepCopy } from '@/utils'
import { timestampToTime } from '../../../utils/date'

@Component({
	name: 'outMasterDetail'
})
export default class OutMasterDetail extends TablePage {
	public visible = F()
	public tableData: defs.wms.OutMasterResponseDto
	public skuData: any = []
	public dono: any
	public offShelfData: any = []
	public returnData: any = []
	async init(record: defs.wms.OutMasterResponseDto) {
		console.log(record.dono)
		this.dono = record.dono
		this.visible = T()
		this.tableData = deepCopy(record)
		const { data, success } = await API.wms.outMaster.getByDono.request(record.dono)
		if (success && !isNil(data)) {
			this.skuData = data
			//	console.log(this.skuData, '1112')
			//	console.log(this.tableData, '1112')
		}
		this.getOffData()
		this.getreturnData()
	}
	cancel() {
		this.visible = F()
		this.clear()
	}
	// 下架
	async getOffData() {
		const { data, success } = await API.wms.inoutStepRecord.list.request({
			operationNo: this.dono,
			operationType: 50
		})
		if (success && !isNil(data)) {
			//		console.log(data, '下架')
			this.offShelfData = data.list
			//	console.log(this.offShelfData)
		}
	}
	// 还贷
	async getreturnData() {
		const { data, success } = await API.wms.inoutStepRecord.list.request({
			operationNo: this.dono,
			operationType: 80
		})
		if (success && !isNil(data)) {
			//		console.log(data, '还贷')
			this.returnData = data.list
			console.log(this.returnData)
		}
	}

	public render() {
		return (
			<div>
				<a-modal title="出库单" align="center" visible={this.visible} footer={null} on-cancel={this.cancel} ok-text="确定" width={1200}>
					{!isNil(this.tableData) && (
						<div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>出口库单号 :</span>
									<span>{this.tableData.dono}</span>
								</div>
								<div class="app-flex-1">
									<span>仓库:</span>
									<span>{this.tableData.warehouseName}</span>
								</div>
								<div class="app-flex-1">
									<span>来源类型:</span>
									<span>{this.tableData.sourceType}</span>
								</div>
								<div class="app-flex-1">
									<span>来源单号:</span>
									<span>{this.tableData.sourceNo}</span>
								</div>
							</div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>状态:</span>
									<span>{this.tableData.status}</span>
								</div>
								<div class="app-flex-1">
									<span>销售平台:</span>
									<span>{this.tableData.platformName}</span>
								</div>
								<div class="app-flex-1">
									<span>销售店铺:</span>
									<span>{this.tableData.shopName}</span>
								</div>

								<div class="app-flex-1">
									<span>产品数:</span>
									<span>{this.skuData.length}</span>
								</div>
							</div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>总数量:</span>
									<span>{this.tableData.qty}</span>
								</div>

								<div class="app-flex-1">
									<span>目的地 :</span>
									<span>{this.tableData.country}</span>
								</div>
								<div class="app-flex-1">
									<span>运单号 :</span>
									<span>{this.tableData.waybillNo}</span>
								</div>
								<div class="app-flex-1">
									<span>物流商 :</span>
									<span>{this.tableData.logisticsProviderName}</span>
								</div>
							</div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>物流渠道:</span>
									<span>{this.tableData.logisticsChannelName}</span>
								</div>
								<div class="app-flex-1">
									<span>拣货单号:</span>
									<span>{this.tableData.pickno}</span>
								</div>
								<div class="app-flex-1">
									<span>是否含税:</span>
									<span>-</span>
								</div>
								<div class="app-flex-1">
									<span>包裹重量:</span>
									<span>{this.tableData.weight}</span>
								</div>
							</div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>预估重量(g):</span>
									{/* <span>{this.tableData.estimateWeight}</span> */}
								</div>
								<div class="app-flex-1">
									<span>预估运费(元):</span>
									{/* <span>{this.tableData.estimatePrice}</span> */}
								</div>
								<div class="app-flex-1">
									<span>创建时间:</span>
									<span>{timestampToTime(this.tableData.createTime)}</span>
								</div>
								<div class="app-flex-1">
									<span>更新时间:</span>
									<span>{timestampToTime(this.tableData.updateTime)}</span>
								</div>
							</div>
							<a-tabs defaultActiveKey="1" align="left" style="margin-top:30px">
								<a-tab-pane key="1" tab="产品明细" name="first">
									<a-table dataSource={this.skuData} rowKey="sku" pagination={false}>
										<a-table-column title="sku" dataIndex="sku" key="sku" align="center" />
										<a-table-column
											title="图片"
											dataIndex="productImageUrl"
											key="productImageUrl"
											align="center"
											customRender={(productImageUrl: string) => {
												return <a-Avatar src={productImageUrl} shape="square" />
											}}
										/>
										<a-table-column title="标题" dataIndex="productTitle" key="productTitle" align="center" />
										<a-table-column title="出库数量" dataIndex="qty" key="qty" align="center" />
									</a-table>
								</a-tab-pane>
								<a-tab-pane key="2" tab="收货地址" name="second">
									<div class="app-flex-sb">
										<div class="app-flex-1">
											<span>收件人 :</span>
											<span>{this.tableData.recipient}</span>
										</div>
										<div class="app-flex-1">
											<span>国家:</span>
											<span>{this.tableData.country}</span>
										</div>
										<div class="app-flex-1">
											<span>省/州:</span>
											<span>{this.tableData.province}</span>
										</div>
										<div class="app-flex-1">
											<span>城市:</span>
											<span>{this.tableData.city}</span>
										</div>
									</div>
									<div class="app-flex-sb">
										<div class="app-flex-1">
											<span>邮编 :</span>
											<span>{this.tableData.postcode}</span>
										</div>
										<div class="app-flex-1">
											<span>电话:</span>
											<span>{this.tableData.telephone}</span>
										</div>
										<div class="app-flex-1">
											<span>手机:</span>
											<span>{this.tableData.mobilePhone}</span>
										</div>
										<div class="app-flex-1">
											<span>邮箱:</span>
											<span>{this.tableData.email}</span>
										</div>
									</div>
									<div class="app-flex-sb">
										<div class="app-flex-1">
											<span>地址 :</span>
											<span>{this.tableData.address}</span>
										</div>
									</div>
								</a-tab-pane>
								<a-tab-pane key="3" tab="下架记录" name="third">
									<a-table dataSource={this.offShelfData} rowKey="sku" pagination={false}>
										<a-table-column title="操作人" dataIndex="createBy" key="createBy" />
										<a-table-column title="操作时间" dataIndex="createTime" key="createTime" customRender={(time: string) => timestampToTime(time)} />
										<a-table-column title="SKU" dataIndex="sku" key="sku" />
										<a-table-column title="库位" dataIndex="positionCode" key="positionCode" />
										<a-table-column title="数量" dataIndex="qty" key="qty" />
										<a-table-column title="产品标题" dataIndex="productTitle" key="productTitle" />
									</a-table>
								</a-tab-pane>
								<a-tab-pane key="4" tab="还贷记录" name="fourth">
									<a-table dataSource={this.returnData} rowKey="sku" pagination={false}>
										<a-table-column title="操作人" dataIndex="createBy" key="createBy" />
										<a-table-column title="操作时间" dataIndex="createTime" key="createTime" customRender={(time: string) => timestampToTime(time)} />
										<a-table-column title="SKU" dataIndex="sku" key="sku" />
										<a-table-column title="数量" dataIndex="qty" key="qty" />
										<a-table-column title="产品标题" dataIndex="productTitle" key="productTitle" />
										<a-table-column title="还货库位" dataIndex="operationContent" key="operationContent" />
									</a-table>
								</a-tab-pane>
							</a-tabs>
							<div style="margin-top : 30px">
								<a-button type="primary" on-click={this.cancel}>
									确定
								</a-button>
							</div>
						</div>
					)}
				</a-modal>
			</div>
		)
	}
	clear() {
		this.offShelfData = []
		this.returnData = []
	}
	search() {
		console.log('clear')
	}
}
