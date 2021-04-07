/**
 * @desc 修改渠道服务对应的运输方式
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsShippingTypeRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/logisticsShippingType/${providerCode}/${channelCode}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
