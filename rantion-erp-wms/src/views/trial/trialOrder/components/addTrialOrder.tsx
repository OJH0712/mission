/**
 * 创建审核领用单
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 上午10:00
 */
import { F, T, isEmpty, clone, isNil } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
import addModal from './addSku'

// const initWarehouseForm = {} as defs.wms.WarehouseRequestDto
const initWarehouseForm = {}
@Component({
	components: { addModal }
})
export default class Addsku extends Vue {
	setInformationVisible = F()
	// public searchForm: defs.wms.WarehouseRequestDto = initWarehouseForm
	public tableData: any = []
	public searchForm: any = initWarehouseForm
	@Ref('addModal') readonly addModal!: HTMLFormElement
	// private rules = {
	// 	warehouseName: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	city: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	warehouseCode: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	// }
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		// type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: any) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
		}
	}
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement

	get isTrail() {
		return isNil(this.searchForm.id)
	}
	showbrandDetil(data: any) {
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
		// if (!this.searchForm.warehouseName) {
		// 	return F()
		// }
		// if (!this.searchForm.warehouseCode) {
		// 	return F()
		// }
		// if (!this.searchForm.city) {
		// 	return F()
		// }
		// const data = this.searchForm
		// let func: Function = API.wms.warehouse.add.request
		// let message = '添加成功'
		// if (!this.isUpdate) {
		// 	func = API.wms.warehouse.modify.request
		// 	message = '修改成功'
		// }
		// const { success } = await func(data)
		// if (success) {
		// 	this.$notification.success({
		// 		message: '提示',
		// 		description: message
		// 	})
		// 	this.$emit('add-brand')
		// 	this.setInformationVisible = F()
		// }
		this.setInformationVisible = F()
		return T()
	}
	public delete() {
		console.log('delete')
	}
	public showAddModal(data?: any) {
		this.addModal.showbrandDetil(data || {})
	}
	public getSku(data: any) {
		this.tableData.push(data)
		console.log('tableData', this.tableData)
		// this.searchForm.SkuObj.push(data)
	}
	public render() {
		return (
			<a-modal destroyOnClose title={!this.isTrail ? '创建' : '审核'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm} width="800px">
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
					<a-row>
						<a-col span={8}>
							<a-form-model-item prop="warehouseCode" label="所属仓库">
								<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-item prop="" label="领用人">
								<a-input />
							</a-form-item>
						</a-col>
						<a-col span={8}>
							<a-form-item prop="" label="领用原因">
								<a-input />
							</a-form-item>
						</a-col>
						<a-col span={8}>
							<a-form-item prop="" label="收件人地址">
								<a-input />
							</a-form-item>
						</a-col>
						<a-col span={8}>
							<a-form-item prop="" label="联系电话">
								<a-input />
							</a-form-item>
						</a-col>
					</a-row>
					<a-row type="flex" justify="end" align="middle">
						<a-col>
							{this.isTrail ? (
								<span>
									<a-button type="primary" on-click={() => this.showAddModal()}>
										添加
									</a-button>
									<a-button type="primary" on-click={() => this.delete()}>
										删除
									</a-button>
								</span>
							) : null}
						</a-col>
					</a-row>
					<a-table rowSelection={this.rowSelection} dataSource={this.tableData} rowKey="key" pagination={false}>
						<a-table-column title="序号" align="center"></a-table-column>
						<a-table-column title="SKU" align="center"></a-table-column>
						<a-table-column title="需求数量" align="center"></a-table-column>
					</a-table>
				</a-form-model>
				{this.isTrail ? (
					<div>
						<a-form-model
							class="ant-advanced-search-form"
							// rules={this.rules}
							ref="searchFormRef"
							layout="horizontal"
							{...{
								attrs: {
									model: this.searchForm
								}
							}}
						>
							<a-form-item prop="" label="审核意见">
								<a-textarea row={4} />
							</a-form-item>
							<upload-dragger></upload-dragger>
						</a-form-model>
					</div>
				) : null}

				<addModal on-add-sku={this.getSku} ref="addModal"></addModal>
			</a-modal>
		)
	}
}
