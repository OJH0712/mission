/**
 * @desc 调拨单中转签收
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/transferSign/${aono}`, {
			method: 'POST',

			...options
		})
	)
}
