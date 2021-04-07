/**
 * 添加库区
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/25 下午16:38
 */
import { F, T, isEmpty, clone, isNil } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {} as defs.wms.StorageUnitAreaRequestDto
@Component
export default class AddstorageArea extends Vue {
	setInformationVisible = F()
	public searchForm: defs.wms.StorageUnitAreaRequestDto = initWarehouseForm
	private rules = {
		name: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
		code: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
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
	showbrandDetil(data: defs.wms.StorageUnitAreaRequestDto) {
		this.setInformationVisible = T()
		if (!isEmpty(data)) {
			this.searchForm = clone(data)
			console.log(this.searchForm)
		} else {
			this.searchForm = initWarehouseForm
			this.searchForm.status = 1
			this.searchForm.areaType = 10
		}
	}
	private resetForm() {
		this.searchForm = initWarehouseForm
		this.setInformationVisible = F()
	}
	// 表单提交
	private async submitForm() {
		if (!this.searchForm.name) {
			return F()
		}
		if (!this.searchForm.code) {
			return F()
		}
		const data = this.searchForm
		let func: Function = API.wms.storageUnit.areaAdd.request
		let message = '添加成功'
		if (!this.isUpdate) {
			func = API.wms.storageUnit.modifyStorageUnit.request
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
			<a-modal destroyOnClose title={!this.isUpdate ? '修改库区' : '创建库区'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
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
					<a-form-modelItem prop="name" label="库区名称">
						<a-input v-model={this.searchForm.name} placeholder="请选择库区名称" />
					</a-form-modelItem>
					<a-form-model-item prop="code" label="库区编号">
						<a-input v-model={this.searchForm.code} placeholder="请选择库区编号" disabled={!this.isUpdate} />
					</a-form-model-item>
					<a-form-model-Item prop="areaType" label="类型">
						<form-config allowClear prop="areaType" v-model={this.searchForm.areaType} placeholder="请选择类型" />
					</a-form-model-Item>
					<a-form-model-Item prop="status" label="状态">
						<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
					</a-form-model-Item>
					<a-form-model-item prop="warehouseCode" label="所属仓库">
						<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
