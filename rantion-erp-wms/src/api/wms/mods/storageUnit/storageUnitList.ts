/**
 * @desc 获取库区and货架and货架组列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.storageUnit.storageUnitList.Params, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/getStorageUnitList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
