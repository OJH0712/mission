/**
 * @desc MongoDB操作数据-获取
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.basics.TaskGetDataRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/task/api/get/mdbData`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
