/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysRoleRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRole/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
