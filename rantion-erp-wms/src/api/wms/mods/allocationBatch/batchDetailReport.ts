/**
 * @desc 调拨批次汇总明细导出
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationBatch.batchDetailReport.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/batchDetailReport`, {
			method: 'GET',
			params,

			...options
		})
	)
}
