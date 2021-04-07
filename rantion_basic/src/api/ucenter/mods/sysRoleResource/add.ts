/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysRoleResourceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRoleResource/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
