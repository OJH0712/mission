/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysRoleRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysRole/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
