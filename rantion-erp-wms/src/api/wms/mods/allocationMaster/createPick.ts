/**
 * @desc 生成拣货单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/createPick/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
