/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationStaffRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationStaff/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
