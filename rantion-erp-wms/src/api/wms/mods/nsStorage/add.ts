/**
 * @desc 新增虚拟库存
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.NsStorageRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/nsStorage`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
