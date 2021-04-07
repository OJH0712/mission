/**
 * @desc 虚拟库存列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.nsStorage.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/nsStorage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
