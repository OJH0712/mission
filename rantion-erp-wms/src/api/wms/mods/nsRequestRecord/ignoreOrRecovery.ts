/**
 * @desc 忽略/恢复 请求记录
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(requestId: string, options?: any) {
	return updateResponse(
		http(URL + `/nsRequestRecord/ignoreOrRecovery/${requestId}`, {
			method: 'GET',

			...options
		})
	)
}
