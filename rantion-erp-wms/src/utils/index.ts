import { forEach, is, isNil, keys, pipe, isEmpty, equals, and, forEachObjIndexed, clone, has } from 'ramda'
import http, { updateResponse } from '@/http'
import { notification } from 'ant-design-vue'
import moment from 'moment'
import { saveAs } from 'file-saver'
export function isString(value: any): value is string {
	return is(String, value)
}
export function isNumber(value: any): value is number {
	return typeof value === 'number'
}
export function isExternal(path: string) {
	return /^(https?:|mailto:|tel:)/.test(path)
}
export function isArray(value: any): value is [] {
	return is(Array, value)
}
export const negate = (value: any) => !value

export const isNotEmpty = (value: any) => negate(isEmpty(value))

export const isTrue = (value: any) => and(isNotEmpty(value), !isNil(value))

export const isObject = is(Object)

interface WxLoginDto {
	ref: HTMLFormElement // 第三方页面显示二维码的容器id
	appid: string // 应用唯一标识，在微信开放平台提交应用审核通过后获得
	scope: string // 应用授权作用域，拥有多个作用域用逗号（,
	redirect_uri: string // 重定向地址，需要进行UrlEncode
	self_redirect?: boolean // true：手机点击确认登录后可以在 iframe 内跳转到 redirect_uri，false：手机点击确认登录后可以在 top window 跳转到 redirect_uri。默认为 false。
	state?: string // 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验
	style?: 'black' | 'white' // 提供"black"、"white"可选，默认为黑色文字描述。
	href?: string // 自定义样式链接，第三方可根据实际需求覆盖默认样式。详见文档底部FAQ
	styletype?: string
	sizetype?: string
	bgcolor?: string
	rst?: string
}
export const wxLogin = function(data: WxLoginDto) {
	let c = 'default'
	data.self_redirect === !0 ? (c = 'true') : data.self_redirect === !1 && (c = 'false')
	const _iframe = document.createElement('iframe')
	let src: string =
		'https://open.weixin.qq.com/connect/qrconnect?appid=' +
		data.appid +
		'&scope=' +
		data.scope +
		'&redirect_uri=' +
		data.redirect_uri +
		'&state=' +
		data.state +
		'&login_type=jssdk&self_redirect=' +
		c +
		'&styletype=' +
		(data.styletype || '') +
		'&sizetype=' +
		(data.sizetype || '') +
		'&bgcolor=' +
		(data.bgcolor || '') +
		'&rst=' +
		(data.rst || '')
	src += data.style ? '&style=' + data.style : ''
	src += data.href ? '&href=' + data.href : ''
	_iframe.src = src
	_iframe.frameBorder = '0'
	;(_iframe as any).allowTransparency = 'true'
	_iframe.scrolling = 'no'
	_iframe.width = '300px'
	_iframe.height = '400px'
	// const f = document.getElementById(data.ref)
	if (!isNil(data.ref)) {
		data.ref.innerHTML = ''
		data.ref.appendChild(_iframe)
	}
}

export interface CustomOption {
	onProgress: Function
	method: string
	onError: Function
	onSuccess: Function
	file: any
}
export function customRequest(option: CustomOption, params: ObjectMap, callFunc?: Function) {
	const form = new FormData()
	form.append('file', option.file)
	pipe(
		keys,
		forEach((key: string) => {
			form.append(key, params[key])
		})
	)(params)
	fetch(`${process.env.API_URL}/rantion-portal/file/upload`, {
		method: 'POST',
		body: form,
		headers: {
			accessToken: localStorage.getItem('rantionGatewayAccessToken') || ''
		}
	})
		.then((response) => {
			if (callFunc) {
				updateResponse(response.json()).then((data) => {
					callFunc(data.data)
				})
			}
			option.onSuccess(response, option.file, '')
		})
		.catch((response) => {
			option.onError(response)
		})
}

export function upload(form: FormData, callFunc: (value: Array<string>) => void) {
	fetch(`${process.env.API_URL}/rantion-portal/file/upload`, {
		method: 'POST',
		body: form,
		headers: {
			accessToken: localStorage.getItem('rantionGatewayAccessToken') || ''
		}
	})
		.then((response) => {
			if (callFunc) {
				updateResponse(response.json()).then((data) => {
					if (data.success) {
						callFunc(data.data)
					} else {
						notification.error({
							description: data.msg,
							message: '异常'
						})
					}
				})
			}
		})
		.catch(() => {
			notification.error({
				description: '上传图片失败',
				message: '异常'
			})
		})
}

