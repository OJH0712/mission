/**
 * @desc 新增主体
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.MainBodyRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/mainBody/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
