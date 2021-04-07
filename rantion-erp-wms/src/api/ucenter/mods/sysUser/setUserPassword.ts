/**
 * @desc 修改用户密码
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.UserPasswordRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUser/update/password`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
