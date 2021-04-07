/*
 * @Author: your name
 * @Date: 2021-02-25 18:05:42
 * @LastEditTime: 2021-04-01 16:04:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-erp-wms\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouteConfig } from '@/interface/Route'
import Layout from '@/layout'
Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
	{
		path: '/login',
		component: () => import('@/views/auth/login.vue'),
		name: 'login',
		alwaysShow: true,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/',
		redirect: '/order/orderManagement',
		component: Layout,
		name: 'index',
		alwaysShow: true,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		meta: { title: '404' },
		name: 'NotFind',
		alwaysShow: true
	}
]

const createRouter = () =>
	new VueRouter({
		scrollBehavior: (to, from, savedPosition) => {
			if (savedPosition) {
				return savedPosition
			} else {
				return { x: 0, y: 0 }
			}
		},
		mode: 'history', // require service support
		base: isWfw() ? 'wms' : '/',
		routes
	})
export function resetRouter() {
	const data: any = createRouter()
	data.matcher = (createRouter() as any).matcher // reset router
}

export { createRouter }

// 导出异步路由
import { getMap, isWfw } from '@/utils'
import storageObj from './modules/storage'
import logisticsObj from './modules/logistics'
import breakageObj from './modules/breakage'
import inventoryObj from './modules/inventory'
import allocationObj from './modules/allocation'
import outMasterObj from './modules/outMaster'
import inMasterObj from './modules/inMaster'
import orderObj from './modules/order'
import stockObj from './modules/stock'
import trialObj from './modules/trial'
import costObj from './modules/cost'
// const routerList = [storageObj, logisticsObj, breakageObj, inventoryObj, allocationObj, outMasterObj, orderObj]
// import platformConfigObj from './modules/platformConfig'

// breakageObj, inventoryObj, allocationObj, platformConfigObj
const routerList = [storageObj, logisticsObj, orderObj, outMasterObj, inMasterObj, stockObj, inventoryObj, breakageObj, allocationObj, trialObj, costObj]

const mapList = routerList.map((item) => getMap(item))
const mapGenerator = Object.assign({}, ...mapList)
export const asyncRouterMap: any = mapGenerator
