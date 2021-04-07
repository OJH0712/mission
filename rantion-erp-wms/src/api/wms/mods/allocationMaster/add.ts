/**
 * @desc 创建调拨单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.AllocationMasterCreateRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
