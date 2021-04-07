/**
 * @desc 调拨单号查询SKU明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/allocationetail/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
