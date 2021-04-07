/**
 * @desc 修改主体信息
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.MainBodyRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/mainBody/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
