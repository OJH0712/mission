/**
 * @desc 查询该物流商的该物流渠道对应的运输方式
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/logisticsShippingType/${providerCode}/${channelCode}`, {
			method: 'GET',

			...options
		})
	)
}
