/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductTypeRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productType/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
