/**
 * @desc 生成产品欧代pdf
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.common.getProductEuPdf.Params, options?: any) {
	return updateResponse(
		http(URL + `/common/getProductEuPdf`, {
			method: 'GET',
			params,

			...options
		})
	)
}
