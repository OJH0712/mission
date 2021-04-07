/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.OrganizationLevelRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationLevel/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
