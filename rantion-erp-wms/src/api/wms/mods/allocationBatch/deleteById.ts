/**
 * @desc 删除调拨批次单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(abno: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/${abno}`, {
			method: 'DELETE',

			...options
		})
	)
}
