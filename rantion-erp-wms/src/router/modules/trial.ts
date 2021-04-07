/*
 * @Description: 库存领用管理
 * @Author: owen
 * @Date: 2021-04-01 15:05:32
 * @LastEditTime: 2021-04-01 16:04:03
 */
import Layout from '@/layout'
const trail = {
	path: '/trial',
	name: 'Trial',
	component: Layout,
	redirect: '/trial/trialOrder',
	meta: {
		title: '库存领用管理'
	},
	children: [
		{
			path: '/trial/trialOrder',
			name: 'TrialOrder',
			component: () => import('@/views/trial/trialOrder'),
			meta: {
				title: '领用单'
			}
		}
	]
}
export default trail
