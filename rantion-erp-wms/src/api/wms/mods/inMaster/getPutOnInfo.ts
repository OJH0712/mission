/**
 * @desc 获取入库单上架信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, params: API.wms.inMaster.getPutOnInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/putOn/${number}`, {
			method: 'GET',
			params,

			...options
		})
	)
}
