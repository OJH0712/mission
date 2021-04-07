/**
 * @desc 出库单列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.outMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/outMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
