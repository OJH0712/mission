/**
 * @desc 设置角色登录首页
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysRoleDataRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleData/setRoleHomePage`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
