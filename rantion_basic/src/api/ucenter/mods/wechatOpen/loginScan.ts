/**
 * @desc 获取微信登陆二维码
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.wechatOpen.loginScan.Params, options?: any) {
	return updateResponse(
		http(URL + `/wechat/open/loginScan`, {
			method: 'GET',
			params,

			...options
		})
	)
}
