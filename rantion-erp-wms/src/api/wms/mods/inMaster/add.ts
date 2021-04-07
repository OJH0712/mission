/**
 * @desc 创建入库单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.InMasterCreateRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/inMaster`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
