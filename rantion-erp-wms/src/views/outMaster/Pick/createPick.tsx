import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, isEmpty, isNil, uniq } from 'ramda'
interface SearchForm {
	upperLimit?: number
	beginQty?: number
	endQty?: number
	operationTime?: string
	beginTime?: string
	endTime?: string
}
// todo 请求NS 500
/*
 * @Description: 创建分拣单
 * @Author: owen
 * @Date: 2021-03-05 10:24:10
 * @LastEditTime: 2021-03-05 11:42:15
 */
@Component({
	name: 'CreatePick'
})
export default class CreatePick extends Vue {
	checkAllLogistics = F() // 渠道
	isLogistics = F() // 渠道
	checkAllPlatform = F() // 店铺是否全选
	isPlatform = F() // 店铺是否全选
	public visible = false
	public searchForm: SearchForm = {} //输入的表单
	public warehouseList: any = [] //仓库列表
	public shopList: Array<any> = [] //店铺列表
	public shopListSelect: any = [] //选中的店铺
	public LogisticsList: Array<any> = [] //渠道列表
	operationTime: any = [] // 时间
	treeData = [] //渠道 树形
	tableData: any = [] // 包裹表单数据
	tableDataSelect: any = [] //选中的包裹
	checkedKeys: any = [] //选中的渠道
	selectedKeys = []
	warehouseCode = ''

	pickDetailFilterRequestDto: any = {}
	pickOutRequestDtoList: any

	// 初始化
	async init(shopList: Array<any>, LogisticsList: Array<any>, warehouseList: any) {
		this.visible = true
		//	console.log(shopList, LogisticsList, warehouseList)
		this.shopList = shopList
		this.LogisticsList = LogisticsList
		this.warehouseList = warehouseList
	}

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
	//渠道全选
	handleLogistics(val: any) {
		//	console.log(val.target.checked)
		//checkAllLogistics = F() // 渠道
		//	isLogistics = F() // 渠道
		//	console.log(this.LogisticsList)

		this.checkAllLogistics = val.target.checked
		this.isLogistics = false
		if (val.target.checked) {
			this.checkedKeys = this.LogisticsList.map((item: any) => {
				return item.name
			})
		} else {
			this.checkedKeys = []
		}
		// val.target.checked ? (this.checkedKeys = this.LogisticsList.map((item: any) => item.name)) : []
		//	console.log(this.LogisticsList.map((item: any) => item.id))
	}

	//店铺全选
	handlePlatform(val: any) {
		//		console.log(this.shopList.map((item) => item.name))
		this.isPlatform = false
		this.checkAllPlatform = val.target.checked
		if (val.target.checked) {
			this.shopListSelect = this.shopList.map((item) => item.name)
		} else {
			this.shopListSelect = []
		}
	}

	closeModel() {
		this.visible = false
		this.searchForm = {}
		this.operationTime = []
	}

	//渠道选中时
	onCheck(checkedKeys: string[]) {
		//		console.log('onCheck', checkedKeys)
		this.checkedKeys = checkedKeys
		const list: string[] = []
		this.LogisticsList.map((item) => {
			list.push(item.name)
			if (!isEmpty(item.children)) {
				item.children.map((j: any) => {
					list.push(j.name)
				})
			}
		})
		//	console.log('list=====>', uniq(list))
		this.checkAllLogistics = this.checkedKeys.length == uniq(list).length
		this.isLogistics = this.checkedKeys.length > 0 && this.checkedKeys.length < uniq(list).length ? true : false
	}
	//店铺选中时
	hdCheckedpt(value: string | any[]) {
		this.shopListSelect = value
		//	console.log(' this.shopListSelect', this.shopListSelect)
		this.checkAllPlatform = this.shopListSelect.length == this.LogisticsList.length
		// const checkedCount = value.length
		this.isPlatform = this.shopListSelect.length && this.shopListSelect.length < this.LogisticsList.length
		// const checkedCount = value.length
		// this.checkAllPlatform = checkedCount === this.shopList.data.length
		// this.isPlatform = checkedCount > 0 && checkedCount < this.shopList.data.length
	}

	//仓库
	warehouseChange(value: any) {
		//	console.log(value.target.value.warehouseCode)
		this.warehouseCode = value.target.value.warehouseCode
	}

