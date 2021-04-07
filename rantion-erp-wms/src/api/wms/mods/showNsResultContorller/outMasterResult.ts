/**
 * @desc 出库结果回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.OutMasterResultNsDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/outMasterResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
