/**
 * @desc 入库单收货
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterReceivingRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/receiving`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
