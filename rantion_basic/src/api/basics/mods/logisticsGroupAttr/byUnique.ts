/**
 * @desc 根据物流属性分组编号、物流属性类型编号和物流属性编号查询
 */
const URL = '/rantion-basics'
import { http, updateResponse } from 'rantion-tools'
export function request(attrNo: string, attrtypeNo: string, groupNo: string, options?: any) {
	return updateResponse(
		http(URL + `/basics/logisticsGroupAttr/byUnique/${groupNo}/${attrtypeNo}/${attrNo}`, {
			method: 'GET',

			...options
		})
	)
}
