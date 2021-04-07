/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysMenuRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysMenu/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
