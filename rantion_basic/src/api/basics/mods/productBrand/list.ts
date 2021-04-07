/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductBrandRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productBrand/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
