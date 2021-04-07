/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationRankRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationRank/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
