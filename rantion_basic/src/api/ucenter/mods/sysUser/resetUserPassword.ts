/**
 * @desc 批量重置用户密码
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: Array<string>, options?: any) {
	return updateResponse(
		http(URL + `/sysUser/resetUserPassword`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
