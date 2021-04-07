/**
 * @desc 创建盘点单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InventoryMasterRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
