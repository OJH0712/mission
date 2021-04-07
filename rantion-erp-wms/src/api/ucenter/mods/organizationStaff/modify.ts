/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.OrganizationStaffRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/organizationStaff/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
