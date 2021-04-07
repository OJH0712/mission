/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organization/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
