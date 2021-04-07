/**
 * @desc 修改申报价格
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.updateDeclare.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/updateDeclare`, {
			method: 'GET',
			params,

			...options
		})
	)
}
