/**
 * @desc 查询调拨单操作时间
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.selectOperationTime.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/selectOperationTime`, {
			method: 'GET',
			params,

			...options
		})
	)
}
