/**
 * centerId & shipTo
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/26 下午14:00
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'

const initWarehouseForm = {} as defs.wms.BrandEmailMappingRequestDto
@Component
export default class AddWarehouse extends Vue {
	setInformationVisible = F()
	public searchForm: defs.wms.BrandEmailMappingRequestDto = initWarehouseForm
	private rules = {
		brand: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		email: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	}
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
	cancel() {
		this.setInformationVisible = F()
	}

	async handleOk() {
		this.setInformationVisible = F()
	}
	get isUpdate() {
		return isEmpty(this.searchForm)
	}
	showbrandDetil(data: defs.wms.BrandEmailMappingRequestDto) {
		this.setInformationVisible = T()
		if (!isEmpty(data)) {
			this.searchForm = clone(data)
			console.log(this.searchForm)
		} else {
			this.searchForm = initWarehouseForm
		}
	}
	private resetForm() {
		this.searchForm = initWarehouseForm
		this.setInformationVisible = F()
	}
	// 表单提交
	private async submitForm() {
		if (!this.searchForm.brand) {
			return F()
		}
		if (!this.searchForm.email) {
			return F()
		}
		const data = this.searchForm
		let func: Function = API.wms.brandEmailMapping.add.request
		let message = '添加成功'
		if (!this.isUpdate) {
			func = API.wms.brandEmailMapping.modify.request
			message = '修改成功'
		}
		const { success } = await func(data)
		if (success) {
			this.$notification.success({
				message: '提示',
				description: message
			})
			this.$emit('add-brand')
			this.setInformationVisible = F()
		}
		return T()
	}
	public close() {
		this.setInformationVisible = F()
	}

	public render() {
		return (
			<a-modal destroyOnClose title={!this.isUpdate ? '修改数据' : '新增数据'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
				<a-form-model
					class="ant-advanced-search-form"
					rules={this.rules}
					ref="searchFormRef"
					{...{
						attrs: {
							'label-col': { span: 4 },
							wrapperCol: { span: 19 },
							model: this.searchForm
						}
					}}
				>
					<a-form-modelItem prop="brand" label="品牌">
						<a-input v-model={this.searchForm.brand} placeholder="请输入品牌" />
					</a-form-modelItem>
					<a-form-model-item prop="email" label="售后邮箱">
						<a-input v-model={this.searchForm.email} placeholder="请输入售后邮箱" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
