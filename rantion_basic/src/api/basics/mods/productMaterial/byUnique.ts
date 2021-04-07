/**
 * @desc 根据产品材质编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(materialNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaterial/byUnique/${materialNo}`, {
			method: 'GET',

			...options
		})
	)
}
