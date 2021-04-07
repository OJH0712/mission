/**
 * @desc 分页 树结构
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productCategroy.pageTree.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productCategroy/page/tree`, {
			method: 'POST',
			params,

			...options
		})
	)
}
