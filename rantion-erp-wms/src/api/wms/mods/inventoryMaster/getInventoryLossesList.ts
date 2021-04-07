/**
 * @desc 盘点单盘亏列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getInventoryLossesList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/getInventoryLossesList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
