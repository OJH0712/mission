/**
 * @desc 包裹分拣新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/packageMaster`, {
			method: 'POST',

			...options
		})
	)
}
