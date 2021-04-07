/**
 * @desc 根据ID查询库位
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/warehousePosition/${id}`, {
			method: 'GET',

			...options
		})
	)
}
