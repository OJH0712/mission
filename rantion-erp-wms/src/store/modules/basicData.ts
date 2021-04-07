/*
 * @Description:
 * @Author: owen
 * @Date: 2021-02-25 19:30:22
 * @LastEditTime: 2021-02-26 17:29:22
 */
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { isNil, map } from 'ramda'
import { findOrderList, getZoneList } from '@/api/sale/order'
import { throttle } from '@/utils'
interface PlatformShop {
	account: string
	accountName: string
	authStatus: string
	shopName: string
	shopType: string
	platformName: string
	platformId: string
	id: number
}
interface ZoneList {
	[index: string]: Zone[]
}
interface Zone {
	code: string
	zone: string
}
interface Options {
	value: string
	label: string
}
export interface BasicDataState {
	sysUserList: Array<Options>
	warehouseCodeList: Array<defs.wms.WarehouseResponseDto>
	LogisticsGroupList: Array<defs.wms.LogisticsProviderChannelResponseDto>
	channelList: Array<defs.wms.LogisticsProviderChannelResponseDto>
	userList: defs.ucenter.SysUserResponseDto[]
	platformShopList: PlatformShop[]
}
let getUserList: any
@Module({ namespaced: true, store, name: 'basicData', dynamic: true })
export class BasicData extends VuexModule implements BasicDataState {
	public sysUserList: Array<Options> = []
	public warehouseCodeList: Array<defs.wms.WarehouseResponseDto> = []
	public LogisticsGroupList: Array<defs.wms.LogisticsProviderChannelResponseDto> = []
	public channelList: Array<defs.wms.LogisticsProviderChannelResponseDto> = []
	public userList: defs.ucenter.SysUserResponseDto[] = []
	public platformShopList: PlatformShop[] = []
	public zoneList: ZoneList = {}
	@Action
	public async getSysUserList() {
		if (isNil(getUserList)) {
			// 防抖
			getUserList = throttle(API.ucenter.sysUser.selectPage.request)
		}
		const { success, data } = await getUserList({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_SYSUSERLIST(data.records)
		}
	}

	@Action
	public async getWarehouseCodeList() {
		const { success, data } = await API.wms.warehouse.list.request({ pageSize: 999, pageNumber: 1 })
		if (success && !isNil(data) && !isNil(data.list)) {
			this.SET_WAREHOUSECODELIST(data.list)
		}
	}

	@Action
	public async getLogisticsGroupList() {
		const { success, data } = await API.wms.logisticsProvider.getProviderlist.request({})
		console.log(data)
		if (success && !isNil(data)) {
			this.SET_LOGISTICSGROUPLIST(data)
		}
	}

	@Action
	public async getChannelList() {
		const { success, data } = await API.wms.logisticsChannel.getProviderChannelList.request({})
		if (success && !isNil(data) && !isNil(data)) {
			this.SET_CHANNELLIST(data)
		}
	}
	@Action
	public async getUserList() {
		const { success, data } = await API.ucenter.sysUser.selectPage.request({ size: 9999 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_USERLIST(data.records)
		}
		return data
	}
	@Action
	public async getplatformShopList() {
		const { success, data } = await findOrderList({ pageSize: 9999 })
		if (success && !isNil(data) && !isNil(data.list)) {
			this.SET_PLATFORMSHOPLIST(data.list)
		}
		return data
	}
	@Action
	public async getZoneList() {
		const { success, data } = await getZoneList({ pageSize: 9999 })
		if (success && !isNil(data) && !isNil(data.list)) {
			this.SET_ZONELIST(data.list)
		}
		return data
	}
	@Mutation
	private SET_ZONELIST(data: ZoneList) {
		this.zoneList = data
	}
	@Mutation
	private SET_PLATFORMSHOPLIST(data: PlatformShop[]) {
		this.platformShopList = data
	}
	@Mutation
	private SET_USERLIST(userList: defs.ucenter.SysUserResponseDto[]) {
		this.userList = userList
	}
	@Mutation
	private SET_SYSUSERLIST(item: Array<defs.ucenter.SysUserResponseDto>) {
		this.sysUserList = map((res) => {
			return {
				value: res.userNo,
				label: res.userName
			}
		}, item)
	}
	@Mutation
	private SET_WAREHOUSECODELIST(item: Array<defs.wms.WarehouseResponseDto>) {
		this.warehouseCodeList = item
	}

	@Mutation
	private SET_LOGISTICSGROUPLIST(item: any) {
		this.LogisticsGroupList = item
	}

	@Mutation
	private SET_CHANNELLIST(item: Array<defs.wms.LogisticsProviderChannelResponseDto>) {
		this.channelList = item
	}
}
export const BasicDataModule = getModule(BasicData)
