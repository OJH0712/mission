/*
 * @Description: 创建/修改盘点单
 * @Author: owen
 * @Date: 2021-02-26 10:19:57
 * @LastEditTime: 2021-03-19 13:52:21
 */

import { Component, Vue } from 'vue-property-decorator'
import { isNil } from 'ramda'

@Component({
	name: 'CreateInventory'
})
export default class CreateInventory extends Vue {
	// public tableData: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	public searchForm: API.wms.inventoryMaster.list.Params = {}
	warehouseList: Array<defs.wms.WarehouseResponseDto> = []
	screenAreaList: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	screenShelvesList: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	screenGroupList: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	screenPositionList: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	createInventory: Array<defs.wms.InventoryScreenPositionResponseDto> = []
	warehouseCode: '' //仓库
	warehouseName: ''
	areaCode = [] //库区
	shelvesCode: '' //货架排
	groupCode: '' //货架组
	icno: ''
	title: ''
	historyData: any
	public tableHead = [
		{
			id: 1,
			name: '仓库'
		},
		{
			id: 2,
			name: '库区'
		},
		{
			id: 3,
			name: '货架排'
		},
		{
			id: 4,
			name: '货架组'
		},
		{
			id: 5,
			name: '库位信息'
		}
	]
	public calcVisible = false

	async init(record: any) {
		this.calcVisible = true
		//请求仓库列表
		this.icno = record.icno
		const { data, success } = await API.wms.warehouse.list.request({})
		if (success && !isNil(data)) {
			this.warehouseList = data.list || []
		}
		// 有icno是修改。 没有是创建
		if (!isNil(record.icno)) {
			console.log('修改的record', record)
			this.searchForm.checkType = record.checkType
			this.searchForm.inventoryType = record.inventoryType
			this.historyData = record
			// this.searchForm.planBeginTime = record.planBeginTime
			// this.searchForm.planEndTime = record.planEndTime
		}
	}
	public clear(): void {
		throw new Error('Method not implemented.')
	}
	create() {
		console.log(2)
	}
	cancel() {
		this.calcVisible = false
		this.searchForm = {}
	}

	async worehouseChang(e: any) {
		//	console.log(e.target.value)
		//请求库区
		this.warehouseCode = e.target.value.warehouseCode
		this.warehouseName = e.target.value.warehouseName
		const { data, success } = await API.wms.inventoryMaster.screenAreaList.request({ warehouseCode: e.target.value.warehouseCode })
		if (success && !isNil(data)) {
			//	console.log('screenGroupList==>', data)
			this.screenAreaList = data
		}
	}

	async screenAreaSelect(e: any) {
		//	console.log(e, 'areaCode')
		// this.areaCode =
		const x = e.map((item: any) => {
			return {
				areaCode: item,
				warehouseCode: this.warehouseCode
			}
		})
		//请求货架排
		this.areaCode = e
		//	console.log('this.areaCode', this.areaCode)

		const { data, success } = await API.wms.inventoryMaster.screenShelvesList.request(x)
		if (success && !isNil(data)) {
			//	console.log('货架排', data)
			this.screenShelvesList = data
			//	console.log('this.screenShelvesList', this.screenShelvesList)
		}
	}

