/**
 * @desc add
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.OutMasterCreateFromSaleRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/outStorage/outStorage/outPlan`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
