/**
 * @desc 库位修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.WarehousePositionRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/warehousePosition`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
