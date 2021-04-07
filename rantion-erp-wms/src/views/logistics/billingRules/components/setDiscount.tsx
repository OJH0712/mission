/*
 * @Author: Chan
 * @Date: 2021-02-22 16:26:09
 * @LastEditTime: 2021-02-22 17:09:01
 * @LastEditors: Chan
 * @Description: 折扣设置
 */
import { pick, T } from 'ramda'
import { Component, Ref, Vue } from 'vue-property-decorator'
const rules = {
	discount: [{ required: true, message: '请输入折扣', trigger: 'blur' }]
}
interface SearchForm {
	channelCode: string
	channelName?: string
	providerName?: string
	providerCode: string
	discount: number
}
@Component
export default class SetDiscount extends Vue {
	calcVisible = false
	cost: string | number
	@Ref('formName') readonly formNameRef!: HTMLFormElement
	public searchForm: SearchForm = {
		discount: 0,
		channelCode: '',
		providerCode: ''
	}
	init(data: defs.wms.LogisticsChannelResponseDto) {
		this.searchForm = pick(['channelCode', 'channelName', 'providerCode', 'providerName', 'discount'], data)
		this.calcVisible = T()
	}
	cancel() {
		this.calcVisible = false
	}

	public async create() {
		const valid = await this.formNameRef.validate().then(
			() => false,
			() => true
		)
		if (valid) return false
		const { success } = await API.wms.logisticsChannel.modifyDiscount.request(this.searchForm.channelCode, this.searchForm.providerCode, { discount: this.searchForm.discount })
		if (success) {
			this.cancel()
			this.$emit('search')
		}
		return true
	}

	public render() {
		return (
			<a-modal title="折扣设置" visible={this.calcVisible} on-ok={this.create} on-cancel={this.cancel} ok-text="保存" cancel-text="关闭">
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
					<a-form-model-item label="渠道商">
						<a-input disable default-value={this.searchForm.providerName} readonly />
					</a-form-model-item>
					<a-form-model-item label="渠道服务">
						<a-input disable default-value={this.searchForm.channelName} readonly />
					</a-form-model-item>
					<a-form-model-item prop="discount" label="折扣">
						<a-input-number min={0} max={1} step={0.1} allowClear v-model={this.searchForm.discount} />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
