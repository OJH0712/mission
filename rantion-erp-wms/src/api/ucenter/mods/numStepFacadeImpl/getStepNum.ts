/**
 * @desc getStepNum
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.numStepFacadeImpl.getStepNum.Params, options?: any) {
	return updateResponse(
		http(URL + `/numStep/getStepNum`, {
			method: 'GET',
			params,

			...options
		})
	)
}
