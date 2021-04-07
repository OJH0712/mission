/**
 * @desc 调拨单列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
