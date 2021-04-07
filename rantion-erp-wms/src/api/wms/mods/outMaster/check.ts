/**
 * @desc 出库单校验
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(dono: string, body: Array<defs.wms.OutDetailCheckRequestDto>, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/check/${dono}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
