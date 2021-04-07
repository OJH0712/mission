/**
 * @desc NS请求记录列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.nsRequestRecord.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/nsRequestRecord`, {
			method: 'GET',
			params,

			...options
		})
	)
}
