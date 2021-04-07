// var CLodopIsLocal
import { Modal } from 'ant-design-vue'
let createdOKLodop7766: any = null
// ====判断是否需要 Web打印服务CLodop:===
// ===(不支持插件的浏览器版本需要用它)===
function needCLodop() {
	try {
		const ua = navigator.userAgent
		if (ua.match(/Windows\sPhone/i)) return true
		if (ua.match(/iPhone|iPod|iPad/i)) return true
		if (ua.match(/Android/i)) return true
		if (ua.match(/Edge\D?\d+/i)) return true

		const verTrident = ua.match(/Trident\D?\d+/i)
		const verIE = ua.match(/MSIE\D?\d+/i)
		let verOPR = ua.match(/OPR\D?\d+/i)
		let verFF = ua.match(/Firefox\D?\d+/i)
		const x64 = ua.match(/x64/i)
		if (!verTrident && !verIE && x64) return true
		else if (verFF) {
			verFF = verFF[0].match(/\d+/)
			if (((verFF as unknown) as Array<number>)[0] >= 41 || x64) return true
		} else if (verOPR) {
			verOPR = verOPR[0].match(/\d+/)
			if (((verOPR as unknown) as Array<number>)[0] >= 32) return true
		} else if (!verTrident && !verIE) {
			let verChrome = ua.match(/Chrome\D?\d+/i)
			if (verChrome) {
				verChrome = verChrome[0].match(/\d+/)
				if (((verChrome as unknown) as Array<number>)[0] >= 41) return true
			}
		}
		return false
	} catch (err) {
		return true
	}
}

// ====页面引用CLodop云打印必须的JS文件,用双端口(8000和18000）避免其中某个被占用：====
if (needCLodop()) {
	const src1 = 'http://localhost:8000/CLodopfuncs.js?priority=1'
	const src2 = 'http://localhost:18000/CLodopfuncs.js?priority=0'

	const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
	let oscript = document.createElement('script')
	oscript.src = src1
	head.insertBefore(oscript, head.firstChild)
	oscript = document.createElement('script')
	oscript.src = src2
	head.insertBefore(oscript, head.firstChild)
	// CLodopIsLocal = !!(src1 + src2).match(/\/\/localho|\/\/127.0.0./i)
}

// ====获取LODOP对象的主过程：====
export default function(oOBJECT?: any, oEMBED?: any) {
	let codop: any | undefined
	try {
		const ua = navigator.userAgent
		const isIE = !!ua.match(/MSIE/i) || !!ua.match(/Trident/i)
		if (needCLodop()) {
			try {
				codop = getCLodop()
			} catch (err) {
				console.error(err)
			}
			if (!codop && document.readyState !== 'complete') {
				Modal.error({
					title: '网页还没下载完毕，请稍等一下再操作'
				})
				return
			}
			if (!codop) {
				// 没有安装打印机,
				Modal.error({
					title: '没有安装打印机控件',
					okText: '知道了',
					onOk: () => {
						Modal.destroyAll()
					}
				})
				return
			} else {
				// eslint-disable-next-line no-undef
				if (codop.CVERSION < '3.0.8.3') {
					// 打印控件需要升级
					Modal.error({
						title: '打印控件需要升级'
					})
				}
				if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED)
				if (oOBJECT && oOBJECT.parentNode) {
					oOBJECT.parentNode.removeChild(oOBJECT)
				}
			}
		} else {
			// var is64IE = isIE && !!ua.match(/x64/i)
			// =====如果页面有Lodop就直接使用，没有则新建:==========
			if (oOBJECT || oEMBED) {
				if (isIE) codop = oOBJECT
				else codop = oEMBED
			} else if (!createdOKLodop7766) {
				codop = document.createElement('object')
				codop.setAttribute('width', '0')
				codop.setAttribute('height', '0')
				codop.setAttribute('style', 'position:absolute;left:0px;top:-100px;width:0px;height:0px;')
				if (isIE) {
					codop.setAttribute('classid', 'clsid:2105C259-1E0C-4534-8141-A753534CB4CA')
				} else codop.setAttribute('type', 'application/x-print-lodop')
				document.documentElement.appendChild(codop)
				createdOKLodop7766 = codop
			} else codop = createdOKLodop7766
			// =====Lodop插件未安装时提示下载地址:==========
			if (!codop || !codop.VERSION) {
				Modal.error({
					title: '没有安装打印机'
				})
				// 没有安装打印机
				return codop
			}
		}
		if (codop.VERSION < '6.2.2.6') {
			if (!needCLodop()) {
				// 打印控件需要升级
				Modal.error({
					title: '打印控件需要升级'
				})
			}
		}
		// ===如下空白位置适合调用统一功能(如注册语句、语言选择等):==

		// LODOP.SET_LICENSES(
		//   "",
		//   "E9495E647887415085F6EF3D45B7F0DB",
		//   "C94CEE276DB2187AE6B65D56B3FC2848",
		//   ""
		// );
		codop.SET_LICENSES('广州蓝深科技有限公司', 'A564177D824A2DABF371162E393C53F6AE2', '廣州藍深科技有限公司', 'C25946E196CB42613FCF4F857C0BF007CFE')
		codop.SET_LICENSES('THIRD LICENSE', '', 'Guangzhou Lanshen Technology Co., Ltd.', '7FB76DA50CB4CE1301564DDC25D8D146DE5')
		// =======================================================
		return codop
	} catch (err) {
		Modal.error({
			title: 'getLodop出错:' + err
		})
	}
}
