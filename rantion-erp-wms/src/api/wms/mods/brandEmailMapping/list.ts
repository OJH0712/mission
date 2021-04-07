/**
 * @desc 分页查询
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.brandEmailMapping.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/brandEmailMapping`, {
			method: 'GET',
			params,

			...options
		})
	)
}
