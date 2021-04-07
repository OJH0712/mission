/**
 * @desc deleteById
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/inDetailRecord/${id}`, {
			method: 'DELETE',

			...options
		})
	)
}
