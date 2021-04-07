/**
 * @desc 修改仓库
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.WarehouseRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/warehouse`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
