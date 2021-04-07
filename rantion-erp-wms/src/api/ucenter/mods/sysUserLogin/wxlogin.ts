/**
 * @desc 微信登录认证
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysUserLogin.wxlogin.Params, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/wechat`, {
			method: 'GET',
			params,

			...options
		})
	)
}
