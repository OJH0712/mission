/**
 * @desc add
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InDetailRecordRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inDetailRecord`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
