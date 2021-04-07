/**
 * @desc 调拨批次号查询明细
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(abno: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationBatch/${abno}`, {
			method: 'GET',

			...options
		})
	)
}
