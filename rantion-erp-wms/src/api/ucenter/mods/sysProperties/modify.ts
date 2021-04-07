/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysPropertiesRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysProperties/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
