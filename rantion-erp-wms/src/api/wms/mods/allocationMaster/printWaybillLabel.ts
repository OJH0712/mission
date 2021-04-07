/**
 * @desc 调拨单打印运单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/printWaybillLabel/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
