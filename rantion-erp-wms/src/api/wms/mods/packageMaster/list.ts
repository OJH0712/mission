/**
 * @desc 包裹分拣管理分页查询
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.packageMaster.list.Params, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster`, {
			method: 'GET',
			params,

			...options
		})
	)
}
