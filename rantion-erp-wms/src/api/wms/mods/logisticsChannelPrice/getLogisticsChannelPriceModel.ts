/**
 * @desc 根据渠道商编号和渠道编号查询
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelPrice.getLogisticsChannelPriceModel.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelPrice/getLogisticsChannelPriceModel`, {
			method: 'POST',
			params,

			...options
		})
	)
}
