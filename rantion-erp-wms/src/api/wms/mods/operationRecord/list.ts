/**
 * @desc 操作记录列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.operationRecord.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/operationRecord`, {
			method: 'GET',
			params,

			...options
		})
	)
}
