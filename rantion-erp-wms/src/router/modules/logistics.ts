import Layout from '@/layout'
const logistics = {
	path: '/logistics',
	name: 'logistics',
	component: Layout,
	redirect: '/logistics/channelProvider',
	meta: {
		title: '物流管理'
	},
	children: [
		{
			path: '/logistics/channelProvider',
			name: 'ChannelProvider',
			component: () => import('@/views/logistics/channelProvider'),
			meta: {
				title: '渠道商管理'
			}
		},
		{
			path: '/logistics/billingRules',
			name: 'BillingRules',
			component: () => import('@/views/logistics/billingRules'),
			meta: {
				title: '计费管理'
			}
		},
		{
			path: '/logistics/billingSet/:providerCode/:channelCode',
			name: 'BillingSet',
			component: () => import('@/views/logistics/billingSet'),
			meta: {
				title: '计费设置'
			}
		},
		{
			path: '/logistics/reconciliation',
			name: 'Reconciliation',
			component: () => import('@/views/logistics/reconciliation'),
			meta: {
				title: '对账管理'
			}
		},
		{
			path: '/logistics/customsClearance',
			name: 'CustomsClearance',
			component: () => import('@/views/logistics/customsClearance'),
			meta: {
				title: '报关管理'
			}
		},
		{
			path: '/logistics/logisticsGroup',
			name: 'LogisticsGroup',
			component: () => import('@/views/logistics/logisticsGroup'),
			meta: {
				title: '物流分组'
			}
		},
		{
			path: '/logistics/channellistbylogistics/:code',
			name: 'Channellistbylogistics',
			component: () => import('@/views/logistics/channellistbylogistics'),
			meta: {
				title: '渠道列表'
			}
		},
		{
			path: '/logistics/productbylogistics/:code',
			name: 'Productbylogistics',
			component: () => import('@/views/logistics/productbylogistics'),
			meta: {
				title: '对应产品列表'
			}
		},
		{
			path: '/logistics/tracking',
			name: 'Tracking',
			component: () => import('@/views/logistics/tracking'),
			meta: {
				title: '物流跟踪详情'
			}
		},
		{
			path: '/logistics/channelService/:providerCode',
			name: 'ChannelService',
			component: () => import('@/views/logistics/channelService'),
			meta: {
				title: '渠道服务'
			}
		}
	]
}
export default logistics
