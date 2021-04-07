/**
 * @desc 平台映射关系批量修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: Array<defs.wms.LogisticsChannelPlatformRequestDto>, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPlatform/${providerCode}/${channelCode}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
