/**
 * @desc 登录检查，请求ticket
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.LoginCheckRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/loginCheck`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
