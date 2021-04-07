/**
 * @desc 登录
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.LoginRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/login`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
