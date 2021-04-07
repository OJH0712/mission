/**
 * @desc getUserListByRoleId
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.userFacadeImpl.getUserListByRoleId.Params, options?: any) {
	return updateResponse(
		http(URL + `/user/findUserByRoleId`, {
			method: 'GET',
			params,

			...options
		})
	)
}
