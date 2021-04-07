/**
 * @desc 入库单质检
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterInspectionRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/inspection`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
