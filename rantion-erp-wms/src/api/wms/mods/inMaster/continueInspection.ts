/**
 * @desc 入库单跳过质检
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inMaster.continueInspection.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/continueInspection`, {
			method: 'POST',
			params,

			...options
		})
	)
}
