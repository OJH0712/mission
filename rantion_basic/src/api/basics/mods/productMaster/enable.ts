/**
 * @desc 启用 or 停用
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productMaster.enable.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaster/enable`, {
			method: 'POST',
			params,

			...options
		})
	)
}
