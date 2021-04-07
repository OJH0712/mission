/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.logisticsGroupAttr.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsGroupAttr/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
