/*
 * @Author: Chan
 * @Date: 2021-02-20 16:14:17
 * @LastEditTime: 2021-02-23 11:27:14
 * @LastEditors: Chan
 * @Description: 添加渠道服务
 */
import { Component, Vue } from 'vue-property-decorator'
const rules = {
	channelName: [{ required: true, message: '渠道服务不能为空', trigger: 'blur' }],
	channelCode: [{ required: true, message: '渠道服务代码不能为空', trigger: 'blur' }],
	labelStandard: [{ required: true, message: '面单要求不能为空', trigger: 'blur' }],
	serviceProperty: [{ required: true, message: '业务类别不能为空', trigger: 'blur' }]
}
interface AddParam {
	providerCode: string
	providerName: string
}
@Component
export default class ChannelService extends Vue {
	visible = false
	pageForm: Partial<defs.wms.LogisticsChannelAddRequestDto> = {}
	init(data: AddParam) {
		this.pageForm = {
			...data
		}
		this.visible = true
	}
	cancel() {
		this.visible = false
	}

	async handleOk() {
		const list = this.pageForm.labelStandard?.split('*') || []
		this.pageForm.labelStandard = JSON.stringify({
			width: list[0],
			length: list[1]
		})
		const { success } = await API.wms.logisticsChannel.add.request(this.pageForm)
		success && this.$message.success('新增成功')

		this.cancel()
		this.$emit('search')
	}
	public render() {
		return (
			<a-modal destroyOnClose title="添加渠道服务" visible={this.visible} on-ok={this.handleOk} on-cancel={this.cancel}>
				<a-form-model
					class="ant-advanced-search-form"
					{...{
						attrs: {
							'label-col': { span: 6 },
							wrapperCol: { span: 18 },
							model: this.pageForm,
							rules
						}
					}}
				>
					<a-form-model-item prop="providerName" label="物流商名称">
						<a-input v-model={this.pageForm.providerName} placeholder="物流商名称" readonly />
					</a-form-model-item>
					<a-form-model-item prop="providerCode" label="物流商编号">
						<a-input v-model={this.pageForm.providerCode} placeholder="物流商编号" readonly />
					</a-form-model-item>
					<a-form-model-item prop="channelName" label="渠道服务名称">
						<a-input v-model={this.pageForm.channelName} placeholder="渠道服务名称" />
					</a-form-model-item>
					<a-form-model-item prop="channelCode" label="渠道服务代码">
						<a-input v-model={this.pageForm.channelCode} placeholder="渠道服务代码" />
					</a-form-model-item>
					<a-form-model-item prop="labelStandard" label="面单要求">
						<a-input v-model={this.pageForm.labelStandard} placeholder="面单要求,输入格式：宽*高（10*10）" />
					</a-form-model-item>
					<a-form-model-item prop="serviceProperty" label="业务类别">
						<form-config allowClear prop="channelProviderServiceProperty" v-model={this.pageForm.serviceProperty} placeholder="请选择业务类别" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
