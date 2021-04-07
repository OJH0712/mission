/**
 * @desc 修改渠道商状态
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(providerCode: string, params: API.wms.logisticsProvider.modifyStatus.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsProvider/status/${providerCode}`, {
			method: 'PUT',
			params,

			...options
		})
	)
}
