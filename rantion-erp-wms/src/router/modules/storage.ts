/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-29 14:40:33
 * @LastEditTime: 2021-04-01 16:45:02
 */
import Layout from '@/layout'
const storage = {
	path: '/storage',
	name: 'Storage',
	component: Layout,
	redirect: '/storage/warehouse',
	meta: {
		title: '仓库管理'
	},
	children: [
		{
			path: '/storage/warehouse',
			name: 'Warehouse',
			component: () => import('@/views/storage/warehouse'),
			meta: {
				title: '仓库管理'
			}
		},
		{
			path: '/storage/storageArea',
			name: 'StorageArea',
			component: () => import('@/views/storage/storageArea'),
			meta: {
				title: '库区管理'
			}
		},
		{
			path: '/storage/warehouseposition',
			name: 'WarehousePosition',
			component: () => import('@/views/storage/warehouseposition'),
			meta: {
				title: '库位管理'
			}
		},
		{
			path: '/storage/shelf',
			name: 'Shelf',
			component: () => import('@/views/storage/shelf'),
			meta: {
				title: '货架管理'
			}
		}
	]
}
export default storage
