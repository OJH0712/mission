/**
 * @desc fono获取报损单信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.storageReportDamage.getStorageReportDamage.Params, options?: any) {
	return updateResponse(
		http(URL + `/storageReportDamage/getStorageReportDamage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
