/**
 * @desc 库存变动日志
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inoutStepRecord.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/inoutStepRecord`, {
			method: 'GET',
			params,

			...options
		})
	)
}
