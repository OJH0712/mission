/**
 * @desc 获取用户关联的Tableau信息
 */
const URL = '/rantion-ucenter'
import { http, updateResponse } from 'rantion-tools'
export function request(params: API.ucenter.sysUserTableau.getTableauByUserNo.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysUserTableau/getTableauByUserNo`, {
			method: 'GET',
			params,

			...options
		})
	)
}
