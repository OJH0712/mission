/**
 * @desc list
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inDetailRecord.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/inDetailRecord`, {
			method: 'GET',
			params,

			...options
		})
	)
}
