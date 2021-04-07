/**
 * @desc 美西仓调拨单直接发运
 */
const URL = '/rantion-wms'
import http, { updateResponse } from '@/http'
export function request(aono: string, options?: any) {
	return updateResponse(
		http(URL + `/allocationMaster/dispatchByMx/${aono}`, {
			method: 'POST',

			...options
		})
	)
}
