/**
 * @desc 获取树形组织架构列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.organization.getTreeList.Params, options?: any) {
	return updateResponse(
		http(URL + `/organization/getTreeList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
