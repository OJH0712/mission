/**
 * 查看明细
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/6 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {
	name: 'hhhh'
}
@Component
export default class ShowDetail extends Vue {
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
			<a-modal destroyOnClose title={'查看明细'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm} width="800px">
				<div>
					<div class="orderTop">
						<div>
							<a-row type="flex">
								<a-col span={6} order={4}>
									仓库： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									费用项： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									费用金额： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									费用期间： {this.searchForm.name}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									收款人名称： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									收款人开户行： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									收款人银行账号： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									交易主体： {this.searchForm.name}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									状态： {this.searchForm.name}
								</a-col>
							</a-row>
						</div>
					</div>
					<div style="margin-top:30px">
						<a-form-model
							class="ant-advanced-search-form"
							// rules={this.rules}
							ref="searchFormRef"
							// layout="inline"
							{...{
								attrs: {
									// labelCol: { span: 4 },
									// wrapperCol: { span: 20 },
									model: this.searchForm
								}
							}}
						>
							<a-row>
								<a-form-model-item prop="" label="费用用途备注">
									<a-textarea row={4} disabled />
								</a-form-model-item>
								<a-form-model-item prop="" label="驳回意见">
									<a-textarea row={4} disabled />
								</a-form-model-item>
								<a-form-model-item prop="" label="附件">
									<a>附件1</a>
								</a-form-model-item>
							</a-row>
						</a-form-model>
					</div>
				</div>
			</a-modal>
		)
	}
}
