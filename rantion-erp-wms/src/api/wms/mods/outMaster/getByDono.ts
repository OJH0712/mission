/**
 * @desc 出库单详情
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(dono: string, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/${dono}`, {
			method: 'GET',

			...options
		})
	)
}
