/**
 * @desc 启用 or 停用
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseState.enable.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseState/enable`, {
			method: 'POST',
			params,

			...options
		})
	)
}
