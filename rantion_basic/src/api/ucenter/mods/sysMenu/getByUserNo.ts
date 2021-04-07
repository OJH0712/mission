/**
 * @desc 获取用户菜单列表
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(userNo: string, options?: any) {
	return updateResponse(
		http(URL + `/sysMenu/source/${userNo}`, {
			method: 'GET',

			...options
		})
	)
}
