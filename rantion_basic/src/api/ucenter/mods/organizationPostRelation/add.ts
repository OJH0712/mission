/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.OrganizationPostRelationRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationPostRelation/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
