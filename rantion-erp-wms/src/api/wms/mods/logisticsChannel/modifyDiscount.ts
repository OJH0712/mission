/**
 * @desc 修改渠道商折扣
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelDiscountRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/discount/${providerCode}/${channelCode}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
