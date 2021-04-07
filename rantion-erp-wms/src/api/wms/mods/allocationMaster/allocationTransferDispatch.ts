/**
 * @desc 调拨单中转发运
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/transferDispatch/${aono}`, {
			method: 'POST',

			...options
		})
	)
}
