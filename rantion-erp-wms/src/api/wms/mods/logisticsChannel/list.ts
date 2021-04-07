/**
 * @desc 查询渠道信息列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannel.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel`, {
			method: 'GET',
			params,

			...options
		})
	)
}
