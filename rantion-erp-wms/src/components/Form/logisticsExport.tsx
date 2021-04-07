/*
 * @Author: Chan
 * @Date: 2021-02-23 10:15:42
 * @LastEditTime: 2021-02-23 11:50:58
 * @LastEditors: Chan
 * @Description:渠道计费规则报表导出
 */
import { clone, isNil } from 'ramda'
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'
const rules = {
	beginCreateDate: [{ required: true, message: '请输入日期范围', trigger: 'blur' }]
}
@Component({
	name: 'form-export-file'
})
export default class FormExportFile extends Vue {
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop() readonly downloadApi: any
	@Prop(String) readonly text?: string
	@Ref('formName') readonly formNameRef!: HTMLFormElement
	loading = false
	exportVisible = false
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
		this.formNameRef.validate(async (valid: boolean) => {
			if (!valid || isNil(this.searchForm.beginCreateDate)) return false
			const params = clone(this.searchForm)
			params.beginCreateDate = this.searchForm.beginCreateDate[0]
			params.endCreateDate = this.searchForm.beginCreateDate[1]
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
				<a-modal title="导出渠道计费规则报表" visible={this.exportVisible} on-ok={this.create} on-cancel={this.cancel} ok-text="确定" cancel-text="关闭">
					<a-form-model
						ref="formName"
						class="ant-advanced-search-form"
						{...{
							attrs: {
								'label-col': { span: 6 },
								wrapperCol: { span: 14 },
								model: this.searchForm,
								rules: rules
							}
						}}
					>
						<a-form-model-item prop="beginCreateDate" label="日期范围">
							<a-range-picker allowClear v-model={this.searchForm.beginCreateDate} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
						</a-form-model-item>
					</a-form-model>
				</a-modal>
			</span>
		)
	}
}
