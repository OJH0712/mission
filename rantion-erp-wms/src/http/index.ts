/*
 * @Author: your name
 * @Date: 2021-02-25 18:03:09
 * @LastEditTime: 2021-03-08 21:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-admind:\project\rantion-erp-wms\src\http\index.ts
 */
import { extend } from 'umi-request'
import { Modal, notification } from 'ant-design-vue'
import { AjaxData } from '@/interface'
import { filterURLSearchParams, throttle } from '@/utils'
import { equals } from 'ramda'

const request = extend({
	headers: {
		Accept: '*/*',
		'Content-Type': 'application/json'
	},
	useCache: true,
	ttl: 500,
	errorHandler: function(error) {
		let msg = ''
		if (error.response) {
			msg = error.response.statusText
		} else {
			msg = error.message
		}
		return { data: null, msg, code: -1, success: false }
	}
})
request.interceptors.request.use((url, options) => {
	if (options.data instanceof FormData) {
		options.headers = {
			Accept: '*/*'
		}
	}
	if (options.method === 'GET' || options.method === 'get') {
		options.params = filterURLSearchParams(options.params as Record<string, any>)
	}
	return {
		url: url.startsWith('http') ? url : `${process.env.VUE_APP_URL}${url}`,
		options: {
			...options,
			headers: {
				...options.headers,
				accessToken: localStorage.getItem('rantion-erp-accessToken') || ''
			}
		}
	}
})
// request.interceptors.response.use((response) => {
// 	if (equals(401, response.status)) {
// 		localStorage.removeItem('rantion-erp-accessToken')
// 		localStorage.removeItem('rantion-erp-userNo')
// 		Modal.confirm({
// 			title: '登录失效，是否跳转登录',
// 			onOk() {
// 				history.pushState(
// 					{
// 						from: location.pathname,
// 						search: location.search
// 					},
// 					'登录',
// 					'/login'
// 				)
// 				location.reload()
// 				// location.href = `/login?url=${location.pathname}`
// 			}
// 		})
// 	}
// 	return response
// })
export default request
const notificationError = throttle(notification.error)
const successCode = ['0X0000', '200']
function notLogin() {
	localStorage.removeItem('rantion-erp-accessToken')
	localStorage.removeItem('rantionCrmUserNo')
	Modal.confirm({
		title: '登录失效，是否跳转登录',
		onOk() {
			history.pushState(
				{
					from: location.pathname,
					search: location.search
				},
				'登录',
				'/login'
			)
			location.reload()
			// location.href = `/login?url=${location.pathname}`
		}
	})
}
export function updateResponse<T = any, P extends Promise<any> = any>(data: P) {
	return data.then((data: AjaxData<T>) => {
		if (successCode.includes(data.code as string)) {
			return data
		}
		switch (data.code) {
			case '401':
				notLogin()
				break
			case '200':
				break
			case 0:
				data.success = true
				break
			case '0X0000':
				break
			default:
				notificationError({
					description: data.msg,
					message: '异常'
				})
				data.success = false
				break
		}
		return data
	})
}

interface NsApiDataInt {
	code: number
	msg: string
	data: Array<any>
	nowPage: number
	pageCount: number
	pageSize: number
	totalCount: number
}
export async function nsHandleResponse(data: string) {
	const response: NsApiDataInt = typeof data === 'object' ? data : JSON.parse(data)
	console.log('NsApi:', response)
	if (equals(0, response.code)) {
		return {
			code: response.code,
			msg: response.msg,
			data: {
				list: response.data,
				nowPage: response.nowPage,
				pageCount: response.pageCount,
				pageSize: response.pageSize,
				total: response.totalCount
			}
		}
	} else {
		Modal.error({
			title: response.msg
		})
		return Promise.reject(new Error(response.msg))
	}
}
