/**
 * @desc list
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/product`, {
			method: 'GET',
			params,

			...options
		})
	)
}
