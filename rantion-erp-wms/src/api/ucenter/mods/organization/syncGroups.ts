/**
 * @desc 同步组织架构分组
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/organization/syncGroups`, {
			method: 'GET',

			...options
		})
	)
}
