/**
 * @desc MongoDB操作数据-更新同步状态
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(body: Array<string>, options?: any) {
	return updateResponse(
		http(URL + `/task/api/upd/mdbData/status`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
