/**
 * @desc 编号获取调拨单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(code: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/getAllocationMasterByCode/${code}`, {
			method: 'GET',

			...options
		})
	)
}
