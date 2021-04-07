/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.OrganizationRankRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationRank/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
