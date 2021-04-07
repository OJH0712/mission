/**
 * @desc 前端-创建拣货单-筛选出库单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.PickDetailFilterRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/filterPickDetail`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
