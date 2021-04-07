/**
 * @desc 分页查询列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.organizationPostRelation.selectPage.Params, options?: any) {
	return updateResponse(
		http(URL + `/organizationPostRelation/selectPage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
