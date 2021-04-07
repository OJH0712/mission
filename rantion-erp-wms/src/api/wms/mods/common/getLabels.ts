/**
 * @desc getLabels
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.common.getLabels.Params, options?: any) {
	return updateResponse(
		http(URL + `/common/getLabels`, {
			method: 'GET',
			params,

			...options
		})
	)
}
