/**
 * @desc 根据二字码查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(secondWord: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCountry/bySecondWord/${secondWord}`, {
			method: 'GET',

			...options
		})
	)
}
