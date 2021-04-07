/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysPropertiesRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysProperties/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
