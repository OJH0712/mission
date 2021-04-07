/**
 * @desc 物流商维度批量对物流仓库关系进行维护
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.BatchUpdateLogisticsWareParamsDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelWarehouse/batchByLogisticsPro`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
