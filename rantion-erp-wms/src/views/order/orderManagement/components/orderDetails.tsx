/*
 * @Author: antes
 * @Date: 2021-03-09 21:43:03
 * @Description: 订单详情
 */
import { Component } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { getOrderById, getOrderRecord } from '@/api/sale/order'
import { equals, pick } from 'ramda'
import { updateOrder } from '@/api/sale/order'
import { orderStatusFilter } from '@/dictionaries/filter'
const innerColumns = [
	{
		dataIndex: 'platformSku',
		title: 'SKU'
	},
	{
		dataIndex: 'platformProductCode',
		title: '平台产品代码'
	},
	{
		dataIndex: 'platformVariantTitle',
		title: '变体'
	},
	{
		dataIndex: 'quantity',
		title: '数量'
	},
	{
		dataIndex: 'weight',
		title: '重量(g)'
	},

	{
		dataIndex: 'price',
		title: '售价'
	},
	{
		dataIndex: 'currency',
		title: '币种'
	}
]
const orederRecordColumns = [
	{
		dataIndex: 'content',
		title: '操作内容',
		ellipsis: true
	},
	{
		dataIndex: 'createBy',
		title: '操作人'
	},
	{
		dataIndex: 'createTime',
		title: '操作时间'
	}
]
interface MailingMethod {
	value: string[]
	label: string[]
}
import { StorageModule } from '@/store/modules/storage'
@Component({
	name: 'OrderDetails'
})
export default class OrderDetails extends TablePage {
	public visible = false
	public pageData: any = {}
	public orederRecord: any = []
	public isUpdate = false
	public mailingMethod: MailingMethod = {
		value: [],
		label: []
	}
	public orderStatus = [
		{
			id: 1,
			value: 11,
			name: '已忽略'
		},
		{
			id: 2,
			value: 2,
			name: '已处理'
		},
		{
			id: 3,
			value: 13,
			name: '待检查'
		}
	]
	async submitForm() {
		if (this.isUpdate) {
			const pageForm: any = pick(
				[
					'id',
					'customerShipMethod',
					'shipWarehouseName',
					'shipMethod',
					'shipTrackingNumber',
					'shipWeight',
					'shipFee',
					'shipTime',
					'buyerCode',
					'shippingName',
					'taxId',
					'shippingPhone',
					'buyerEmail',
					'shippingAddress1',
					'shippingAddress2',
					'shippingCity',
					'shippingState',
					'shippingZip',
					'shippingCountryCode',
					'shippingStateCode',
					'shippingCountry',
					'shipWarehouse',
					'shipWarehouseType'
				],
				this.pageData
			)
			if (pageForm.shipWarehouse) {
				const data = StorageModule.warehouse.find((_) => pageForm.shipWarehouse === _.warehouseCode)
				if (data) {
					const { warehouseCode, warehouseName, type } = data
					pageForm.shipWarehouseName = warehouseName
					pageForm.shipWarehouse = warehouseCode
					pageForm.shipWarehouseType = type
				}
			} else {
				pageForm.shipWarehouseName = ''
				pageForm.shipWarehouse = ''
				pageForm.shipWarehouseType = ''
			}

			if (this.mailingMethod.value) {
				pageForm.shipMethodProviderCode = this.mailingMethod.value[0]
				pageForm.shipMethodChannelCode = this.mailingMethod.value[1]
			}
			if (this.mailingMethod.value.length === 0) {
				pageForm.shipMethodProviderCode = ''
				pageForm.shipMethodChannelCode = ''
			}

			if (this.mailingMethod.label) {
				pageForm.shipMethodProviderName = this.mailingMethod.label[0]
				pageForm.shipMethodChannelName = this.mailingMethod.label[1]
			} else {
				pageForm.shipMethodProviderName = ''
				pageForm.shipMethodChannelName = ''
			}
			console.log('000', this.mailingMethod.value, pageForm.shipMethodProviderCode, pageForm.shipMethodChannelCode, pageForm.shipMethodProviderName, pageForm.shipMethodChannelName)

			const { success } = await updateOrder(pageForm)
			if (success) {
				this.$notification.success({
					message: '提示',
					description: '修改订单成功'
				})
				this.clear()
			}
		}
	}
	async init(id: string) {
		this.visible = true
		const { data } = await getOrderById(id)
		this.pageData = data
		console.log(data, '订单信息')

		this.mailingMethod.value = [data.shipMethodProviderCode, data.shipMethodChannelCode]
		this.mailingMethod.label = [data.shipMethodProviderName, data.shipMethodChannelName]
		this.search()
	}
	clear() {
		this.visible = false
		this.pageData = {}
		this.isUpdate = false
		this.orederRecord = []
		this.mailingMethod = {
			value: [],
			label: []
		}
	}
	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = {
			orderBy: 'id desc',
			orderNo: this.pageData.orderNo
		}
		this.getOrderRecord(Object.assign(params, this.pagination()))
	}
	async getOrderRecord(param: any) {
		const { data } = await getOrderRecord({
			orderBy: 'id desc',
			...param
		})
		this.orederRecord = data.list
		this.total = data.total || 0
	}
	tageUpdate() {
		this.isUpdate = !this.isUpdate
	}

	render() {
		return (
			<a-modal visible={this.visible} destroyOnClose title={'订单：' + this.pageData.orderNo} on-cancel={this.clear} on-ok={this.submitForm} center top="10vh" width="80%">
				<div>
					<div class="orderTop">
						<div>
							<a-row type="flex">
								<a-col span={6} order={4}>
									平台： {this.pageData.platformName}
								</a-col>
								<a-col span={6} order={4}>
									店铺： {this.pageData.platformShopName}
								</a-col>
								<a-col span={6} order={4}>
									订单类型： {this.pageData.orderType === 'normal' ? '正常' : '重发'}
								</a-col>
								<a-col span={6} order={4}>
									平台单号： {this.pageData.platformOrderNo}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									订单日期： {this.pageData.orderTime}
								</a-col>
								<a-col span={6} order={4}>
									预计交货日期：{this.pageData.expectedDeliveryTime}
								</a-col>
								<a-col span={6} order={4}>
									订单状态：{orderStatusFilter(this.pageData.orderStatus)}
									{/* {equals(this.pageData.orderStatus, 'wait_processed') || equals(this.pageData.orderStatus, 'delivery_issue') ? (
										<div>
											订单状态：
											{
												<a-select style="width:100px">
													{this.orderStatus.map((item: any) => (
														<a-select-option key={item.id} label={item.name} value={item.value}>
															{item.name}
														</a-select-option>
													))}
												</a-select>
											}
										</div>
									) : (
										` 订单状态：${orderStatusFilter(this.pageData.orderStatus)}`
									)} */}
								</a-col>
								<a-col span={6} order={4}>
									订单金额：{this.pageData.totalAmount} {this.pageData.currency}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									销售金额：{this.pageData.itemAmount} {this.pageData.currency}
								</a-col>
								<a-col span={6} order={4}>
									运费：{this.pageData.shippingFee} {this.pageData.currency}
								</a-col>
								<a-col span={6} order={4}>
									折扣：{this.pageData.orderDiscount} {this.pageData.currency}
								</a-col>
								<a-col span={6} order={4}>
									补款：{this.pageData.replenishment} {this.pageData.currency}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									待处理原因：{this.pageData.abnormalMsg}
								</a-col>
							</a-row>
						</div>
					</div>
					<div style="margin-top:10px">
						<a-button on-click={this.tageUpdate} type="primary">
							修改订单
						</a-button>
					</div>
					<div>
						<a-row type="flex" style="padding:20px 0">
							<a-col span={6} order={4}>
								<a-card title="收件信息" style="margin-right: 15px;" width={400} class="order-card">
									{!this.isUpdate ? (
										<div>
											<div>
												<label>买家ID：</label> {this.pageData.buyerCode}
											</div>
											<div>
												<label>收件人：</label>
												{this.pageData.shippingName}
											</div>
											<div>
												<label>纳税号：</label>
												{this.pageData.taxId}
											</div>
											<div>
												<label> 电话：</label>
												{this.pageData.shippingPhone}
											</div>
											<div>
												<label>邮箱：</label>
												{this.pageData.buyerEmail}
											</div>
											<div>
												<label>地址1：</label>
												{this.pageData.shippingAddress1}
											</div>
											<div>
												<label> 地址2：</label>
												{this.pageData.shippingAddress2}
											</div>
											<div>
												<label>城市：</label>
												{this.pageData.shippingCity}
											</div>
											<div>
												<label>州：</label>
												{this.pageData.shippingState}
											</div>
											<div>
												<label>简称：</label>
												{this.pageData.shippingStateCode}
											</div>
											<div>
												<label>邮编：</label>
												{this.pageData.shippingZip}
											</div>
											<div>
												<label>国家：</label>
												{this.pageData.shippingCountry}
											</div>
										</div>
									) : (
										<div>
											<div>
												<label>买家ID：</label> <a-input v-model={this.pageData.buyerCode} style="width:220px" />
											</div>
											<div>
												<label>收件人：</label>
												<a-input v-model={this.pageData.shippingName} style="width:220px" />
											</div>
											<div>
												<label>纳税号：</label>
												<a-input v-model={this.pageData.taxId} style="width:220px" />
											</div>
											<div>
												<label>电话：</label>
												<a-input v-model={this.pageData.shippingPhone} style="width:220px" />
											</div>
											<div>
												<label> 邮箱：</label>
												<a-input v-model={this.pageData.buyerEmail} style="width:220px" />
											</div>
											<div>
												<label>地址1：</label>
												<a-input v-model={this.pageData.shippingAddress1} style="width:220px" />
											</div>
											<div>
												<label>地址2：</label>
												<a-input v-model={this.pageData.shippingAddress2} style="width:220px" />
											</div>
											<div>
												<label>城市：</label>
												<a-input v-model={this.pageData.shippingCity} style="width:220px" />
											</div>
											<div>
												<label>州：</label>
												<a-input v-model={this.pageData.shippingState} style="width:220px" />
											</div>
											<div>
												<label>简称：</label>
												<a-input v-model={this.pageData.shippingStateCode} style="width:220px"></a-input>
											</div>
											<div>
												<label>邮编：</label>
												<a-input v-model={this.pageData.shippingZip} style="width:220px" />
											</div>
											<div>
												<label>国家：</label>
												<form-county
													style="width:220px"
													v-model={this.pageData.shippingCountryCode}
													on-changeLabel={(name: string) => {
														this.pageData.shippingCountry = name
													}}
												/>
											</div>
										</div>
									)}
								</a-card>
							</a-col>
							<a-col span={6} order={4}>
								<a-card title="物流信息" style="width:400px" class="order-card-long">
									{!this.isUpdate ? (
										<div style="height: 100%;">
											<div>
												<label>买家指定物流：</label> {this.pageData.customerShipMethod}
											</div>
											<div>
												<label>发货仓库：</label>
												{this.pageData.shipWarehouseName}
											</div>
											<div>
												<label>发货物流：</label>
												{this.mailingMethod.label.join(',')}
											</div>
											<div>
												<label>跟踪号：</label>
												{this.pageData.shipTrackingNumber}
											</div>
											<div>
												<label>发货重量：</label>
												{this.pageData.shipWeight}
											</div>
											<div>
												<label>运费：</label>
												{this.pageData.shipFee}RMB
											</div>
											<div>
												<label>发货时间：</label>
												{this.pageData.shipTime}
											</div>
										</div>
									) : (
										<div style="height: 100%;">
											<div>
												<label>买家指定物流：</label>
												{this.pageData.customerShipMethod}
											</div>
											<div>
												<label>发货仓库：</label>
												<form-warehouse v-model={this.pageData.shipWarehouse} placeholder="请选择仓库" style="width:220px" />
												{/* <a-input v-model={this.pageData.shipWarehouseName} style="width:220px" /> */}
											</div>
											<div>
												<label>发货物流：</label>
												<form-logistics-channel-list
													allowClear
													v-model={this.mailingMethod.value}
													on-changeLabel={(name: string[]) => {
														this.mailingMethod.label = name
													}}
													style="width:220px"
												/>
											</div>
											<div>
												<label>跟踪号：</label>
												<a-input v-model={this.pageData.shipTrackingNumber} style="width:220px" />
											</div>
											<div>
												<label>发货重量：</label>
												<a-input v-model={this.pageData.shipWeight} style="width:220px" />
											</div>
											<div>
												<label>运费：</label>
												<a-input v-model={this.pageData.shipFee} style="width:220px" />
												RMB
											</div>
											<div>
												<label>发货时间：</label>
												<a-date-picker v-model={this.pageData.shipTime} format="YYYY-MM-DD" style="width:220px" />
											</div>
										</div>
									)}
								</a-card>
							</a-col>
						</a-row>
					</div>
					<div>
						<a-table columns={innerColumns} title={() => <span class="table-title">订单明细：</span>} rowKey="id" dataSource={this.pageData.orderItems} pagination={false} />

						<a-table columns={orederRecordColumns} title={() => <span class="table-title">操作记录：</span>} rowKey="id" dataSource={this.orederRecord} pagination={false} />
						<div class="fenye">
							<a-pagination
								v-model={this.current}
								total={this.total}
								showTotal={(total: number) => `共 ${total} 条`}
								onShowSizeChange={this.handleSizeChange.bind(this)}
								onChange={this.handleCurrentChange.bind(this)}
								show-size-changer
								defaultPageSize={this.pageSize}
							/>
						</div>
					</div>
				</div>
			</a-modal>
		)
	}
}
