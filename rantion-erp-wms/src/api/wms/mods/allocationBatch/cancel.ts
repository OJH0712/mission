/**
 * @desc 取消调拨批次单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationBatch.cancel.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/cancel`, {
			method: 'GET',
			params,

			...options
		})
	)
}
