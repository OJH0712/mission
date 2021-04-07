/**
 * @desc 关税起征点配置新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsTariffThresholdRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsTariffThreshold`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
