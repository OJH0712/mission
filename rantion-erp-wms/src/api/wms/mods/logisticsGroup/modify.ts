/**
 * @desc 修改分组状态，禁用/启用
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(status: number, body: defs.wms.LogisticsGroupModifyRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsGroup/${status}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
