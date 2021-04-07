/*
 * @Author: Chan
 * @Date: 2021-02-20 16:14:17
 * @LastEditTime: 2021-02-23 11:27:14
 * @LastEditors: Chan
 * @Description: 添加渠道服务
 */
import { pick } from 'ramda'
import { Component, Vue } from 'vue-property-decorator'
const rules = {
	channelName: [{ required: true, message: '渠道服务不能为空', trigger: 'blur' }],
	channelCode: [{ required: true, message: '渠道服务代码不能为空', trigger: 'blur' }],
	labelStandard: [{ required: true, message: '面单要求不能为空', trigger: 'blur' }],
	serviceProperty: [{ required: true, message: '业务类别不能为空', trigger: 'blur' }]
}
@Component
export default class UpdateChannelService extends Vue {
	visible = false
	pageForm: Partial<defs.wms.LogisticsChannelMsgRequestDto> = {}
	channelCode = ''
	providerCode = ''
	init(data: defs.wms.LogisticsProviderResponseDto) {
		this.channelCode = data.channelCode
		this.providerCode = data.providerCode
		this.pageForm = {
			...pick(['averageDay', 'channelType', 'countWeightType', 'defaultCarryBit', 'groupCodeList', 'providerName'], data)
		}
		this.visible = true
	}
	cancel() {
		this.visible = false
	}

	async handleOk() {
		const { success } = await API.wms.logisticsChannel.modifyChannelMsg.request(this.channelCode, this.providerCode, this.pageForm)
		success && this.$message.success('修改成功')
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
					<a-form-model-item prop="averageDay" label="平均时效 (天)">
						<a-input v-model={this.pageForm.averageDay} placeholder="物流商名称" />
					</a-form-model-item>
					<a-form-model-item prop="channelType" label="渠道类型">
						<form-config allowClear prop="channelType" v-model={this.pageForm.channelType} placeholder="渠道类型" />
					</a-form-model-item>
					<a-form-model-item prop="groupCodeList" label="物流分组">
						<form-logistics-group v-model={this.pageForm.groupCodeList} mode="multiple" placeholder="物流分组" />
					</a-form-model-item>
					<a-form-model-item prop="countWeightType" label="计重类型">
						<form-config allowClear prop="countWeightType" v-model={this.pageForm.countWeightType} placeholder="计重类型" />
					</a-form-model-item>
					<a-form-model-item prop="defaultCarryBit" label="默认进位重">
						<a-input v-model={this.pageForm.defaultCarryBit} placeholder="默认进位重" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
