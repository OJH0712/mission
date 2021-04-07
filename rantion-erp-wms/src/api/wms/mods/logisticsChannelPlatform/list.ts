/**
 * @desc 平台映射关系列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPlatform.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPlatform`, {
			method: 'GET',
			params,

			...options
		})
	)
}
