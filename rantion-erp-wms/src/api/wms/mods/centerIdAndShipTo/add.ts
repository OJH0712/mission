/**
 * @desc 新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.CenterCountyMappingRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/centerCountyMapping`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
