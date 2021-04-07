/**
 * @desc hello2
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(a: string, params: API.basics.baseCity.hello2.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/123/${a}`, {
			method: 'GET',
			params,

			...options
		})
	)
}
