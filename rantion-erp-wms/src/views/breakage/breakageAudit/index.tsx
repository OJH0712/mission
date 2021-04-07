/*
 * @报损结果审核
 * @Author: owen
 * @Date: 2021-02-24 09:36:31
 * @LastEditTime: 2021-03-06 16:23:16
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { timestampToTime } from '@/utils/date'
import AuditDetail from './auditDetail'

@Component({
	name: 'BreakageAudit',
	components: { AuditDetail }
})
export default class BreakageAudit extends TablePage {
	public tableData: Array<defs.wms.StorageReportDamageResponseDto> = []
	public searchForm: API.wms.storageReportDamage.list.Params = {}

	@Ref('AuditDetail') readonly AuditDetailRef!: HTMLFormElement
	visible = false
	mounted() {
		this.search()
	}
	showModel() {
		this.visible = true
	}
	closeModel() {
		this.visible = false
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	private showAudit(record: object) {
		this.AuditDetailRef.init(record)
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
						<a-form-model-item prop="warehouseCode" label="适用仓库">
							<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
						</a-form-model-item>
						<a-form-modelItem prop="fono" label="报损单号">
							<a-input v-model={this.searchForm.fono} />
						</a-form-modelItem>
						{this.expand ? (
							<span>
								<a-form-modelItem prop="createBy" label="创建人">
									<a-input v-model={this.searchForm.createBy} />
								</a-form-modelItem>
								<a-form-modelItem prop="fono" label="创建时间">
									{() => (
										<span>
											<a-date-picker v-model={this.searchForm.beginCreateTime} placeholder="开始时间" />
											-
											<a-date-picker v-model={this.searchForm.endCreateTime} placeholder="结束时间" />
										</span>
									)}
								</a-form-modelItem>
								<a-form-modelItem prop="auditor" label="审核人">
									<a-input v-model={this.searchForm.auditor} />
								</a-form-modelItem>
								<a-form-modelItem prop="fono" label="审核时间">
									{() => (
										<span>
											<a-date-picker v-model={this.searchForm.beginAuditTime} placeholder="开始时间" />
											-
											<a-date-picker v-model={this.searchForm.endAuditTime} placeholder="结束时间" />
										</span>
									)}
								</a-form-modelItem>
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

				<a-table dataSource={this.tableData} scroll={{ x: 1500 }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="报损单号" dataIndex="fono" key="fono" align="center" width={140} />
					<a-table-column title="SKU" dataIndex="sku" key="sku" align="center" />
					<a-table-column title="数量" dataIndex="num" key="num" align="center" />
					<a-table-column title="库位信息" dataIndex="positionCode" key="positionCode" align="center" />
					<a-table-column title="状态" dataIndex="currentApprovalStep" key="currentApprovalStep" align="center" />
					<a-table-column title="备注">
						{(record: defs.wms.StorageReportDamageResponseDto) => (
							<span>
								<a on-click={this.showModel}>{record.remark}</a>
								<a-modal title="备注" visible={this.visible} on-ok={this.closeModel} on-cancel={this.closeModel} centered mask={false}>
									{record.remark}
								</a-modal>
							</span>
						)}
					</a-table-column>
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="审核人" dataIndex="updateBy" key="updateBy" align="center" />
					<a-table-column title="审核时间" dataIndex="updateTime" key="updateTime" align="center" customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="操作" key="action" align="center">
						{(record: defs.wms.StorageReportDamageResponseDto) => (
							<a-space size="middle">
								{record.status === 10 && (
									<span>
										<a on-click={() => this.showAudit(record)}>查看</a>
									</span>
								)}
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<auditDetail ref="AuditDetail" />
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
}
