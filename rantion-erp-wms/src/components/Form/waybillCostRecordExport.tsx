/*
 * @Author: Chan
 * @Date: 2021-02-23 15:50:08
 * @LastEditTime: 2021-02-24 10:36:22
 * @LastEditors: Chan
 * @Description: 对账记录导出
 */
import { clone, isNil } from 'ramda'
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'
@Component({
	name: 'form-export-waybill-file'
})
export default class FormExportFile extends Vue {
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop() readonly downloadApi: any
	@Prop(String) readonly text?: string
	@Ref('formName') readonly formNameRef!: HTMLFormElement
	loading = false
	exportVisible = false
	// 接口未完善，暂用
	public searchForm: API.wms.logisticsChannelPrice.exporting.Params = {}
	async hdClick() {
		this.exportVisible = true
	}

	cancel() {
		this.exportVisible = false
		this.loading = false
	}

	create() {
		this.loading = true
		this.formNameRef.validate(async () => {
			const params = clone(this.searchForm)
			if (!isNil(this.searchForm.beginCreateDate)) {
				params.beginCreateDate = this.searchForm.beginCreateDate[0]
				params.endCreateDate = this.searchForm.beginCreateDate[1]
			}
			// if (!isNil(this.searchForm.beginDeliveryDate)) {
			//   params.beginDeliveryDate = this.searchForm.beginDeliveryDate[0]
			//   params.endDeliveryDate = this.searchForm.beginDeliveryDate[1]
			// }
			await this.downloadApi(params)
			this.cancel()
			return true
		})
	}

	render() {
		return (
			<span>
				<a-button type="primary" loading={this.loading} onClick={this.hdClick} icon="export">
					{isNil(this.text) ? '导出' : this.text}
				</a-button>
				<a-modal title={this.text} visible={this.exportVisible} on-ok={this.create} on-cancel={this.cancel} ok-text="确定" cancel-text="关闭">
					<a-form-model
						ref="formName"
						class="ant-advanced-search-form"
						{...{
							attrs: {
								'label-col': { span: 6 },
								wrapperCol: { span: 14 },
								model: this.searchForm
							}
						}}
					>
						<a-form-model-item prop="providerCode" label="物流商">
							<form-logistics-single-channel-list v-model={this.searchForm.providerCode} />
						</a-form-model-item>
						{/* <a-form-model-item prop="beginDeliveryDate" label="发货时间">
							<a-range-picker allowClear v-model={this.searchForm.beginDeliveryDate} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
            </a-form-model-item> */}
						<a-form-model-item prop="beginCreateDate" label="创建时间">
							<a-range-picker allowClear v-model={this.searchForm.beginCreateDate} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
						</a-form-model-item>
					</a-form-model>
				</a-modal>
			</span>
		)
	}
}
