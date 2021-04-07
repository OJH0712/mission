/**
 * @desc 库区修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StorageUnitAreaRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/modifyArea`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
