/**
 * @desc 根据单位类型编号和单位编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(unitCode: string, unitTypeCode: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnit/byUnique/${unitTypeCode}/${unitCode}`, {
			method: 'GET',

			...options
		})
	)
}
