/**
 * @desc test
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/test`, {
			method: 'GET',

			...options
		})
	)
}
