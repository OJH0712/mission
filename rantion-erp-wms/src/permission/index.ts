import VueRouter, { Route } from 'vue-router'
const whiteList = ['/login'] //
import { AppModule } from '@/store/modules/app'
import { isEmpty, isNil } from 'ramda'
import { notification } from 'ant-design-vue'
import { PermissionModule } from '@/store/modules/permission'
export default function(router: VueRouter) {
	router.beforeEach(async (to: Route, from, next: any) => {
		document.title = to.meta.title || '蓝深门户'
		//  判断登录
		const hasToken = localStorage.getItem('rantion-erp-accessToken')
		if (!hasToken) {
			if (whiteList.indexOf(to.path) !== -1) {
				next()
			} else {
				location.href = `/login?redirect=${to.path}`
			}
		} else {
			if (to.path === '/login') {
				next({ path: '/' })
			} else {
				let data
				if (isNil(AppModule.userInfo) || isEmpty(AppModule.userInfo.userNo)) {
					data = await AppModule.getUserInfo()
				} else {
					data = AppModule.userInfo
				}
				if (isNil(data)) {
					// 去 403
					notification.error({
						description: '没有查询到用户信息',
						message: '异常'
					})
					return
				}
				// 拉取用户菜单
				const notHasRoles = isEmpty(PermissionModule.dynamicRoutes)
				// 没有菜单 去查询
				if (notHasRoles) {
					const accessRoutes = await PermissionModule.GenerateRoutes(data.userNo)
					if (isNil(accessRoutes) || isEmpty(accessRoutes)) {
						// 没有权限
						notification.error({
							description: '没有配置后端权限',
							message: '异常'
						})
						// setTimeout(() => {
						// 	history.pushState(
						// 		{
						// 			from: location.pathname,
						// 			search: location.search
						// 		},
						// 		'',
						// 		'/'
						// 	)
						// 	not(isWfw()) && location.reload()
						// 	// location.href = '/'
						// }, 2000)
						return
					}
					router.addRoutes(accessRoutes)
					next({ ...to, replace: true })
					return
				}
				next()
			}
		}
	})
}
