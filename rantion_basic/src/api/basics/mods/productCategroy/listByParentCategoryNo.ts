/**
 * @desc 根据父分类编码查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(parentCategoryNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productCategroy/list/parent/${parentCategoryNo}`, {
			method: 'GET',

			...options
		})
	)
}
