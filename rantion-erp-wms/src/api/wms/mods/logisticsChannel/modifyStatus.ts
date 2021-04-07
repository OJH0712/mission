/**
 * @desc 修改渠道商状态
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelStatusRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/status/${providerCode}/${channelCode}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
