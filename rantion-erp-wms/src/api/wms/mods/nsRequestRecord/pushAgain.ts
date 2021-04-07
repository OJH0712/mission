/**
 * @desc 失败请求重新推送
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(requestId: string, options?: any) {
	return updateResponse(
		http(URL + `/nsRequestRecord/pushAgain/${requestId}`, {
			method: 'GET',

			...options
		})
	)
}
