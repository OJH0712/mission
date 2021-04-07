/**
 * @desc 列表+明细
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductMasterRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaster/list/details`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
