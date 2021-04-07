/**
 * @desc getById
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/inDetailRecord/${id}`, {
			method: 'GET',

			...options
		})
	)
}
