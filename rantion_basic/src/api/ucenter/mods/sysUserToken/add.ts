/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserTokenRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserToken/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
