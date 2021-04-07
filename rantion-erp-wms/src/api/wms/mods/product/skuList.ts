/**
 * @desc skuList
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.skuList.Params, options?: any) {
	return updateResponse(
		http(URL + `/product/skuList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
