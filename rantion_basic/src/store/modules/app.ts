import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { isNil, clone } from 'ramda'

export interface AppState {
	collapsed: boolean // 左边导航栏关闭状态
	userInfo: defs.ucenter.SysUserResponseDto
}
@Module({ store, name: 'app', namespaced: true, dynamic: true })
class App extends VuexModule implements AppState {
	public collapsed = false
	public userInfo: defs.ucenter.SysUserResponseDto = {
		avatar: '',
		createBy: '',
		createTime: '',
		email: '',
		id: 0,
		lockVersion: 0,
		organizationStaff: [],
		phone: '',
		status: 0,
		type: 0,
		updateBy: '',
		updateTime: '',
		userName: '',
		userNo: '',
		userRoleType: undefined
	}
	@Action
	public ToggleCollapsed() {
		this.TOGGLE_COLLAPSED(!this.collapsed)
	}
	@Action
	public async getUserInfo() {
		const userNo = localStorage.getItem('rantion-erp-userNo')
		if (!isNil(userNo)) {
			const { success, data } = await API.ucenter.sysUser.getByUserNo.request({ userNo })
			// debugger
			if (success && !isNil(data)) {
				this.GET_USERINFO(data)
			}
			return data
		}
		return null
	}
	@Action
	public async setUserInfo(data: defs.ucenter.SysUserResponseDto) {
		this.GET_USERINFO(data)
	}
	@Mutation
	private TOGGLE_COLLAPSED(collapsed: boolean) {
		this.collapsed = collapsed
	}
	@Mutation
	private GET_USERINFO(userInfo: defs.ucenter.SysUserResponseDto) {
		this.userInfo = clone(userInfo)
	}
	@Mutation
	private CLEAR_USER_CACHE() {
		localStorage.removeItem('rantion-erp-accessToken')
		localStorage.removeItem('rantion-erp-userNo')
		location.href = '/login'
	}
	@Action
	public async userLogout() {
		const userNo = localStorage.getItem('rantion-erp-userNo')
		if (!isNil(userNo)) {
			const { success } = await API.ucenter.sysUserLogin.logout.request({ userNo })
			if (success) {
				this.CLEAR_USER_CACHE()
				return true
			}
		}
		return false
	}
}
export const AppModule = getModule(App)
