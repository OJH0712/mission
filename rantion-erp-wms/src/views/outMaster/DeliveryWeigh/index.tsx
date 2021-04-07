/*
 * @Description:出库称重
 * @Author: owen
 * @Date: 2021-02-23 09:58:37
 * @LastEditTime: 2021-03-09 20:25:59
 */
import { Component, Inject, Ref } from 'vue-property-decorator'
// import { equals, isNil } from 'ramda';
import Vue from 'vue'
import { isNil } from 'ramda'

@Component({
	name: 'Weight'
})
export default class Weight extends Vue {
	private serialNo = ''
	private weight = 0
	private isShow = false
	private sideData: any = {}
	private tableData: any[] = []

	@Inject()
	reload!: Function
	@Ref('thisWeight') readonly thisWeightRef!: HTMLFormElement
	pressEnter() {
		this.weighFuc(this.serialNo)
	}
	private async weighFuc(val: any) {
		const { data, success } = await API.wms.outMaster.getCheckList.request(val)
		if (success && !isNil(data)) {
			this.sideData = data
			//	console.log(this.sideData, '	this.sideData')
			this.tableData = this.sideData.outInfoSkuResponseDtos
			this.isShow = true
			this.$nextTick(() => {
				this.thisWeightRef.focus()
			})
			// this.getWeight()
		}
	}

	submitFormKeyup() {
		this.submitForm()
	}
	// 提交称重
	async submitForm() {
		console.log(this.weight)
		//  ```
		const { success } = await API.wms.outMaster.weight.request(this.serialNo, { weight: this.weight, dono: this.serialNo })
		if (success) {
			this.$notification.success({
				message: '提示',
				description: '称重成功'
			})
			this.reload()
		}
	}
	public render() {
		return (
			<div id="quality" class="top-search-from" style="min-height:84vh">
				<div>
					<div class="shou_input">
						<a-input ref="input" v-model={this.serialNo} placeholder="请扫描或输入运单条码/出库单号" on-pressEnter={this.pressEnter} />
					</div>
				</div>
				{this.isShow && (
					<div style="border-bottom: 1px solid #e8e8e8;min-height:500px">
						<div style="marginTop:50px">
							<a-row id="qualityCommon">
								<a-col span={8}>
									<div width="100%">
										<ul>
											<li>
												出库单号：
												<span>{this.sideData.dono}</span>
											</li>
											<li>
												物流单号：
												<span>{this.sideData.waybillNo}</span>
											</li>
											<li>
												物流渠道：
												<span>{this.sideData.logisticsChannelName}</span>
											</li>
											<li>
												目的地：
												<span>{this.sideData.address}</span>
											</li>
											<li>
												产品数：
												<span>{this.sideData.skuNum}</span>
											</li>
											<li>
												总数量：
												<span>{this.sideData.qty}</span>
											</li>
										</ul>
										<div class="demo-ruleForm" style="text-align:center">
											<span>包裹重量(g)：</span>
											<a-input ref="thisWeight" type="weight" v-model={this.weight} autocomplete="off" style="width:120px;margin:10px 0px;margin-right:30px;" on-pressEnter={this.submitFormKeyup} />
											<a-button type="primary" on-click={this.submitForm}>
												提交
											</a-button>
										</div>
									</div>
								</a-col>
								<a-col span={16}>
									<a-table dataSource={this.tableData} rowKey={(record: { id: any }, index: any) => `complete${record.id}${index}`}>
										<a-table-column dataIndex="sku" key="sku1" title="产品条形码" />
										<a-table-column dataIndex="sku" key="sku2" title="SKU" />
										<a-table-column dataIndex="qty" key="" title="数量" />
										<a-table-column dataIndex="productTitle" key="" title="产品标题" />
										<a-table-column
											dataIndex="productImageUrl"
											key=""
											title="图片"
											customRender={(productTitle: string) => {
												return <a-avatar src={productTitle} shape="square" />
											}}
										/>
										<a-table-column dataIndex="ranks" key="" title="产品描述" />
									</a-table>
								</a-col>
							</a-row>
						</div>
					</div>
				)}
			</div>
		)
	}
}
