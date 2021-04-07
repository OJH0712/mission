/**
 * @desc 保存
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductSkuRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productSku/save`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
