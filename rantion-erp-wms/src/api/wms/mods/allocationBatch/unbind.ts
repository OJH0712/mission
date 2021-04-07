/**
 * @desc 通过abno取消绑定
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(abno: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/unbind/${abno}`, {
			method: 'POST',

			...options
		})
	)
}