	async screenShelvesSelect(e: any) {
		//	console.log(e)

		const x = e.map((item: any) => {
			return {
				areaCode: item.areaCode,
				shelvesCode: item.shelvesCode,
				warehouseCode: item.warehouseCode
			}
		})
		//请求货架组
		const { data, success } = await API.wms.inventoryMaster.screenGroupList.request(x)
		if (success && !isNil(data)) {
			console.log(data, '货架排')
			this.screenGroupList = data
		}
	}
	async screenGroupSelect(e: any) {
		console.log(e)
		const x = e.map((item: any) => {
			return {
				areaCode: item.areaCode,
				shelvesCode: item.shelvesCode,
				warehouseCode: item.warehouseCode,
				groupCode: item.groupCode
			}
		})
		const { data, success } = await API.wms.inventoryMaster.screenPositionList.request(x)
		if (success && !isNil(data)) {
			console.log(data)
			this.screenPositionList = data
		}
	}
	screenPositionSelect(e: any) {
		this.createInventory = e
	}
	//创建盘点单
	async inventoryCreate() {
		//	console.log(this.createInventory)
		//	console.log(this.searchForm.checkType, 'checkType')

		const x = {
			checkType: this.searchForm.checkType as number,
			icno: this.searchForm.icno as string,
			inventoryType: this.searchForm.inventoryType as number,
			planBeginTime: this.searchForm.planBeginTime as string,
			planEndTime: this.searchForm.planEndTime as string,
			inventoryPositions: this.createInventory.map((item) => item.positionCode) as string[],
			warehouseCode: this.warehouseCode as string,
			warehouseName: this.warehouseName as string
		}
		if (isNil(this.icno)) {
			const { success } = await API.wms.inventoryMaster.add.request(x)
			if (success) {
				this.$message.success('创建盘点单成功', 3)
				setTimeout(() => {
					this.calcVisible = false

					this.$emit('search')
				}, 1000)
			}
		} else {
			const { success } = await API.wms.inventoryMaster.modify.request(x)
			if (success) {
				this.$message.success('修改盘点单成功', 3)
				setTimeout(() => {
					this.calcVisible = false

					this.$emit('search')
				}, 1000)
			}
		}
	}
	public render() {
		return (
			<div>
				<a-modal title={isNil(this.icno) ? '创建盘点单' : '修改盘点单'} visible={this.calcVisible} footer={null} on-ok={this.create} on-cancel={this.cancel} width={1200}>
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
							<a-form-modelItem label="盘点内容" prop="checkType">
								<form-config v-model={this.searchForm.checkType} prop="checkType" />
							</a-form-modelItem>
							<a-form-modelItem prop="planBeginTime" label="计划开始时间">
								<a-date-picker show-time v-model={this.searchForm.planBeginTime} prop="planBeginTime" />
							</a-form-modelItem>
							<a-form-modelItem prop="planEndTime" label="计划完成时间">
								<a-date-picker show-time v-model={this.searchForm.planEndTime} prop="planEndTime" />
							</a-form-modelItem>
							<a-form-modelItem label="盘点类型" prop="inventoryType">
								<form-config v-model={this.searchForm.inventoryType} prop="inventoryType" />
							</a-form-modelItem>
						</a-form-model>
					</div>
					<div class="table-top">
						<div class="table-head">
							<div class="app-flex-sb">
								{this.tableHead.map((item) => (
									<div key={item.id}>{item.name}</div>
								))}
							</div>
						</div>
						<div class="table-body app-flex-sb">
							{/* 仓库 */}
							<div>
								<a-radio-group on-change={(e: any) => this.worehouseChang(e)}>
									{this.warehouseList.map((item: defs.wms.WarehouseResponseDto) => {
										return (
											<div>
												<a-radio key={item.id} style="radioStyle" value={item}>
													{item.warehouseName}
												</a-radio>
											</div>
										)
									})}
								</a-radio-group>
							</div>
							{/* 库区 */}
							<div>
								<a-checkbox-group on-change={(e: any) => this.screenAreaSelect(e)}>
									{this.screenAreaList.map((item: defs.wms.InventoryScreenPositionResponseDto) => {
										return (
											<div key={item.areaCode}>
												<a-checkbox style="radioStyle" value={item.areaCode}>
													{item.areaCode}
												</a-checkbox>
											</div>
										)
									})}
								</a-checkbox-group>
							</div>
							{/* 货架排 */}
							<div>
								<a-checkbox-group on-change={(e: any) => this.screenShelvesSelect(e)}>
									{this.screenShelvesList.map((item: any) => {
										return (
											<div key={item.areaCode + '-' + item.shelvesCode}>
												<a-checkbox style="radioStyle" value={item}>
													{item.areaCode + '-' + item.shelvesCode}
												</a-checkbox>
											</div>
										)
									})}
								</a-checkbox-group>
							</div>
							{/* 货架组 */}
							<div>
								<a-checkbox-group on-change={(e: any) => this.screenGroupSelect(e)}>
									{this.screenGroupList.map((item: any) => {
										return (
											<div key={item.areaCode + '-' + item.shelvesCode + '-' + item.groupCode}>
												<a-checkbox style="radioStyle" value={item}>
													{item.areaCode + '-' + item.shelvesCode + '-' + item.groupCode}
												</a-checkbox>
											</div>
										)
									})}
								</a-checkbox-group>
							</div>
							{/* 库位信息 */}
							<div>
								<a-checkbox-group on-change={(e: any) => this.screenPositionSelect(e)}>
									{this.screenPositionList.map((item: any, index: any) => {
										return (
											<div key={index}>
												<a-checkbox style="radioStyle" value={item}>
													{item.positionCode}
												</a-checkbox>
											</div>
										)
									})}
								</a-checkbox-group>
							</div>
						</div>
					</div>
					<div class="table-footer">
						<a-button on-click={this.cancel}>取消</a-button>
						<a-button type="primary" on-click={this.inventoryCreate}>
							{isNil(this.icno) ? '创建盘点单' : '修改盘点单'}
						</a-button>
					</div>
				</a-modal>
			</div>
		)
	}
	public search() {
		console.log('1')
	}
}
