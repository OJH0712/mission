/**
 * @desc 驳回盘点单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.reject.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/reject`, {
			method: 'PUT',
			params,

			...options
		})
	)
}
