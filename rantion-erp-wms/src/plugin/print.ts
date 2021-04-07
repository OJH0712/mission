import { StorageModule } from '@/store/modules/storage'
import { forEach, isEmpty, isNil } from 'ramda'
import getLodo from '@/plugin/LodopFuncs'
import { getBASE64, isArray, PrintBarcode, unitConversion } from '@/utils'
interface LabelStandard {
	width: number
	length: number
}
function switchPrinterSize(type: number | undefined) {
	let printerSize: PrinterSize = {
		width: 70,
		height: 30
	}
	switch (type) {
		case 10:
			printerSize = {
				width: 70,
				height: 30
			}
			break
		case 20:
			printerSize = {
				width: 50,
				height: 30
			}
			break
		case 30:
			printerSize = {
				width: 80,
				height: 50
			}
			break
		case 40:
			printerSize = {
				width: 100,
				height: 150
			}
			break
		default:
			printerSize = {
				width: 70,
				height: 30
			}
			break
	}
	return printerSize
}

function switchPrinterSizeOd(type: number | undefined) {
	let printerSize: PrinterSize = {
		width: 40,
		height: 40
	}
	switch (type) {
		case 10:
			printerSize = {
				width: 40,
				height: 40
			}
			break
		case 20:
			printerSize = {
				width: 40,
				height: 80
			}
			break
		case 30:
			printerSize = {
				width: 80,
				height: 80
			}
			break
		case 40:
			printerSize = {
				width: 80,
				height: 50
			}
			break
		default:
			printerSize = {
				width: 40,
				height: 40
			}
			break
	}
	return printerSize
}
/**
 * @user: antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/5/23 下午1:47
 * 打印外箱标签
 */

function getPrinter(key: string): Promise<string> {
	return new Promise((resolve) => {
		const printerList = StorageModule.printerList
		if (isEmpty(printerList)) {
			StorageModule.addPrinterList()
				.then((data) => {
					const printer = data.find((_) => key === _.key)
					resolve(printer?.value || 'rantion-thermal-printer10*10')
				})
				.catch(() => {
					resolve('rantion-thermal-printer10*10')
				})
		} else {
			const printer = printerList.find((data) => key === data.key)
			resolve(printer?.value || 'rantion-thermal-printer10*10')
		}
	})
}

/**
 *获取供应商的打印规格
 */
function getPrinterSize(providerCode: string): Promise<LabelStandard | undefined> {
	const labelStandardMap: Map<string, LabelStandard> = new Map()
	return (async function() {
		if (labelStandardMap.has(providerCode)) {
			return Promise.resolve(labelStandardMap.get(providerCode))
		} else {
			const { success, data } = await API.wms.logisticsProvider.getProviderForCode.request(providerCode)
			if (success && !isNil(data)) {
				let labelStandard = {
					width: 10,
					length: 10
				}
				if (data.labelStandard) {
					labelStandard = JSON.parse(data.labelStandard)
				}
				labelStandardMap.set(providerCode, labelStandard)
				return Promise.resolve(labelStandard)
			}
			return Promise.resolve(labelStandardMap.get(providerCode))
		}
	})()
}

/**
 * 打印运单
 * @param pdf 打印内容
 * @param labelStandard 长宽高
 * @param printerName 打印机名称
 */
const printLabel = function(pdf: Uint8Array, labelStandard: LabelStandard, printerName: string): boolean {
	const lodop = getLodo()
	lodop.PRINT_INIT('打印运单')
	console.log('打印运单')
	lodop.SET_PRINT_PAGESIZE(1, (labelStandard.width - 0) * 100, (labelStandard.length - 0) * 100, '---')
	lodop.SET_PRINT_MODE('POS_BASEON_PAPER', true)
	const is = lodop.SET_PRINTER_INDEX('Argox CP-2140M PPLB' || printerName) // 指定打印机
	lodop.ADD_PRINT_PDF(0, 0, '100%', '100%', getBASE64(pdf))
	lodop.NewPage()
	lodop.PRINT()
	return is
}

/**
 *  打印产品条码
 * @param data
 */
