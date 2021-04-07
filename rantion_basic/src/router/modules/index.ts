import Layout from '@/layout'

const index = {
	path: '/product',
	redirect: '/product/spu',
	name: 'Product',
	component: Layout,
	meta: {
		title: '产品管理'
	},
	children: [
		{
			path: '/product/spu',
			name: 'ProductList',
			component: () => import('@/views/product/'),
			meta: {
				title: 'SPU列表'
			}
		},
		{
			path: '/product/sku',
			name: 'SkuList',
			component: () => import('@/views/product/sku'),
			meta: {
				title: 'SKU列表'
			}
		},
		{
			path: '/product/productDetails',
			name: 'ProductDetails',
			component: () => import('@/views/product/details/index'),
			meta: {
				title: 'SPU详情'
			}
		},
		{
			path: '/product/skuDetails',
			name: 'SkuDetails',
			component: () => import('@/views/product/details/sku'),
			meta: {
				title: 'SKU详情'
			}
		},
		{
			path: '/product/brand',
			name: 'ProductBrandList',
			component: () => import('@/views/product/brand'),
			meta: {
				title: '产品品牌'
			}
		},
		{
			path: '/product/material',
			name: 'ProductMaterialList',
			component: () => import('@/views/product/material'),
			meta: {
				title: '产品材质'
			}
		},
		{
			path: '/product/categroy',
			name: 'ProductCategroyList',
			component: () => import('@/views/product/categroy'),
			meta: { title: '产品品类' }
		},
		{
			path: '/product/type',
			name: 'ProductTypeList',
			component: () => import('@/views/product/type'),
			meta: { title: '产品类型' }
		}
	]
}
export default index
