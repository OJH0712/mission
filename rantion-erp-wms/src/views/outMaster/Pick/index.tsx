/*
 * @Description:拣货单
 * @Author: owen
 * @Date: 2021-02-23 09:58:34
 * @LastEditTime: 2021-03-15 17:21:04
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { timestampToTime } from '@/utils/date'
import { pickStatusFilter, printedStatusFilter } from '@/dictionaries/filter'
import PickDetail from './showPickDetail'
import CreatePick from './createPick'
import PrintPick from './printPick'
import SelectPrinter from '@/components/common/selectPrint'
import { getLogisticsList, getShopList } from '@/api/nsApi'
@Component({
	name: 'Pick',
	components: { PickDetail, CreatePick, PrintPick, SelectPrinter }
})
export default class Pick extends TablePage {
	public tableData: Array<defs.wms.PickMasterResponseDto> = []
	public searchForm: API.wms.pickMaster.list.Params = {}
	public shopList: Array<any> = []
	public LogisticsList: Array<any> = []
	public warehouseList: any = []
	@Ref('PickDetail') readonly PickDetailRef!: HTMLFormElement
	@Ref('CreatePick') readonly CreatePickRef!: HTMLFormElement
	@Ref('PrintPick') readonly PrintPickRef!: HTMLFormElement
	mounted() {
		this.search()
		this.getLogistics()
		this.getShopList()
		this.getwarehoueList()
	}
	async getwarehoueList() {
		const { data, success } = await API.wms.warehouse.list.request({ pageSize: 999, pageNumber: 1 })
		if (success && !isNil(data)) {
			this.warehouseList = data.list
		}
	}
	async getLogistics() {
		const { data } = await getLogisticsList({ pageSize: 999, page: 1 })
		this.LogisticsList = data.list
		//	console.log('getLogisticsList', this.LogisticsList)
	}
	//  店铺列表
	async getShopList() {
		const { data } = await getShopList({ pageSize: 999, page: 1 })
		this.shopList = data.list
		//	console.log('shoplists', this.shopList)
	}
	show(record: defs.wms.PickMasterResponseDto) {
		//console.log(record)
		this.PickDetailRef.init(record)
	}
	createPick() {
		this.CreatePickRef.init(this.shopList, this.LogisticsList, this.warehouseList)
	}
	// 打印拣货单号
	async printCode(pickno: string) {
		const { data } = await API.wms.pickMaster.getPickInfo.request(pickno)
		this.PrintPickRef.print(data)
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
						<a-form-model-item prop="warehouseName" label="仓库">
							<form-warehouse-code v-model={this.searchForm.warehouseName} />
						</a-form-model-item>
						<a-form-model-item prop="pickno" label="拣货单号">
							<a-input v-model={this.searchForm.pickno} />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="boxNum" label="包裹数量">
									<a-input v-model={this.searchForm.boxNum} />
								</a-form-model-item>
								<a-form-model-item prop="binNum" label="库位数量">
									<a-input v-model={this.searchForm.binNum} />
								</a-form-model-item>
								<a-form-model-item prop="productNum" label="产品数量">
									<a-input v-model={this.searchForm.productNum} />
								</a-form-model-item>
								<a-form-model-item prop="num" label="总数量">
									<a-input v-model={this.searchForm.num} />
								</a-form-model-item>
								<a-form-model-item label="拣货状态">
									<form-config v-model={this.searchForm.status} prop="pickStatus" />
								</a-form-model-item>
								<a-form-model-item label="打印状态">
									<form-config v-model={this.searchForm.printed} prop="printedStatus" />
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
					<a-button type="primary" icon="plus" on-click={this.createPick}>
						创建拣货单
						{/* 未完成 */}
					</a-button>
				</div>
				<div class="a-table-column">
					<a-table dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false}>
						<a-table-column title="拣货单号" dataIndex="pickno" key="pickno" align="center" />
						<a-table-column title="仓库" dataIndex="warehouseCode" key="warehouseCode" align="center" />
						<a-table-column title="包裹数量" dataIndex="boxNum" key="boxNum" align="center" />
						<a-table-column title="库位数量" dataIndex="binNum" key="binNum" align="center" />
						<a-table-column title="产品数量" dataIndex="productNum" key="productNum" align="center" />
						<a-table-column title="总数量" dataIndex="num" key="num" align="center" />
						<a-table-column title="拣货状态" dataIndex="status" key="status" customRender={(val: string | number) => pickStatusFilter(val)} align="center" />
						<a-table-column title="打印状态" dataIndex="printed" key="printed" customRender={(val: string | number) => printedStatusFilter(val)} align="center" />
						<a-table-column title="打印人" dataIndex="printBy" key="printBy" align="center" />
						<a-table-column title="打印时间" dataIndex="printTime" key="printTime" customRender={(time: any) => timestampToTime(time)} width={180} align="center" />
						<a-table-column title="操作" align="center" width={350}>
							{(record: defs.wms.PickMasterResponseDto) => (
								<a-space size="middle">
									<a on-click={() => this.show(record)}>查看</a>
									<a on-click={() => this.printCode(record.pickno)}>打印拣货单号</a>
									<a>打印运单</a>
									<a>下载运单</a>
								</a-space>
							)}
						</a-table-column>
					</a-table>
				</div>
				{this.paginationJsx()}
				<pickDetail ref="PickDetail" />
				<createPick ref="CreatePick" shopList={this.shopList} LogisticsList={this.LogisticsList} />
				<printPick ref="PrintPick" />
			</div>
		)
	}
	public async getInit(params: API.wms.pickMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.pickMaster.list.request(params)
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
