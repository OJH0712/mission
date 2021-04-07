/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysRoleResourceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleResource/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
