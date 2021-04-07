import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import http, { updateResponse } from '@/http'
export function findPrinterList(data?: any) {
	return updateResponse(
		http(URL + `/sysRoleResource/`, {
			method: 'GET',
			params: data
		})
	)
}
import { isNil, map } from 'ramda'
export interface LogisticsChannelResponseDtos {
	averageDay: null | string
	channelCode: string
	channelName: string
	channelType: number
	contact: string
	id: number
	logisticsChannelResponseDtos: LogisticsChannelResponseDtos[] | null
	providerCode: string
	providerName: null | string
	status: 1 | 0
}
export interface IntChannelList {
	averageDay: null | string
	channelCode: null | string
	channelName: null | string
	channelType: null | string
	contact: null | string
	id: null | number
	logisticsChannelResponseDtos: LogisticsChannelResponseDtos[] | null
	providerCode: string
	providerName: string | null
	status: null | 1 | 0
}
export interface StorageState {
	warehouse: defs.wms.WarehouseResponseDto[]
	warehouseAll: defs.wms.WarehouseResponseDto[]
	storageArea: defs.wms.StorageUnitResponseDto[]
	goodsShelf: defs.wms.StorageUnitResponseDto[]
	goodsShelfGroup: defs.wms.StorageUnitResponseDto[]
	// providerChannelList: defs.wms.LogisticsProviderChannelResponseDto[]
	shipMethodList: []
	logisticsGroup: Array<defs.wms.LogisticsGroupResponseDto>
	// countyList:[],
	printerList: Printer[]
	waybillNo: string // 出库校验 需要使用
}

export interface Printer {
	key: string
	value: string
	remark: string
	createBy: string
	createTime: Array<string>
	updateBy: string
	name?: string
	updateTime: Array<string>
}
interface Options {
	value: string
	label: string
}
@Module({ dynamic: true, store, name: 'storage' })
class Storage extends VuexModule implements StorageState {
	public warehouse: defs.wms.WarehouseResponseDto[] = [] // 仓库列表
	public warehouseAll: defs.wms.WarehouseResponseDto[] = [] // 有效的仓库列表不分页
	public storageArea: defs.wms.StorageUnitResponseDto[] = [] // 库区列表
	public goodsShelf: defs.wms.StorageUnitResponseDto[] = [] // 货架
	public goodsShelfGroup: defs.wms.StorageUnitResponseDto[] = [] // 货架组
	public shipMethodList: [] = []
	public logisticsGroup: Array<defs.wms.LogisticsGroupResponseDto> = [] // 物流渠道分组
	public countyList: Array<Options> = [] // 国家列表
	// public providerChannelList: defs.wms.LogisticsProviderChannelResponseDto[] = [] // 物流
	public printerList: Printer[] = [] // 打印机列表
	public waybillNo = ''

	@Action
	public async addGoodsShelf(parms: any = { pageSize: 10, pageNumber: 1 }) {
		const { success, data } = await API.wms.storageUnit.storageUnitList.request(parms)
		if (success && !isNil(data) && !isNil(data.list)) this.ADD_GOODSSHELF(data.list)
	}

	@Action
	public async addGoodsShelfGroup(parms: any = { pageSize: 10, pageNumber: 1 }) {
		const { success, data } = await API.wms.storageUnit.storageUnitList.request(parms)
		if (success && !isNil(data) && !isNil(data.list)) this.ADD_GOODSSHELFGROUP(data.list)
	}
	@Action
	public async addPrinterList(parms = {}) {
		const { success, data } = await findPrinterList(parms)
		if (success && !isNil(data) && !isNil(data.records)) {
			this.ADD_PRINTERLIST(data.records)
			return data.records as Array<Printer>
		}
		return []
	}

	@Action
	public async addWarehouse(parms = { pageSize: 10, pageNumber: 1 }) {
		const { success, data } = await API.wms.warehouse.list.request(parms)
		if (success && !isNil(data) && !isNil(data.list)) this.ADD_WAREHOUSE(data.list)
	}

	@Action
	public async addWarehouseAll(parms = { pageSize: 10, pageNumber: 1 }) {
		const { success, data } = await API.wms.warehouse.availableList.request(parms)
		if (success && !isNil(data) && !isNil(data.list)) this.ADD_WAREHOUSEALL(data.list)
	}

	@Action
	public async findStorageArea(parms: any = { pageSize: 10, pageNumber: 1, storageType: 10 }) {
		const { success, data } = await API.wms.storageUnit.storageUnitList.request(parms)
		if (success && !isNil(data) && !isNil(data.list)) this.ADD_STORAGEAREA(data.list)
	}
	// @Action
	// public async findProviderChannelList(val?: any) {
	// 	const { success, data } = await API.wms.logisticsChannel.getProviderChannelList.request(val)
	// 	if (success && !isNil(data)) this.FIND_PROVIDERCHANNELLIST(data)
	// }
	@Action
	public async setWaybillNo(waybillNo: string) {
		this.SET_WAYBILLNO(waybillNo)
	}
	@Mutation
	private ADD_GROUPLIST(logisticsGroup: Array<defs.wms.LogisticsGroupResponseDto>) {
		this.logisticsGroup = logisticsGroup
	}
	@Mutation
	private ADD_COUNTYLIST(countyList: Array<defs.wms.CountyResponseDto>) {
		this.countyList = map((res) => {
			return {
				value: res.code,
				label: res.name
			}
		}, countyList)
	}

	@Mutation
	private ADD_GOODSSHELF(goodsShelf: defs.wms.StorageUnitResponseDto[]) {
		this.goodsShelf = goodsShelf
	}

	@Mutation
	private ADD_GOODSSHELFGROUP(goodsShelfGroup: defs.wms.StorageUnitResponseDto[]) {
		this.goodsShelfGroup = goodsShelfGroup
	}

	@Action
	public async addGroupList() {
		const { success, data } = await API.wms.logisticsGroup.list.request({ pageSize: 9999 })
		if (success && !isNil(data) && !isNil(data.list)) {
			this.ADD_GROUPLIST(data.list)
		}
	}
	@Action
	public async addCountyList(parms = {}) {
		const { success, data } = await API.wms.county.listAll.request(parms)
		if (success && !isNil(data)) {
			this.ADD_COUNTYLIST(data)
		}
	}
	@Mutation
	private ADD_PRINTERLIST(printerList: Printer[]) {
		this.printerList = printerList
	}

	@Mutation
	private ADD_WAREHOUSE(warehouse: defs.wms.WarehouseResponseDto[]) {
		this.warehouse = warehouse
	}

	@Mutation
	private ADD_WAREHOUSEALL(warehouseAll: defs.wms.WarehouseResponseDto[]) {
		this.warehouseAll = warehouseAll
	}

	@Mutation
	private ADD_STORAGEAREA(storageArea: defs.wms.StorageUnitResponseDto[]) {
		this.storageArea = storageArea
	}
	@Mutation
	// FIND_PROVIDERCHANNELLIST(providerChannelList: defs.wms.LogisticsProviderChannelResponseDto[]) {
	// 	this.providerChannelList = providerChannelList
	// }
	@Mutation
	private SET_WAYBILLNO(waybillNo: string) {
		this.waybillNo = waybillNo
	}
}

export const StorageModule = getModule(Storage)
