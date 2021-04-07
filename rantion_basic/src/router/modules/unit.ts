import Layout from '@/layout'

const unit = {
	path: '/unit',
	redirect: '/unit/unit',
	name: 'Unit',
	component: Layout,
	meta: {
		title: '单位'
	},
	children: [
		{
			path: '/unit/unitType',
			name: 'UnitType',
			component: () => import('@/views/unit/unitType'),
			meta: {
				title: '单位类型'
			}
		},
		{
			path: '/unit/meteringUnit',
			name: 'MeteringUnit',
			component: () => import('@/views/unit/meteringUnit'),
			meta: {
				title: '计量单位'
			}
		}
	]
}
export default unit
