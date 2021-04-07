/**
 * 添加货架
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {
	code: '',
	col: '',
	layers: '',
	status: 1
}
@Component
export default class Addsku extends Vue {
	setInformationVisible = F()
	public searchForm = initWarehouseForm
	// private rules = {
	// 	col: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	code: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	layers: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	status: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	// }
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
	get isUpdate() {
		// return isNil(this.searchForm.id)
		return false
	}
	showbrandDetil(data: any) {
		this.setInformationVisible = T()
		if (!isEmpty(data)) {
			this.searchForm = clone(data)
			console.log(this.searchForm)
		} else {
			this.searchForm = initWarehouseForm
			this.searchForm.status = 1
		}
	}
	private resetForm() {
		this.searchForm = initWarehouseForm
		this.setInformationVisible = F()
	}
	// 表单提交
	private async submitForm() {
		const data = this.searchForm
		this.$emit('add-sku', data)
		this.setInformationVisible = F()
		return T()
	}
	public close() {
		this.setInformationVisible = F()
	}

	public render() {
		return (
			<a-modal destroyOnClose title={!this.isUpdate ? '修改' : '创建'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
				<a-form-model
					class="ant-advanced-search-form"
					// rules={this.rules}
					ref="searchFormRef"
					{...{
						attrs: {
							labelCol: { span: 8 },
							wrapperCol: { span: 14 },
							model: this.searchForm
						}
					}}
				>
					<a-form-model-item prop="code" label="货架排编号">
						<a-input v-model={this.searchForm.code} placeholder="请选择货架排编号" disabled={this.isUpdate} />
					</a-form-model-item>
					<a-form-model-Item prop="status" label="状态">
						<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
					</a-form-model-Item>
					<a-form-model-item prop="col" label="列数">
						<a-input v-model={this.searchForm.col} placeholder="请输入列数" />
					</a-form-model-item>
					<a-form-model-item prop="layers" label="层数">
						<a-input v-model={this.searchForm.layers} placeholder="请输入列数" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
