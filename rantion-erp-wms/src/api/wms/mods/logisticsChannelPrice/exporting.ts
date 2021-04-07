/**
 * @desc 渠道计费规则报表导出
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPrice.exporting.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice/export`, {
			method: 'GET',
			params,

			...options
		})
	)
}
