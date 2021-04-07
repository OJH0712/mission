/**
 * @desc productList
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.productList.Params, options?: any) {
	return updateResponse(
		http(URL + `/product/productList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
