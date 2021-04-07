/**
 * 创建仓库费用
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/6 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
const initWarehouseForm = {}
@Component
export default class Add extends Vue {
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
			<a-modal destroyOnClose title={'添加'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm} width="800px">
				<a-form-model
					class="ant-advanced-search-form"
					// rules={this.rules}
					ref="searchFormRef"
					{...{
						attrs: {
							labelCol: { span: 10 },
							wrapperCol: { span: 14 },
							model: this.searchForm
						}
					}}
				>
					<a-row>
						<a-col span={8}>
							<a-form-model-item prop="" label="申请仓库">
								<form-warehouse-code allowClear placeholder="请选择适用仓库" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="" label="费用项">
								<a-input placeholder="" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="" label="费用金额">
								<a-input placeholder="" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="" label="交易主体">
								<a-input placeholder="" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="" label="收款人名称">
								<a-input placeholder="" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="" label="收款人开户行">
								<a-input placeholder="" />
							</a-form-model-item>
						</a-col>
						{/* <a-col span={8}>

						</a-col> */}
					</a-row>
				</a-form-model>
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
					<a-row>
						<a-col>
							<a-form-model-item prop="" label="收款人银行账号">
								<a-input placeholder="" />
							</a-form-model-item>
							<a-form-model-item prop="" label="费用期间">
								{() => (
									<span>
										<a-date-picker placeholder="开始时间" />
										-
										<a-date-picker placeholder="结束时间" />
									</span>
								)}
							</a-form-model-item>
						</a-col>
						<a-form-model-item prop="" label="费用用途备注">
							<a-textarea row={4} />
						</a-form-model-item>
						<a-form-model-item prop="" label="附件">
							<a>
								<upload-dragger></upload-dragger>
							</a>
						</a-form-model-item>
					</a-row>
				</a-form-model>
			</a-modal>
		)
	}
}
