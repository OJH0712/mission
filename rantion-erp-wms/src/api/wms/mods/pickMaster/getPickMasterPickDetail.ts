/**
 * @desc 前端-拣货单明细列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.pickMaster.getPickMasterPickDetail.Params, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/pickDetail`, {
			method: 'GET',
			params,

			...options
		})
	)
}
