/**
 * @desc 导出交货单Excel
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(deliveryNo: string, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/export/getDeliveryNoteExcel/${deliveryNo}`, {
			method: 'GET',

			...options
		})
	)
}
