/*
 * @Description: 库存领用管理
 * @Author: owen
 * @Date: 2021-04-01 15:05:32
 * @LastEditTime: 2021-04-01 15:15:15
 */
import Layout from '@/layout'
const cost = {
	path: '/cost',
	name: 'Cost',
	component: Layout,
	redirect: '/cost/StockCost',
	meta: {
		title: '库存领用管理'
	},
	children: [
		{
			path: '/cost/StockCost',
			name: 'StockCost',
			component: () => import('@/views/cost/stockCost'),
			meta: {
				title: '领用单'
			}
		}
	]
}
export default cost
