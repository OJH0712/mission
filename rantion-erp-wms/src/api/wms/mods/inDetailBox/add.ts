/**
 * @desc add
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InDetailBoxRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inDetailBox`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
