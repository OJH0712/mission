import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, forEach, isNil } from 'ramda'
import showInformation from './components/showInformation'
import editInformation from './components/editInformation'

/**
 * 库位查询
 * Name: 区君豪
 * startDate:2021-2-19 13:40:23
 * updateDate：2021-2-23 15:40:23
 * Email:mike@rantion.com
 */
@Component({
	name: 'warehouseposition',
	components: { showInformation, editInformation }
})
export default class User extends TablePage {
	public tableData: Array<defs.wms.WarehousePositionRequestDto> = []
	public searchForm: API.wms.warehousePosition.list.Params = {}
	public multipleSelection: Array<defs.wms.WarehousePositionResponseDto> = []
	public screenAreaList: defs.wms.InventoryScreenPositionResponseDto[] = [] //库区
	public screenShelvesList: defs.wms.InventoryScreenPositionResponseDto[] = [] //货架排
	public screenGroupList: defs.wms.InventoryScreenPositionResponseDto[] = [] //货架组
	public warehouseCode: string //仓库编号
	public areaCode: string //库区编号
	public shelvesCode: string //货架排

	@Ref('showInformation') readonly showInformationRef!: HTMLFormElement
	@Ref('editInformation') readonly editInformationRef!: HTMLFormElement
	async mounted() {
		this.search()
	}
	add() {
		console.log('add')
	}
	//仓库变化  查询库区
	async handleHouseChange(val: any) {
		this.warehouseCode = val //储存仓库编号，之后请求货架排会用到 仓库编号 库区号 货架排号等
		const { data, success } = await API.wms.inventoryMaster.screenAreaList.request({ warehouseCode: val })
		if (success && !isNil(data)) {
			this.screenAreaList = data
			//	console.log(this.screenAreaList)
		}
	}
	// 库区选中 查询货架排
	async handleAreaChange(val: any) {
		this.areaCode = val //储存库区编号
		const param = {
			warehouseCode: this.warehouseCode,
			areaCode: this.areaCode
		}
		const { data, success } = await API.wms.inventoryMaster.screenShelvesList.request([param])
		if (success && !isNil(data)) {
			//	console.log('货架排', data)
			this.screenShelvesList = data
			//	console.log('this.screenShelvesList', this.screenShelvesList)
		}
	}
	// 货架排选中 查询货架组
	async handleShelvesChange(val: any) {
		this.shelvesCode = val //存储货架排
		const param = {
			warehouseCode: this.warehouseCode,
			areaCode: this.areaCode,
			shelvesCode: this.shelvesCode
		}
		const { data, success } = await API.wms.inventoryMaster.screenGroupList.request([param])
		if (success && !isNil(data)) {
			//	console.log(data, '货架组')
			this.screenGroupList = data
		}
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
						<a-form-model-item prop="positionCode" label="库位">
							<a-input v-model={this.searchForm.positionCode} placeholder="请输入库位" />
						</a-form-model-item>
						{/* sku未写 */}
						{this.expand ? (
							<span>
								{/* sku数未写 */}
								<a-form-model-item prop="warehouseCode" label="所属仓库">
									<form-warehouse-code allowClear v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" onChange={this.handleHouseChange} />
								</a-form-model-item>
								<a-form-model-Item prop="areaCode" label="所属库区">
									<a-select allowClear v-model={this.searchForm.areaCode} onChange={this.handleAreaChange}>
										{this.screenAreaList.map((item: any) => (
											<a-select-option value={item.areaCode} key={item.areaCode}>
												{item.areaCode}
											</a-select-option>
										))}
									</a-select>
								</a-form-model-Item>
								{/* 所属货架排未填 */}
								<a-form-model-Item prop="shelvesCode" label="所属货架排">
									<a-select allowClear v-model={this.searchForm.shelvesCode} onChange={this.handleShelvesChange}>
										{this.screenShelvesList.map((item: any) => (
											<a-select-option value={item.shelvesCode} key={item.shelvesCode}>
												{item.shelvesCode}
											</a-select-option>
										))}
									</a-select>
								</a-form-model-Item>
								<a-form-model-Item prop="groupCode" label="所属货架组">
									<a-select allowClear v-model={this.searchForm.groupCode}>
										{this.screenGroupList.map((item: any) => (
											<a-select-option value={item.groupCode} key={item.groupCode}>
												{item.groupCode}
											</a-select-option>
										))}
									</a-select>
								</a-form-model-Item>
								<a-form-model-Item prop="layer" label="层号">
									<a-input v-model={this.searchForm.layer} placeholder="请输入层号" />
								</a-form-model-Item>
								<a-form-model-Item prop="column" label="列号">
									<a-input v-model={this.searchForm.column} placeholder="请输入列号" />
								</a-form-model-Item>
								<a-form-model-Item prop="order" label="拣货顺序">
									<a-input v-model={this.searchForm.order} placeholder="请输入拣货顺序" />
								</a-form-model-Item>
								<a-form-model-Item prop="volume" label="体积(mm3)">
									<a-input v-model={this.searchForm.volume} placeholder="请输入体积(mm3)" />
								</a-form-model-Item>
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
					<a-button type="primary" disabled={!this.hasSelected()} on-click={this.printAll}>
						批量打印
					</a-button>
				</div>
				<a-table dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false} scroll={{ x: 1500 }} row-selection={this.rowSelection}>
					<a-table-column title="库位编号" dataIndex="positionCode" key="positionCode" align="center" />
					<a-table-column title="sku个数" dataIndex="skuNum" key="skuNum" align="center" />
					<a-table-column title="库存数量" dataIndex="qty" key="qty" align="center" />
					<a-table-column title="所属仓库" dataIndex="warehouseCode" key="warehouseCode" align="center" />
					<a-table-column title="所属库区" dataIndex="areaCode" key="areaCode" align="center" />
					<a-table-column title="所属货架" dataIndex="shelvesCode" key="shelvesCode" align="center" />
					<a-table-column title="所属货架组" dataIndex="groupCode" key="groupCode" align="center" />
					<a-table-column title="行" dataIndex="row" key="row" align="center" />
					<a-table-column title="列" dataIndex="column" key="column" align="center" />
					<a-table-column title="拣货顺序" dataIndex="order" key="order" align="center" />
					<a-table-column title="体积(mm3)" dataIndex="volume" key="volume" align="center" />
					<a-table-column title="长度(mm)" dataIndex="length" key="length" align="center" />
					<a-table-column title="宽度(mm)" dataIndex="width" key="width" align="center" />
					<a-table-column title="高度(mm)" dataIndex="height" key="height" align="center" />
					<a-table-column title="操作" width={300} align="center">
						{(record: defs.wms.WarehousePositionResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.show(record)}>查看</a>
								<a on-click={() => this.edit(record)}>修改</a>
								<a on-click={() => this.codePrint(record.positionCode)}>打印库位编码</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<showInformation ref="showInformation"></showInformation>
				<editInformation ref="editInformation"></editInformation>
			</div>
		)
	}

	public async getInit(params: API.wms.warehousePosition.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.warehousePosition.list.request(params)

		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}
	// 表单多选传值
	private handleSelectionChange(val: defs.wms.WarehousePositionResponseDto[]) {
		this.multipleSelection = val
	}
	//批量打印
	private printAll() {
		forEach((item) => {
			this.codePrint(item.positionCode)
		}, this.multipleSelection)
	}
	// 表单选择项
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: defs.wms.WarehousePositionResponseDto[]) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
			this.handleSelectionChange(selectedRows)
		}
	}
	public hasSelected() {
		return this.rowSelection.selectedRowKeys.length > 0
	}
	public start() {
		console.log('start')
	}
	// 操作（查看，打印，打印库位编码）start
	public show(record: object) {
		const list = clone(record)
		this.showInformationRef.init(list)
	}
	public edit(record: object) {
		const list = clone(record)
		this.editInformationRef.init(list)
	}
	public codePrint(codePosition: string) {
		console.log(codePosition)
	}
	//操作（查看，打印，打印库位编码）end
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
