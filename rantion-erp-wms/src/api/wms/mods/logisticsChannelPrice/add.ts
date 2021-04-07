/**
 * @desc 渠道计费规则新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsChannelPriceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
