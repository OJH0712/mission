/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-08 20:33:31
 * @LastEditTime: 2021-03-08 21:04:44
 */
/**
 * @desc 退件签收
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(dono: string, body: defs.wms.OutReturnSignRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/outMaster/signing/${dono}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
