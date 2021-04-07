/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysMenuResourceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysMenuResource/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
