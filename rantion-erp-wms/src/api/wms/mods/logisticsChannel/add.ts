/**
 * @desc 渠道服务新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsChannelAddRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
