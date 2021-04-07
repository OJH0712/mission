/**
 * @desc 盘点结果回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.InventoryMasterResultNsDto>, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/inventoryMasterResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
