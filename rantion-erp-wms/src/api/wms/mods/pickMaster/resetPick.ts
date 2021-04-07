/**
 * @desc PDA-重置拣货数据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pickno: string, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/resetPick/${pickno}`, {
			method: 'POST',

			...options
		})
	)
}
