/**
 * @desc 删除盘点单
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(icno: string, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/${icno}`, {
			method: 'DELETE',

			...options
		})
	)
}
