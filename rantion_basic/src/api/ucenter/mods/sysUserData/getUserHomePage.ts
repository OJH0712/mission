/**
 * @desc 获取用户登录首页
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(userNo: string, options?: any) {
	return updateResponse(
		http(URL + `/sysUserData/getUserHomePage/${userNo}`, {
			method: 'GET',

			...options
		})
	)
}
