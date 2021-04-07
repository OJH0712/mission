/**
 * @desc 根据用户编号获取详情
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.organizationStaff.getStaffInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/organizationStaff/getStaffInfo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
