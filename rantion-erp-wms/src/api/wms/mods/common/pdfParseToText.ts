/**
 * @desc pdf提取文本
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(body: defs.wms.PdfContentDto, options?: any) {
	return updateResponse(
		http(URL + `/common/pdfParseToText`, {
			method: 'POST',

			data: body,
			...options
		})
	)
}
