/**
 * @desc 仓库列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.warehouse.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/warehouse`, {
			method: 'GET',
			params,

			...options
		})
	)
}
