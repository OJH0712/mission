/**
 * @desc 分页查询列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.organizationPost.selectPage.Params, options?: any) {
	return updateResponse(
		http(URL + `/organizationPost/selectPage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
