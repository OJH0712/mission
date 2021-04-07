/**
 * @desc getRoleByUserCode
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.userFacadeImpl.getRoleByUserCode.Params, options?: any) {
	return updateResponse(
		http(URL + `/user/findRoleByUserCode`, {
			method: 'GET',
			params,

			...options
		})
	)
}
