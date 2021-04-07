/**
 * @desc 检查ticket有效性
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.TicketCheckRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/sys/user/login/ticketCheck`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
