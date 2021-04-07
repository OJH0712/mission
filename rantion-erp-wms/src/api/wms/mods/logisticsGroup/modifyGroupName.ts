/**
 * @desc 修改物流分组名称
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(logisticsGroupName: string, body: defs.wms.LogisticsGroupModifyRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/logisticsGroup/groupName/${logisticsGroupName}`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
