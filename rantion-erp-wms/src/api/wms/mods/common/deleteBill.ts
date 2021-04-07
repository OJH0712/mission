/**
 * @desc 临时删除单据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.DeleteBillRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/common/deleteBill`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
