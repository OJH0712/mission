/**
 * @desc 盘点单结果盘点
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InventoryDetailResultStatisticsRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/reslut`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
