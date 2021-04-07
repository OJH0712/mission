/**
 * @desc 美西仓-入库单收货
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterReceivingByMxRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/receivingByMX`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
