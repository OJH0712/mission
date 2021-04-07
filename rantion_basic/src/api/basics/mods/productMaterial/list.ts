/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductMaterialRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaterial/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
