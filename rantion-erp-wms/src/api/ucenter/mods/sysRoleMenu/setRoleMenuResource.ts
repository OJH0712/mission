/**
 * @desc 配置角色菜单权限
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(roleId: number, body: defs.ucenter.RoleMenuResourceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleMenu/setRoleMenuResource/${roleId}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
