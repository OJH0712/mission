/**
 * @desc getByPicknoAndWaybillNo
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsWaybillLabel.getByPicknoAndWaybillNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsWaybillLabel/waybillLabel`, {
			method: 'GET',
			params,

			...options
		})
	)
}
