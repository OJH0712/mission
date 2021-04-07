/**
 * @desc 配置角色数据权限
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysRoleDataRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleData/setRoleDataResource`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
