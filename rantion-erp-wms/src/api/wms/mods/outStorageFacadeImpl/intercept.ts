/**
 * @desc intercept
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.OutStorageInterceptRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/outStorage/outStorage/intercept`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
