import http from '@/http'
const URLWMS = '/rantion-wms'
import { saveAs } from 'file-saver'
import { last, split } from 'ramda'
import { notification } from 'ant-design-vue'

// 导出
export function billingRulesExport(params?: API.wms.logisticsChannelPrice.exporting.Params) {
	return http(URLWMS + `/logisticsChannelPrice/export`, {
		getResponse: true,
		responseType: 'blob',
		params
	}).then((res) => {
		const content = res.response.headers.get('content-disposition')
		if (content) {
			const names = split('=', content)
			saveAs(res.data, last(names))
			notification.success({
				message: `${last(names)}下载成功`,
				description: ''
			})
		}
	})
}

// 导出运单对账记录
export function waybillCostRecordExport(params?: ObjectMap) {
	return http(URLWMS + `/waybillCostRecord/export`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

// 导出报关信息
export function waybillTariffRecordExport(params?: ObjectMap) {
	return http(URLWMS + `/waybillTariffRecord/export`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

// 导出物流跟踪详情
export function waybillMasterRecordExport(params?: ObjectMap) {
	return http(URLWMS + `/waybillTariffRecord/export`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

// 导出PKG
export function pkgExport(params?: API.wms.packageMaster.packageDetailReport.Params) {
	return http(URLWMS + `/packageMaster/packageDetailReport`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

//导出调拨单-当前查询
export function requisitionExport(params?: API.wms.allocationMaster.exportAllocationReport.Params) {
	return http(URLWMS + `/allocationMaster/exportAllocationReport`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

/**
 * 调拨单导出发票
 * /allocationMaster/exportInvoice/{aono}   exportInvoice
 */
export function invoiceExport(params?: ObjectMap) {
	return http(URLWMS + `/allocationMaster/exportInvoice/${params}`, {
		getResponse: true,
		responseType: 'blob'
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

/**
 * 调拨单导出装箱单
 * /allocationMaster/exportBoxingBill/{aono}
 */
export function BoxingBillExport(params?: string | null) {
	return http(URLWMS + `/allocationMaster/exportBoxingBill/${params}`, {
		getResponse: true,
		responseType: 'blob'
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

/**
 * 调拨批次汇总明细导出
 * /allocationBatch/batchDetailReport
 */

export function batchDetailExport(params?: API.wms.allocationBatch.batchDetailReport.Params) {
	return http(URLWMS + `/allocationBatch/batchDetailReport`, {
		getResponse: true,
		responseType: 'blob',
		params
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}
/**
 * 装柜信息汇总明细导出
 * /allocationContainer/batchDetailReport
 */
export function containerDetailExport(params?: any) {
	return http(URLWMS + `/allocationContainer/batchDetailReport?containerNos=${params}`, {
		getResponse: true,
		responseType: 'blob'
	})
		.then((res) => {
			const content = res.response.headers.get('content-disposition')
			if (content) {
				const names = split('=', content)
				saveAs(res.data, last(names))
				notification.success({
					message: `${last(names)}下载成功`,
					description: ''
				})
			}
		})
		.catch((err) => {
			console.log(err)
			notification.error({
				message: `导出失败`,
				description: ''
			})
		})
}

export function shortageStatisticsExport() {
	console.log(233)
}
