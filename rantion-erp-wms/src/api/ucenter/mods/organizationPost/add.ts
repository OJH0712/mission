/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationPostRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationPost/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
