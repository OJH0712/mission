/**
 * @desc 根据分类编码查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(categoryNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productCategroy/list/${categoryNo}`, {
			method: 'GET',

			...options
		})
	)
}
