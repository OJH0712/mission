/**
 * @desc 装柜信息汇总明细导出
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationContainer.batchDetailReport.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationContainer/batchDetailReport`, {
			method: 'GET',
			params,

			...options
		})
	)
}
