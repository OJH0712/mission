/**
 * @desc 物流渠道仓库关系新增
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.LogisticsChannelWarehouseRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsChannelWarehouse`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
