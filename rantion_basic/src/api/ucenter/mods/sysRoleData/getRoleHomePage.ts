/**
 * @desc 获取角色登录首页
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(roleId: number, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleData/getRoleHomePage/${roleId}`, {
			method: 'GET',

			...options
		})
	)
}
