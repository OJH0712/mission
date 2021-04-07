import Layout from '@/layout/index'
const inventory = {
	path: '/inventory',
	name: 'inventory',
	component: Layout,
	redirect: '/inventory/countingOrder',
	meta: {
		title: '盘点管理'
	},
	children: [
		{
			path: '/inventory/countingOrder',
			name: 'CountingOrder',
			component: () => import('@/views/inventory/countingOrder'),
			meta: {
				title: '盘点单'
			}
		},
		{
			path: '/inventory/CountingReview',
			name: 'CountingReview',
			component: () => import('@/views/inventory/countingReview'),
			meta: {
				title: '盘点结果审核'
			}
		},
		{
			path: '/inventory/errorStatistics',
			name: 'ErrorStatistics',
			component: () => import('@/views/inventory/errorStatistics'),
			meta: {
				title: '盘点误差统计报表'
			}
		}
	]
}
export default inventory
