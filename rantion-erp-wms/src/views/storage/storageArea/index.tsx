import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { channelProviderStatusFilter, areaTypeFilter } from '@/dictionaries/filter'
import { formatDate } from '@/utils/date'
import addModal from './components/addstorageArea'
/**
 * 库区管理
 * Name: 区君豪
 * startDate:2021-2-19 13:40:23
 * updateDate：2021-2-22 15:40:23
 * Email:mike@rantion.com
 */
@Component({
	name: 'StorageArea',
	components: { addModal }
})
export default class User extends TablePage {
	public tableData: Array<defs.wms.StorageUnitAreaRequestDto> = []
	public searchForm: API.wms.storageUnit.storageUnitList.Params = {}
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
						<a-form-modelItem prop="name" label="库区名称">
							<a-input v-model={this.searchForm.name} placeholder="请选择库区名称" />
						</a-form-modelItem>
						<a-form-model-item prop="areaCode" label="库区编号">
							<a-input v-model={this.searchForm.areaCode} placeholder="请选择库区编号" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-Item prop="areaType" label="类型">
									<form-config allowClear prop="areaType" v-model={this.searchForm.storageType} placeholder="请选择类型" />
								</a-form-model-Item>
								<a-form-model-Item prop="status" label="状态">
									<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
								</a-form-model-Item>
								<a-form-model-item prop="warehouseCode" label="所属仓库">
									<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
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
					<a-table-column title="库区编号" width={100} dataIndex="areaCode" key="areaCode" align="center" />
					<a-table-column title="库区名称" dataIndex="name" key="name" align="center" />
					<a-table-column title="库区类型" key="areaType" align="center">
						{(record: defs.wms.StorageUnitAreaRequestDto) => <span>{areaTypeFilter(record.areaType)}</span>}
					</a-table-column>
					<a-table-column title="状态" key="status" align="center">
						{(record: defs.wms.StorageUnitAreaRequestDto) => <span>{channelProviderStatusFilter(record.status)}</span>}
					</a-table-column>
					<a-table-column title="所属仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" key="createTime" align="center">
						{(record: defs.wms.StorageUnitResponseDto) => <span>{formatDate(new Date(record.createTime))}</span>}
					</a-table-column>
					<a-table-column title="更新时间" key="updateTime" align="center">
						{(record: defs.wms.StorageUnitResponseDto) => <span>{formatDate(new Date(record.updateTime))}</span>}
					</a-table-column>

					<a-table-column title="操作" width={300} align="center">
						{(record: defs.wms.StorageUnitResponseDto) => (
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

	public async getInit(params: API.wms.storageUnit.storageUnitList.Params) {
		this.loading = true
		const { data, success } = await API.wms.storageUnit.storageUnitList.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}
	// 修改提示表单
	//修改/添加仓库
	public showAddModal(data?: defs.wms.StorageUnitAreaRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 删除
	public async deleteOne(id: number) {
		const { success } = await API.wms.storageUnit.deleteAreaById.request({ id })
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
