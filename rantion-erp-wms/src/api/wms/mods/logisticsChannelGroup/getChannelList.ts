/**
 * @desc 根据分组id查询对应的渠道列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelGroup.getChannelList.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelGroup/channelList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
