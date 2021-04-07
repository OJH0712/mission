/**
 * @desc 前端-创建拣货单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.PickAddRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
