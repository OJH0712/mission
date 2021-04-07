/**
 * @desc 提交还货数据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(dono: string, body: defs.wms.OutReturnRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/return/${dono}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
