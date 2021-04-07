/**
 * @desc 修改面单要求
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsChannelLabelStandardRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/labelStandard`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
