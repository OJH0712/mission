/**
 * @desc 根据ID删除库区
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.storageUnit.deleteAreaById.Params, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/deleteAreaById`, {
			method: 'DELETE',
			params,

			...options
		})
	)
}
