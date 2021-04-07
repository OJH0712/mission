/**
 * @desc 物流渠道仓库关系列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.logisticsChannelWarehouse.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelWarehouse`, {
			method: 'GET',
			params,

			...options
		})
	)
}
