/**
 * @desc 查询列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysMenuResource.selectList.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysMenuResource/selectList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
