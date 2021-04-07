/**
 * @desc 出库称重获取出库单校验明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/weight/${number}`, {
			method: 'GET',

			...options
		})
	)
}
