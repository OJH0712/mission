import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, T, isNil } from 'ramda'
import { formatDate } from '@/utils/date'
import addModal from './components/addShopname'
/**
 * 店铺 & 事业部
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/25 下午18:00
 */
@Component({
	name: 'ShopName',
	components: { addModal }
})
export default class User extends TablePage {
	public tableData: Array<defs.wms.ShopDepartmentMappingResponseDto> = []
	public searchForm: API.wms.shopDepartmentMapping.list.Params = {}
	@Ref('addModal') readonly addModal!: HTMLFormElement
	async mounted() {
		this.search()
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.searchForm
							}
						}}
					>
						<a-form-modelItem prop="department" label="事业部">
							<a-input v-model={this.searchForm.department} placeholder="请输入事业部" />
						</a-form-modelItem>
						<a-form-model-item prop="shopName" label="店铺">
							<a-input v-model={this.searchForm.shopName} placeholder="请输入店铺" />
						</a-form-model-item>
						<a-form-model-item prop="name" label="名称">
							<a-input v-model={this.searchForm.name} placeholder="请输入店铺" />
						</a-form-model-item>
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button icon="plus" type="primary" on-click={() => this.showAddModal()}>
						新建
					</a-button>
				</div>
				<a-table dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false} scroll={{ x: 1500 }}>
					<a-table-column title="事业部" dataIndex="department" key="department" align="center" />
					<a-table-column title="店铺" dataIndex="shopName" key="shopName" align="center" />
					<a-table-column title="名称" dataIndex="name" key="name" align="center"></a-table-column>
					<a-table-column title="地址" dataIndex="address" key="address" align="center"></a-table-column>
					<a-table-column title="货代信息" key="representativesInformation" align="center" ellipsis={T()}>
						{(record: defs.wms.ShopDepartmentMappingResponseDto) => <a on-click={() => this.showMadal(record.representativesInformation)}>{record.representativesInformation}</a>}
					</a-table-column>
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" key="createTime" align="center">
						{(record: defs.wms.ShopDepartmentMappingResponseDto) => <span>{formatDate(new Date(record.createTime))}</span>}
					</a-table-column>
					<a-table-column title="更新人" dataIndex="updateBy" key="updateBy" align="center" />
					<a-table-column title="更新时间" key="updateTime" align="center">
						{(record: defs.wms.ShopDepartmentMappingResponseDto) => <span>{formatDate(new Date(record.updateTime))}</span>}
					</a-table-column>
					<a-table-column title="操作" width={200} align="center">
						{(record: defs.wms.ShopDepartmentMappingResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.showAddModal(record)}>修改</a>
								<a on-click={() => this.deleteOne(record.id)}>删除</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<addModal on-add-brand={this.search} ref="addModal"></addModal>
			</div>
		)
	}
	public confirmLoading = false
	public visible = false
	public async getInit(params: API.wms.shopDepartmentMapping.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.shopDepartmentMapping.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}
	public showMadal(msg: string) {
		this.$info({
			title: '货代信息',
			content: msg,
			okText: '确定'
		})
	}
	//修改/添加仓库
	public showAddModal(data?: defs.wms.ShopDepartmentMappingRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 删除
	public async deleteOne(id: number) {
		const { success } = await API.wms.shopDepartmentMapping.deleteById.request(id)
		if (success) {
			this.$notification.success({
				message: '提示',
				description: '删除成功'
			})
		}
		const data = clone(this.searchForm)
		this.getInit(Object.assign(data, this.pagination()))
	}
	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}
}
