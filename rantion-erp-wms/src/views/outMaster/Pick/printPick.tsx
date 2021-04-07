import { Component, Ref, Watch } from 'vue-property-decorator'
import Vue from 'vue'
import { chunk } from '@/utils'
import { forEach, isNil } from 'ramda'
import SelectPrinter from '@/components/common/selectPrint'
import JsBarcode from 'jsbarcode'
// import getLodo from '@/plugin/LodopFuncs'

/*
 * @Description: 打印拣货单
 * @Author: owen
 * @Date: 2021-03-09 16:17:41
 * @LastEditTime: 2021-03-09 20:28:07
 */
@Component({
	name: 'PrintPick',
	components: { SelectPrinter }
})
export default class PrintPick extends Vue {
	@Ref('SelectPrinter') readonly SelectPrinterRef!: HTMLFormElement
	@Watch('imgLength')
	onCmgLengthChanged(val: number) {
		if (val === 0) {
			// printJS(this.$refs.print);
			this.myPreview()
		}
	}
	public visible = false
	pickPrintData: any = []
	printerSize: {
		printer: ''
		size: 'A4'
	}
	imgLength: any = 1
	// print() {
	// 	console.log('print')
	// }
	confirm(data: { printer: ''; size: 'A4' }) {
		this.printerSize = data
		this.myPreview()
	}
	print(data: any) {
		const list: any[] = []
		data.positionResponseDtos.forEach((element: any, index: number) => {
			// const { skuResponseDtos } = element
			const lis = chunk(element.skuResponseDtos, 10)
			//	console.log(lis)
			forEach((item: any[]) => {
				const _list: any = []
				item.forEach((_: any) => {
					console.log(_)

					const { skuDetailResponseDtos, ...ob } = _
					skuDetailResponseDtos.forEach((_: any, i: any) => {
						_list.push({
							index: index + 1,
							iskuLen: i === 0,
							kuLen: item.length * skuDetailResponseDtos.length,
							skuLen: skuDetailResponseDtos.length,
							isShowBySku: i === 0,
							skuResponseDtos: { ...ob },
							..._
						})
					})
				})
				list.push({
					list: _list,
					...data
				})
			}, lis)
		})
		console.log(list)
		delete data.positionResponseDtos
		this.pickPrintData = list
		this.imgLength = isNil(this.pickPrintData[0].aono) ? 1 : 2 //* list.length
		this.$nextTick(() => {
			if (this.pickPrintData[0].aono) {
				JsBarcode(this.$refs.aonoImg, this.pickPrintData[0].aono, {
					font: 'Consolas',
					width: 1, // 较细处条形码的宽度
					fontSize: 12,
					height: 40
				})
			}
			JsBarcode(this.$refs.picknoImg, this.pickPrintData[0].pickno, {
				font: 'Consolas',
				width: 1, // 较细处条形码的宽度
				fontSize: 12,
				height: 40
			})
		})
		console.log(111)
	}

	myPreview() {
		console.log('print')

		// const LODOP = getLodo()
		// if (isEmpty(this.printerSize.printer)) {
		//   this.SelectPrinterRef.show()
		//   return
		// }
		// LODOP.PRINT_INIT('打印拣货单明细')
		// // const printerSize = this.printerSize.size || 'A4'
		// // const size = equals(printerSize, 'A4') ? '148mm' : '297mm'
		// LODOP.SET_PRINT_PAGESIZE(this.printerSize.intOrient, 0, 0, this.printerSize.size || 'A4')
		// LODOP.SET_PRINTER_INDEX(this.printerSize.printer) // 指定打印机
		// if (this.printerSize.qty) {
		//   LODOP.SET_PRINT_COPIES(this.printerSize.qty)
		// }
		// if (!this.printerSize.isSave) {
		//   this.printerSize = {
		//     printer: ''
		//   }
		// }
		// this.pickPrintData.forEach((item:any, index:number) => {
		//   if (index === 0) {
		//     const strFormHtml = this.getOutHtml(this.$refs.tableHead[0].innerHTML + this.$refs.tableBody[0].innerHTML)
		//     LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', strFormHtml)
		//   } else {
		//     LODOP.NewPageA()
		//     LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', this.getOutHtml(this.$refs.tableBody[index].innerHTML))
		//   }
		// })
		// LODOP.SET_PRINT_STYLEA(0, 'Stretch', 1)
		// LODOP.NewPage()
		// LODOP.PRINT()
	}
	cancel() {
		this.visible = false
	}
	public render() {
		return (
			<div>
				<a-modal visible={this.visible} on-ok={this.print} on-cancel={this.cancel}>
					<div>hello</div>
				</a-modal>
				<selectPrinter ref="SelectPrinter" />
			</div>
		)
	}
}
