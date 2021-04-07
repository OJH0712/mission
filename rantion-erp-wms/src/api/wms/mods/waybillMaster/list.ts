/**
 * @desc list
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.waybillMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/waybillMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
