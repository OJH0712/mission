export interface RouteMeta {
	title: string // 标题
	noCache?: boolean
	affix?: boolean
	// keepAlive?: boolean
	// isBack?: boolean
}

// 菜单权限
export interface RoleMenuResource {
	resourceId: number
	type: number // 类型
	menuCode: string
	resourceName: string // 配合 v-auth 指令的 key 参考 plugin/decorators
	resUrl: string
	remark: string
	routeAlias: string
}
// 菜单栏目
export interface Menu {
	id?: number
	code: string // 栏目凭证
	name: string // 栏目名称
	resUrl: string // resUrl 请求链接 暂未用到使用本地的
	parentCode: string // 上级栏目
	sort: number // 排序 暂无用
	children: Array<Menu> | null
	roleMenuResourceDtoList?: Array<defs.ucenter.RoleMenuResourceResponseDto> // 菜单权限
	enable: number // 使用启用
	describe?: string // 说明
	childrenButton?: string | null // 菜单按钮  暂未使用
	ifHidden: number // ifHidden 是否显示在导航栏
	routeAlias: string // 路由别名 === 本地name
	createTime?: string
	createBy?: string
	lockVersion?: number
	updateBy?: string
	updateTime?: string
}
