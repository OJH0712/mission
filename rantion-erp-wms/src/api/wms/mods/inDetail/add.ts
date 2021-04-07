/**
 * @desc add
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InDetailRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inDetail`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
