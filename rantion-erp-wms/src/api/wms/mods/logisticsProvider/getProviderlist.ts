/**
 * @desc 获取渠道商列表-不分页
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsProvider.getProviderlist.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsProvider/channelList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
