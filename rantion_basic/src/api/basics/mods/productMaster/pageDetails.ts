/**
 * @desc 分页+明细
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.basics.productMaster.pageDetails.Params, options?: any) {
	return updateResponse(
		http(URL + `/basics/productMaster/page/details`, {
			method: 'POST',
			params,

			...options
		})
	)
}
