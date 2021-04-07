/**
 * @desc 根据洲（省）和城市编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(cityCode: string, stateCode: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/baseCity/byStateAndCityCode/${stateCode}/${cityCode}`, {
			method: 'GET',

			...options
		})
	)
}
