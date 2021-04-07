import Layout from '@/layout'

const outMaster = {
	path: '/outMaster',
	name: 'OutMaster',
	component: Layout,
	redirect: '/outMaster/Delivery',
	meta: {
		title: '出库管理'
	},
	children: [
		{
			path: '/outMaster/delivery',
			name: 'Delivery',
			component: () => import('@/views/outMaster/Delivery'),
			meta: {
				title: '出库单'
			}
		},
		{
			path: '/outMaster/pick',
			name: 'Pick',
			component: () => import('@/views/outMaster/Pick'),
			meta: {
				title: '拣货单'
			}
		},
		{
			path: '/outMaster/distribution',
			name: 'Distribution',
			component: () => import('@/views/outMaster/Distribution'),
			meta: {
				title: '配货'
			}
		},
		{
			path: '/outMaster/quality',
			name: 'Quality',
			component: () => import('@/views/outMaster/Quality'),
			meta: {
				title: '校验'
			}
		},
		{
			path: '/outMaster/deliveryWeigh',
			name: 'DeliveryWeigh',
			component: () => import('@/views/outMaster/DeliveryWeigh'),
			meta: {
				title: '出货称重'
			}
		},
		{
			path: '/outMaster/Logistics',
			name: 'Logistics',
			component: () => import('@/views/outMaster/Logistics'),
			meta: {
				title: '物流分拣'
			}
		}
	]
}
export default outMaster
