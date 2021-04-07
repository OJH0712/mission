/**
 * @desc 列表+详情
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.LogisticsAttrTypeRequestParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsAttrType/list/details`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
