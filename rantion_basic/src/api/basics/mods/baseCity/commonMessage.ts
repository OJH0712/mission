/**
 * @desc commonMessage
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(a: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/commonMessage/${a}`, {
			method: 'GET',

			...options
		})
	)
}
