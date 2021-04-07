/**
 * @desc 关税起征点配置查看详情
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/logisticsTariffThreshold/${id}`, {
			method: 'GET',

			...options
		})
	)
}
