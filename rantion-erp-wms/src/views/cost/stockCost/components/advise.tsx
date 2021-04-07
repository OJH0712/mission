/**
 * 费用审批
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/6 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref, Inject } from 'vue-property-decorator'
const initWarehouseForm = {
	name: 'hhhh'
}
@Component
export default class ShowTrail extends Vue {
	@Inject()
	reload!: Function
	setInformationVisible = F()
	public searchForm = initWarehouseForm
	// private rules = {
	// 	col: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	code: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	layers: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	status: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	// }
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
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

	// 审批驳回
	private async submitForm() {
		// const data = this.searchForm
		// console.log(data)
		// this.$emit('add-sku', data)
		this.setInformationVisible = F()
		this.reload()
		return T()
	}
	public close() {
		this.setInformationVisible = F()
	}

	public render() {
		return (
			<a-modal destroyOnClose title={'审批驳回'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm}>
				<div>
					<div>
						<a-form-model
							class="ant-advanced-search-form"
							// rules={this.rules}
							ref="searchFormRef"
							{...{
								attrs: {
									labelCol: { span: 4 },
									wrapperCol: { span: 20 },
									model: this.searchForm
								}
							}}
						>
							<a-form-model-item prop="" label="驳回意见">
								<a-textarea row={4} />
							</a-form-model-item>
						</a-form-model>
					</div>
				</div>
			</a-modal>
		)
	}
}
