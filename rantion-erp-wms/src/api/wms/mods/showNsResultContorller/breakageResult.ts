/**
 * @desc 报损信息回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StorageReportDamageResultNsDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/breakageResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
