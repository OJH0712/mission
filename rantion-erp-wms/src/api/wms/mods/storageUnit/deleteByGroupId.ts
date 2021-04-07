/**
 * @desc 根据ID删除货架组
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.storageUnit.deleteByGroupId.Params, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/deleteByGroupId`, {
			method: 'DELETE',
			params,

			...options
		})
	)
}
