/**
 * @desc 新增
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.MediaSocialRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/mediaSocial/add`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
