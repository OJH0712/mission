/*
 * @Description:货架管理
 * @Author: owen
 * @Date: 2021-04-01 16:14:23
 * @LastEditTime: 2021-04-01 16:45:25
 */
/**
 * 货架管理
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 下午16:38
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import addModal from './components/addShelf'

@Component({
	name: 'Shelf',
	components: { addModal }
})
export default class Shelf extends TablePage {
	public tableData: Array<defs.wms.StorageReportDamageResponseDto> = []
	public searchForm: API.wms.storageReportDamage.list.Params = {}
	@Ref('addModal') readonly addModal!: HTMLFormElement
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
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<div id="components-form-demo-advanced-search" style="padding-top: 20px;">
						<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
							<a-row>
								<a-col span={6}>
									<a-form-item prop="" label="货架名称">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="货架编号">
										<a-input />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-model-item prop="warehouseCode" label="所属仓库">
												<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
											</a-form-model-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="所属库区">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-model-Item prop="status" label="状态">
												<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
											</a-form-model-Item>
										</a-col>
									</span>
								) : null}
								<a-col span={6}>
									<a-button type="primary" on-click={this.search}>
										查询
									</a-button>
									<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
										清除
									</a-button>
									<a class="expand" on-click={this.toggle.bind(this)}>
										{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
									</a>
								</a-col>
							</a-row>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					<a-button type="primary" on-click={this.showAddModal}>
						修改
					</a-button>
					<a-button type="primary" on-click={this.showAddModal}>
						创建
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="序号" dataIndex="" />
							<a-table-column title="货架" dataIndex=""></a-table-column>
							<a-table-column title="货架编号" dataIndex=""></a-table-column>
							<a-table-column title="状态" dataIndex=""></a-table-column>
							<a-table-column title="所属仓库" dataIndex=""></a-table-column>
							<a-table-column title="所属库区" dataIndex=""></a-table-column>
							<a-table-column title="创建人" dataIndex=""></a-table-column>
							<a-table-column title="创建时间" dataIndex=""></a-table-column>
							<a-table-column title="更新时间" dataIndex=""></a-table-column>
						</a-table>
					</a-spin>
				</div>
				{this.paginationJsx()}
				<addModal on-add-brand={this.search} ref="addModal"></addModal>
			</div>
		)
	}

	public async getInit(params: API.wms.storageReportDamage.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.storageReportDamage.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
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
	//修改/添加
	public showAddModal(data?: defs.wms.StorageUnitAreaRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
}
