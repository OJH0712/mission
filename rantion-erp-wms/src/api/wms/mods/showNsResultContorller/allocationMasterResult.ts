/**
 * @desc 调拨结果回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.AllocationMasterResultNsDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/allocationMasterResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
