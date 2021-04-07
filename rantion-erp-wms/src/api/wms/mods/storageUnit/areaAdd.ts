/**
 * @desc 新增库区
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.StorageUnitAreaRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/storageUnit/areaAdd`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
