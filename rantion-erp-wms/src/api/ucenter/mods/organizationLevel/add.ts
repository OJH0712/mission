/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationLevelRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationLevel/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
