/**
 * @desc 调拨批次新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch`, {
			method: 'POST',

			...options
		})
	)
}
