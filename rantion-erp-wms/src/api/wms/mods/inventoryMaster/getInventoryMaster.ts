/**
 * @desc icno获取盘点单信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getInventoryMaster.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/getInventoryMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
