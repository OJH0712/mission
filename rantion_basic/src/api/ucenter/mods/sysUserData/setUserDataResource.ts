/**
 * @desc 配置用户数据权限
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserDataRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserData/setUserDataResource`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
