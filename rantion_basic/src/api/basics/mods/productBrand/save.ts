/**
 * @desc 保存
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductBrandRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productBrand/save`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
