/**
 * @desc tableauTrust
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(userNo: string, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/tableauTrust/${userNo}`, {
			method: 'GET',

			...options
		})
	)
}
