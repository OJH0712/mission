import Layout from '@/layout'

const logistics = {
	path: '/logistics',
	redirect: '/logistics/group',
	name: 'Logistics',
	component: Layout,
	meta: {
		title: '物流管理'
	},
	children: [
		{
			path: '/logistics/group',
			name: 'LogisticsGroup',
			component: () => import('@/views/logistics/group'),
			meta: {
				title: '物流分组'
			}
		},
		{
			path: '/logistics/attribute',
			name: 'LogisticsAttribute',
			component: () => import('@/views/logistics/attribute'),
			meta: {
				title: '物流属性'
			}
		},
		{
			path: '/logistics/attributeType',
			name: 'LogisticsAttrType',
			component: () => import('@/views/logistics/attributeType'),
			meta: {
				title: '物流属性类型'
			}
		}
	]
}

export default logistics
