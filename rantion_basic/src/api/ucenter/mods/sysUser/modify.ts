/**
 * @desc 修改用户信息
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUser/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
