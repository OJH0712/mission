/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.OrganizationRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organization/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
