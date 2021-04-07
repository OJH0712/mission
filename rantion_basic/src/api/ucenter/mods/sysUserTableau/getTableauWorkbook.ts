/**
 * @desc 获取工作簿
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUserTableau.getTableauWorkbook.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/getTableauWorkbook`, {
			method: 'GET',
			params,

			...options
		})
	)
}
