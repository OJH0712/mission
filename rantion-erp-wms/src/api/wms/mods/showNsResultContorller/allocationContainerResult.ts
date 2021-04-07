/**
 * @desc 调拨装柜信息回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.AllocationContainerResultNsDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/allocationContainerResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
