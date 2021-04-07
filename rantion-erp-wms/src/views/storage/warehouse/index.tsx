import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { channelProviderStatusFilter, areaTypeFilter } from '@/dictionaries/filter'
import { formatDate } from '@/utils/date'
import addModal from './components/addWarehouse'
/**
 * 仓库管理
 * Name: Antes
 * Date:2020-11-17 13:40:23
 * Email:tangzhlyd@gmail.com
 */
@Component({
	name: 'Warehouse',
	components: { addModal }
})
export default class User extends TablePage {
	public tableData: Array<defs.wms.WarehouseResponseDto> = []
	public searchForm: API.wms.warehouse.list.Params = {}
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
						<a-form-modelItem prop="userNo" label="仓库名称">
							<a-input v-model={this.searchForm.warehouseName} placeholder="请输入仓库名称" />
						</a-form-modelItem>
						<a-form-model-item prop="userName" label="仓库编号">
							<a-input v-model={this.searchForm.updateBy} placeholder="请输入仓库编号" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="email" label="邮箱">
									<a-input v-model={this.searchForm.email} placeholder="请输入邮箱" />
								</a-form-model-item>
								<a-form-model-Item prop="areaType" label="类型">
									<form-config allowClear prop="areaType" v-model={this.searchForm.type} placeholder="请选择类型" />
								</a-form-model-Item>
								<a-form-model-Item prop="status" label="状态">
									<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
								</a-form-model-Item>
								<a-form-model-item prop="country" label="国家">
									<a-input v-model={this.searchForm.country} placeholder="请输入国家" />
								</a-form-model-item>
								<a-form-model-item prop="province" label="省/周">
									<a-input v-model={this.searchForm.province} placeholder="请输入省周" />
								</a-form-model-item>
								<a-form-model-item prop="city" label="城市">
									<a-input v-model={this.searchForm.city} placeholder="请输入城市" />
								</a-form-model-item>
								<a-form-model-item prop="contacts" label="联系人">
									<a-input v-model={this.searchForm.contacts} placeholder="请输入联系人" />
								</a-form-model-item>
								<a-form-model-item prop="mobilePhone" label="手机号码">
									<a-input v-model={this.searchForm.mobilePhone} placeholder="请输入手机号码" />
								</a-form-model-item>
								<a-form-model-item prop="telephone" label="固定电话">
									<a-input v-model={this.searchForm.telephone} placeholder="请输入固定电话" />
								</a-form-model-item>
							</span>
						) : null}
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
							<a class="expand" on-click={this.toggle.bind(this)}>
								{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
							</a>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button icon="plus" type="primary" on-click={() => this.showAddModal()}>
						添加
					</a-button>
				</div>
				<a-table dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false} scroll={{ x: 1500 }}>
					<a-table-column title="仓库" width={100} dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="仓库编号" dataIndex="warehouseCode" key="warehouseCode" align="center" />
					<a-table-column title="类型" key="type" align="center">
						{(record: defs.wms.WarehouseResponseDto) => <span>{areaTypeFilter(record.type)}</span>}
					</a-table-column>
					<a-table-column title="状态" key="status" align="center">
						{(record: defs.wms.WarehouseResponseDto) => <span>{channelProviderStatusFilter(record.status)}</span>}
					</a-table-column>
					<a-table-column title="国家" dataIndex="country" key="country" align="center" />
					<a-table-column title="省份" dataIndex="province" key="province" align="center" />
					<a-table-column title="城市" dataIndex="city" key="city" align="center" />
					<a-table-column title="区/镇" dataIndex="area" key="area" align="center" />
					<a-table-column title="联系人" dataIndex="contacts" key="contacts" align="center" />
					<a-table-column title="手机电话" dataIndex="mobilePhone" key="mobilePhone" align="center" />
					<a-table-column title="固定电话" dataIndex="telephone" key="telephone" align="center" />
					<a-table-column title="邮箱" dataIndex="email" key="email" align="center" />
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" key="createTime" align="center">
						{(record: defs.wms.WarehouseResponseDto) => <span>{formatDate(new Date(record.createTime))}</span>}
					</a-table-column>
					<a-table-column title="更新时间" dataIndex="Timestamp" key="Timestamp" align="center" />
					<a-table-column title="操作" width={200} align="center">
						{(record: defs.wms.WarehouseResponseDto) => (
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
	public async getInit(params: API.wms.warehouse.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.warehouse.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}
	//修改/添加仓库
	public showAddModal(data?: defs.wms.WarehouseRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 删除
	public async deleteOne(id: number) {
		const { success } = await API.wms.warehouse.deleteById.request(id)
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
