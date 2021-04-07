/*
 * @Description:配货
 * @Author: owen
 * @Date: 2021-02-23 09:58:35
 * @LastEditTime: 2021-03-09 20:25:28
 */
import { Component, Inject } from 'vue-property-decorator'
import Vue from 'vue'
import { equals, isEmpty, isNil } from 'ramda'
import { deepCopy } from '@/utils'

interface PageData {
	distribute: string
	realQty: number
	sku: string
}
@Component({
	name: 'Distribution'
})
export default class Distribution extends Vue {
	@Inject()
	reload!: Function
	tableData: Array<PageData> = []
	thisData: PageData = {
		realQty: 0,
		sku: '',
		distribute: ''
	}
	serialNo = ''
	serialNo2 = ''
	productBarcode = ''
	isShow = false
	list: any = []
	public async searchInfo(e: any) {
		this.serialNo = e.target.value
		this.serialNo2 = deepCopy(this.serialNo)
		// 前端-拣货单明细序列
		const { data, success } = await API.wms.pickMaster.serialList.request(this.serialNo)
		if (success && !isNil(data)) {
			this.list = data
			console.log(this.list, '拣货单明细序列')
			if (isEmpty(this.list)) {
				this.$notification.warning({
					message: '异常提示',
					description: `拣货单(${this.serialNo})查询无结果`
				})
				this.isShow = false
			} else {
				this.isShow = true
				this.$notification.success({
					message: '成功提示',
					description: `拣货单(${this.serialNo})查询成功,请输入产品条码开始配货`
				})
				this.serialNo = ''

				this.tableData = this.list.map((item: { sku: any; realQty: any }) => {
					// 拿到跟当前sku/条码一样的 因为list可能存在重复
					const _list = this.list.filter((val: { sku: any }) => equals(val.sku, item.sku))
					if (!isEmpty(_list)) {
						// 初始化要为0 因为 _list 里面包含了 item
						item.realQty = _list.reduce(function(realQty: number, currentValue: any) {
							return realQty + currentValue.realQty
						}, 0)
					}
					return item
				})
			}
		}
	}

	startDistribution(e: any) {
		console.log(e)

		const index = this.tableData.findIndex((res) => this.productBarcode === res.sku)
		if (equals(index, -1)) {
			this.$notification.warning({
				message: '提示',
				description: `找不到${this.productBarcode}的配货位`
			})
			// this.barcodeErrorRef.play()
		} else {
			this.thisData = this.tableData[index]
			this.$notification.success({
				message: '成功',
				description: '成功找到配货位' + this.thisData.distribute
			})
			this.productBarcode = ''
			this.tableData.splice(index, 1)
			if (isEmpty(this.tableData)) {
				window.setTimeout(() => {
					this.reload()
				}, 2000)
			}
		}
	}

	stopDistribution() {
		this.isShow = !this.isShow
		this.serialNo = ''
		this.productBarcode = ''
	}
	public render() {
		return (
			<div>
				<div class="top-search-from" style="min-height:84vh">
					<div>
						<div class="shou_input">
							{!this.isShow ? (
								<a-input v-model={this.serialNo} placeholder="请扫描或输入拣货单号" on-pressEnter={(e: any) => this.searchInfo(e)} />
							) : (
								<a-input v-model={this.productBarcode} placeholder="请扫描或输入产品条码单号" on-pressEnter={(e: any) => this.startDistribution(e)} />
							)}
						</div>
					</div>
					{this.isShow && (
						<div>
							<div style="text-align: center;margin-top: 40px">
								拣货单号:<span style="color: red;font-size: 36px">{this.serialNo2}</span>
							</div>
							<div style="width: 400px;margin: 20px auto;">
								<div style="margin-bottom:20px" v-show="thisData.distribute">
									<div>
										<span class="ontentdiv">条码:{}</span> 有数量:<span class="ontentdiv"></span> 在配货位:<span class="ontentdiv"></span>
									</div>
								</div>
								<a-button type="danger" plain className="end" on-click={this.stopDistribution}>
									中止配货
								</a-button>
							</div>
						</div>
					)}

					<div ref="barcodeError" />
				</div>
			</div>
		)
	}
}
