/**
 * @desc getUserByCode
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.userFacadeImpl.getUserByCode.Params, options?: any) {
	return updateResponse(
		http(URL + `/user/userByCode`, {
			method: 'GET',
			params,

			...options
		})
	)
}
