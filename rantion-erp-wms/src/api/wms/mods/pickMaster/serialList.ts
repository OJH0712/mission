/**
 * @desc 前端-拣货单明细序列
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pickno: string, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/serial/${pickno}`, {
			method: 'GET',

			...options
		})
	)
}
