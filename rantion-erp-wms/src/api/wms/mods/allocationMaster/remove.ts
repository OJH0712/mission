/**
 * @desc 删除调拨单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<string>, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/delete`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
