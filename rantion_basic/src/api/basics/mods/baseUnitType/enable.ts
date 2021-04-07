/**
 * @desc 启用 or 停用
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.baseUnitType.enable.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseUnitType/enable`, {
			method: 'POST',
			params,

			...options
		})
	)
}
