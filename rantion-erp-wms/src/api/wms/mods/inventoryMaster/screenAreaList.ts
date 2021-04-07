/**
 * @desc 创建盘点单筛选库位-查询库区列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.screenAreaList.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/screenAreaList`, {
			method: 'POST',
			params,

			...options
		})
	)
}
