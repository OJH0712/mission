/*
 * @Description:
 * @Author: owen
 * @Date: 2021-02-22 17:54:38
 * @LastEditTime: 2021-04-06 14:25:17
 */
import { keys } from 'ramda'
// 根据区时获取时间
export function getDateByZone(offset: number) {
	const date = new Date() //创建一个Date对象
	const localTime = date.getTime()
	const localOffset = date.getTimezoneOffset() * 60000 //获得当地时间偏移的毫秒数
	const utc = localTime + localOffset //utc即GMT时间
	return new Date(utc + 3600000 * offset)
}

function padLeftZero(str: string) {
	return ('00' + str).substr(str.length)
}
// 时间格式化 yyyy-MM-dd
export function formatDate(date: Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	const o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	keys(o).forEach((k) => {
		if (new RegExp(`(${k})`).test(fmt)) {
			const str = o[k] + ''
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
		}
	})
	return fmt
}
export function getToDay(data: Date, fmt = 'yyyy-MM-dd') {
	return formatDate(data, fmt)
}

/**
 * 获取本月第一天
 * @param date
 */
export function getCurrentMonthFirst(date = new Date()) {
	date.setDate(1)
	return date
}

/**
 * 获取本月最后一天
 * @param date
 */
export function getCurrentMonthLast(date = new Date()) {
	const month = date.getMonth()
	const year = date.getFullYear()
	// new Date()第3个参数默认为1，就是每个月的1号，把它设置为0时， new Date()会返回上一个月的最后一天，然后通过getDate()方法得到天数
	const days = new Date(year, month + 1, 0).getDate()
	const thisDate = new Date(year, month, 1)
	thisDate.setDate(days)
	return thisDate
}

export function timestampToTime(timestamp: string) {
	//	console.log('timestamp: ', timestamp)
	if (!timestamp) return ''
	const date = new Date(timestamp)
	const Y = date.getFullYear() + '-'
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
	const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
	const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
	const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
	const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() + ' '
	return Y + M + D + h + m + s || '' //
}
