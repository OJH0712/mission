/**
 * @desc 创建盘点单筛选库位-查询库位列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.InventoryScreenPositionResponseDto>, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/screenPositionList`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
