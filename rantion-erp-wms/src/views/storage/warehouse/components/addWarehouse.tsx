/**
 * 添加仓库
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/25 上午10:00
 */
import { F, T, isEmpty, clone, isNil } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {} as defs.wms.WarehouseRequestDto
@Component
export default class AddWarehouse extends Vue {
	setInformationVisible = F()
	public searchForm: defs.wms.WarehouseRequestDto = initWarehouseForm
	private rules = {
		warehouseName: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		city: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		warehouseCode: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	}
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
	cancel() {
		this.setInformationVisible = F()
	}

	async handleOk() {
		this.setInformationVisible = F()
	}
	get isUpdate() {
		return isNil(this.searchForm.id)
	}
	showbrandDetil(data: defs.wms.WarehouseRequestDto) {
		this.setInformationVisible = T()
		if (!isEmpty(data)) {
			this.searchForm = clone(data)
			console.log(this.searchForm)
		} else {
			this.searchForm = initWarehouseForm
			this.searchForm.status = 1
			this.searchForm.type = 10
		}
	}
	private resetForm() {
		this.searchForm = initWarehouseForm
		this.setInformationVisible = F()
	}
	// 表单提交
	private async submitForm() {
		if (!this.searchForm.warehouseName) {
			return F()
		}
		if (!this.searchForm.warehouseCode) {
			return F()
		}
		if (!this.searchForm.city) {
			return F()
		}
		const data = this.searchForm
		let func: Function = API.wms.warehouse.add.request
		let message = '添加成功'
		if (!this.isUpdate) {
			func = API.wms.warehouse.modify.request
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
			<a-modal destroyOnClose title={!this.isUpdate ? '修改仓库' : '创建仓库'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
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
					<a-form-modelItem prop="warehouseName" label="仓库名称">
						<a-input v-model={this.searchForm.warehouseName} placeholder="请输入仓库名称" />
					</a-form-modelItem>
					<a-form-model-item prop="warehouseCode" label="仓库编号">
						<a-input v-model={this.searchForm.warehouseCode} placeholder="请输入仓库编号" disabled={!this.isUpdate} />
					</a-form-model-item>
					<a-form-model-item prop="email" label="邮箱">
						<a-input v-model={this.searchForm.email} placeholder="请输入邮箱" />
					</a-form-model-item>
					<a-form-model-Item prop="areaType" label="类型">
						<form-config allowClear prop="areaType" v-model={this.searchForm.type} placeholder="请选择类型" />
					</a-form-model-Item>
					<a-form-model-Item prop="status" label="状态">
						<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
					</a-form-model-Item>
					<a-form-model-item prop="country" label="国家">
						<a-input v-model={this.searchForm.country} placeholder="请输入国家" />
					</a-form-model-item>
					<a-form-model-item prop="province" label="省/周">
						<a-input v-model={this.searchForm.province} placeholder="请输入省周" />
					</a-form-model-item>
					<a-form-model-item prop="city" label="城市">
						<a-input v-model={this.searchForm.city} placeholder="请输入城市" />
					</a-form-model-item>
					<a-form-model-item prop="contacts" label="联系人">
						<a-input v-model={this.searchForm.contacts} placeholder="请输入联系人" />
					</a-form-model-item>
					<a-form-model-item prop="mobilePhone" label="手机号码">
						<a-input v-model={this.searchForm.mobilePhone} placeholder="请输入手机号码" />
					</a-form-model-item>
					<a-form-model-item prop="telephone" label="固定电话">
						<a-input v-model={this.searchForm.telephone} placeholder="请输入固定电话" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
