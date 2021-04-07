/**
 * 领用单号明细
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 下午16:38
 */
import { F, T, isEmpty, clone } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
import { channelProviderStatusFilter } from '@/dictionaries/filter'
import addModal from './addSku'

const initWarehouseForm = {
	name: '',
	code: '',
	warehouseCode: '',
	areaCode: '',
	status: 1
	// SkuObj: []
}
@Component({
	components: { addModal }
})
export default class AddstorageArea extends Vue {
	setInformationVisible = F()
	public tableData: any = []
	public searchForm = initWarehouseForm
	@Ref('addModal') readonly addModal!: HTMLFormElement
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
	//修改/添加货架组
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
			<a-modal destroyOnClose title={!this.isUpdate ? '修改' : '创建'} visible={this.setInformationVisible} on-cancel={this.resetForm} on-ok={this.submitForm} width="1000px">
				<a-form-model
					class="ant-advanced-search-form"
					rules={this.rules}
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
							<a-form-modelItem prop="name" label="货架排名称">
								<a-input v-model={this.searchForm.name} placeholder="请选择货架排名称" />
							</a-form-modelItem>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="code" label="货架排编号">
								<a-input v-model={this.searchForm.code} placeholder="请选择货架排编号" disabled={this.isUpdate} />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="warehouseCode" label="所属仓库">
								<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-item prop="areaCode" label="所属库区">
								<form-warehouse-code allowClear v-model={this.searchForm.areaCode} placeholder="请选择适用库区" />
							</a-form-model-item>
						</a-col>
						<a-col span={8}>
							<a-form-model-Item prop="status" label="状态">
								<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
							</a-form-model-Item>
						</a-col>
					</a-row>
				</a-form-model>
				<a-divider />
				<a-row type="flex" justify="end" align="middle">
					<a-col>
						<a-button type="primary" on-click={() => this.showAddModal()}>
							添加
						</a-button>
					</a-col>
				</a-row>
				<a-table dataSource={this.tableData} rowKey="key" pagination={false}>
					{/* <a-table-column title="序号" dataIndex="" key="" align="center" /> */}
					<a-table-column title="货架组编号" dataIndex="code" key="code" align="center"></a-table-column>
					<a-table-column title="状态" key="status" align="center">
						{(record: any) => <span>{channelProviderStatusFilter(record.status)}</span>}
					</a-table-column>
					{/* <a-table-column title="排数" dataIndex=""></a-table-column> */}
					<a-table-column title="列数" dataIndex="col" key="col"></a-table-column>
					<a-table-column title="层数" dataIndex="layers" key="layers"></a-table-column>
					<a-table-column title="操作" align="center">
						{(record: any) => (
							<a-space size="middle">
								<a on-click={() => this.showAddModal(record)}>修改</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{/* <addModal on-add-brand={this.search} ref="addModal"></addModal> */}
				<addModal on-add-sku={this.getSku} ref="addModal"></addModal>
			</a-modal>
		)
	}
}
