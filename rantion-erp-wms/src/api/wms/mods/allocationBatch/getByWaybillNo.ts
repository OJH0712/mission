/**
 * @desc 调拨单号绑定调拨批次号
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationBatch.getByWaybillNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/scan`, {
			method: 'GET',
			params,

			...options
		})
	)
}
