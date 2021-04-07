/**
 * @desc 设置用户登录首页
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserDataRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserData/setUserHomePage`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
