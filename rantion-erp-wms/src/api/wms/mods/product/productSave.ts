/**
 * @desc productSave
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ProductInfoDto, options?: any) {
	return updateResponse(
		http(URL + `/product`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
