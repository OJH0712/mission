/**
 * @desc 获取用户所属的角色列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysUserRole.getRoleByUserNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserRole/getRoleByUserNo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
