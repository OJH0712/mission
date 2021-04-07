/*
 * @Author: gtlong
 * @Date: 2021-02-25 18:05:42
 * @LastEditTime: 2021-03-27 17:55:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-erp-wms\src\api\sale\order\index.ts
 */
/**
 * @desc 订单
 */
const URL = '/rantion-brand-sale'
import http, { updateResponse } from '@/http'

/**
 * 获取订单规则列表
 * @param options
 */
export function getOrderRulesList(params: any, options?: any) {
	return updateResponse(
		http(URL + `/api/ruler/list`, {
			method: 'GET',
			params,
			...options
		})
	)
}

/**
 * 停用或启用订单规则
 * @param id 规则id
 * @param status 停用：0，启用：1
 */
export function enableOrDisable(body: { id: number; status: number }, options?: any) {
	return updateResponse(
		http(URL + `/api/ruler/enableOrDisable/one`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}

/**
 * 规则排序
 * @param preRuler 上面规则的id
 * @param nextRuler 下面规则id
 * @param sortType 触发按钮是上移还是下移 next：下移 pre: 上移
 */
export function rulerSort(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/ruler/sort`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}

/**
 * 根据订单状态实时获取订单数量接口
 * @param params
 * @param options
 * @returns
 */
export function getOrderCount(params: any, options?: any) {
	return updateResponse(
		http(
			URL +
				`/order/master/order/count?tabOption=none&status=wait_pay,wait_processed,contact_customer,purchasing,wait_ship,purchase_issue,delivery_issue,shipping_weight_abnormal,blocked,pending_source`,
			{
				method: 'GET',
				params,
				...options
			}
		)
	)
}

/**
 * 查询店铺列表列表
 * @param params
 * @param options
 * @returns
 */
export function findOrderList(params: any, options?: any) {
	return updateResponse(
		http(URL + `/api/platform/shop/list`, {
			method: 'GET',
			params,
			...options
		})
	)
}

/**
 * 查询店铺列表列表
 * @param params
 * @param options
 * @returns
 */
export function saveOrder(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/add/one`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}
/**
 * 查询订单列表
 * @param body
 * @param options
 * @returns
 */
export function getOrderList(params: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/list`, {
			method: 'GET',
			params,
			...options
		})
	)
}
/**
 * 根据id查询订单详情
 * @param id
 * @param params
 * @param options
 * @returns
 */
export function getOrderById(id: string, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/info/${id}`, {
			method: 'GET',
			...options
		})
	)
}
/**
 * 查询订单操作记录
 * @param id
 * @param options
 * @returns
 */
export function getOrderRecord(data: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/operate/record/list`, {
			method: 'GET',
			params: data,
			...options
		})
	)
}
/**
 * 跟新订单
 * @param data
 * @param options
 * @returns
 */
export function updateOrder(data: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/update/one`, {
			method: 'PUT',
			data: data,
			...options
		})
	)
}
/**
 * 订单规则 邮编范围
 * @param data
 * @param options
 * @returns
 */
export function getZoneList(data: any, options?: any) {
	return updateResponse(
		http(URL + `/api/zip/code/zone/list`, {
			method: 'GET',
			params: data,
			...options
		})
	)
}
/**
 * 添加或更新规则
 * @param body
 * @param options
 * @returns
 */
export function addOrUpdateRuler(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/ruler/addOrUpdate/one`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}
/**
 * 抓取源订单 信息
 * @param orderNo
 * @param options
 * @returns
 */
export function getPlatformOrder(orderNo: string, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/info?orderNo=${orderNo}`, {
			method: 'GET',
			...options
		})
	)
}
//立即检查
export function immediatelyCheckOrder(orderNo: string, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/immediatelyCheckOrder?orderNo=${orderNo}`, {
			method: 'GET',
			...options
		})
	)
}
//重新提交
export function reSubmitOrder(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/commit`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}
//拦截订单
export function interceptOrder(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/intercept`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}
//取消订单
export function cancelOrder(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/cancel/one`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}

// 状态修改
export function editStatus(body: any, options?: any) {
	return updateResponse(
		http(URL + `/api/order/master/update/orderStatus`, {
			method: 'POST',
			data: body,
			...options
		})
	)
}
