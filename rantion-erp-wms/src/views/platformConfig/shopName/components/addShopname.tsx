/**
 * 新建店铺
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/26 上午10:00
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {} as defs.wms.ShopDepartmentMappingRequestDto
@Component
export default class AddWarehouse extends Vue {
	setInformationVisible = F()
	formvisible = T()
	loading = F()
	public searchForm: defs.wms.ShopDepartmentMappingRequestDto = initWarehouseForm
	private rules = {
		address: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		department: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		name: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		representativesInformation: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		shopName: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
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
	showbrandDetil(data: defs.wms.ShopDepartmentMappingRequestDto) {
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
		if (!this.searchForm.address) {
			return F()
		}
		if (!this.searchForm.department) {
			return F()
		}
		if (!this.searchForm.name) {
			return F()
		}
		if (!this.searchForm.representativesInformation) {
			return F()
		}
		if (!this.searchForm.shopName) {
			return F()
		}
		const data = this.searchForm
		let func: Function = API.wms.shopDepartmentMapping.add.request
		let message = '添加成功'
		if (!this.isUpdate) {
			func = API.wms.shopDepartmentMapping.modify.request
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
					<a-form-modelItem prop="department" label="事业部">
						<a-input v-model={this.searchForm.department} placeholder="请输入事业部" />
					</a-form-modelItem>
					<a-form-model-item prop="shopName" label="店铺">
						<a-input v-model={this.searchForm.shopName} placeholder="请输入店铺" />
					</a-form-model-item>
					<a-form-model-item prop="name" label="名称">
						<a-input v-model={this.searchForm.name} placeholder="请输入名称" />
					</a-form-model-item>
					<a-form-model-item prop="address" label="地址">
						<a-input v-model={this.searchForm.address} placeholder="请输入地址" />
					</a-form-model-item>
					<a-form-model-item prop="representativesInformation" label="货代信息">
						<a-textarea v-model={this.searchForm.representativesInformation} placeholder="请输入货代信息" auto-size={T()} allowClear />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
