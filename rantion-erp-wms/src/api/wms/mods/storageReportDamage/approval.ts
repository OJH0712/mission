/**
 * @desc 审批
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StorageDamagetWorkflowDto, options?: any) {
	return updateResponse(
		http(URL + `/storageReportDamage/approval`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
