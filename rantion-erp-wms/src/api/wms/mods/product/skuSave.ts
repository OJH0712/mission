/**
 * @desc skuSave
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ProductSkuInfoDto, options?: any) {
	return updateResponse(
		http(URL + `/product/sku`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
