import Layout from '@/layout'
const platformConfig = {
	path: '/platformConfig',
	name: 'PlatformConfig',
	component: Layout,
	redirect: '/platformConfig/shopName',
	meta: {
		title: '基础数据'
	},
	children: [
		{
			path: '/platformConfig/shopName',
			name: 'ShopName',
			component: () => import('@/views/platformConfig/shopName'),
			meta: {
				title: '店铺 & 事业部'
			}
		},
		{
			path: '/platformConfig/centerShip',
			component: () => import('@/views/platformConfig/centerShip'),
			name: 'CenterShip',
			meta: { title: 'centerId & shipTo' }
		},
		{
			path: '/platformConfig/brandEmailMapping',
			component: () => import('@/views/platformConfig/brandEmailMapping'),
			name: 'BrandEmailMapping',
			meta: { title: '品牌 & 售后邮箱' }
		}
	]
}
export default platformConfig