	//时间
	getVlue(val: any) {
		if (val) return
		delete this.searchForm.beginTime
		delete this.searchForm.endTime
		this.operationTime = []
	}
	//查找 符合条件的出库单
	async search() {
		if (this.operationTime) {
			this.searchForm.beginTime = this.operationTime[0]
			this.searchForm.endTime = this.operationTime[1]
		}

		//	console.log(this.searchForm)

		this.pickDetailFilterRequestDto = {
			/** 出库单开始创建时间 */
			beginCreateTime: this.searchForm.beginTime,

			/** begin总数量 */
			beginQty: this.searchForm.beginQty,

			/** 出库单结束创建时间 */
			upperLimit: this.searchForm.upperLimit,
			endCreateTime: this.searchForm.endTime,
			logisticsList: this.checkedKeys,
			warehouseCode: this.warehouseCode,
			shopList: this.shopList
		}
		//查询符合条件的出库单
		const { data, success } = await API.wms.pickMaster.filterPickDetail.request(this.pickDetailFilterRequestDto)
		if (success && !isNil(data)) {
			//	console.log(data, 'data')
			this.tableData = data
			if (!isNil(this.tableData) && !isEmpty(this.tableData)) {
				this.$nextTick(() => {
					// this.$refs.multipleTable.toggleAllSelection()
					this.tableDataSelect = data
				})
			} else {
				this.$message.info('查询暂无数据')
			}
		}
	}
	async submit() {
		this.pickOutRequestDtoList = this.tableDataSelect.map((res: { dono: any }, index: number) => {
			return {
				distribute: index + 1,
				dono: res.dono
			}
		})
		const param = {
			pickDetailFilterRequestDto: this.pickDetailFilterRequestDto,
			pickOutRequestDtoList: this.pickOutRequestDtoList
		}
		const { data, success } = await API.wms.pickMaster.add.request(param)
		if (success && !isNil(data)) {
			//		console.log(data, '创建拣货单')
		}
	}

	public render() {
		return (
			<div>
				<a-modal title="创建拣货单" visible={this.visible} on-cancel={this.closeModel} width={1500} footer={false}>
					<div class="top-search-from">
						<a-form-model
							ref="form"
							class="ant-advanced-search-form"
							{...{
								attrs: {
									layout: 'inline',
									model: this.searchForm
								}
							}}
						>
							<a-form-item label="包裹上限">
								<a-input-number v-model={this.searchForm.upperLimit} min={1} max={20} align="center" />
							</a-form-item>
							<a-form-item label="总数量">
								<a-input-group>
									<a-input-number v-model={this.searchForm.beginQty} /> <span> - </span>
									<a-input-number v-model={this.searchForm.endQty} />
								</a-input-group>
							</a-form-item>
							<a-form-item label="订单日期">
								<a-range-picker v-model={this.operationTime} onChange={(val: any) => this.getVlue(val)} />
							</a-form-item>
							<span style="display:inline-block;margin-top:3px">
								<a-button type="primary" icon="search" onClick={this.search}>
									查找
								</a-button>
							</span>
						</a-form-model>
					</div>
					<div class="app-flex-sb">
						{/* 物流渠道 */}
						<div class="app-flex-2">
							<div class="table-title">物流渠道</div>
							<div>
								<a-checkbox v-model={this.checkAllLogistics} indeterminate={this.isLogistics} onChange={this.handleLogistics}>
									全选
								</a-checkbox>
								<a-tree
									ref="tree"
									treeData={this.LogisticsList}
									replaceFields={{
										children: 'children',
										title: 'name',
										key: 'name',
										value: 'id'
									}}
									checkable
									//	selected-keys={this.selectedKeys}
									checkedKeys={this.checkedKeys}
									onCheck={this.onCheck}
								></a-tree>
							</div>
						</div>
						{/* 店铺列表 */}
						<div class="app-flex-2">
							<div class="table-title">店铺</div>
							<div style="height:500px;overflow:auto;width:200px">
								<a-checkbox v-model={this.checkAllPlatform} indeterminate={this.isPlatform} onChange={this.handlePlatform}>
									全选
								</a-checkbox>
								<a-checkbox-group onChange={(val: any) => this.hdCheckedpt(val)} v-model={this.shopListSelect}>
									{this.shopList.map((item: any) => {
										return (
											<div key={item.id}>
												<a-checkbox value={item.name}>{item.name}</a-checkbox>
											</div>
										)
									})}
								</a-checkbox-group>
								{/* <a-radio-group change="onChange" scroll={{ y: true }}>
									{this.shopList.map((item: any) => {
										return (
											<div key={item.id}>
												<a-radio value={item.id}>{item.name}</a-radio>
											</div>
										)
									})}
								</a-radio-group> */}
							</div>
						</div>
						{/* 仓库 */}
						<div class="app-flex-2">
							<div class="table-title">仓库</div>
							{!isNil(this.warehouseList) && (
								<a-radio-group onChange={(val: any) => this.warehouseChange(val)}>
									{this.warehouseList.map((item: any) => {
										return (
											<div key={item.id}>
												<a-radio value={item}>{item.warehouseName}</a-radio>
											</div>
										)
									})}
								</a-radio-group>
							)}
						</div>
						{/* 包裹 */}
						<div class="app-flex-2" style="flex-grow:3">
							<div class="table-title">包裹</div>
							<div>
								<a-table rowSelection={this.rowSelection} ref="multipleTable" dataSource={this.tableData} rowKey="id" pagination={false}>
									<a-table-column title="出库单号" dataIndex="dono" key="dono" />
									<a-table-column title="运单号" dataIndex="waybillNo" key="waybillNo" />
									<a-table-column title="品牌事业部" dataIndex="platformName" key="platformName" />
									<a-table-column title="物流服务" dataIndex="logistics" key="logistics" />
									<a-table-column title="配货位" type="index" />
								</a-table>
							</div>
						</div>
					</div>
					<div class="table-footer">
						<a-button type="primary" on-click={this.submit}>
							创建拣货单
						</a-button>

						<a-button type="primary" on-click={this.closeModel}>
							关闭
						</a-button>
					</div>
				</a-modal>
			</div>
		)
	}
}
