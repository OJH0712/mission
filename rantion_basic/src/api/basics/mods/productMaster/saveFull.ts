/**
 * @desc 保存(spu+sku)
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductMasterRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaster/saveFull`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
