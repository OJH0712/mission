/*
 * @Description:领用单
 * @Author: owen
 * @Date: 2021-04-01 15:09:56
 * @LastEditTime: 2021-04-01 16:11:36
 */
/**
 * 领用单
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @Date: 2021-04-06 10:44
 */

import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { options } from '@/dictionaries/config'
import addModal from './components/add'
import showDetail from './components/detail'
import showTrail from './components/trial'

@Component({
	name: 'DoLog',
	components: { addModal, showDetail, showTrail }
})
export default class DoLog extends TablePage {
	public tableData: Array<defs.wms.StorageReportDamageResponseDto> = []
	public searchForm: API.wms.storageReportDamage.list.Params = {}
	@Ref('addModal') readonly addModal!: HTMLFormElement
	@Ref('showDetail') readonly showDetail!: HTMLFormElement
	@Ref('showTrail') readonly showTrail!: HTMLFormElement
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
								<a-col span={24} pull={6}>
									<a-form-item prop="" label="状态">
										<a-radio-group v-model={this.searchForm.status} on-change={this.search} button-style="solid">
											<a-radio-button value="">全部</a-radio-button>
											{options.stockCostStatus.map((item: any) => (
												<a-radio-button value={item.value}>{item.label}</a-radio-button>
											))}
											{/* <a-radio-button value="canMerge">{this.mergeName}</a-radio-button>
						      	<a-radio-button value="split">{this.splitName}</a-radio-button> */}
										</a-radio-group>
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="申请费用单号">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="交易主体">
										<a-input />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="" label="费用项">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="申请仓库">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="创建人">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="当前处理人">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="创建时间">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="更新时间">
												<a-input />
											</a-form-item>
										</a-col>
									</span>
								) : null}
								<a-col span={6}>
									<a-button type="primary" on-click={this.search}>
										搜索
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
					<a-button type="primary" icon="plus" on-click={() => this.showAddModal()}>
						创建仓库费用
					</a-button>
					<a-button type="primary" on-click={() => this.showDetailModal()}>
						查看明细
					</a-button>
					<a-button type="primary" on-click={() => this.showTrailModal()}>
						费用审批
					</a-button>
					<a-button type="primary">导出费用</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="申请费用单号" dataIndex="" />
							<a-table-column title="状态" dataIndex=""></a-table-column>
							<a-table-column title="申请仓库" dataIndex=""></a-table-column>
							<a-table-column title="费用项" dataIndex=""></a-table-column>
							<a-table-column title="交易主体" dataIndex=""></a-table-column>
							<a-table-column title="费用金额" dataIndex=""></a-table-column>
							<a-table-column title="费用期间" dataIndex=""></a-table-column>
							<a-table-column title="当前处理人" dataIndex=""></a-table-column>
							<a-table-column title="创建人" dataIndex=""></a-table-column>
							<a-table-column title="创建时间" dataIndex=""></a-table-column>
							<a-table-column title="更新时间" dataIndex="updateTime"></a-table-column>
							<a-table-column title="备注" dataIndex=""></a-table-column>
							<a-table-column title="操作" width={200} align="center">
								{(record: any) => (
									<a-space size="middle">
										<a on-click={() => this.showDetailModal()}>查看明细</a>
										<a on-click={() => this.showTrailModal()}>费用审批</a>
									</a-space>
								)}
							</a-table-column>
						</a-table>
					</a-spin>
				</div>
				{this.paginationJsx()}
				<addModal on-add-brand={this.search} ref="addModal"></addModal>
				<showDetail on-add-brand={this.search} ref="showDetail"></showDetail>
				<showTrail on-add-brand={this.search} ref="showTrail"></showTrail>
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

	//添加
	public showAddModal(data?: defs.wms.WarehouseRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 查看明细
	public showDetailModal(data?: defs.wms.WarehouseRequestDto) {
		this.showDetail.showbrandDetil(data || {})
	}
	// 费用审批
	public showTrailModal(data?: defs.wms.WarehouseRequestDto) {
		this.showTrail.showbrandDetil(data || {})
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
