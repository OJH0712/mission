/**
 * @desc 根据货架组编号查询库位
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.StorageLocationListRequestDto>, options?: any) {
	return updateResponse(
		http(URL + `/warehousePosition/storageLocationList`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
