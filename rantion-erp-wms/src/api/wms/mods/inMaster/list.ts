/**
 * @desc 入库单列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
