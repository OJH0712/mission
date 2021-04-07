/**
 * @desc 移库
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StockMoveRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/move`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
