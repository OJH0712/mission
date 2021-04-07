/**
 * @desc 根据盘点单获取库位列表信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.getPositionCodeList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/positonList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
