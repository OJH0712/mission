/**
 * @desc 更新调拨单明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.AllocationMasterUpdateRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/updateDetail`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
