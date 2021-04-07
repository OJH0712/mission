/**
 * @desc 保存
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductTypeRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productType/save`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
