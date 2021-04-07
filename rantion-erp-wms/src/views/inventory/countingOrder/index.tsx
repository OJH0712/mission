/*
 * @盘点单
 * @Author: owen
 * @Date: 2021-02-24 09:36:31
 * @LastEditTime: 2021-03-09 10:36:33
 */

import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import CreateInventory from './components/createInventory'
import InventoryDetail from './components/inventoryDetail'
import { clone, equals, forEach, isNil } from 'ramda'
import { printIcno } from '@/plugin/print'
import { inventoryStatusFilter, checkTypeFilter, inventoryTypeFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'

interface IntPageData extends defs.wms.InventoryMasterResponseDto {
	fdas?: string
}

@Component({
	name: 'CountingOrder',
	components: {
		CreateInventory,
		InventoryDetail
	}
})
export default class CountingOrder extends TablePage {
	public tableData: Array<IntPageData> = []
	public searchForm: API.wms.inventoryMaster.list.Params = {}
	@Ref('inventoryDetail') readonly inventoryDetailRef!: HTMLFormElement
	@Ref('createInventory') readonly createInventoryRef!: HTMLFormElement
	public hasSelected: boolean
	public isShow = true
	public multipleSelection: any = []
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		// type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: Array<defs.wms.InventoryDetailRecordResponseDto>) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)

			this.selectedChange()
		}
	}
	public selectedChange() {
		this.hasSelected = this.rowSelection.selectedRowKeys.length > 0
	}
	mounted() {
		this.search()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	public add(record: IntPageData) {
		this.createInventoryRef.init(record)
	}
	// 查看盘点单
	public show(record: object) {
		this.inventoryDetailRef.init(record, this.isShow, this.hasSelected)
	}
	// private printIcno(icno: string | null) {
	// 		const printList: Array<string> = isNil(icno) ? map((item) => item.icno, this.multipleSelection) : [icno]
	// 		forEach((item) => {
	// 			printIcno(item)
	// 		}, printList)
	// 	}

	// 打印
	print(record: IntPageData | null) {
		const printList: Array<string> = isNil(record) ? this.rowSelection.selectedRows.map((item: any) => item.icno) : [record.icno]
		//	console.log(printList, 2211)

		forEach((item) => {
			printIcno(item)
		}, printList)
		// console.log('record', record.icno)
		// const printList: Array<string> = isNil(record.icno) ? map((item) => item.icno, this.multipleSelection) : [record.icno]
		// forEach((item) => {
		// 	printIcno(item)
		// }, printList)
	}
	// 修改
	inventoryEdit(record: IntPageData) {
		this.createInventoryRef.init(record)
	}
	// 删除

	async inventoryDelet(record: any) {
		this.$confirm({
			title: '提示',
			content: '此操作将永久删除该记录, 是否继续?',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			async onOk() {
				console.log(record.icno)
				await API.wms.inventoryMaster.deleteById.request(record.icno)
			},
			onCancel() {
				console.log('Cancel')
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
						<a-form-model-item prop="warehouseName" label="适用仓库">
							<form-warehouse-code allowClear v-model={this.searchForm.warehouseName} placeholder="请选择适用仓库" />
						</a-form-model-item>
						<a-form-modelItem prop="fono" label="盘点单号">
							<a-input v-model={this.searchForm.icno} />
						</a-form-modelItem>
						{this.expand ? (
							<span>
								<a-form-modelItem label="状态" prop="inventoryStatus">
									<form-config v-model={this.searchForm.inventoryStatus} prop="inventoryStatus" />
								</a-form-modelItem>
								<a-form-modelItem label="盘点内容" prop="checkType">
									<form-config v-model={this.searchForm.checkType} prop="checkType" />
								</a-form-modelItem>
								<a-form-modelItem label="盘点类型" prop="inventoryType">
									<form-config v-model={this.searchForm.inventoryType} prop="inventoryType" />
								</a-form-modelItem>
								<a-form-model-item prop="createBy" label="创建人">
									<form-sysUser v-model={this.searchForm.createBy} placeholder="请选择创建人" />
								</a-form-model-item>
								<a-form-model-item prop="createTime" label="创建时间">
									<a-date-picker v-model={this.searchForm.createTime} prop="createTime" />
								</a-form-model-item>
								<a-form-modelItem label="计划时间">
									{() => (
										<span>
											<a-date-picker v-model={this.searchForm.planBeginTime} prop="planBeginTime" />-
											<a-date-picker v-model={this.searchForm.planEndTime} prop="planEndTime" />
										</span>
									)}
								</a-form-modelItem>
								<a-form-modelItem label="实际时间">
									{() => (
										<span>
											<a-date-picker v-model={this.searchForm.actualBeginTime} prop="actualBeginTime" />-
											<a-date-picker v-model={this.searchForm.actualEndTime} prop="actualEndTime" />
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
				<div class="table-top">
					<a-button type="primary" icon="plus" on-click={this.add}>
						创建盘点单
					</a-button>
					<a-button type="primary" icon="printer" disabled={!this.hasSelected} on-click={() => this.print(null)}>
						打印盘点条形码
					</a-button>
				</div>
				<a-table rowSelection={this.rowSelection} dataSource={this.tableData} scroll={{ x: 1500 }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="盘点单号" align="center">
						{(record: IntPageData) => (
							<span on-click={() => this.show(record)}>
								<a>{record.icno}</a>
							</span>
						)}
					</a-table-column>
					<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" align="center" />
					<a-table-column title="状态" dataIndex="inventoryStatus" key="inventoryStatus" align="center" customRender={(inventoryStatus: string | number) => inventoryStatusFilter(inventoryStatus)} />
					<a-table-column title="盘点内容" dataIndex="checkType" key="checkType" align="center" customRender={(checkType: string | number) => checkTypeFilter(checkType)} />
					<a-table-column title="盘点类型" dataIndex="inventoryType" key="inventoryType" align="center" customRender={(inventoryType: string | number) => inventoryTypeFilter(inventoryType)} />
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" customRender={(time: any) => timestampToTime(time)} width={170} />
					<a-table-column title="计划开始时间" dataIndex="planBeginTime" key="planBeginTime" align="center" customRender={(time: any) => timestampToTime(time)} width={170} />
					<a-table-column title="实际开始时间" dataIndex="actualBeginTime" key="actualBeginTime" align="center" customRender={(time: any) => timestampToTime(time)} width={170} />
					<a-table-column title="操作" align="center" width={200}>
						{(record: IntPageData) => (
							<a-space size="middle">
								<a on-click={() => this.show(record)}>查看</a>
								<a on-click={() => this.print(record)}>打印</a>
								{equals(record.inventoryStatus, 10) && (
									<a-space size="middle">
										<a on-click={() => this.inventoryEdit(record)}>修改</a>
										<a on-click={() => this.inventoryDelet(record)}>删除</a>
									</a-space>
								)}
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<create-inventory ref="createInventory" on-search={this.search} />
				<inventoryDetail ref="inventoryDetail" />
			</div>
		)
	}
	public async getInit(params: API.wms.inventoryMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.inventoryMaster.list.request(params)
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
