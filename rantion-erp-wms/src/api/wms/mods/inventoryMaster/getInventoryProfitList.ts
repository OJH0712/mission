/**
 * @desc 盘点单盘盈列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getInventoryProfitList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/getInventoryProfitList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
