/**
 * @desc 根据物流属性类型编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(attrtypeNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsAttrType/byUnique/${attrtypeNo}`, {
			method: 'GET',

			...options
		})
	)
}
