/**
 * @desc 获取微信绑定二维码
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.wechatOpen.bindScan.Params, options?: any) {
	return updateResponse(
		http(URL + `/wechat/open/bindScan`, {
			method: 'GET',
			params,

			...options
		})
	)
}
