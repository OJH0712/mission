/**
 * @desc 调拨批次分页查询
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationBatch.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch`, {
			method: 'GET',
			params,

			...options
		})
	)
}
