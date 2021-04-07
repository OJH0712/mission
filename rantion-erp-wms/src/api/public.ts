/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-10 21:12:18
 * @LastEditTime: 2021-03-10 21:16:36
 */
/**
 * @user: antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/6/4 上午10:14
 */
// import { equals } from 'ramda'
// import { UserModule } from '@/store/modules/user'

import http from '@/http'
const URL = '/rantion-wms'
/**
 * 通过url抓取一个文件 Blob
 */
export const getFileByAjax = (filePath: string) =>
	http(`${URL}/allocationMaster/getFileStream`, {
		responseType: 'arrayBuffer',
		params: { filePath }
	})
// new Promise((resolve, reject) => {
// 	fetch(`${URL}/allocationMaster/getFileStream?filePath=${encodeURIComponent(filePath)}`, {
// 		headers: {
// 			'content-type': 'charset=x-user-defined',
// 			accessToken: UserModule.token // 让每个请求携带自定义token
// 		},
// 		method: 'GET'
// 		// mode: 'cors'
// 	})
// 		.then(async (response) => {
// 			if (equals(200, response.status)) {
// 				const blob = await response.blob()
// 				resolve(blob)
// 			} else {
// 				reject(response.statusText)
// 			}
// 		})
// 		.catch((error) => {
// 			reject(error)
// 		})
// })
