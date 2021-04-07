/**
 * @desc 物流渠道仓库关系根据id删除
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(id: number, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelWarehouse/${id}`, {
			method: 'DELETE',

			...options
		})
	)
}
