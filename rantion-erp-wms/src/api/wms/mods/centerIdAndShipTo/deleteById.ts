/**
 * @desc 删除
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/centerCountyMapping/${id}`, {
			method: 'DELETE',

			...options
		})
	)
}
