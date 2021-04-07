/**
 * @desc 修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.ShopDepartmentMappingRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/shopDepartmentMapping`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
