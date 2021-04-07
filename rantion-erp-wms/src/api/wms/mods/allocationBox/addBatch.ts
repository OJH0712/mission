/**
 * @desc 录入多条分箱信息（可修改）
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.AllocationBoxRequestDto>, options?: any) {
	return updateResponse(
		http(URL + `/allocationBox/addBatch`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
