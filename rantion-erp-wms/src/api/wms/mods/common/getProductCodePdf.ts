/**
 * @desc 生成产品条码pdf
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.common.getProductCodePdf.Params, options?: any) {
	return updateResponse(
		http(URL + `/common/getProductCodePdf`, {
			method: 'GET',
			params,

			...options
		})
	)
}
