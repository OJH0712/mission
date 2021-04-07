/**
 * @desc 创建异常SKU盘点单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InventoryCreateForSkuRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/createForSku`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
