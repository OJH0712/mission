/**
 * @desc 记录镜像数据并返回库位盘点产品列表
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(params: API.wms.inventoryMaster.rocordMsgAndGetProductLsit.Params, options?: any) {
	return updateResponse(
		http(URL + `/inventoryMaster/record`, {
			method: 'POST',
			params,

			...options
		})
	)
}
