/**
 * @desc 渠道计费规则修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsChannelPriceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
