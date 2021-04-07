/**
 * @desc getWaybillLabelMerge
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<string>, options?: any) {
	return updateResponse(
		http(URL + `/logisticsWaybillLabel/getWaybillLabelMerge`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
