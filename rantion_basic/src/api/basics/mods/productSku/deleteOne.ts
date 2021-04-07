/**
 * @desc 删除
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productSku.deleteOne.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productSku/delete`, {
			method: 'POST',
			params,

			...options
		})
	)
}
