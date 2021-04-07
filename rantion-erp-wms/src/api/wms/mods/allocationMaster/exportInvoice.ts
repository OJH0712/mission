/**
 * @desc 调拨单导出发票
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/exportInvoice/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
