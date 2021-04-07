/**
 * 添加sku
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {}
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
			// this.searchForm.status = 1
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
			<a-modal destroyOnClose title={'添加'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
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
					<a-form-model-item prop="" label="SKU">
						<a-input placeholder="SKU" disabled={this.isUpdate} />
					</a-form-model-item>
					<a-form-model-item prop="" label="需求数量">
						<a-input placeholder="需求数量" />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
