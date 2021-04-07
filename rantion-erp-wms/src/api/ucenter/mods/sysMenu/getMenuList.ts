/**
 * @desc 获取菜单树形列表
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(params: API.ucenter.sysMenu.getMenuList.Params, options?: any) {
	return updateResponse(
		http(URL + `/sysMenu/getMenuList`, {
			method: 'GET',
			params,

			...options
		})
	)
}
