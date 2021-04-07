/**
 * @desc 创建出库单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: Array<defs.wms.OutMasterCreateRequestDto>, options?: any) {
	return updateResponse(
		http(URL + `/outMaster`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
