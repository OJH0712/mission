/**
 * @desc 根据用户编号获取详情
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(userNo: string, options?: any) {
	return updateResponse(
		http(URL + `/mediaSocial/getByUserNo/${userNo}`, {
			method: 'GET',

			...options
		})
	)
}
