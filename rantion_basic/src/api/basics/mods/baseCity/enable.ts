/**
 * @desc 启用 or 停用
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseCity.enable.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/enable`, {
			method: 'POST',
			params,

			...options
		})
	)
}
