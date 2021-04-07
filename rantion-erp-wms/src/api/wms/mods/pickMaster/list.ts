/**
 * @desc 前端-拣货单列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.pickMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
