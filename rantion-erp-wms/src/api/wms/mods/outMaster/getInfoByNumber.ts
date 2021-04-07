/**
 * @desc 运单号/出库单号/跟踪单号 退件签收查询出库单信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/signing/${number}`, {
			method: 'GET',

			...options
		})
	)
}
