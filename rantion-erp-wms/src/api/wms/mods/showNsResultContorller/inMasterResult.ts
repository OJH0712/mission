/**
 * @desc 入库结果回传NS
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterResultDto, options?: any) {
	return updateResponse(
		http(URL + `/showNsResult/inMasterResult`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
