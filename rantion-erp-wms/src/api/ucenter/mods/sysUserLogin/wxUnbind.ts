/**
 * @desc 解绑微信账号
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysUserLogin.wxUnbind.Params, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/wechat/unbind`, {
			method: 'GET',
			params,

			...options
		})
	)
}
