/**
 * @desc 分拣包裹确认发货
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pkg: string, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/confirm/${pkg}`, {
			method: 'GET',

			...options
		})
	)
}
