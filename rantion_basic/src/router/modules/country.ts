import Layout from '@/layout'

const country = {
	path: '/country',
	redirect: '/country/countryType',
	name: 'Country',
	component: Layout,
	meta: {
		title: '国家'
	},
	children: [
		{
			path: '/country/countryList',
			name: 'CountryType',
			component: () => import('@/views/country/countryType'),
			meta: {
				title: '国家'
			}
		},
		{
			path: '/country/stateList',
			name: 'StateList',
			component: () => import('@/views/country/stateList'),
			meta: {
				title: '州列表'
			}
		},
		{
			path: '/country/cityList',
			name: 'CityList',
			component: () => import('@/views/country/cityList'),
			meta: {
				title: '城市列表'
			}
		}
	]
}
export default country
