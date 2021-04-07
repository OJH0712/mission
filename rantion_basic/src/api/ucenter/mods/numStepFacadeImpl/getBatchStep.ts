/**
 * @desc getBatchStep
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.numStepFacadeImpl.getBatchStep.Params, options?: any) {
	return updateResponse(
		http(URL + `/numStep/getBatchStep`, {
			method: 'GET',
			params,

			...options
		})
	)
}
