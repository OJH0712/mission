/**
 * @desc 软删除
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/sysNumStep/${id}`, {
			method: 'DELETE',

			...options
		})
	)
}
