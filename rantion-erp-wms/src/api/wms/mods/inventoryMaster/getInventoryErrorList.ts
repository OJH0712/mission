/**
 * @desc 盘点误差统计报表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getInventoryErrorList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/getInventoryErrorList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
