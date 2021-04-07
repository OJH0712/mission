/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.BaseUnitTypeRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnitType/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
