/**
 * @desc 生成装箱单Excel
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(redisId: string, options?: any) {
	return updateResponse(
		http(URL + `/common/export/getBoxingReportExcel/${redisId}`, {
			method: 'GET',

			...options
		})
	)
}
