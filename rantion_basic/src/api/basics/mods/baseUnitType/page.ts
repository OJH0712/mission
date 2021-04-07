/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseUnitType.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnitType/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
