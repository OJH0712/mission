/**
 * @desc 确认盘点单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.affirm.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/affirm`, {
			method: 'PUT',
			params,

			...options
		})
	)
}
