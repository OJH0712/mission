/**
 * @desc 新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.BrandEmailMappingRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/brandEmailMapping`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
