/**
 * @desc 列表查询
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.centerIdAndShipTo.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/centerCountyMapping`, {
			method: 'GET',
			params,

			...options
		})
	)
}
