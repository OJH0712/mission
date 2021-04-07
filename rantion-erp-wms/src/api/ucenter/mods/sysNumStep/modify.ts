/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysNumStepRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysNumStep/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
