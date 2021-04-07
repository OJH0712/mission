/**
 * @desc 保存装箱单body至redis
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(redisId: string, body: defs.wms.AllocationMasterBoxingReportDto, options?: any) {
	return updateResponse(
		http(URL + `/common/setBoxingReportBodyByRedis/${redisId}`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
