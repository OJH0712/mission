/**
 * @desc 根据ID查询仓库
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/warehouse/${id}`, {
			method: 'GET',

			...options
		})
	)
}
