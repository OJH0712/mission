/**
 * @desc 调拨单导出装箱单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/exportBoxingBill/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
