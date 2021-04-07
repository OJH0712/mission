/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysMenuRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysMenu/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
