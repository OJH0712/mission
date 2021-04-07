/**
 * @desc 关联微信账号
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysUserLogin.wxBind.Params, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/wechat/bind`, {
			method: 'GET',
			params,

			...options
		})
	)
}
