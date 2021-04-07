/**
 * @user: antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/5/16 上午10:53
 */
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { ShopInt, LogisticsChanne, Company, Site } from '@/interface/Nc'
import { getLogisticsList, getShopList, getCompanyName, getSiteList } from '@/api/ns'
import { equals } from 'ramda'
interface IntList<T> {
	nowPage: number
	pageCount: number
	pageSize: number
	data: Array<T>
}
export interface NsState {
	shopList: IntList<ShopInt>
	logisticsList: Array<LogisticsChanne>
	FindShopList: Function
	FindLogisticsList: Function
	FindCompanyName: Function
	companyName: Array<Company>
	siteList: Array<Site>
}

@Module({ dynamic: true, store, name: 'ns' })
class Ns extends VuexModule implements NsState {
	public shopList: IntList<ShopInt> = {
		nowPage: 0,
		pageCount: 0,
		pageSize: 20,
		data: []
	} // 店铺列表
	public logisticsList: Array<LogisticsChanne> = [] // 渠道服务
	public companyName: Array<Company> = [] // 交易注意
	public siteList: Array<Site> = [] // 站点信息
	@Action
	public async FindShopList(param?: any) {
		const { data } = await getShopList(param)
		// TODO 查询接口(调用NS接口查询平台列表)
		this.SET_SHOPLIST({
			nowPage: data.nowPage,
			pageCount: data.pageCount,
			pageSize: data.pageSize,
			data: data.list
		})
		return data
	}
	@Action
	public async FindLogisticsList(param?: any) {
		console.log(param)
		// TODO 查询接口(调用NS接口查询渠道列表)
		const { data } = await getLogisticsList({ page: 1, pageSize: 999 })
		this.SET_LOGISTICSLIST(data.list)
	}
	@Action
	public async FindCompanyName(param?: any) {
		// TODO 查询接口(调用NS接口交易主体)
		const { data } = await getCompanyName(param)
		this.SET_COMPANYNAME(data.list)
	}
	@Action
	public async FindsiteList(param?: any) {
		const { data } = await getSiteList(param)
		this.SET_SITELIST(data.list)
	}
	@Mutation
	private SET_SHOPLIST(data: IntList<ShopInt>) {
		this.shopList = {
			nowPage: data.nowPage,
			pageCount: data.pageCount,
			pageSize: data.pageSize,
			data: equals(1, data.nowPage) ? data.data : this.shopList.data.concat(data.data)
		}
	}
	@Mutation
	private SET_LOGISTICSLIST(array: Array<LogisticsChanne>) {
		this.logisticsList = array
	}
	@Mutation
	private SET_COMPANYNAME(array: Array<Company>) {
		this.companyName = array
	}
	@Mutation
	protected SET_SITELIST(array: Array<Site>) {
		this.siteList = array
	}
}

export const NsModule = getModule(Ns)
