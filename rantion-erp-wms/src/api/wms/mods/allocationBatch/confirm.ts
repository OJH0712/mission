/**
 * @desc 通过abno确认绑定
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(abno: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/confirm/${abno}`, {
			method: 'POST',

			...options
		})
	)
}
