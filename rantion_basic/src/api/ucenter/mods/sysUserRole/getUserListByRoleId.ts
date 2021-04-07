/**
 * @desc 获取角色对应的用户列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUserRole.getUserListByRoleId.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserRole/getUserList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
