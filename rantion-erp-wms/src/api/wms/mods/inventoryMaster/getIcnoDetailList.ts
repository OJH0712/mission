/**
 * @desc 盘点单明细列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getIcnoDetailList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/getIcnoDetailList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
