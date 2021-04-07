/**
 * @desc 渠道退件记录列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsReturnRecord.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsReturnRecord`, {
			method: 'GET',
			params,

			...options
		})
	)
}
