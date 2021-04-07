/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysMenuResourceRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysMenuResource/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
