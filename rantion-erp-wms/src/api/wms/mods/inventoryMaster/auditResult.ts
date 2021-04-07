/**
 * @desc 发起盘点结果审核
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InventoryMasterRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/auditResult`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
