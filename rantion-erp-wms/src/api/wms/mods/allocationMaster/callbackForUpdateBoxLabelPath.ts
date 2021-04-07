/**
 * @desc NS-回传调拨单箱外标签文件
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.NsCallbackForUpdateBoxRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/callbackForBox`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
