/**
 * @desc 调拨单号查询分箱明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/boxdetail/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
