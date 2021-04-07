/**
 * @desc getLabel
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.common.getLabel.Params, options?: any) {
	return updateResponse(
		http(URL + `/common/getLabel`, {
			method: 'GET',
			params,

			...options
		})
	)
}
