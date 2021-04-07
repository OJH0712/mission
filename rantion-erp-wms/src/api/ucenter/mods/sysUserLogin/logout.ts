/**
 * @desc 登出
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysUserLogin.logout.Params, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/logout`, {
			method: 'POST',
			params,

			...options
		})
	)
}
