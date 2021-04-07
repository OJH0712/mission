/**
 * @desc 批量设置用户角色
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.UserRoleSetBatchRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserRole/setUserRoleBatch`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
