/**
 * @desc 运单号or跟踪号绑定pkg
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.packageMaster.getByWaybillNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/waybill`, {
			method: 'GET',
			params,

			...options
		})
	)
}
