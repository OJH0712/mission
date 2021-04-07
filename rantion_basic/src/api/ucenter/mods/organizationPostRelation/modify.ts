/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.OrganizationPostRelationRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationPostRelation/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
