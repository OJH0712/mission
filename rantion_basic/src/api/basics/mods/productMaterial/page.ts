/**
 * @desc 分页
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productMaterial.page.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaterial/page`, {
			method: 'POST',
			params,

			...options
		})
	)
}
