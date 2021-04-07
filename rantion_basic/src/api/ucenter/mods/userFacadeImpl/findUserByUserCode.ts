/**
 * @desc findUserByUserCode
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.userFacadeImpl.findUserByUserCode.Params, options?: any) {
	return updateResponse(
		http(URL + `/user/findUserByUserCode`, {
			method: 'GET',
			params,

			...options
		})
	)
}
