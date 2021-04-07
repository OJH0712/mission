/**
 * @desc aono获取调拨单信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.getAllocationMaster.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/getAllocationMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
