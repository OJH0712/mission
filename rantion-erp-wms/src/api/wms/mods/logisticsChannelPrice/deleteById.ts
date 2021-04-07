/**
 * @desc 渠道计费规则删除
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice/${id}`, {
			method: 'DELETE',

			...options
		})
	)
}
