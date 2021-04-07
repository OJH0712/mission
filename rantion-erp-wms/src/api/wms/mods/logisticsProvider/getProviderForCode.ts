/**
 * @desc 根据编号获取渠道商信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(providerCode: string, options?: any) {
	return updateResponse(
		http(URL + `/logisticsProvider/${providerCode}`, {
			method: 'GET',

			...options
		})
	)
}
