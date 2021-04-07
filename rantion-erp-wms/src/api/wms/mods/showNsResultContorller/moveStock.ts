/**
 * @desc 移库回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StockMoveRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/moveStock`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
