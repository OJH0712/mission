/**
 * @desc 审批
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ProductWorkflowDto, options?: any) {
	return updateResponse(
		http(URL + `/product/approval`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
