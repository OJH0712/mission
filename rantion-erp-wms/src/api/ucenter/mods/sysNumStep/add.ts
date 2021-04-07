/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.SysNumStepRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysNumStep/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
