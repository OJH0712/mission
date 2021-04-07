/**
 * @desc 列表
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.LogisticsGroupAttrRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsGroupAttr/list`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