// /logisticsChannelPrice/import 导入计费管理报表
// /waybillCostRecord/import 导入对账管理报表
// /waybillMaster/import 导入物流追踪详情
export function importStatement(form: FormData, urlSuffix: string, callFunc: (value: Array<string>) => void) {
	fetch(`${process.env.API_URL}/rantion-wms${urlSuffix}`, {
		method: 'POST',
		body: form,
		headers: {
			accessToken: localStorage.getItem('rantionGatewayAccessToken') || ''
		}
	})
		.then((response) => {
			if (callFunc) {
				updateResponse(response.json()).then((data) => {
					if (data.success) {
						callFunc(data.data)
					} else {
						notification.error({
							description: data.msg,
							message: '异常'
						})
					}
				})
			}
		})
		.catch(() => {
			notification.error({
				description: '导入失败',
				message: '异常'
			})
		})
}

// 简单的删除对象一层 用于url查询 删除空值 null undefined 字符串去空格
export function filterURLSearchParams(data: Record<string, any>) {
	forEachObjIndexed((value, key) => {
		if (isEmpty(value) || isNil(value)) {
			delete data[key]
		} else if (isString(value)) {
			data[key] = value.trim()
		}
		// 这里加个else 使用递归 深度删除
	}, data)

	return data
}

export const makeMap = <T extends Record<string, any>, U extends keyof T>(list: Array<T>, key: U) => {
	const _map: Map<string, T> = new Map()
	// if (!isString(key)) {
	// 	return undefined
	// }
	// if (!isArray(list)) {
	// 	return undefined
	// }
	if (isEmpty(list)) {
		return _map
	}
	// if (!has(__, key)(head(list))) {
	// 	return _map
	// }

	forEach((item) => {
		_map.set(item[key], item)
	}, list)
	return _map
}

/**
 * 遍历一颗树
 * @param {*} treeList
 * @param {*} map
 * @param {*} key
 */
export function atravesandoTree(treeList: any[], map: any[] | null, key: string) {
	const list: any[] = []
	function treeFnc(tree: any) {
		if (isArray(tree)) {
			tree.forEach((res: any) => {
				if (isNil(res)) return
				if (isTrue(res.children)) {
					// 非叶子节点 不做添加
					treeFnc(res.children)
				} else {
					map && map.findIndex((_) => equals(_[key], res[key])) !== -1 && list.push(res[key])
				}
			})
		} else if (isObject(tree)) {
			if (tree.children && isNotEmpty(tree.children)) {
				tree.children.forEach((res: any) => {
					treeFnc(res.children)
				})
			} else {
				map && map.findIndex((_) => equals(_[key], tree[key])) !== -1 && list.push(tree[key])
			}
		}
	}

	treeFnc(treeList)
	return list
}

/**
 * 把路由转换成map 类型
 * @param {*} obj
 * @param {*} map
 */
export function getMap(obj: any, map: any = {}) {
	// let map = {}
	if (obj.redirect) {
		map[obj.name] = {
			component: obj.component,
			redirect: obj.redirect,
			path: obj.path,
			noCache: obj.noCache,
			noKey: obj.noKey,
			biz: obj.biz,
			alwaysShow: obj.alwaysShow
		}
	} else {
		map[obj.name] = {
			component: obj.component,
			path: obj.path,
			noCache: obj.noCache,
			noKey: obj.noKey,
			biz: obj.biz,
			alwaysShow: obj.alwaysShow
		}
	}

	if (obj.children && obj.children.length > 0) {
		obj.children.forEach((element: any) => {
			getMap(element, map)
		})
	}

	return map
}
export interface DebouncedFunc<T extends (...args: any[]) => any> {
	(...args: Parameters<T>): ReturnType<T> | undefined
}

/**
 * 函数防抖
 * @param func 要防抖的函数
 * @param wait 防抖时间 默认500ms
 */
export function throttle<T extends (...args: any) => any>(func: T, wait = 500): DebouncedFunc<T> {
	let leading = true
	return function(this: void, ...args: Array<any>) {
		if (!leading) {
			return {}
		}
		leading = false
		setTimeout(() => {
			leading = true
		}, wait)
		return func.apply(this, args)
	}
}
export function isWfw() {
	return !!(window as any).__POWERED_BY_QIANKUN__
}
export interface OssPolicyDto {
	accessKey: string
	policy: string
	signature: string
	path: string
	host: string
	expirationDateTime: string
	minSize: number
	maxSize: number
}
/**
 * 获取 文件上传 签名
 */
