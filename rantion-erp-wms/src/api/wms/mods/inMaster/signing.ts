/**
 * @desc 入库单签收
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<number>, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/signing`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
