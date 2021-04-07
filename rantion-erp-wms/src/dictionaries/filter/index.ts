/*
 * @Description:
 * @Author: owen
 * @Date: 2021-02-25 19:30:22
 * @LastEditTime: 2021-04-06 11:48:41
 */
import { optObject } from '../config'
/**
 * 员工状态
 * @param key
 */
export const roleUserStatus = function(key: string | number) {
	return optObject.roleUserStatus[key]
}

// 渠道商状态
export const channelProviderStatusFilter = function(key: string | number) {
	return optObject.channelProviderStatus[key]
}

// 渠道商业务类别
export const channelProviderServicePropertyFilter = function(key: string | number) {
	return optObject.channelProviderServiceProperty[key]
}

// 报损状态
export const breakageStatusFilter = function(key: string | number) {
	return optObject.breakageStatus[key]
}
// 盘点单状态
export const inventoryStatusFilter = function(key: string | number) {
	return optObject.inventoryStatus[key]
}
// 盘点内容/对账类型

export const checkTypeFilter = function(key: string | number) {
	return optObject.checkType[key]
}
//盘点类型
export const inventoryTypeFilter = function(key: string | number) {
	return optObject.inventoryType[key]
}
// 库区类型
export const areaTypeFilter = function(key: string | number) {
	return optObject.areaType[key]
}

// 物流分组状态
export const groupStatus = function(key: string | number) {
	return optObject.groupStatus[key]
}

// 物流状态
export const logisticsStatus = function(key: string | number) {
	return optObject.logisticsStatus[key]
}

// 分拣状态
export const pkgStatusFilter = function(key: string | number) {
	return optObject.pkgStatus[key]
}
//调拨类型
export const requisitionTypeFilter = function(key: string | number) {
	return optObject.requisitionType[key]
}
//运输方式
export const shippingTypeFilter = function(key: string | number) {
	return optObject.shippingType[key]
}
//调拨状态
export const requisitionStatusFilter = function(key: string | number) {
	return optObject.requisitionStatus[key]
}
//调拨批次状态
export const batchStatusFilter = function(key: string | number) {
	return optObject.batchStatus[key]
}
//装柜类型
export const containerTypeFilter = function(key: string | number) {
	return optObject.containerType[key]
}
//拣货状态
export const pickStatusFilter = function(key: string | number) {
	return optObject.pickStatus[key]
}
//打印状态
export const printedStatusFilter = function(key: string | number) {
	return optObject.printedStatus[key]
}
//物流分拣状态
export const outmasterLogisticsStatusFilter = function(key: string | number) {
	return optObject.outmasterLogisticsStatus[key]
}
//资源类型
export const sourceTypeFilter = function(key: string | number) {
	return optObject.sourceType[key]
}
export const channelTypeFilter = function(key: string | number) {
	return optObject.channelType[key]
}
// 订单状态
export const orderStatusFilter = function(key: string | number) {
	return optObject.orderStatus[key]
}
// 入库单 订单状态
export const entryStatusFilter = function(key: string | number) {
	return optObject.entryStatus[key]
}
// 入库单 来源类型
export const entrySourceTypeFilter = function(key: string | number) {
	return optObject.entrySourceType[key]
}
// 订单类型
export const orderTypeFilter = function(key: string | number) {
	return optObject.orderType[key]
}
export const DeliveryStatusFilter = function(key: string | number) {
	return optObject.DeliveryStatus[key]
}
