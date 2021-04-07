/**
 * @desc 获取单位类型
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(measureCode: string, options?: any) {
	return updateResponse(
		http(URL + `/productUnitsMeasure/getUnitsType/${measureCode}`, {
			method: 'GET',

			...options
		})
	)
}
