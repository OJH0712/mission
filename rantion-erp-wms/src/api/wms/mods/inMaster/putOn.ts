/**
 * @desc 入库单上架
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterPutOnRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inMaster/putOn`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
