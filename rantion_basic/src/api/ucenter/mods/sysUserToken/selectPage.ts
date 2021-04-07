/**
 * @desc 分页查询列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUserToken.selectPage.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserToken/selectPage`, {
			method: 'GET',
			params,

			...options
		})
	)
}
