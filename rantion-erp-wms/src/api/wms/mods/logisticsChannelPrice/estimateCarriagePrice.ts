/**
 * @desc 渠道运费预估
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPrice.estimateCarriagePrice.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice/estimate/carriagePrice`, {
			method: 'GET',
			params,

			...options
		})
	)
}
