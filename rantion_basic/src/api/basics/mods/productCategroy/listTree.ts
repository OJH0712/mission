/**
 * @desc 列表 树结构
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.ProductCategroyRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/productCategroy/list/tree`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
