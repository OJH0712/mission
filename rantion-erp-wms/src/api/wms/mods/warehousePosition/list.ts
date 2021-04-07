/**
 * @desc 库位列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.warehousePosition.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/warehousePosition`, {
			method: 'GET',
			params,

			...options
		})
	)
}
