/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationRankRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationRank/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
