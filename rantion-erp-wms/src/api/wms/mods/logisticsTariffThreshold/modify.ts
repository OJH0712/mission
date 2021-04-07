/**
 * @desc 关税起征点配置修改
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsTariffThresholdRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsTariffThreshold`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
