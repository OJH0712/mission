/**
 * @desc 渠道计费规则列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPrice.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice`, {
			method: 'GET',
			params,

			...options
		})
	)
}
