/**
 * @desc PDA-提交拣货数据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pickno: string, body: defs.wms.PickRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/pick/${pickno}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
