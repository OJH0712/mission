/**
 * @desc 获取渠道商列表-分页
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsProvider.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsProvider`, {
			method: 'GET',
			params,

			...options
		})
	)
}
