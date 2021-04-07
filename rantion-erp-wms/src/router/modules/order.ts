/*
 * @Author: gtlong
 * @Date: 2021-03-01 10:08:38
 * @LastEditTime: 2021-03-01 15:15:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-erp-wms\src\router\modules\orderManagement.ts
 */

import Layout from '@/layout'
const order = {
	path: '/order',
	name: 'Order',
	component: Layout,
	redirect: '/order/orderManagement',
	meta: {
		title: '订单管理'
	},
	children: [
		{
			path: '/order/orderManagement',
			name: 'OrderManagement',
			component: () => import('@/views/order/orderManagement'),
			meta: {
				title: '订单管理'
			}
		},
		{
			path: '/order/orderRules',
			name: 'OrderRules',
			component: () => import('@/views/order/orderRules'),
			meta: {
				title: '订单规则'
			}
		}
	]
}
export default order
