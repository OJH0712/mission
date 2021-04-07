/**
 * @desc 调拨单号解绑调拨批次号
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationBatch.unbindAono.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/unbindAono`, {
			method: 'GET',
			params,

			...options
		})
	)
}
