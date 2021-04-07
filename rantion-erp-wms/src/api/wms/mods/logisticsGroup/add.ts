/**
 * @desc 添加新的分组
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsGroupRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsGroup`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
