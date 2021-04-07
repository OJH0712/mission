/**
 * @desc 物流渠道仓库关系按id查询一个
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelWarehouse/${id}`, {
			method: 'GET',

			...options
		})
	)
}
