/**
 * @desc 根据roleId查询数据权限列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(roleId: number, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleData/getDatasByRoleId/${roleId}`, {
			method: 'GET',

			...options
		})
	)
}
