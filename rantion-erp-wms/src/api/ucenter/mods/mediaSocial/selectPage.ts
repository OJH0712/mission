/**
 * @desc 分页查询列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.mediaSocial.selectPage.Params, options?: any) {
	return updateResponse(
		http(URL + `/mediaSocial/selectPage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
