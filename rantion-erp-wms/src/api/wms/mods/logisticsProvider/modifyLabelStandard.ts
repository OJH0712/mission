/**
 * @desc 修改面单要求
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(providerCode: string, params: API.wms.logisticsProvider.modifyLabelStandard.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsProvider/labelStandard/${providerCode}`, {
			method: 'PUT',
			params,

			...options
		})
	)
}
