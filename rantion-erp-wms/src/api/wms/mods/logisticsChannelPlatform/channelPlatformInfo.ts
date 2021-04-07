/**
 * @desc 通过平台编号，获取该平台渠道信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPlatform.channelPlatformInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPlatform/channelPlatformInfo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
