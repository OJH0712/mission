import { clone, equals, uniq } from 'ramda'
import { Component } from 'vue-property-decorator'
interface PageForm {
	productSku?: string
	productCode?: string
}
const columns = [
	{
		title: '图片',
		// dataIndex: 'productSkuImageUrl',
		key: 'productSkuImageUrl',
		dataIndex: '',
		scopedSlots: { customRender: 'img' }
	},
	{
		title: 'spu',
		dataIndex: 'productCode'
	},
	{
		title: 'sku',
		dataIndex: 'productSku'
	},
	{
		title: 'sku名称',
		dataIndex: 'productSkuName'
	}
]
import { TablePage, PageType } from '@/interface/TablePage'
@Component({
	name: 'AddSku'
})
export default class AddSku extends TablePage {
	public pageForm: PageForm = {}
	public visible = false
	public dataSource: Array<defs.wms.ProductSkuInfoDto> = []
	public rowData: any = []
	public rowData2: any = []
	public selectedRowKeys: any = []
	public selectedRows: any = []
	public copyList: any = []
	get rowSelection() {
		return {
			selectedRowKeys: this.selectedRowKeys,
			selectedRows: this.selectedRows,
			selections: true,
			type: 'checkbox',
			hideDefaultSelections: true,
			onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.WarehouseResponseDto>) => {
				this.selectedRowKeys = selectedRowKeys
				this.selectedRows = selectedRows
			},
			onSelect: (a: any, selected: boolean) => {
				if (selected) {
					this.copyList = clone(this.rowData)
					this.rowData.push(...this.selectedRows)
				} else {
					this.rowData = this.copyList
				}
			}
		}
	}
	init(val: any) {
		this.visible = true
		this.rowData = val
		this.rowData2 = clone(val)
		this.selectedRowKeys = []
		this.search()
	}
	search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.pageForm)
		this.getInit(Object.assign(params, this.pagination()))
	}
	async getInit(param: API.wms.product.getProductSku.Params) {
		const { success, data } = await API.wms.product.getProductSku.request({
			...param,
			approvalStatus: 1
		})
		if (success) {
			this.dataSource = data?.list || []
			this.total = data?.total || 0
		}
	}
	resetForm() {
		this.$emit('addSku', uniq(this.rowData2))
		this.visible = false
		this.dataSource = []
		this.pageForm = {}
	}
	clear() {
		this.pageForm = {}
		this.search()
	}
	submitForm() {
		this.$emit('addSku', uniq(this.rowData))
		this.visible = false
		this.rowData = []
	}
	imgSlot(id: number, record: any) {
		return <img src={record.productSkuImageUrl} style="width: 80px;" />
	}
	render() {
		return (
			<a-modal visible={this.visible} title="订单" on-cancel={this.resetForm} on-ok={this.submitForm} center top="10vh" width="60%">
				<div class="top-search-from">
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.pageForm,
								'label-col': { span: 8 },
								wrapperCol: { span: 16 }
							}
						}}
					>
						<a-form-model-item label="sku">
							<a-input placeholder="sku" v-model={this.pageForm.productSku} />
						</a-form-model-item>
						<a-form-model-item label="spu">
							<a-input placeholder="spu" v-model={this.pageForm.productCode} />
						</a-form-model-item>
						<a-button type="primary" on-click={this.search}>
							搜索
						</a-button>
						<a-button on-click={this.clear}>清除</a-button>
					</a-form-model>
				</div>
				<a-table
					columns={columns}
					{...{
						scopedSlots: {
							img: this.imgSlot
						}
					}}
					rowKey="productSku"
					pagination={false}
					dataSource={this.dataSource}
					row-selection={this.rowSelection}
				/>
				<div class="fenye">
					<a-pagination
						v-model={this.current}
						pagination={false}
						total={this.total}
						showTotal={(total: number) => `共 ${total} 条`}
						onShowSizeChange={this.handleSizeChange.bind(this)}
						onChange={this.handleCurrentChange.bind(this)}
						show-size-changer
						defaultPageSize={this.pageSize}
					/>
				</div>
			</a-modal>
		)
	}
}
