/**
 * @desc 获取用户信息
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUser.getByUserNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUser/getByUserNo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
