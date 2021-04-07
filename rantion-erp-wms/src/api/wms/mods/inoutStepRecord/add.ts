/**
 * @desc 新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InoutStepRecordRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inoutStepRecord`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
