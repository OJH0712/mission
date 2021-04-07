/**
 * @desc 生成交货单Excel
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(redisId: string, options?: any) {
	return updateResponse(
		http(URL + `/common/export/getDeliveryNoteExcel/${redisId}`, {
			method: 'GET',

			...options
		})
	)
}
