/**
 * @desc 通过pkg确认扫描
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pkg: string, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/scan/${pkg}`, {
			method: 'POST',

			...options
		})
	)
}