const funcPrintBarcode = async function(data: PrintBarcode) {
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('打印产品条码')
	lodop.SET_PRINT_PAGESIZE(1, 700, 300, '7*3产品条码打印')
	lodop.SET_PRINT_STYLEA(1, 'FontSize', 10)
	lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	lodop.ADD_PRINT_TEXT(2, 18, 100, 20, data.sku)
	// lodop.SET_PRINT_STYLEA(0, "FontSize", 10);
	console.log('打印产品条码:', data)
	if (data.productTitle) {
		if (data.productTitle.length > 12) {
			data.productTitle = data.productTitle.substring(0, 12)
		}
		lodop.ADD_PRINT_TEXT(88, 18, 180, 20, data.productTitle)
	}
	if (data.variants) {
		lodop.ADD_PRINT_TEXT(88, 170, 200, 20, data.variants)
	}
	lodop.ADD_PRINT_BARCODE(17, 18, unitConversion.mmToPx(60), unitConversion.mmToPx(14), 'EAN128A', data.barcode)
	lodop.PRINT()
}
/**
 * 打印10*10PDF运单
 * @param providerCode? 渠道商 可以查询打印规定的规格 不传 不查 默认10*10
 */
export const printPDF = async function(pdf: Uint8Array, providerCode?: string) {
	let labelStandard = { width: 10, length: 10 }
	if (!isNil(providerCode)) {
		const data = await getPrinterSize(providerCode)
		if (isNil(data)) {
			return
		}
		labelStandard = data
	}
	const printerName = await getPrinter('A4.printer')
	printLabel(pdf, labelStandard, printerName)
}
export interface SelectPrinter {
	printer: string
	size: string
	intOrient: number
	isSave: boolean
	qty: number
}
/**
 * 打印A4PDF运单
 * @param pdfBlob
 */
export const printPDFByA4 = async function(pdf: Uint8Array, printer: SelectPrinter) {
	const lodop = getLodo()
	const printerName = await getPrinter('A4.printer')
	lodop.PRINT_INIT('打印运单')
	lodop.SET_PRINT_PAGESIZE(printer.intOrient || 1, 0, 0, printer.size || 'A4')
	lodop.SET_PRINTER_INDEX(printer.printer || printerName) // 指定打印机
	lodop.SET_PRINT_MODE('POS_BASEON_PAPER', true)
	if (printer.qty) {
		lodop.SET_PRINT_COPIES(printer.qty)
	}
	lodop.ADD_PRINT_PDF(0, 0, '100%', '100%', getBASE64(pdf))
	lodop.NewPage()
	lodop.PRINT()
}
export interface PrintFnSkuInt {
	msku: string
	fnsku: string
	productTitle: string
	variants: string
	sku: string
	qty: number
	fbaAccount: string
	printerSize?: number
}
export interface PrinterSize {
	width: number
	height: number
}
/**
 * 打印Sku 调拨单
 * @param data
 */
export const printSku = async function(data: PrintFnSkuInt) {
	const printerSize: PrinterSize = switchPrinterSize(data.printerSize)
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('打印FnSku')
	lodop.SET_PRINT_PAGESIZE(1, printerSize.width * 10, printerSize.height * 10, '')
	printer && lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	if (data.qty) {
		lodop.SET_PRINT_COPIES(data.qty)
	}
	lodop.ADD_PRINT_BARCODE(15, unitConversion.mmToPx(printerSize.width * 0.075), unitConversion.mmToPx(printerSize.width * 0.5), unitConversion.mmToPx(13), 'Code93', data.sku.trim())
	lodop.ADD_PRINT_HTM(
		unitConversion.mmToPx(19),
		10,
		unitConversion.mmToPx(printerSize.width * 0.85),
		25,
		`<div style="font-size:12px;width:${unitConversion.mmToPx(
			printerSize.width * 0.9
		)}px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: center;"><span style="padding-right: 10%">new</span>${data.productTitle}</div>`
	)
	lodop.ADD_PRINT_HTM(
		unitConversion.mmToPx(24),
		10,
		unitConversion.mmToPx(printerSize.width * 0.85),
		25,
		`<div style="margin-top:1mm;width:${unitConversion.mmToPx(printerSize.width * 0.9)}px;font-weight: bold;font-size:12px;text-align: center;"> Made in China </div>`
	)
	lodop.NewPage()
	lodop.PRINT()
}

