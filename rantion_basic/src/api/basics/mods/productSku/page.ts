/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productSku.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productSku/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
