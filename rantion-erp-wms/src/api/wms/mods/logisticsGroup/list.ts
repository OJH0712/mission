/**
 * @desc 查询物流分组列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsGroup.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsGroup`, {
			method: 'GET',
			params,

			...options
		})
	)
}
