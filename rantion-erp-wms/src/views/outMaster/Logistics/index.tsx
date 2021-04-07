/*
 * @Description:物流分拣
 * @Author: owen
 * @Date: 2021-02-23 09:58:38
 * @LastEditTime: 2021-03-08 15:48:38
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import { timestampToTime } from '@/utils/date'
import { outmasterLogisticsStatusFilter } from '@/dictionaries/filter'
import LogisticsDetail from './showLogisticsDetail'
import { pkgExport } from '@/utils/downloadApi'

const rules = {
	startDate: [{ required: true, message: '请输入日期范围', trigger: 'blur' }]
}
@Component({
	name: 'Logistics',
	components: { LogisticsDetail }
})
export default class Logistics extends TablePage {
	@Ref('LogisticsDetail') readonly LogisticsDetailRef!: HTMLFormElement
	public tableData: Array<defs.wms.PackageMasterResponseDto> = []
	public searchForm: API.wms.packageMaster.list.Params = {}
	public pkgSearchForm: API.wms.packageMaster.packageDetailReport.Params = {
		endDate: '',
		startDate: ''
	}
	public pkgVisible = false
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		// type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.AllocationBatchResponseDto>) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
		}
	}
	public exportData() {
		this.pkgVisible = true
	}
	// 导出明细汇总
	public async exportPkg() {
		this.$message.loading({ content: '下载中···', duration: 1 })
		if (isEmpty(this.pkgSearchForm.startDate)) return
		const params = clone(this.pkgSearchForm)
		params.startDate = this.pkgSearchForm.startDate[0]
		params.endDate = this.pkgSearchForm.startDate[1]
		await pkgExport(params)
		this.pkgVisible = false
	}
	public handleCancel() {
		this.pkgVisible = false
		this.pkgSearchForm = {
			endDate: '',
			startDate: ''
		}
	}
	public hasSelected() {
		return this.rowSelection.selectedRowKeys.length > 0
	}
	mounted() {
		this.search()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	show(record: defs.wms.PickMasterResponseDto) {
		this.LogisticsDetailRef.init(record)
	}
	createPkg() {
		this.$confirm({
			title: '创建PKG',
			content: '此操作将添加一条空的PKG, 是否继续?',
			okText: '确认',
			cancelText: '取消',
			onOk: async () => {
				const { success } = await API.wms.packageMaster.add.request()
				if (success) {
					this.search()
				}
			}
		})
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
						<a-form-model-item prop="pkg" label="PKG号">
							<a-input v-model={this.searchForm.pkg} />
						</a-form-model-item>
						<a-form-model-item label="状态">
							<form-config v-model={this.searchForm.status} prop="outmasterLogisticsStatus" />
						</a-form-model-item>

						{this.expand ? (
							<span>
								<a-form-model-item prop="logisticsProviderCode" label="渠道商">
									<a-input v-model={this.searchForm.logisticsProviderCode} />
								</a-form-model-item>
								<a-form-model-item prop="dono" label="出库单号">
									<a-input v-model={this.searchForm.dono} />
								</a-form-model-item>
								<a-form-model-item prop="orderNo" label="订单号">
									<a-input v-model={this.searchForm.orderNo} />
								</a-form-model-item>
								<a-form-model-item label="出库时间">
									{
										<span>
											<a-date-picker v-model={this.searchForm.beginDeliveryTime} placeholder="开始日期" />-
											<a-date-picker v-model={this.searchForm.endDeliveryTime} placeholder="结束日期" />
										</span>
									}
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
					{/* 未完成 */}
					<a-button type="primary" icon="plus" on-click={this.createPkg}>
						创建PKG
					</a-button>
					<a-button type="primary" disabled={!this.hasSelected()}>
						取消PKG
					</a-button>
					<a-button type="primary" icon="share-alt" on-click={() => this.exportData()}>
						导出汇总明细
					</a-button>
				</div>
				<div class="a-table-column">
					<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false}>
						<a-table-column title="PKG号" dataIndex="pkg" key="pkg" />
						<a-table-column title="渠道商" dataIndex="logisticsProviderName" key="logisticsProviderName" />
						<a-table-column title="状态" dataIndex="status" key="status" customRender={(val: string | number) => outmasterLogisticsStatusFilter(val)} />
						<a-table-column title="出库时间" dataIndex="deliveryTime" key="deliveryTime" customRender={(time: any) => timestampToTime(time)} width={180} />
						<a-table-column title="操作" align="center">
							{(record: defs.wms.PickMasterResponseDto) => (
								<a-space size="middle">
									<a on-click={() => this.show(record)}>查看</a>
									<a>打印</a>
								</a-space>
							)}
						</a-table-column>
					</a-table>
				</div>
				{this.paginationJsx()}
				<logisticsDetail ref="LogisticsDetail" />
				<a-modal title="导出PKG" visible={this.pkgVisible} onOk={this.exportPkg} onCancel={this.handleCancel}>
					<a-form-model
						ref="pkgForm"
						class="ant-advanced-search-form"
						{...{
							attrs: {
								'label-col': { span: 6 },
								wrapperCol: { span: 14 },
								model: this.pkgSearchForm,
								rules: rules
							}
						}}
					>
						<a-form-model-item prop="startDate" label="时间">
							<a-range-picker allowClear v-model={this.pkgSearchForm.startDate} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
						</a-form-model-item>
					</a-form-model>
				</a-modal>
			</div>
		)
	}
	public async getInit(params: API.wms.packageMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.packageMaster.list.request(params)
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
}
