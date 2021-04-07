/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.BaseUnitRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnit/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
