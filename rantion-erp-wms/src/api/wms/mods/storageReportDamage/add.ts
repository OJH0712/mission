/**
 * @desc 创建库存报损单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StorageReportDamageRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/storageReportDamage`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
