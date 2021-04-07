import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
// import { asyncRouterMap } from '@/router/routerInstance'
import { routes as constantRoutes, asyncRouterMap } from '@/router'
import { Menu } from '@/interface/Route'
import store from '@/store'
import { equals, isEmpty, isNil } from 'ramda'
import { RouteRecordRaw } from 'vue-router'

// const hasPermission = (roles: string[], route: RouteConfig) => {
// 	if (route.meta && route.meta.roles) {
// 		return roles.some((role) => route.meta.roles.includes(role))
// 	} else {
// 		return true
// 	}
// }

export const filterAsyncRoutes = function(obj: Menu) {
	const routes = asyncRouterMap[obj.routeAlias] // path 拿到对应的路由属性
	if (obj.routeAlias === 'Index') {
		sessionStorage.setItem('Index', JSON.stringify(obj.roleMenuResourceDtoList))
	}
	if (isNil(routes) || isEmpty(routes)) {
		return null
	}
	const map: any = {
		path: routes.path,
		component: routes.component,
		redirect: routes.redirect,
		name: obj.routeAlias,
		meta: {
			title: obj.name,
			noCache: routes.noCache,
			alwaysShow: equals(obj.ifHidden, 0)
			// noKey: routes.noKey,
			// biz: routes.biz,
			// roleMenuResourceDtoList: obj.roleMenuResourceDtoList
		}
	}
	if (!map.redirect) delete map.redirect
	if (isNil(obj.children) || isEmpty(obj.children)) {
		return map
	}
	map.children = []
	obj.children.forEach((data) => {
		const route = filterAsyncRoutes(data)
		if (!isNil(route) && !isNil(map.children)) {
			map.children.push(route)
		}
	})
	return map
}

export interface PermissionState {
	routes: RouteRecordRaw[]
	dynamicRoutes: RouteRecordRaw[]
}

@Module({ store, name: 'permission', namespaced: true, dynamic: true })
export class Permission extends VuexModule implements PermissionState {
	public routes: RouteRecordRaw[] = []
	public dynamicRoutes: RouteRecordRaw[] = []

	@Action
	public async GenerateRoutes(userNo: string) {
		const { data: routeData } = await API.ucenter.sysMenu.getByUserNo.request(userNo)
		if (isEmpty(routeData) || isNil(routeData)) return []
		const async: RouteRecordRaw[] = []
		// 第一层是系统级别 当前系统是admin
		const list = routeData.find((item) => item.appName === process.env.APP_NAME)
		if (isNil(list)) return []
		list.children.forEach((data) => {
			const route = filterAsyncRoutes(data)
			if (!isNil(route)) {
				async.push(route)
			}
		})
		async.push({ path: '/:pathMatch(.*)*', redirect: '/404', name: '404', meta: { title: '404', alwaysShow: true } })
		this.PUT_ROUTES(async)
		return async
	}

	@Action
	public async InitRoutes() {
		this.SET_ROUTES([])
		return true
	}

	@Mutation
	private SET_ROUTES(routes: RouteRecordRaw[]) {
		this.dynamicRoutes = routes
	}
	@Mutation
	private PUT_ROUTES(routes: RouteRecordRaw[]) {
		this.routes = constantRoutes.concat(routes)
		this.dynamicRoutes = routes
	}
}

export const PermissionModule = getModule(Permission)
