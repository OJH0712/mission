/*
 * @Description:领用单
 * @Author: owen
 * @Date: 2021-04-01 15:09:56
 * @LastEditTime: 2021-04-01 16:07:45
 */
/**
 * 领用单
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/4/2 上午11:38
 */

import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { options } from '@/dictionaries/config'
import addModal from './components/addTrialOrder'
import showDetail from './components/orderDetil'

@Component({
	name: 'TrialOrder',
	components: { addModal, showDetail }
})
export default class TrialOrder extends TablePage {
	public tableData: any = [
		{
			CollectionNo: 'cx110000000'
		}
	]
	public searchForm: API.wms.storageReportDamage.list.Params = {}
	@Ref('addModal') readonly addModal!: HTMLFormElement
	@Ref('showDetail') readonly showDetail!: HTMLFormElement
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
											{options.borrowStatus.map((item: any) => (
												<a-radio-button value={item.value}>{item.label}</a-radio-button>
											))}
											{/* <a-radio-button value="canMerge">{this.mergeName}</a-radio-button>
						      	<a-radio-button value="split">{this.splitName}</a-radio-button> */}
										</a-radio-group>
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="来源仓库">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="领用单号">
										<a-input />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="" label="审核时间">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="SKU">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="数量">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="领用人">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="创建人">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="创建时间">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="审核人">
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
						创建领用单
					</a-button>
					<a-button type="primary" on-click={() => this.showAddModal()}>
						审核领用单
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="领用单号" key="CollectionNo">
								{(record: any) => <a on-click={this.showOrder}>{record.CollectionNo}</a>}
							</a-table-column>
							<a-table-column title="来源仓库" dataIndex="" />
							<a-table-column title="数量" dataIndex=""></a-table-column>
							<a-table-column title="领用人" dataIndex=""></a-table-column>
							<a-table-column title="领用原因" dataIndex=""></a-table-column>
							<a-table-column title="领用地址" dataIndex=""></a-table-column>
							<a-table-column title="联系电话" dataIndex=""></a-table-column>
							<a-table-column title="领用时长" dataIndex=""></a-table-column>
							<a-table-column title="状态" dataIndex=""></a-table-column>
							<a-table-column title="创建人" dataIndex=""></a-table-column>
							<a-table-column title="创建时间" dataIndex=""></a-table-column>
							<a-table-column title="审核人" dataIndex=""></a-table-column>
							<a-table-column title="审核时间" dataIndex=""></a-table-column>
						</a-table>
					</a-spin>
				</div>
				{this.paginationJsx()}
				<addModal on-add-brand={this.search} ref="addModal"></addModal>
				<showDetail on-add-brand={this.search} ref="showDetail"></showDetail>
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
	//创建/审核
	public showAddModal(data?: defs.wms.StorageUnitAreaRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 显示领用单
	public showOrder(data?: any) {
		this.showDetail.showbrandDetil(data || {})
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
