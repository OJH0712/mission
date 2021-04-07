/**
 * @desc skuInfo
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.product.skuInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/product/skuInfo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
