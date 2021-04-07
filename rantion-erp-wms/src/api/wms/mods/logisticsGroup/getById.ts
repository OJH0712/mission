/**
 * @desc 通过分组编号查询分组信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(logisticsGroupCode: string, options?: any) {
	return updateResponse(
		http(URL + `/logisticsGroup/${logisticsGroupCode}`, {
			method: 'GET',

			...options
		})
	)
}
