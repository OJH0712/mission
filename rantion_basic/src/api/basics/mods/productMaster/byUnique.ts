/**
 * @desc 查询单个产品信息
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(productNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaster/byUnique/${productNo}`, {
			method: 'POST',

			...options
		})
	)
}
