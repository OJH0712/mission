/**
 * @desc 可用仓库列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.warehouse.availableList.Params, options?: any) {
	return updateResponse(
		http(URL + `/warehouse/availableWarehouse`, {
			method: 'GET',
			params,

			...options
		})
	)
}
