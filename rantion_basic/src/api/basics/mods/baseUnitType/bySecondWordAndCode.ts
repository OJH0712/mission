/**
 * @desc 根据单位类型编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(unitTypeCode: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnitType/bySecondWordAndCode/${unitTypeCode}`, {
			method: 'GET',

			...options
		})
	)
}
