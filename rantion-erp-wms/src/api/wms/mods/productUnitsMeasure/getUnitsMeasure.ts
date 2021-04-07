/**
 * @desc 获取计量单位
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/productUnitsMeasure/getUnitsMeasure`, {
			method: 'GET',

			...options
		})
	)
}
