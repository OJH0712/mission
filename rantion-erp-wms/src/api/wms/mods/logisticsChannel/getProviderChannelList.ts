/**
 * @desc 查询供货商-渠道信息列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannel.getProviderChannelList.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/providerChannelList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
