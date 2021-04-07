/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserTokenRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserToken/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
