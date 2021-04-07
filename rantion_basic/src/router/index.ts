import { createWebHistory, RouteRecordRaw, RouterHistory } from 'vue-router'
import Layout from '@/layout'
import { getMap } from 'rantion-tools'
import { isWfw } from '@/utils'
export const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		component: () => import('@/views/auth/login.vue'),
		name: 'login',
		// alwaysShow: true,
		meta: {
			title: '登录',
			alwaysShow: true
		}
	},
	{
		path: '/',
		redirect: '/product/spu',
		component: Layout,
		name: 'index',
		// alwaysShow: true,
		meta: {
			title: '首页',
			alwaysShow: true
		}
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		meta: { title: '404', alwaysShow: true },
		name: 'NotFind'
		// alwaysShow: true
	}
]

class CreateHistory {
	constructor() {
		this.init()
	}
	private history?: RouterHistory
	getHistory(): RouterHistory {
		if (isNil(this.history)) {
			this.init()
		}
		return this.history as RouterHistory
	}
	init() {
		this.history = createWebHistory(isWfw() ? '/basics' : '/')
	}
	destroy() {
		if (this.history) {
			this.history.destroy()
			this.history = undefined
		}
	}
}

export const webHistory = new CreateHistory()
// 导出异步路由

import countryObj from './modules/country'
import indexObj from './modules/index'
import unitObj from './modules/unit'
import logisticsObj from './modules/logistics'
import { isNil } from 'ramda'
const routerList = [countryObj, indexObj, unitObj, logisticsObj]
const mapList = routerList.map((item) => getMap(item))
const mapGenerator = Object.assign({}, ...mapList)
export const asyncRouterMap: any = mapGenerator
