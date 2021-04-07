import { optObject } from '../config'
/**
 * 员工状态
 * @param key
 */
export const roleUserStatus = function(key: string | number) {
	return optObject.baseStatus[key]
}

//产品品牌状态
export const productBandStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//产品SKU状态
export const productSkuStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//产品SKU审批状态
export const productSkuApprovalStatusFilter = function(key: string | number) {
	return optObject.approvalStatus[key]
}

//产品SKU MQ推送状态
export const productSkuMqSendStatusStatusFilter = function(key: string | number) {
	return optObject.mqSendStatusStatus[key]
}

//产品SKU NS消费状态
export const productSkuNsConsumeStatusStatusFilter = function(key: string | number) {
	return optObject.nsConsumeStatusStatus[key]
}

//产品类型状态
export const productTypeStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

// 国家状态
export const countryStatus = function(key: string | number) {
	return optObject.countryStatus[key]
}
// 单位类型状态
export const unitStatus = function(key: string | number) {
	return optObject.unitStatus[key]
}
//计量单位状态
export const meteringUnitStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//物流分组状态
export const logisticsGroupStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//物流分组属性状态
export const logisticsGroupAttrStatusFilter = function(key: string | number) {
	return optObject.logisticsGroupAttrStatus[key]
}

//物流属性状态
export const logisticsAttrStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//物流属性类型状态
export const logisticsAttrTypeStatusFilter = function(key: string | number) {
	return optObject.status[key]
}

//是否需要厂检
export const isFactoryCheckFilter = function(key: string | number) {
	return optObject.isFactoryCheck[key]
}

export const shippingTypeFilter = function(key: string | number) {
	return optObject.isFactoryCheck[key]
}
