/**
 * @desc 保存
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.BaseCountryRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCountry/save`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
