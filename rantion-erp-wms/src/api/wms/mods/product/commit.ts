/**
 * @desc 提交审批
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ProductWorkflowDto, options?: any) {
	return updateResponse(
		http(URL + `/product/commit`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
