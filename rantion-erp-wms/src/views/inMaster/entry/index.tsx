import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil, map } from 'ramda'
import { options } from '@/dictionaries/config'
import EntryDetail from './component/entryDetail'
import OnekeyEntry from './component/onekeyEntry'
import { timestampToTime } from '../../../utils/date'
import { entrySourceTypeFilter, entryStatusFilter } from '@/dictionaries/filter'
/*
 * @Description: 入库单
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-06 15:05:39
 */

@Component({
	name: 'Entry',
	components: { EntryDetail, OnekeyEntry }
})
export default class Entry extends TablePage {
	@Ref('entryDetail') readonly entryDetailRef!: HTMLFormElement
	@Ref('onekeyEntry') readonly onekeyEntryRef!: HTMLFormElement

	public tableData: Array<defs.wms.InMasterResponseDto> = []
	public searchForm: API.wms.inMaster.list.Params = {}

	public total = this.tableData.length

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
	async mounted() {
		this.search()
	}
	showDetails(record: object) {
		this.entryDetailRef.init(record)
		console.log('详情')
	}
	entry() {
		this.onekeyEntryRef.init()
	}
	changetime(val: any) {
		console.log('时间', val)
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<div class="order-status">
						<a-row type="flex" justify="space-around" align="middle">
							<a-col span={2} push={1}>
								<span class="title">订单状态</span>
							</a-col>
							<a-col span={22}>
								<a-radio-group v-model={this.searchForm.status} on-change={this.search} button-style="solid">
									<a-radio-button value="">全部</a-radio-button>
									{map(
										(item: any) => (
											<a-radio-button value={item.value}>{item.label}</a-radio-button>
										),
										options.entryStatus
									)}
									{/* <a-radio-button value="canMerge">{this.mergeName}</a-radio-button>
							<a-radio-button value="split">{this.splitName}</a-radio-button> */}
								</a-radio-group>
							</a-col>
						</a-row>
					</div>
					<div id="components-form-demo-advanced-search" style="padding-top: 20px;">
						<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
							<a-row>
								<a-col span={6}>
									<a-form-item prop="warehourseName" label="仓库">
										<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="warehourseName" label="入库单号">
										<a-input allowClear v-model={this.searchForm.iono} />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="来源单号">
												<a-input allowClear v-model={this.searchForm.sourceNo} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="来源类型">
												<a-input allowClear v-model={this.searchForm.sourceType} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="运单号">
												<a-input allowClear v-model={this.searchForm.waybillNo} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="创建时间">
												<a-range-picker allowClear v-model={this.searchForm.createTime} valueFormat="YYYY-MM-DD" placeholder={['开始时间', '结束时间']} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="计划入库数量">
												<a-input allowClear v-model={this.searchForm.planQty} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="箱数">
												<a-input allowClear v-model={this.searchForm.boxNum} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="预计到货时间">
												<a-range-picker onChange={this.changetime} allowClear v-model={this.searchForm.estimateTime} value-format="yyyy-MM-DD HH:mm:ss" placeholder={['开始时间', '结束时间']} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="供应商ID">
												<a-input allowClear v-model={this.searchForm.supplierName} />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="采购员">
												<a-input allowClear v-model={this.searchForm.purchaser} />
											</a-form-item>
										</a-col>
									</span>
								) : null}
								<a-col span={6}>
									<a-form-item label="">
										<a-button type="primary" on-click={this.search}>
											查询
										</a-button>
										<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
											清除
										</a-button>
										<a class="expand" on-click={this.toggle.bind(this)}>
											{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
										</a>
									</a-form-item>
								</a-col>
							</a-row>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					{/* <a-button type="primary" icon="printer">
						打印产品标签
					</a-button>
					<a-button type="primary" icon="printer">
						打印箱子条码
					</a-button>
					<a-button type="primary" icon="upload">
						上传POD文件
					</a-button>
					<a-button type="danger" onClick={this.entry}>
						一键入库
					</a-button> */}
					<a-button type="primary" icon="export">
						导出
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} scroll={{ x: 2200 }} dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false}>
							<a-table-column title="入库单号">{(record: any) => <a onClick={() => this.showDetails(record)}>{record.iono}</a>}</a-table-column>
							<a-table-column title="仓库" dataIndex="warehouseName" />
							<a-table-column title="来源类型" dataIndex="sourceType" customRender={(sourceType: number) => entrySourceTypeFilter(sourceType)} />
							<a-table-column title="来源单号" dataIndex="sourceNo" />
							<a-table-column title="运单号" dataIndex="waybillNo" />
							<a-table-column title="状态" dataIndex="status" customRender={(status: number) => entryStatusFilter(status)} />
							<a-table-column title="计划入库数量" dataIndex="planQty" />
							<a-table-column title="预计到货时间" dataIndex="estimateTime" customRender={(time: string) => timestampToTime(time)} />
							<a-table-column title="上架数量" dataIndex="shelvesQty" />
							<a-table-column title="箱数" dataIndex="boxNum" />
							<a-table-column title="交易主体" dataIndex="tradeCompanyName" />
							<a-table-column title="采购员" dataIndex="purchaser" />
							<a-table-column title="供应商名称" dataIndex="supplierName" />
							<a-table-column title="创建时间" dataIndex="createTime" customRender={(time: string) => timestampToTime(time)} />
							<a-table-column title="POD附件" dataIndex="" />
							<a-table-column title="操作" align="center" width={270} fixed="right">
								{(record: defs.wms.InMasterResponseDto) => (
									<a-space size="middle">
										<a-dropdown trigger={['click']}>
											<a type="link" class="ant-dropdown-link" onclick={(e: { preventDefault: () => any }) => e.preventDefault()}>
												更多操作 <a-icon type="down" />
											</a>
											<a-menu slot="overlay">
												{record.status == 10 && (
													<a-menu-item>
														<a-button type="link">一键入库</a-button>
													</a-menu-item>
												)}

												<a-menu-item>
													<a-button type="link">打印产品标签</a-button>
												</a-menu-item>
												<a-menu-item>
													<a-button type="link">打印箱子条码</a-button>
												</a-menu-item>
												<a-menu-item>
													<a-button type="link">上传POD文件</a-button>
												</a-menu-item>
											</a-menu>
										</a-dropdown>
									</a-space>
								)}
							</a-table-column>
						</a-table>
					</a-spin>
				</div>
				{this.paginationJsx()}
				<entryDetail ref="entryDetail" />
				<onekeyEntry ref="onekeyEntry" />
			</div>
		)
	}

	public async getInit(params: any) {
		this.loading = true
		const { data, success } = await API.wms.inMaster.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
		console.log('this.tableData', this.tableData)
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		if (!isEmpty(this.searchForm.estimateTime)) {
			params.estimateTime = this.searchForm.estimateTime?.[0]
			params.endEstimateDate = this.searchForm.estimateTime?.[1]
			console.log(params, 'params')
		}
		if (!isEmpty(this.searchForm.createTime)) {
			params.createTime = this.searchForm.createTime?.[0]
			params.endCreateDate = this.searchForm.createTime?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}
}
