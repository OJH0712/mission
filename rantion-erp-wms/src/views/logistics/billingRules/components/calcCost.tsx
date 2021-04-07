/*
 * @Author: Chan
 * @Date: 2021-02-22 14:46:39
 * @LastEditTime: 2021-02-22 17:25:27
 * @LastEditors: Chan
 * @Description: 运费试算
 */
import { clone, isNil } from 'ramda'
import { Component, Ref, Vue } from 'vue-property-decorator'
const rules = {
	providerCode: [{ required: true, message: '请选择物流方式', trigger: 'blur' }],
	weight: [{ required: true, message: '请输入重量', trigger: 'blur' }],
	targetCountryCode: [{ required: true, message: '请选择目标国家', trigger: 'blur' }]
}
@Component
export default class CalcCost extends Vue {
	calcVisible = false
	cost: string | number = 0
	@Ref('formName') readonly formNameRef!: HTMLFormElement
	public searchForm: API.wms.logisticsChannelPrice.estimateCarriagePrice.Params = {
		channelCode: '',
		providerCode: '',
		targetCountryCode: '',
		weight: 0
	}
	init(defaultOption: string[]) {
		this.calcVisible = true
		this.searchForm.providerCode = defaultOption as any
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
		const params = clone(this.searchForm)
		params.providerCode = this.searchForm.providerCode[0]
		params.channelCode = this.searchForm.providerCode[1]
		console.log(params)
		const { success, data } = await API.wms.logisticsChannelPrice.estimateCarriagePrice.request(params)
		if (success && !isNil(data)) {
			this.cost = data
		}
		return true
	}

	public render() {
		return (
			<a-modal title="运费试算" destroyOnClose visible={this.calcVisible} on-ok={this.create} on-cancel={this.cancel} ok-text="计算" cancel-text="取消">
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
					<a-form-model-item prop="providerCode" label="物流方式">
						<form-logistics-channel-list allowClear v-model={this.searchForm.providerCode} placeholder="请选择物流方式" />
					</a-form-model-item>
					<a-form-model-item prop="targetCountryCode" label="目标国家">
						<form-county allowClear v-model={this.searchForm.targetCountryCode} placeholder="请选择目标国家" />
					</a-form-model-item>
					<a-form-model-item prop="weight" label="重量">
						<a-input-number allowClear v-model={this.searchForm.weight} suffix="g" />
					</a-form-model-item>
					<a-form-model-item label="运费">
						<span>{this.cost}元</span>
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
