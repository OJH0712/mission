/**
 * @desc 单号查询入库单收货明细信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/receiving/${number}`, {
			method: 'GET',

			...options
		})
	)
}
