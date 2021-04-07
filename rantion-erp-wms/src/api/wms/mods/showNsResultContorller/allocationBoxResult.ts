/**
 * @desc 调拨分箱信息回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.AllocationBoxResponseDto>, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/allocationBoxResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
