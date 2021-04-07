/*
 * @Description:调拨批次
 * @Author: owen
 * @Date: 2021-02-23 09:43:52
 * @LastEditTime: 2021-03-08 22:16:08
 */
// todo 2021-00-08 改
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil, map } from 'ramda'
import { batchStatusFilter, requisitionTypeFilter, shippingTypeFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'
import BatchDetail from './batchDetail'
import { batchDetailExport } from '@/utils/downloadApi'

enum CancelType {
	Delete,
	Cancel
}
@Component({
	name: 'Batch',
	components: { BatchDetail }
})
export default class Batch extends TablePage {
	public tableData: Array<defs.wms.AllocationBatchResponseDto> = []
	public searchForm: API.wms.allocationBatch.list.Params = {}

	public abnoList: Array<string> = []
	@Ref('BatchDetail') readonly BatchDetailRef!: HTMLFormElement
	public selectedRows: Array<defs.wms.AllocationBatchResponseDto> = []
	expVisible = false
	public expSearchForm: API.wms.allocationBatch.batchDetailReport.Params = {
		/** endDate */
		endDate: '',
		/** startDate */
		startDate: ''
	}
	get rowSelection() {
		return {
			// selectedRowKeys: [],
			selections: true,
			// type: 'checkbox',
			hideDefaultSelections: true,
			selectedRows: this.selectedRows,
			onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.AllocationBatchResponseDto>) => {
				this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
				this.$set(this.rowSelection, 'selectedRows', selectedRows)
				this.selectedRows = selectedRows
				this.abnoList = selectedRows.map((item) => {
					return item.abno
				})
				console.log(this.abnoList)
			}
		}
	}

	public hasSelected() {
		return this.rowSelection.selectedRows.length > 0
	}
	mounted() {
		this.search()
	}
	close() {
		this.expVisible = false
	}
	show(record: object) {
		this.BatchDetailRef.init(record)
	}

	print(record: defs.wms.AllocationBatchResponseDto) {
		console.log(record)
	}

	//请求删除接口
	async deleByabno(abno: string) {
		await API.wms.allocationBatch.deleteById.request(abno)
	}

	// 单个删除
	async delet(abno: string) {
		this.$confirm({
			title: '提示',
			content: '此操作将永久删除该记录, 是否继续?',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk: () => {
				this.deleByabno(abno)
			},
			onCancel() {
				console.log('Cancel')
			}
		})
	}
	// 批量删除、取消
	async cancel(status: CancelType) {
		if (equals(CancelType.Cancel, status)) {
			this.$confirm({
				title: '提示',
				content: '此操作将取消这些记录, 是否继续?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: async () => {
					await API.wms.allocationBatch.cancel.request({ abnos: this.abnoList })

					this.search()
				},
				onCancel() {
					console.log('Cancel')
				}
			})
		} else {
			this.$confirm({
				title: '提示',
				content: '此操作将永久删除这些记录, 是否继续?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: () => {
					Promise.all(map(this.deleByabno, this.abnoList)).finally(() => {
						console.log(1)
					})
				},
				onCancel() {
					console.log('Cancel')
				}
			})
		}
		// console.log(status)
		// await API.wms.allocationBatch.cancel.request({ abnos: this.abnoList })
	}

	showExprotDtail() {
		this.expVisible = true
	}

	//调拨批次汇总明细导出
	async expBatchDetail() {
		this.$message.loading({ content: '下载中···', duration: 1 })
		if (isEmpty(this.expSearchForm.startDate)) return
		const params = clone(this.expSearchForm)
		params.startDate = this.expSearchForm.startDate[0]
		params.endDate = this.expSearchForm.startDate[1]
		await batchDetailExport(params)
		this.expVisible = false
	}
	addObno() {
		this.$confirm({
			title: '提示',
			content: '即将创建一个新的调拨批次？',
			async onOk() {
				await API.wms.allocationBatch.add.request()
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
						<a-form-model-item prop="abno" label="调拨批次号">
							<a-input allowClear v-model={this.searchForm.abno} />
						</a-form-model-item>
						<a-form-model-item label="调拨类型" prop="requisitionType">
							<form-config v-model={this.searchForm.type} prop="requisitionType" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item label="运输方式" prop="shippingType">
									<form-config v-model={this.searchForm.shippingType} prop="shippingType" />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="来源仓">
									<form-warehouse-code v-model={this.searchForm.sourceWarehouseCode} />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="目标仓">
									<form-warehouse-code v-model={this.searchForm.targetWarehouseCode} />
								</a-form-model-item>

								<a-form-modelItem prop="beginDeliveryTime" label="出库时间">
									<a-range-picker v-model={this.searchForm.beginDeliveryTime} prop="beginDeliveryTime" />
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
				<div class="table-top">
					<a-button type="primary" icon="plus" on-click={this.addObno}>
						创建调拨批次
					</a-button>
					<a-button type="primary" icon="printer" disabled={!this.hasSelected()} on-click={() => this.cancel(CancelType.Cancel)}>
						取消调拨批次
					</a-button>
					<a-button type="primary" icon="printer" disabled={!this.hasSelected()} on-click={() => this.cancel(CancelType.Delete)}>
						删除调拨批次
					</a-button>
					<a-button type="primary" icon="share-alt" on-click={this.showExprotDtail}>
						导出汇总明细
					</a-button>
				</div>
				<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="调拨批次号" dataIndex="abno" key="abno" />
					<a-table-column title="货柜编码" dataIndex="containerNo" key="containerNo" />
					<a-table-column title="调拨类型" dataIndex="type" key="type" customRender={(val: string | number) => requisitionTypeFilter(val)} />
					<a-table-column title="运输方式" dataIndex="shippingType" key="shippingType" customRender={(val: string | number) => shippingTypeFilter(val)} />
					<a-table-column title="状态" dataIndex="status" key="status" customRender={(val: string | number) => batchStatusFilter(val)} />
					<a-table-column title="来源仓" dataIndex="sourceWarehouseCode" key="sourceWarehouseCode" />
					<a-table-column title="centerId" dataIndex="centerId" key="centerId" />
					<a-table-column title="调拨出库时间" dataIndex="deliveryTime" key="deliveryTime" customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" />
					<a-table-column title="操作" align="center" width={300}>
						{(record: defs.wms.AllocationBatchResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.show(record)}>查看</a>
								<a on-click={() => this.print(record)}>打印</a>
								{record.status === 10 ? (
									<span>
										<a on-click={() => this.delet(record.abno)}>删除</a>
									</span>
								) : null}
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<a-modal visible={this.expVisible} title="导出调拨批次明细" ok-text="导出明细" on-ok={this.expBatchDetail} on-cancel={this.close}>
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.expSearchForm
							}
						}}
					>
						<a-form-modelItem prop="startDate" label="日期范围">
							<a-range-picker allowClear v-model={this.expSearchForm.startDate} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
						</a-form-modelItem>
					</a-form-model>
				</a-modal>
				<batchDetail ref="BatchDetail" />
			</div>
		)
	}
	public async getInit(params: API.wms.allocationBatch.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.allocationBatch.list.request(params)
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
