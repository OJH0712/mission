/*
 * @Description: 库存管理
 * @Author: owen
 * @Date: 2021-03-31 22:05:20
 * @LastEditTime: 2021-03-31 22:09:59
 */
import Layout from '@/layout'
const stock = {
	path: '/stock',
	name: 'stock',
	component: Layout,
	redirect: '/stock/instock',
	meta: {
		title: '库存管理'
	},
	children: [
		{
			path: '/stock/instock',
			name: 'Instock',
			component: () => import('@/views/stock/instock'),
			meta: {
				title: '库位'
			}
		},
		{
			path: '/stock/positionStock',
			name: 'PositionStock',
			component: () => import('@/views/stock/positionStock'),
			meta: {
				title: '库位库存'
			}
		},
		{
			path: '/stock/doLog',
			name: 'DoLog',
			component: () => import('@/views/stock/doLog'),
			meta: {
				title: '库存操作记录'
			}
		},
		{
			path: '/stock/abnormalLog',
			name: 'AbnormalLog',
			component: () => import('@/views/stock/abnormalLog'),
			meta: {
				title: '异常库存记录'
			}
		}
	]
}
export default stock
