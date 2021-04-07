/**
 * @desc 获取文件流
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.allocationMaster.getBoxLabel.Params, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/getFileStream`, {
			method: 'GET',
			params,

			...options
		})
	)
}
