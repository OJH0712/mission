/**
 * @desc 修改
 */
const URL = '/rantion-ucenter'
import http, { updateResponse } from '@/http'
export function request(body: defs.ucenter.MediaSocialRequestDto, options?: any) {
	return updateResponse(
		http(URL + `/mediaSocial/update`, {
			method: 'PUT',

			data: body,
			...options
		})
	)
}
