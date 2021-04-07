/**
 * @desc 修改渠道信息维护
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelMsgRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/channelGroupMsg/${providerCode}/${channelCode}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
