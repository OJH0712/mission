/**
 * @desc list
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.getProductSku.Params, options?: any) {
	return updateResponse(
		http(URL + `/product/sku`, {
			method: 'GET',
			params,

			...options
		})
	)
}
