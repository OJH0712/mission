/**
 * @desc 删除
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseCity.deleteOne.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/delete`, {
			method: 'POST',
			params,

			...options
		})
	)
}
