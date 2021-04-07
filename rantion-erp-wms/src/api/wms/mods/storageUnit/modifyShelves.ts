/**
 * @desc 货架修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ShelvesAddRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/modifyShelves`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
