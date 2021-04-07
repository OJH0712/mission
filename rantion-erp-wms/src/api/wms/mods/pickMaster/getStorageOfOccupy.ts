/**
 * @desc 查看库存占用
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.pickMaster.getStorageOfOccupy.Params, options?: any) {
	return updateResponse(
		http(URL + `/pickMaster/getStorageOfOccupy`, {
			method: 'GET',
			params,

			...options
		})
	)
}
