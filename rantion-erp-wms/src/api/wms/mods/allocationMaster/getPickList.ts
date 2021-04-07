/**
 * @desc PDA调拨-获取拣货单拣货数据
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(pickno: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/pick/${pickno}`, {
			method: 'GET',

			...options
		})
	)
}
