/**
 * @desc pkg号查询包裹分拣信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pkg: string, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/package/${pkg}`, {
			method: 'GET',

			...options
		})
	)
}
