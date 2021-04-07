/**
 * @desc 保存
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.BaseCityRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/save`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
