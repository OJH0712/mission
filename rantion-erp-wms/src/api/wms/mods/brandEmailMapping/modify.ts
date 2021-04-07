/**
 * @desc 更新
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.BrandEmailMappingRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/brandEmailMapping`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
