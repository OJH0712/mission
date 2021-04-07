/**
 * @desc 调拨单号一键删除分箱信息
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationBox/deleteBox/${aono}`, {
			method: 'GET',

			...options
		})
	)
}
