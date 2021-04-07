/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-08 21:06:56
 * @LastEditTime: 2021-03-08 21:13:03
 */
import http, { nsHandleResponse, updateResponse } from '@/http'
const URL = '/rantion-wmsuser'
interface PageInt {
	page: number
	pageSize: number
}

/**
 * 查询店铺列表
 * @param requestBody
 */
export const getShopList = async function(requestBody: PageInt & any) {
	const body: any = {
		apiCode: 'shopList',
		requestBody
	}
	const { data } = await updateResponse(
		http(`${URL}/nsRequest`, {
			method: 'POST',
			body: JSON.stringify(body)
		})
	)
	return nsHandleResponse(data)
}

export const getLogisticsList = async function(requestBody: PageInt & any) {
	const body: any = {
		apiCode: 'logisticsList',
		requestBody: requestBody
	}
	const { data } = await updateResponse(
		http(`${URL}/nsRequest`, {
			method: 'POST',
			body: JSON.stringify(body)
		})
	)
	return nsHandleResponse(data)
}

export const getCompanyName = async function(requestBody: PageInt & any) {
	const body: any = {
		apiCode: 'tradeCompanyName',
		requestBody: requestBody
	}
	const { data } = await updateResponse(
		http(`${URL}/nsRequest`, {
			method: 'POST',
			body: JSON.stringify(body)
		})
	)
	return nsHandleResponse(data)
}

export const getSiteList = async function(requestBody: PageInt & any) {
	const body: any = {
		apiCode: 'siteList',
		requestBody: requestBody
	}
	const { data } = await updateResponse(
		http(`${URL}/nsRequest`, {
			method: 'POST',
			body: JSON.stringify(body)
		})
	)
	return nsHandleResponse(data)
}
