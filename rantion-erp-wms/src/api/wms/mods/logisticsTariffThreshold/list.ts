/**
 * @desc 关税起征点配置列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsTariffThreshold.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsTariffThreshold`, {
			method: 'GET',
			params,

			...options
		})
	)
}
