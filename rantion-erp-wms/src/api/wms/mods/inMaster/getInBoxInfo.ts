/**
 * @desc 获取入库箱号信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inMaster.getInBoxInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/getInBoxInfo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
