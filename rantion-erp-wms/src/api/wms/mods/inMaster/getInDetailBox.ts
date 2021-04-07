/**
 * @desc 获取入库单打印明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inMaster.getInDetailBox.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/getInDetailBox`, {
			method: 'GET',
			params,

			...options
		})
	)
}
