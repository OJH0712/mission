/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationPostRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationPost/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
