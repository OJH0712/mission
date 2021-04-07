/**
 * @desc 取消分拣包裹
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.packageMaster.cancel.Params, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/cancel`, {
			method: 'GET',
			params,

			...options
		})
	)
}
