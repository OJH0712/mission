/**
 * @desc 调拨单导出
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.exportAllocationReport.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/exportAllocationReport`, {
			method: 'GET',
			params,

			...options
		})
	)
}
