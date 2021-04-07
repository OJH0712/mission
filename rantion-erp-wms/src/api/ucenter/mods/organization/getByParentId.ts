/**
 * @desc 获取下一级组织架构信息
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(parentId: number, options?: any) {
	return updateResponse(
		http(URL + `/organization/getChild/${parentId}`, {
			method: 'GET',

			...options
		})
	)
}