class PolicyToken {
	private data: OssPolicyDto
	async getOssData(path?: string) {
		// data 不存在 或者30秒之后超时 就重新请求
		if (isNil(this.data) || moment(this.data.expirationDateTime).isBefore(new Date(new Date().getTime() - 1000 * 30))) {
			const { success, data } = await updateResponse<OssPolicyDto>(
				http('/rantion-dfs/oss/policy', {
					method: 'GET',
					params: {
						path
					}
				})
			)
			if (success) {
				this.data = data
			}
		}
		return this.data
	}
}
export const policyToken = new PolicyToken()

// file size to M
export function sizeToM(size: number) {
	return (size / 1024 / 1024).toFixed(1)
}

export const downloadFile = (blob: Blob, fileName: string) => {
	saveAs(blob, fileName)
}

export const deepCopy = function<T>(object: T) {
	return clone(object)
}

/**
 * 数组去重
 * @param {*} array 对象型数组
 * @param {*} key  对象的唯一关键字
 * @param {*} obj
 */
export const unique = (arr: Array<any>, key: string | number = '', obj: any = {}) =>
	arr.filter((item) => (key ? (has(item[key], obj) ? false : (obj[item[key]] = true)) : has(item, obj) ? false : (obj[item] = true)))
export const getBASE64 = function(dataArray: Uint8Array) {
	const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	let strData = ''
	for (let i = 0, ii = dataArray.length; i < ii; i += 3) {
		if (isNaN(dataArray[i])) break
		const b1 = dataArray[i] & 0xff
		const b2 = dataArray[i + 1] & 0xff
		const b3 = dataArray[i + 2] & 0xff
		const d1 = b1 >> 2
		const d2 = ((b1 & 3) << 4) | (b2 >> 4)
		const d3 = i + 1 < ii ? ((b2 & 0xf) << 2) | (b3 >> 6) : 64
		const d4 = i + 2 < ii ? b3 & 0x3f : 64
		strData += digits.substring(d1, d1 + 1) + digits.substring(d2, d2 + 1) + digits.substring(d3, d3 + 1) + digits.substring(d4, d4 + 1)
	}
	return strData
}
export interface PrintBarcode {
	sku: string
	productTitle: string
	variants: string
	barcode: string
}

class UnitConversion {
	getDPI() {
		const arrDPI: Array<number> = []
		const tmpNode = document.createElement('DIV')
		tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
		document.body.appendChild(tmpNode)
		arrDPI[0] = tmpNode.offsetWidth
		arrDPI[1] = tmpNode.offsetHeight
		tmpNode.parentNode && tmpNode.parentNode.removeChild(tmpNode)
		return arrDPI
	}
	pxTonMm(value: number) {
		const inch = value / this.getDPI()[0]
		return inch * 25.4
	}
	mmToPx(value: number) {
		const inch = value / 25.4
		return inch * this.getDPI()[0]
	}
}

export const unitConversion = new UnitConversion()

export function readerBlob(data: Blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsText(data, 'utf-8')
		reader.onload = function(event: ProgressEvent<FileReader>) {
			try {
				if (event.target) {
					const data = event.target.result
					if (isString(data)) {
						const val = JSON.parse(data) // reader.result
						resolve(val)
					}
				}
			} catch (e) {
				reject(e)
			}
		}
	})
}

export function chunk<T>(array: Array<T>, size: number) {
	size = Math.max(size, 0)
	const length = array == null ? 0 : array.length
	if (!length || size < 1) {
		return []
	}
	let index = 0
	let resIndex = 0
	const result: Array<Array<T>> = new Array(Math.ceil(length / size))

	while (index < length) {
		result[resIndex++] = array.slice(index, (index += size))
	}
	return result
}
export function filterMap<T, U>(filterFunc: (value: T, index: number, array: Array<T>) => boolean, mapFunc: (x: T, index: number, array: Array<T>) => U, array: Array<T>): Array<U> {
	const list: U[] = []
	const len = array.length
	for (let i = 0; i < len; i++) {
		const item = deepCopy(array[i])
		filterFunc(item, i, array) && list.push(mapFunc(item, i, array))
	}
	return list
}
