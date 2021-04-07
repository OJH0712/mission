/**
 * @desc 更新物流服务关联的计泡基数
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(channelCode: string, providerCode: string, body: defs.wms.CountBubbleUpdateParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/bubbles/${providerCode}/${channelCode}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