/**
 * 打印FnSku 调拨单 库存会使用到
 * @param data
 */
export const printFnSku = async function(data: PrintFnSkuInt) {
	const printerSize: PrinterSize = switchPrinterSize(data.printerSize)

	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('打印FnSku')
	lodop.SET_PRINT_STYLE('FontSize', 10)
	lodop.SET_PRINT_PAGESIZE(1, printerSize.width * 10, printerSize.height * 10, '')
	printer && lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	if (data.qty) {
		lodop.SET_PRINT_COPIES(data.qty)
	}
	lodop.ADD_PRINT_BARCODE(15, unitConversion.mmToPx(printerSize.width * 0.075), unitConversion.mmToPx(printerSize.width * 0.85), unitConversion.mmToPx(13), '128A', data.fnsku)
	lodop.SET_PRINT_STYLEA(0, 'AlignJustify', 2)
	lodop.ADD_PRINT_HTM(
		unitConversion.mmToPx(19),
		10,
		unitConversion.mmToPx(printerSize.width * 0.85),
		25,
		`<div style="font-size:10px;width:${unitConversion.mmToPx(printerSize.width * 0.9)}px;overflow: hidden; white-space: nowrap;text-align: center;"><span style="padding-right: 10%">new</span>${
			data.productTitle
		}</div>`
	)
	lodop.ADD_PRINT_HTM(
		unitConversion.mmToPx(24),
		10,
		unitConversion.mmToPx(printerSize.width * 0.85),
		25,
		`<div style="margin-top:1mm;width:${unitConversion.mmToPx(printerSize.width * 0.9)}px;font-weight: bold;overflow: hidden;white-space: nowrap;font-size:11px;text-align: center;"> Made in China   ${
			data.sku
		}-${data.fbaAccount}</div>`
	)
	lodop.NewPage()
	lodop.PRINT()
}
/**
 * 打印条码 入库 收货
 * @param data 传入PrintBarcode数组或者PrintBarcode对象
 */
export const printBarcode = function(data: Array<PrintBarcode> | PrintBarcode) {
	isArray(data) ? forEach(funcPrintBarcode, data) : funcPrintBarcode(data as PrintBarcode)
}
/**
 * 打印pkg   物流分拣 调拨批次号会用到
 * @param code pkg号
 */
export const printPkg = async function(code: string) {
	console.log('printBarcode')
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT(`打印pkg:${code}`)
	lodop.SET_PRINT_MODE('POS_BASEON_PAPER', true)
	lodop.SET_PRINT_PAGESIZE(1, 700, 300, '')
	printer && lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	lodop.ADD_PRINT_TEXT(92, 18, 180, 20, code)
	lodop.ADD_PRINT_BARCODE(15, 18, unitConversion.mmToPx(60), unitConversion.mmToPx(14), 'EAN128A', code)
	lodop.NewPage()
	lodop.PRINT()
}

/**
 * 打印库位
 * @param positionCode 库位编码
 */
export const printPositionCode = async function(positionCode: string) {
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('打印库位')
	lodop.SET_PRINT_STYLE('FontSize', 20)
	lodop.SET_PRINT_PAGESIZE(1, 700, 300, '7*3库位打印纸')
	lodop.SET_PRINT_MODE('POS_BASEON_PAPER', true)
	lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	lodop.ADD_PRINT_BARCODE(
		15,
		6,
		unitConversion.mmToPx(68),
		unitConversion.mmToPx(20),
		'EAN128A', // 128Auto
		positionCode
	)
	lodop.PRINT()
}

