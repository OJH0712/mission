/**
 * @desc 批量失败请求重新推送
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<string>, options?: any) {
	return updateResponse(
		http(URL + `/nsRequestRecord/pushAgainBatch`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
