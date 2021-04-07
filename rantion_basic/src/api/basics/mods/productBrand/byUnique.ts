/**
 * @desc 根据品牌编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(brandNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/productBrand/byUnique/${brandNo}`, {
			method: 'GET',

			...options
		})
	)
}
