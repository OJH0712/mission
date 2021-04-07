/**
 * @desc 渠道计费规则报表导入
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: string, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice/import`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
