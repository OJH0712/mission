/**
 * @desc 分拣包裹明细导出
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.packageMaster.packageDetailReport.Params, options?: any) {
	return updateResponse(
		http(URL + `/packageMaster/packageDetailReport`, {
			method: 'GET',
			params,

			...options
		})
	)
}
