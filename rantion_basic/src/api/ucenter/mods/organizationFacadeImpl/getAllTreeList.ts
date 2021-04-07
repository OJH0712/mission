/**
 * @desc getAllTreeList
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/organization/getAllTreeList`, {
			method: 'GET',

			...options
		})
	)
}
