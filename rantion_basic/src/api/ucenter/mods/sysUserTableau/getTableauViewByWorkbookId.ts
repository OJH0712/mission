/**
 * @desc 获取视图
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUserTableau.getTableauViewByWorkbookId.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/getTableauViewByWorkbookId`, {
			method: 'GET',
			params,

			...options
		})
	)
}
