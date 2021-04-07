/**
 * @desc NS-更新ReferenceId
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.NsUpdateReferenceIdRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/updateReferenceId`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
