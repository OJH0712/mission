/*
 * @Description:校验
 * @Author: owen
 * @Date: 2021-02-23 09:58:36
 * @LastEditTime: 2021-03-09 20:25:48
 */
import { Component, Inject, Ref } from 'vue-property-decorator'
// import { equals } from 'ramda'
import Vue from 'vue'
import { equals, isNil } from 'ramda'

@Component({
	name: 'Quality'
})
export default class Quality extends Vue {
	private centerDialogVisible = false
	private serialNo = ''
	private isCheckp = 1
	private productBarcode = ''
	public tableData: any = []
	private sideData: any = {}
	@Ref('input') readonly inputRef!: HTMLFormElement
	@Ref('input2') readonly input2Ref!: HTMLFormElement
	@Inject()
	reload!: Function
	mounted() {
		console.log('sideData', this.sideData)
	}

	keyupSerialNo() {
		console.log(this.serialNo)
		let serialNo = this.serialNo.trim()
		if (equals(30, serialNo.length)) {
			serialNo = serialNo.substr(8)
			if (equals(serialNo.indexOf('94'), 0)) {
				this.serialNo = serialNo
			}
		}
		this.quality(this.serialNo)
	}

	// 运单条码/出库单号 查询
	private async quality(val: any) {
		//	this.isCheckp = 2 //无数据测试
		const { data } = await API.wms.outMaster.getCheckList.request(val)
		this.sideData = data
		this.tableData = data?.outInfoSkuResponseDtos
		this.$notification.success({
			message: '查询成功',
			description: '请扫描或输入产品条码开始校验'
		})
		// StorageModule.setWaybillNo(data.waybillNo)
		this.isCheckp = 2
		this.$nextTick(() => {
			this.input2Ref.focus()
		})
	}
	// 校验失败
	checkField() {
		this.centerDialogVisible = !this.centerDialogVisible
	}

	checkSuccess() {
		this.subData([])
	}
	private async subData(val: any) {
		if (isNil(this.sideData.dono)) return
		const { data, success } = await API.wms.outMaster.check.request(val.dono, val)
		if (success && isNil(data)) {
			console.log('data', data)
			this.$notification.success({
				message: '提示',
				description: '出库单已校验'
			})
			this.reload()
		}
		// pickCheck(this.sideData.dono, data)
		// 	.then((response) => {
		// 		this.$notify({
		// 			title: '成功',
		// 			message: response.msg,
		// 			offset: 100,
		// 			type: 'success'
		// 		})
		// 		this.reload()
		// 	})
		// 	.catch((response) => {
		// 		if (response === '出库单已校验') {
		// 			this.reload()
		// 		}
		// 	})
	}
	keyupProductBarcode() {
		console.log(this.productBarcode)
	}

	public render() {
		return (
			<div id="quality" class="top-search-from" style="min-height:84vh">
				<div>
					<div class="shou_input">
						<div class="shou_input">
							{equals(1, this.isCheckp) ? (
								<a-input ref="input" v-model={this.serialNo} placeholder="请扫描或输入运单条码/出库单号" on-pressEnter={this.keyupSerialNo} />
							) : (
								<a-input ref="input2" v-model={this.productBarcode} v-focus placeholder="请扫描或输入产品条码" on-pressEnter={this.keyupProductBarcode} />
							)}
						</div>
					</div>
				</div>
				{equals(2, this.isCheckp) && (
					<div style="border-bottom: 1px solid #e8e8e8;min-height:500px">
						<div style="marginTop:50px">
							<a-row id="qualityCommon">
								<a-col span={8}>
									<div width="100%">
										<ul>
											<li>
												出库单号
												<span>{this.sideData}</span>
											</li>
											<li>
												物流单号
												<span>{this.sideData}</span>
											</li>
											<li>
												物流渠道
												<span>{this.sideData}</span>
											</li>
											<li>
												目的地
												<span>{this.sideData}</span>
											</li>
											<li>
												产品数
												<span>{this.sideData}</span>
											</li>
											<li>
												总数量
												<span>{this.sideData}</span>
											</li>
										</ul>
									</div>
								</a-col>
								<a-col span={16}>
									<a-table dataSource={this.tableData}>
										<a-table-column title="产品条形码" dataIndex="" key="" />
										<a-table-column title="SKU" dataIndex="" key="" />
										<a-table-column title="数量" dataIndex="" key="" />
										<a-table-column title="产品标题" dataIndex="" key="" />
										<a-table-column title="包装注意事项" dataIndex="pikno" key="" />
									</a-table>
								</a-col>
							</a-row>

							<div ref="barcodeError" />
						</div>

						<div style="width:400px;margin:20px auto;">
							<a-button on-click={this.checkSuccess} type="primary">
								校验完成
							</a-button>
							<a-button on-click={this.checkField} type="danger">
								校验失败
							</a-button>
						</div>
					</div>
				)}

				<a-modal close-on-click-modal={false} close-on-press-escape={false} title="提示" visible={this.centerDialogVisible} width="50%" center v-show={false}>
					<span>
						<h1>是否确认校验失败？</h1>
						<h1>若是，请将校验失败货物与出库单、</h1>
						<h1>运单、拣货明细等一共交给异常处理员。</h1>
					</span>
					<span slot="footer" class="dialog-footer">
						<a-button>取 消</a-button>
						<a-button type="primary">确 定</a-button>
					</span>
				</a-modal>
			</div>
		)
	}
}
