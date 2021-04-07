/**
 * @desc 出库单称重
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(dono: string, params: API.wms.outMaster.weight.Params, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/weight/${dono}`, {
			method: 'POST',
			params,

			...options
		})
	)
}
