/**
 * @desc 获取详情
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/sysMenuResource/${id}`, {
			method: 'GET',

			...options
		})
	)
}
