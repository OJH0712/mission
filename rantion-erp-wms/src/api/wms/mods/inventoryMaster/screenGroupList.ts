/**
 * @desc 创建盘点单筛选库位-查询货架组列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.InventoryScreenPositionResponseDto>, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/screenGroupList`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
