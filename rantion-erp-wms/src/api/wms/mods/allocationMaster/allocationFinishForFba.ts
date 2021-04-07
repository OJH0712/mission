/**
 * @desc FBA调拨入库完成回传WMS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/allocationFinishForFBA/${aono}`, {
			method: 'POST',

			...options
		})
	)
}
