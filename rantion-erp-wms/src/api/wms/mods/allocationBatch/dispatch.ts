/**
 * @desc 调拨批次单确认发货
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(abno: string, body: defs.wms.AllocationContainerRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/dispatch/${abno}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
