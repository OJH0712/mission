/**
 * @desc 出库校验获取出库单明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/check/${number}`, {
			method: 'GET',

			...options
		})
	)
}
