/**
 * @desc 根据产品类型编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(typeNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productType/byUnique/${typeNo}`, {
			method: 'GET',

			...options
		})
	)
}
