/**
 * @desc productByCode
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.productByCode.Params, options?: any) {
	return updateResponse(
		http(URL + `/product/productByCode`, {
			method: 'GET',
			params,

			...options
		})
	)
}
