/**
 * @desc 根据国家二字码和洲（省）编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(secondWord: string, stateCode: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseState/bySecondWordAndCode/${secondWord}/${stateCode}`, {
			method: 'GET',

			...options
		})
	)
}