// 打印盘点条码
export const printIcno = async function(icno: string) {
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT(`打印盘点条码${icno}`)
	lodop.SET_PRINT_STYLE('FontSize', 16)
	lodop.SET_PRINT_MODE('POS_BASEON_PAPER', true)
	lodop.SET_PRINT_PAGESIZE(1, 700, 300, '7*3库位打印纸')
	lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	// lodop.ADD_PRINT_TEXT(88, 170, 200, 20, '盘点单号')
	lodop.ADD_PRINT_BARCODE(
		7,
		12,
		unitConversion.mmToPx(60),
		unitConversion.mmToPx(16),
		'EAN128A', // 128Auto
		icno
	)
	lodop.PRINT()
}
export interface PrintBoxInterface {
	aono: string
	barcode: string
	boxNo: string
}
/**
 * 打印箱外条码
 */
export const printBox = async function(data: PrintBoxInterface) {
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('箱外条码')
	lodop.SET_PRINT_PAGESIZE(1, 700, 300, '7*3箱外条码')
	lodop.SET_PRINT_STYLEA(1, 'FontSize', 10)
	lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	lodop.ADD_PRINT_TEXT(2, 18, 100, 20, data.aono)
	lodop.ADD_PRINT_TEXT(88, 18, 180, 20, data.boxNo)
	lodop.ADD_PRINT_BARCODE(17, 18, unitConversion.mmToPx(60), unitConversion.mmToPx(14), 'EAN128A', data.barcode)
	lodop.PRINT()
}

export interface PrintFnSkuIntOd {
	address: string
	fnsku: string
	brandName: string
	email: string
	englishTitle: string
	sku: string
	qty: number
	shopName: string
	printerSize?: number
}
/**
 * 打印Sku 欧代
 * @param data
 */
export const printOd = async function(data: PrintFnSkuIntOd) {
	const printerSize: PrinterSize = switchPrinterSizeOd(data.printerSize)
	const lodop = getLodo()
	const printer = await getPrinter('Thermal.printer7*3')
	lodop.PRINT_INIT('打印FnSku')
	lodop.SET_PRINT_PAGESIZE(1, printerSize.width * 10, printerSize.height * 10, '')
	printer && lodop.SET_PRINTER_INDEX(printer) // 指定打印机
	if (data.qty) {
		lodop.SET_PRINT_COPIES(data.qty)
	}
	const isUk = data.shopName.indexOf('UK') !== -1
	const img = isUk
		? 'data:image/jpeg;base64,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'
		: 'data:image/jpeg;base64,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'
	lodop.ADD_PRINT_BARCODE(15, unitConversion.mmToPx(printerSize.width * 0.075), unitConversion.mmToPx(printerSize.width * 0.8), unitConversion.mmToPx(13), 'EAN128A', data.fnsku)
	lodop.ADD_PRINT_HTM(
		unitConversion.mmToPx(18),
		10,
		unitConversion.mmToPx(printerSize.width * 0.85),
		'100%',
		`<div style="font-size: ${data.printerSize === 30 ? 12 : 6}px;">
            <div style="width:${unitConversion.mmToPx(printerSize.width * 0.9)}px;overflow: hidden; white-space: nowrap;text-align: center;">${data.englishTitle}</div>
            <div style="font-size: 10px;overflow: hidden;">
								<span>new</span>
								<span style="padding-left: 10%">Made in China</span>
<!--								<div style="float: right;">${data.sku}</div>-->
							</div>
						<div>Model No.：${data.sku}</div>
						<div>Trademark：${data.brandName}</div>
						<div>Manufacturer Name: ${data.shopName}</div>
						<div>Manufacturer Address: ${data.address || ''}</div>
						<div>After-sales service E-mail: ${data.email || ''}</div>
						<div style="margin-top:1mm">
							<div style="display: flex;">
								<img src="${img}" />
								<div  style="margin-left:1mm">Information for ${isUk ? 'UK' : 'EU'} representatives</div>
							</div>
							<div >Name: Bright star consulting e.K.</div>
							<div >Address: Humboldtstr.5, 31812 Bad Pyrmont Germany</div>
							<div> E-mail: utaundnico@hotmail.com</div>
						</div>
			</div>
  `
	)
	lodop.NewPage()
	lodop.PREVIEW()
}
