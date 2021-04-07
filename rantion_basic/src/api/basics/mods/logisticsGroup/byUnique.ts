/**
 * @desc 根据物流属性分组编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(groupNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsGroup/byUnique/${groupNo}`, {
			method: 'GET',

			...options
		})
	)
}
