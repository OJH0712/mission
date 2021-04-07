/**
 * @desc 设置用户关联Tableau信息
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(body: defs.ucenter.SysUserTableauRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/setTableauInfo`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
