/*
 * @Description: 入库管理
 * @Author: owen
 * @Date: 2021-03-31 14:11:23
 * @LastEditTime: 2021-04-06 09:45:23
 */
import Layout from '@/layout'

const inMaster = {
	path: '/inMaster',
	name: 'inMaster',
	component: Layout,
	redirect: '/inMaster/entry',
	meta: {
		title: '入库管理'
	},
	children: [
		{
			path: '/inMaster/entry',
			name: 'Entry',
			component: () => import('@/views/inMaster/entry'),
			meta: {
				title: '入库单'
			}
		},
		{
			path: '/inMaster/tray',
			name: 'Tray',
			component: () => import('@/views/inMaster/tray'),
			meta: {
				title: '托盘管理'
			}
		}
		// {
		// 	path: '/inMaster/receiv',
		// 	name: 'Receiv',
		// 	component: () => import('@/views/inMaster/receiv'),
		// 	meta: {
		// 		title: '收货'
		// 	}
		// }
	]
}
export default inMaster
