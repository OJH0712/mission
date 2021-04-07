/*
 * @Author: gtlong
 * @Date: 2021-03-04 16:14:31
 * @LastEditTime: 2021-03-29 22:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-erp-wms\src\views\order\orderManagement\components\addOrder.tsx
 */
import moment, { Moment } from 'moment'
import { clone, isEmpty, isNil, map, uniq } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
import { saveOrder, getPlatformOrder } from '@/api/sale/order'
const rules = {
	orderType: [{ required: true, message: '订单类型不能为空', trigger: 'blur' }],
	orderStatus: [{ required: true, message: '订单状态不能为空', trigger: 'blur' }],
	platformOrderNo: [{ required: true, message: '平台单号不能为空', trigger: 'blur' }],
	// platformId: [{ required: true, message: '平台不能为空', trigger: 'blur' }],
	platformShopId: [{ required: true, message: '店铺不能为空', trigger: 'blur' }],
	customerShipMethod: [{ required: true, message: '买家指定物流不能为空', trigger: 'blur' }],
	orderTime: [{ required: true, message: '订单日期不能为空', trigger: 'blur' }],
	currency: [{ required: true, message: '币种不能为空', trigger: 'blur' }],
	shippingFee: [{ required: true, message: '运费金额不能为空', trigger: 'blur' }],
	totalAmount: [{ required: true, message: '订单总金额不能为空', trigger: 'blur' }],
	payTime: [{ required: true, message: '付款日期不能为空', trigger: 'blur' }],
	payMethod: [{ required: true, message: '付款方式不能为空', trigger: 'blur' }],
	payAmount: [{ required: true, message: '付款金额不能为空', trigger: 'blur' }],
	shippingName: [{ required: true, message: '收件人不能为空', trigger: 'blur' }],
	shippingPhone: [{ required: true, message: '电话不能为空', trigger: 'blur' }],
	shippingCountry: [{ required: true, message: '国家不能为空', trigger: 'blur' }],
	shippingState: [{ required: true, message: '州不能为空', trigger: 'blur' }],
	shippingCity: [{ required: true, message: '城市不能为空', trigger: 'blur' }],
	shippingAddress1: [{ required: true, message: '地址1不能为空', trigger: 'blur' }],
	shippingCountryCode: [{ required: true, message: '国家不能为空', trigger: 'blur' }]
}
interface PageForm {
	orderType?: string
	orderStatus?: string
	platformOrderNo?: string
	platformId?: string
	platformShopId?: string
	customerShipMethod?: string
	orderTime?: string | Moment
	expectedDeliveryTime?: string | Moment
	currency?: string
	orderRemark?: string
	shippingFee?: string
	totalAmount?: string
	payTime?: string | Moment
	payMethod?: string
	payAmount?: string
	receiptAccount?: string
	shipWarehouseName?: string
	shipWarehouse?: string
	buyerCode?: string
	buyerEmail?: string
	shippingName?: string
	shippingPhone?: string
	shippingZip?: string
	shippingCountryCode?: string
	shippingCountry?: string
	shippingState?: string
	shippingCity?: string
	sellerBy?: string
	shippingAddress1?: string
	shippingAddress2?: string
	mailingMethod?: Array<string>
	mailingMethodName?: Array<string>
	orderProducts?: Array<defs.wms.ProductSkuInfoDto>
	shipMethodProviderCode?: string
	shipMethodProviderName?: string
	shipMethodChannelCode?: string
	shipMethodChannelName?: string
	shipWarehouseType?: number
	shippingStateCode?: string
}
import AddSku from './addSku'
import { StorageModule } from '@/store/modules/storage'
interface OrderProduct {
	costPrice: string
	price: string
	weight: string
	quantity: number
	name: string
	sku: string
	productCode: string
	productSkuImageUrl: string
	nsPrice: string
}
@Component({
	name: 'AddOrder',
	components: { AddSku }
})
export default class AddOrder extends Vue {
	showbrandDetilModal = false
	tableData: Array<OrderProduct> = []
	@Ref('formRef') readonly formRef!: HTMLFormElement
	public platformOrderNo = ''
	checkList = []
	pageForm: PageForm = {
		platformId: '',
		orderType: '',
		orderStatus: '',
		currency: '',
		shippingCountryCode: '',
		shippingStateCode: ''
	}
	@Ref('addSku') readonly addSkuRef!: HTMLFormElement
	init(data?: any) {
		console.log(data)

		this.showbrandDetilModal = true
	}
	// 创建订单
	async submitForm() {
		await this.formRef.validate()
		if (isNil(this.tableData) || isEmpty(this.tableData)) {
			this.$notification.error({
				message: '提示',
				description: '最少需要一个产品'
			})
			return false
		}
		let description = ''
		const orderProducts = map((item) => {
			if (isNil(item.price) || isEmpty(item.price)) {
				description = '产品价格不能为空'
			}
			return { ...item, nsPrice: item.price }
		}, this.tableData)
		if (description) {
			this.$notification.error({
				message: '提示',
				description
			})
			return false
		}
		const pageForm = {
			...this.pageForm,
			orderProducts
		}
		if (pageForm.shipWarehouse) {
			const data = StorageModule.warehouse.find((_) => pageForm.shipWarehouse === _.warehouseCode)
			if (data) {
				const { warehouseCode, warehouseName, type } = data
				pageForm.shipWarehouseName = warehouseName
				pageForm.shipWarehouse = warehouseCode
				pageForm.shipWarehouseType = type
			}
		}
		if (pageForm.mailingMethod) {
			pageForm.shipMethodProviderCode = pageForm.mailingMethod[0]
			pageForm.shipMethodChannelCode = pageForm.mailingMethod[1]
			delete pageForm.mailingMethod
		}
		if (pageForm.mailingMethodName) {
			pageForm.shipMethodProviderName = pageForm.mailingMethodName[0]
			pageForm.shipMethodChannelName = pageForm.mailingMethodName[1]
			delete pageForm.mailingMethodName
		}
		if (moment.isMoment(pageForm.orderTime)) {
			pageForm.orderTime = pageForm.orderTime.format('YYYY-MM-DD')
		}
		if (moment.isMoment(pageForm.expectedDeliveryTime)) {
			pageForm.expectedDeliveryTime = pageForm.expectedDeliveryTime.format('YYYY-MM-DD')
		}
		if (moment.isMoment(pageForm.payTime)) {
			pageForm.payTime = pageForm.payTime.format('YYYY-MM-DD')
		}
		const { success } = await saveOrder(pageForm)
		if (success) {
			this.$notification.success({
				message: '提示',
				description: '添加订单成功'
			})
			this.resetForm()
		}
		return true
	}
	resetForm() {
		this.showbrandDetilModal = false
	}
	getType() {
		console.log(233)
	}
	// 添加产品
	addProduct() {
		this.addSkuRef.init(this.tableData)
	}
	deleteSkuAll() {
		console.log('deleteSkuAll')
	}
	// 删除某一条产品
	deleteSku(index: number) {
		this.tableData.splice(index, 1)
	}
	// 产品显示

