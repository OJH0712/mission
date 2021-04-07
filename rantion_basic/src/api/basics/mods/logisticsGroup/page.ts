/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.logisticsGroup.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsGroup/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
