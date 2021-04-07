/**
 * @desc 获取入库单质检信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(number: string, params: API.wms.inMaster.getInspectionInfo.Params, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/inspection/${number}`, {
			method: 'GET',
			params,

			...options
		})
	)
}
