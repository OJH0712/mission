/**
 * @desc 根据roleId查询角色的菜单列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(roleId: number, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleMenu/getMenus/${roleId}`, {
			method: 'GET',

			...options
		})
	)
}
