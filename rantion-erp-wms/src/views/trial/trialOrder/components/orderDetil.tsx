/**
 * 添加货架
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'

const initWarehouseForm = {
	name: 'hhhhhh',
	code: '',
	warehouseCode: '',
	areaCode: '',
	status: 1
	// SkuObj: []
}
@Component
export default class ShowDetail extends Vue {
	setInformationVisible = F()
	public tableData_detail: any = []
	public tableData_record: any = []
	public searchForm = initWarehouseForm
	// private rules = {
	// 	name: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	// 	code: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
	// }
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
	cancel() {
		this.setInformationVisible = F()
	}

	async handleOk() {
		this.setInformationVisible = F()
	}
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
			// this.searchForm.areaType = 10
		}
	}
	private resetForm() {
		this.searchForm = initWarehouseForm
		this.setInformationVisible = F()
	}
	// 表单提交
	private async submitForm() {
		// if (!this.searchForm.name) {
		// 	return F()
		// }
		// if (!this.searchForm.code) {
		// 	return F()
		// }
		// const data = this.searchForm
		// let func: Function = API.wms.storageUnit.areaAdd.request
		// let message = '添加成功'
		// if (!this.isUpdate) {
		// 	func = API.wms.storageUnit.modifyStorageUnit.request
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
		return T()
	}
	public close() {
		this.setInformationVisible = F()
	}

	public render() {
		return (
			<a-modal destroyOnClose title={!this.isUpdate ? '修改' : '创建'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm} width="1000px">
				<div>
					<div class="orderTop">
						<div>
							<a-row type="flex">
								<a-col span={6} order={4}>
									领用单号： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									仓库： {this.searchForm.status}
								</a-col>
								<a-col span={6} order={4}>
									领用人： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									领用地址： {this.searchForm.name}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									状态： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									领用原因： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									联系电话： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									总数量： {this.searchForm.name}
								</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6} order={4}>
									创建时间： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									更新时间： {this.searchForm.name}
								</a-col>
								<a-col span={6} order={4}>
									审批意见： {this.searchForm.name}
								</a-col>
							</a-row>
						</div>
					</div>
					<div style="margin-top:30px">
						<a-tabs type="card">
							<a-tab-pane key="1" tab="产品明细">
								<a-table dataSource={this.tableData_detail} rowKey="key" pagination={false}>
									<a-table-column title="SKU" dataIndex="" />
									<a-table-column title="产品库位" dataIndex=""></a-table-column>
									<a-table-column title="需求数量" dataIndex=""></a-table-column>
								</a-table>
							</a-tab-pane>
							<a-tab-pane key="2" tab="下架记录">
								<a-table dataSource={this.tableData_record} rowKey="key" pagination={false}>
									<a-table-column title="操作人" dataIndex="" />
									<a-table-column title="操作时间" dataIndex=""></a-table-column>
									<a-table-column title="SKU" dataIndex=""></a-table-column>
								</a-table>
							</a-tab-pane>
						</a-tabs>
					</div>
				</div>
			</a-modal>
		)
	}
}
