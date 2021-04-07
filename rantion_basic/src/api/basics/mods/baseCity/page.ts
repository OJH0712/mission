/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseCity.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
