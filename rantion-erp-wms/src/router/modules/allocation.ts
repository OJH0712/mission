import Layout from '@/layout'

const allocation = {
	path: '/allocation',
	name: 'allocation',
	component: Layout,
	redirect: '/allocation/requisition',
	meta: {
		title: '报损管理'
	},
	children: [
		{
			path: '/allocation/requisition',
			name: 'Requisition',
			component: () => import('@/views/allocation/requisition'),
			meta: {
				title: '调拨单'
			}
		},
		{
			path: '/allocation/batch',
			name: 'Batch',
			component: () => import('@/views/allocation/batch'),
			meta: {
				title: '调拨批次'
			}
		},
		{
			path: '/allocation/cabinet',
			name: 'Cabinet',
			component: () => import('@/views/allocation/cabinet'),
			meta: {
				title: '装柜信息'
			}
		},
		{
			path: '/allocation/history',
			name: 'History',
			component: () => import('@/views/allocation/history'),
			meta: {
				title: '调拨历史'
			}
		}
	]
}
export default allocation
