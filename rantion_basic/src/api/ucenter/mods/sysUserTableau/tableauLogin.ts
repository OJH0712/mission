/**
 * @desc Tableau登录
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserTableauRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/tableauLogin`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
