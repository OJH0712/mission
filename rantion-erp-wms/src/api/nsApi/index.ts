/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-08 21:06:56
 * @LastEditTime: 2021-03-09 21:49:43
 */
import http, { nsHandleResponse } from '@/http'
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
	const { data } = await http(`${URL}/nsRequest`, {
		method: 'POST',
		body: JSON.stringify(body)
	})
	return nsHandleResponse(data)
}

//查询物理渠道
export const getLogisticsList = async function(requestBody: PageInt & any) {
	const parms: any = {
		apiCode: 'logisticsList',
		requestBody
	}
	const { data } = await http(`${URL}/nsRequest`, {
		method: 'POST',
		body: JSON.stringify(parms)
	})
	return nsHandleResponse(data)
}

export const getBoxInfo = async function(parms: PageInt & any) {
	const { pageNumber, ...requestBody } = parms
	const parm: any = {
		apiCode: 'getAmazonBoxInfo',
		requestBody: { ...requestBody, page: pageNumber }
	}
	const { data } = await http(`${URL}/nsRequest`, {
		method: 'POST',
		body: parm
	})
	return data
}

/**
 * 获取交易主体
 * @param requestBody
 */
export const getCompanyName = async function(requestBody: PageInt & any) {
	const parms: any = {
		apiCode: 'tradeCompanyName',
		requestBody: requestBody
	}
	const { data } = await http(`${URL}/nsRequest`, {
		method: 'POST',
		body: parms
	})
	return nsHandleResponse(data)
}
/**
 * 查询站点列表
 * @param parms
 */
export const getSiteList = async function(parms: PageInt & any) {
	const { pageNumber, ...requestBody } = parms
	const parm: any = {
		apiCode: 'siteList',
		requestBody: { ...requestBody, page: pageNumber }
	}
	const { data } = await http(`${URL}/nsRequest`, {
		method: 'POST',
		body: parm
	})
	return nsHandleResponse(data)
}
