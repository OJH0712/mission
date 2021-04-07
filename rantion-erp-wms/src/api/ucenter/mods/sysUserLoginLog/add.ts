/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysUserLoginLogRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserLoginLog/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
