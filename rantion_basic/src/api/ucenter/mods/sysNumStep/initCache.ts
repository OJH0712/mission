/**
 * @desc 缓存刷新
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(options?: any) {
	return updateResponse(
		http(URL + `/sysNumStep/initCache`, {
			method: 'GET',

			...options
		})
	)
}
