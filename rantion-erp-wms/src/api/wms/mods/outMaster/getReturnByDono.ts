/**
 * @desc 获取出库单还货数据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(code: string, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/return/${code}`, {
			method: 'GET',

			...options
		})
	)
}
