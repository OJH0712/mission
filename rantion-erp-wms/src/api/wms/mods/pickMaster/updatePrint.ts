/**
 * @desc 前端-更新拣货单打印信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pickno: string, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/updatePrint/${pickno}`, {
			method: 'GET',

			...options
		})
	)
}
