/*
 * @Author: gtlong
 * @Date: 2021-03-01 10:18:23
 * @LastEditTime: 2021-04-01 20:55:03
 * @LastEditors: Please set LastEditors
 * @Description: 订单管理
 * @FilePath: \rantion-erp-wms\src\views\order\orderManagement\index.tsx
 */

import { Component, Inject, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, F, has, isEmpty, isNil, map, T } from 'ramda'
import { cancelOrder, editStatus, getOrderCount, getOrderList, immediatelyCheckOrder, interceptOrder } from '@/api/sale/order'
import AddOrder from './components/addOrder'
import { options } from '@/dictionaries/config'
import { orderStatusFilter, orderTypeFilter } from '@/dictionaries/filter'
import { shortageStatisticsExport } from '@/utils/downloadApi'
import OrderDetails from './components/orderDetails'
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
@Component({
	name: 'OrderManagement',
	components: { AddOrder, OrderDetails }
})
export default class OrderManagement extends TablePage {
	@Inject()
	reload!: Function
	@Ref('AddOrder') readonly addOrEditRulesModelRef!: HTMLFormElement
	@Ref('orderDetails') readonly orderDetailsRef!: HTMLFormElement
	public tableData: Array<any> = []
	public searchForm: any = {
		orderStatus: '',
		userInfo: 'buyerEmail',
		shippingCountryCode: ''
		// orderBy: 'desc'
	}
	public value = 'a'
	public splitName = '已拆分'
	public mergeName = '可合并'
	public intercepVisible = F()
	public cancelVisible = F()
	public editStatusVisible = F()
	public intercepReason = ''
	public cancelReason = ''
	public orderNo = ''
	public editData: any = {}
	public template_statue = ''
	async mounted() {
		this.search()
	}
	look(value: string) {
		console.log(value)
		this.orderDetailsRef.init(value)
	}
	//立即检查
	async immediatelyCheckOrder(value: string) {
		const { msg, code } = await immediatelyCheckOrder(value)
		if (code === 0) {
			this.$message.success('立即检查成功')
			this.search()
		} else {
			this.$message.error(msg)
		}
	}
	//重新提交
	// async reSubmitOrder(value: string) {
	// 	const param = {
	// 		orderNo: value
	// 	}
	// 	const { msg, code } = await reSubmitOrder(param)
	// 	if (code === 0) {
	// 		this.$message.success('已重新提交')
	// 	} else {
	// 		this.$message.error(msg)
	// 	}
	// }
	//拦截订单
	showIntercept(value: string) {
		this.intercepVisible = T()
		this.orderNo = value
	}
	async interceptOrder() {
		const param = {
			orderNo: this.orderNo,
			reason: this.intercepReason
		}
		//		console.log('拦截', param)
		const { msg, code } = await interceptOrder(param)
		if (code === 0) {
			this.$message.success('订单已拦截')
			this.intercepVisible = F()
		} else {
			this.$message.error(msg)
		}
	}
	//取消订单
	showCancel(value: string) {
		this.cancelVisible = T()
		this.orderNo = value
	}
	async cancelOrder() {
		const param = {
			orderNo: this.orderNo,
			reason: this.cancelReason
		}
		//console.log('取消', param)
		const { msg, code } = await cancelOrder(param)
		if (code === 0) {
			this.$message.success('订单已取消')
			this.cancelVisible = F()
		} else {
			this.$message.error(msg)
		}
	}
	// 修改订单状态
	showEditModel(text: any) {
		this.editStatusVisible = T()
		this.editData = text
		this.orderNo = text.orderNo
	}

