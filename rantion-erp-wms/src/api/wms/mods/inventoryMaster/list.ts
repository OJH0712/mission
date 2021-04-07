/**
 * @desc 盘点单列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
