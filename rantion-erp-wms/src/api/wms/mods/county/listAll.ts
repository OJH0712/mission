/**
 * @desc 获取国家列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.county.listAll.Params, options?: any) {
	return updateResponse(
		http(URL + `/county/all`, {
			method: 'GET',
			params,

			...options
		})
	)
}
