/**
 * @desc 前端-获取出库单信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.pickMaster.getOutInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/outInfo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
