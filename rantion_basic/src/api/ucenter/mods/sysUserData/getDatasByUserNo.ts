/**
 * @desc 根据userNo查询数据权限
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(userNo: string, options?: any) {
	return updateResponse(
		http(URL + `/sysUserData/getDatasByUserNo/${userNo}`, {
			method: 'GET',

			...options
		})
	)
}
