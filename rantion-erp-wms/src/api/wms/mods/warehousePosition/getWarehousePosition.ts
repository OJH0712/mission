/**
 * @desc 根据库位编号查询明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(positionCode: string, options?: any) {
	return updateResponse(
		http(URL + `/warehousePosition/position/${positionCode}`, {
			method: 'GET',

			...options
		})
	)
}
