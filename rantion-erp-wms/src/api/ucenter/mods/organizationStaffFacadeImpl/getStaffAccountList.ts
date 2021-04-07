/**
 * @desc getStaffAccountList
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.organizationStaffFacadeImpl.getStaffAccountList.Params, options?: any) {
	return updateResponse(
		http(URL + `/organizationStaff/getStaffAccountList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
