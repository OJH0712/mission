/**
 * @desc 创建用户
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysUserRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUser/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
