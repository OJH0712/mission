import Layout from '@/layout'

const breakage = {
	path: '/breakage',
	name: 'breakage',
	component: Layout,
	redirect: '/breakage/breakageAudit',
	meta: {
		title: '报损管理'
	},
	children: [
		{
			path: '/breakage/breakageAudit',
			name: 'BreakageAudit',
			component: () => import('@/views/breakage/breakageAudit'),
			meta: {
				title: '报损结果审核'
			}
		},
		{
			path: '/breakage/breakageCount',
			name: 'BreakageCount',
			component: () => import('@/views/breakage/breakageCount'),
			meta: {
				title: '报损统计报表'
			}
		}
	]
}
export default breakage
