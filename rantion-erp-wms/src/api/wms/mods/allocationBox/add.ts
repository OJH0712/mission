/**
 * @desc 录入单条分箱信息（可修改）
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.AllocationBoxRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationBox`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
