/**
 * @desc 保存交货单body至redis
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(redisId: string, body: defs.wms.DeliveryNoteExcelRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/common/setDeliveryBodyByRedis/${redisId}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
