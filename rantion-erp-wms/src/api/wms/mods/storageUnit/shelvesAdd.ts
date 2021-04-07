/**
 * @desc 新增货架&货架组
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ShelvesAddRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/shelvesAdd`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
