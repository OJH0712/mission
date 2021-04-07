/**
 * @desc 根据物流商编号查询渠道信息列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(providerCode: string, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannel/channelList/${providerCode}`, {
			method: 'GET',

			...options
		})
	)
}