	public async editStatus() {
		const param = {
			orderNo: this.orderNo,
			orderStatus: this.template_statue,
			orderRemark: isNil(this.editData.orderRemark) ? '' : this.editData.orderRemark
		}
		const { code, msg } = await editStatus(param)
		if (code === 0) {
			this.$message.success('订单状态已修改')
			this.editStatusVisible = F()
			this.search()
		} else {
			this.$message.error(msg)
		}
		//	console.log(param)
	}
	hdChange(val: any) {
		this.template_statue = val
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<div class="order-status">
						<span class="title">订单状态</span>
						<a-radio-group v-model={this.searchForm.orderStatus} on-change={this.search} button-style="solid">
							<a-radio-button value="">全部</a-radio-button>
							{map(
								(item) => (
									<a-radio-button value={item.value}>{item.label}</a-radio-button>
								),
								options.orderStatus
							)}
							{/* <a-radio-button value="canMerge">{this.mergeName}</a-radio-button>
							<a-radio-button value="split">{this.splitName}</a-radio-button> */}
						</a-radio-group>
					</div>
					<div id="components-form-demo-advanced-search" style="padding-top: 20px;">
						<a-form
							class="ant-advanced-search-form"
							{...{
								attrs: {
									layout: 'inline'
									// 'label-col': { span: 8 },
									// wrapperCol: { span: 16 }
								}
							}}
						>
							<a-form-item label="订单编号">
								<a-input allowClear placeholder="请输入订单编号" v-model={this.searchForm.orderNo} />
							</a-form-item>
							<a-form-item label="平台单号">
								<a-input allowClear placeholder="多个以，隔开" v-model={this.searchForm.platformOrderNo} />
							</a-form-item>
							{this.expand ? (
								<span>
									<a-form-item label="订单类型">
										<form-config allowClear placeholder="请选择订单类型" v-model={this.searchForm.orderType} prop="orderType" />
									</a-form-item>
									<a-form-item label="发货仓库">
										<form-warehouse v-model={this.searchForm.shipWarehouse} placeholder="请选择仓库" />
										{/* <form-config allowClear placeholder="请选择发货仓库" v-model={this.searchForm.shipWarehouse} prop="shipWarehouse" /> */}
									</a-form-item>
									<a-form-item label="订单日期">
										<a-range-picker allowClear v-model={this.searchForm.orderTimeBegin} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
									</a-form-item>
									<a-form-item label="按订单日期排序">
										<form-config allowClear v-model={this.searchForm.orderTimeOrderBy} prop="orderTimeOrderBy" style="width: 50%" />
									</a-form-item>
									<a-form-item label="国家">
										<form-county
											allowClear
											showSearch
											v-model={this.searchForm.shippingCountryCode}
											on-change={(name: string) => {
												console.log(name)
											}}
										/>
										{/* <a-input allowClear v-model={this.searchForm.shippingCountryCode} /> */}
									</a-form-item>
									<a-form-item label="销售员">
										<a-input allowClear v-model={this.searchForm.sellerBy} />
									</a-form-item>
									<a-form-item label="店铺">
										<form-platform-list v-model={this.searchForm.platformShopId} placeholder="请选择" />
										{/* <a-input allowClear v-model={this.searchForm.platformShopId} placeholder="请输入店铺" /> */}
									</a-form-item>
									<a-form-item label="有无留言">
										<form-config allowClear v-model={this.searchForm.customerMessageFlag} prop="customerMessageFlag" />
									</a-form-item>
									<a-form-item label="异常原因">
										<a-input v-model={this.searchForm.abnormalMsgLike} prop=" abnormalMsgLike" />
									</a-form-item>
									<a-form-item label="买家信息">
										<a-input-group compact>
											<a-select style="width: 30%" v-model={this.searchForm.userInfo}>
												<a-select-option value="buyerEmail">买家邮箱</a-select-option>
												<a-select-option value="shippingName">买家姓名</a-select-option>
											</a-select>
											<a-input style="width: 40%" v-model={this.searchForm.userInfoText} />
										</a-input-group>
									</a-form-item>
								</span>
							) : null}

							<a-button type="primary" on-click={this.search}>
								搜索
							</a-button>
							<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
								清除
							</a-button>
							<a class="expand" on-click={this.toggle.bind(this)}>
								{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
							</a>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="plus" on-click={this.addOrder}>
						添加
					</a-button>
				</div>
				<a-table dataSource={this.tableData} class="scroll-table" indentSize={20} expandedRowRender={this.expandedRowRender} rowKey="id" pagination={false} scroll={{ x: 2500 }}>
					<a-table-column align="center" title="订单号" dataIndex="orderNo" width="160px" fixed />
					<a-table-column align="center" title="平台单号" dataIndex="platformOrderNo" width="160px" fixed />
					<a-table-column align="center" title="订单类型" dataIndex="orderType" width="160px" customRender={(value: string) => orderTypeFilter(value)} />
					<a-table-column align="center" title="状态" dataIndex="orderStatus" customRender={(value: string) => orderStatusFilter(value)} />
					<a-table-column align="center" title="待处理原因" dataIndex="abnormalMsg" width="160px"></a-table-column>
					<a-table-column align="center" title="平台/店铺" dataIndex="platformName" width="160px">
						{(value: string, data: any) => (
							<span>
								{data.platformName} <br /> {data.platformShopName}
							</span>
						)}
					</a-table-column>
					<a-table-column align="center" title="订单金额" dataIndex="totalAmount" />
					<a-table-column align="center" title="销售员" dataIndex="sellerBy" />
					<a-table-column align="center" title="客户留言" dataIndex="customerMessage" />
					<a-table-column align="center" title="备注" dataIndex="orderRemark" />
					<a-table-column align="center" title="国家" dataIndex="shippingCountry" width={120} />
					<a-table-column align="center" title="仓库" dataIndex="shipWarehouseName" />
					<a-table-column align="center" title="订单估重(g)" dataIndex="spuWeight" width={120} />
					<a-table-column align="center" title="邮寄方式" dataIndex="shipMethod" />
					<a-table-column align="center" title="跟踪号" dataIndex="shipTrackingNumber" />
					<a-table-column align="center" title="发货时间" dataIndex="shipTime" width={180} />
					<a-table-column align="center" title="订单日期" dataIndex="orderTime" width={180} />
					<a-table-column align="center" title="下载时间" dataIndex="downloadTime" width={180} />
					<a-table-column align="center" title="操作" dataIndex="id" fixed="right" width={120}>
						{(value: string, text: any) => (
							<div>
								<a on-click={() => this.look(value)}>查看详情</a>
								<br />
								{text.orderStatus === 'wait_check' ? <a on-click={() => this.immediatelyCheckOrder(text.orderNo)}>立即检查</a> : null}
								{/* {text.orderStatus === 'out_of_stock' || text.orderStatus === 'delivery_issue' || text.orderStatus === 'blocked' || text.orderStatus === 'risk_order' ? (
									<div>
										<a on-click={() => this.reSubmitOrder(text.orderNo)}>重新提交</a>
									</div>
								) : null} */}
								{text.orderStatus === 'wait_ship' || text.orderStatus === 'purchasing' || text.orderStatus === 'purchase_issue' || text.orderStatus === 'delivery_issue' ? (
									<div>
										<a on-click={() => this.showIntercept(text.orderNo)}>拦截订单</a>
									</div>
								) : null}
								{text.orderStatus === 'delivery_issue' ||
								text.orderStatus === 'risk_order' ||
								text.orderStatus === 'wait_ship' ||
								text.orderStatus === 'shipped' ||
								text.orderStatus === 'purchasing' ||
								text.orderStatus === 'purchase_issue' ? (
									<div>
										<a on-click={() => this.showCancel(text.orderNo)}>取消订单</a>
									</div>
								) : null}
								{text.orderStatus === 'wait_processed' ||
								text.orderStatus === 'out_of_stock' ||
								text.orderStatus === 'risk_order' ||
								text.orderStatus === 'delivery_issue' ||
								text.orderStatus === 'ignored' ||
								text.orderStatus === 'has_processed' ||
								text.orderStatus === 'wait_check' ? (
									<div>
										<a on-click={() => this.showEditModel(text)}>修改状态</a>
									</div>
								) : null}
							</div>
						)}
						immediatelyCheckOrder
					</a-table-column>
				</a-table>
				<a-modal title="拦截原因" visible={this.intercepVisible} on-ok={this.interceptOrder} onCancel={() => (this.intercepVisible = F())}>
					<a-textarea rows={2} v-model={this.intercepReason} />
				</a-modal>
				<a-modal title="取消原因" visible={this.cancelVisible} on-ok={this.cancelOrder} onCancel={() => (this.cancelVisible = F())}>
					<a-textarea rows={2} v-model={this.cancelReason} />
				</a-modal>
				<a-modal title="修改订单状态" visible={this.editStatusVisible} on-ok={this.editStatus} onCancel={() => (this.editStatusVisible = F())}>
					<div>
						订单状态：
						<a-select onChange={this.hdChange} style="min-width:120px">
							{this.editData.orderStatus !== 'ignored' && this.editData.orderStatus !== 'has_processed' && this.editData.orderStatus !== 'wait_check' && (
								<a-select-option label="待检查" value="wait_check">
									待检查
								</a-select-option>
							)}

							{this.editData.orderStatus !== 'risk_order' &&
								this.editData.orderStatus !== 'out_of_stock' &&
								this.editData.orderStatus !== 'delivery_issue' &&
								this.editData.orderStatus !== 'wait_processed' && (
									<a-select-option label="待处理" value="wait_processed">
										待处理
									</a-select-option>
								)}

							{(this.editData.orderStatus === 'risk_order' ||
								this.editData.orderStatus === 'out_of_stock' ||
								this.editData.orderStatus === 'delivery_issue' ||
								this.editData.orderStatus === 'wait_processed') && (
								<a-select-option label="已忽略" value="ignored">
									已忽略
								</a-select-option>
							)}
							{(this.editData.orderStatus === 'risk_order' ||
								this.editData.orderStatus === 'out_of_stock' ||
								this.editData.orderStatus === 'delivery_issue' ||
								this.editData.orderStatus === 'wait_processed') && (
								<a-select-option label="已处理" value="has_processed">
									已处理
								</a-select-option>
							)}
						</a-select>
						{/* <form-config v-model={this.editData.orderStatus} prop="orderStatus"></form-config>{' '} */}
					</div>
					<div>
						备注： <a-textarea rows={2} v-model={this.editData.orderRemark} />
					</div>
				</a-modal>
				{this.paginationJsx()}
				<add-order ref="AddOrder" />
				<order-details ref="orderDetails" />
			</div>
		)
	}
	public expandedRowRender(record: any, index: number, indent: any, expanded: boolean) {
		console.log(record, index, indent, expanded)
		return <a-table columns={innerColumns} rowKey="id" dataSource={record.orderItems} pagination={false} />
	}
	public async getInit(params: any) {
		this.loading = true

		const { data, success } = await getOrderList(params)
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
		params[this.searchForm.userInfo] = this.searchForm.userInfoText
		delete params.userInfo
		delete params.userInfoText
		//console.log(params)

		if (!isEmpty(this.searchForm.orderTimeBegin)) {
			params.orderTimeBegin = this.searchForm.orderTimeBegin?.[0]
			params.orderTimeEnd = this.searchForm.orderTimeBegin?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {
			orderStatus: ''
		}
		this.search()
	}

	public handleToggleForm() {
		this.expand = !this.expand
	}
	public onChange(e: any) {
		this.value = e.target.value
	}
	public async getOrderCount() {
		const { data } = await getOrderCount({})
		if (!has('list', data) || isEmpty(data.list)) return
	}

	public addOrder() {
		this.addOrEditRulesModelRef.init()
	}
	public async exportForm() {
		await shortageStatisticsExport()
	}
}
