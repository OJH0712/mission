/**
 * @desc 根据ID删除货架
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.storageUnit.deleteShelvesById.Params, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/deleteShelvesById`, {
			method: 'DELETE',
			params,

			...options
		})
	)
}