	orderProducts(data: Array<defs.wms.ProductSkuInfoDto>) {
		const list = map(
			(item) => ({
				costPrice: '',
				price: (item as any).price || '',
				weight: '',
				quantity: 1,
				productCode: item.productCode || '',
				nsPrice: '',
				productSkuImageUrl: item.productSkuImageUrl || '',
				name: item.productSkuName || (item as any).name || '',
				sku: item.productSku || (item as any).sku || ''
			}),
			data
		)
		this.tableData = uniq(list)
	}
	async sync() {
		// 抓取源订单信息同步
		if (isNil(this.platformOrderNo) || isEmpty(this.platformOrderNo)) {
			return false
		}
		const { success, data } = await getPlatformOrder(this.platformOrderNo)
		if (success && !isNil(data)) {
			console.log('data抓取', data.orderItems)

			this.pageForm = clone(data)
			this.tableData = data.orderItems
		}
		return true
	}
	public render() {
		return (
			<div id="addOrderNew">
				<a-modal visible={this.showbrandDetilModal} title="订单" on-cancel={this.resetForm} on-ok={this.submitForm} center top="10vh" width="85%">
					<a-form-model
						{...{
							attrs: {
								model: this.pageForm,
								rules: rules
							}
						}}
						ref="formRef"
						label-width="120px"
					>
						<a-card
							title="基本信息"
							extra={() => (
								<span>
									<a-input v-model={this.platformOrderNo} style="display:inline-block;width: 200px;margin-right: 10px;" />
									<a on-click={this.sync}>抓取源订单信息</a>
								</span>
							)}
						>
							<div>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="订单类型" prop="orderType">
											<form-config v-model={this.pageForm.orderType} placeholder="请选择类型" prop="orderType" />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="订单状态" prop="orderStatus">
											<form-config v-model={this.pageForm.orderStatus} placeholder="请选择类型" prop="addOrderStatus" />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="平台单号" prop="platformOrderNo">
											<a-input v-model={this.pageForm.platformOrderNo} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="店铺" prop="platformShopId">
											<form-platform-list v-model={this.pageForm.platformShopId} placeholder="请选择" />
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="买家指定物流" prop="customerShipMethod">
											<a-input v-model={this.pageForm.customerShipMethod} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="运费金额" prop="shippingFee">
											<a-input v-model={this.pageForm.shippingFee} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="订单总金额" prop="totalAmount">
											<a-input v-model={this.pageForm.totalAmount} clearable />
											<a-tooltip title="订单的收入总和，包括商品金额、运费、税等">
												<span class="el-icon-info" style="color:red;"></span>
											</a-tooltip>
										</a-form-modelItem>
									</a-col>

									<a-col span={6}>
										<a-form-modelItem label="币种" prop="currency">
											<a-select v-model={this.pageForm.currency} placeholder="请选择">
												<a-select-option value="CAD">CAD</a-select-option>
												<a-select-option value="USD">USD</a-select-option>
												<a-select-option value="EUR">EUR</a-select-option>
											</a-select>
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="订单日期" prop="orderTime">
											<a-date-picker v-model={this.pageForm.orderTime} />
											{/* <el-date-picker v-model={this.pageForm.orderTime} placeholder="选择日期" style="width:215px;" type="date" value-format="yyyy-MM-dd" /> */}
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="预计交货日期" prop="expectedDeliveryTime">
											<a-date-picker v-model={this.pageForm.expectedDeliveryTime} />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="付款日期" prop="payTime">
											<a-date-picker v-model={this.pageForm.payTime} />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="付款方式" prop="payMethod">
											<a-select v-model={this.pageForm.payMethod} placeholder="请选择">
												<a-select-option value="paypal">paypal</a-select-option>
												<a-select-option value="Credit Card">Credit Card</a-select-option>
											</a-select>
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="付款金额" prop="payAmount">
											<a-input v-model={this.pageForm.payAmount} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="收款账号" prop="receiptAccount">
											<a-input v-model={this.pageForm.receiptAccount} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="发货仓库" prop="shipWarehouseName">
											<form-warehouse
												v-model={this.pageForm.shipWarehouse}
												on-changeLabel={(name: string) => {
													this.pageForm.shipWarehouseName = name
												}}
												placeholder="请选择仓库"
											/>
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="邮寄方式" prop="mailingMethod">
											<form-logistics-channel-list
												ref="addOrderProviderChannel"
												v-model={this.pageForm.mailingMethod}
												on-changeLabel={(name: string[]) => {
													this.pageForm.mailingMethodName = name
												}}
												placeholder="邮寄方式"
												on-change={this.getType}
											/>
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="买家id" prop="buyerCode">
											<a-input v-model={this.pageForm.buyerCode} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="买家邮箱" prop="buyerEmail">
											<a-input v-model={this.pageForm.buyerEmail} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="收件人" prop="shippingName">
											<a-input v-model={this.pageForm.shippingName} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="电话" prop="shippingPhone">
											<a-input v-model={this.pageForm.shippingPhone} clearable />
										</a-form-modelItem>
									</a-col>
								</a-row>

								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="邮编" prop="shippingZip">
											<a-input v-model={this.pageForm.shippingZip} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="国家" prop="shippingCountryCode">
											<form-county
												showSearch
												v-model={this.pageForm.shippingCountryCode}
												on-changeLabel={(name: string) => {
													this.pageForm.shippingCountry = name
												}}
											/>
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="州" prop="shippingState">
											<a-input v-model={this.pageForm.shippingState} clearable />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="城市" prop="shippingCity">
											<a-input v-model={this.pageForm.shippingCity} clearable />
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="销售员" prop="sellerBy">
											<form-userName v-model={this.pageForm.sellerBy} placeholder="请选择销售员" />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="地址1" prop="shippingAddress1">
											<a-input v-model={this.pageForm.shippingAddress1} />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="地址2" prop="shippingAddress2">
											<a-input v-model={this.pageForm.shippingAddress2} />
										</a-form-modelItem>
									</a-col>
									<a-col span={6}>
										<a-form-modelItem label="备注" prop="orderRemark">
											<a-input v-model={this.pageForm.orderRemark} placeholder="请输入备注" type="textarea" />
										</a-form-modelItem>
									</a-col>
								</a-row>
								<a-row gutter={16}>
									<a-col span={6}>
										<a-form-modelItem label="地区简称">
											<a-input v-model={this.pageForm.shippingStateCode} placeholder="请输入地区简称" />
										</a-form-modelItem>
									</a-col>
								</a-row>
							</div>
						</a-card>
						<a-card title="订单明细" style="margin-top:30px">
							<div>
								<div class="table-top">
									<a-button icon="el-icon-plus" type="primary" on-click={this.addProduct}>
										添加
									</a-button>
									{/* <a-button type="danger" icon="el-icon-delete" disabled={this.checkList.length === 0 || this.checkList.length === this.tableData.length} on-click={this.deleteSkuAll}>
										删除
									</a-button> */}
								</div>
								<a-table ref="multipleTable" dataSource={this.tableData} rowKey="sku" pagination={false}>
									<a-table-column align="center" title="SKU" dataIndex="sku" />
									<a-table-column align="center" title="产品名称" dataIndex="name" />
									<a-table-column align="center" title="图片" dataIndex="productSkuImageUrl">
										{(value: string) => <img src={value} style="width: 80px;" />}
									</a-table-column>
									<a-table-column align="center" title="数量" dataIndex="quantity">
										{(id: string, scope: OrderProduct) => <a-input v-model={scope.quantity} />}
									</a-table-column>
									{/* <a-table-column align="center" title="重量" dataIndex="weight">
										{(id: string, scope: OrderProduct) => <a-input v-model={scope.weight} />}
									</a-table-column> */}
									<a-table-column align="center" title="售价" dataIndex="price">
										{(id: string, scope: OrderProduct) => <a-input v-model={scope.price} />}
									</a-table-column>
									{/* <a-table-column align="center" title="成本" dataIndex="costPrice">
										{(id: string, scope: OrderProduct) => <a-input v-model={scope.costPrice} />}
									</a-table-column> */}
									<a-table-column title="操作">{(id: string, scope: OrderProduct, index: number) => <a on-click={() => this.deleteSku(index)}>删除</a>}</a-table-column>
								</a-table>
							</div>
						</a-card>
						<add-sku ref="addSku" on-addSku={this.orderProducts} />
					</a-form-model>
				</a-modal>
			</div>
		)
	}
}
