import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T, isNil, isEmpty, split } from 'ramda'
import { StorageModule } from '@/store/modules/storage'
import { getFileByAjax } from '@/api/public'
/*
 * @Description: 打印运单
 * @Author: owen
 * @Date: 2021-03-06 13:40:00
 * @LastEditTime: 2021-03-10 21:20:49
 */
// const getTypeByHeaders = pipe(split('='), last, split('.'), last)
@Component({
	name: 'printPDF'
})

//  打印 todo 未完成
export default class PrintPDF extends Vue {
	public printSize: any
	public visible = F()

	public async print(list: Array<{ distribute: number; path: string }>): Promise<any> {
		if (Object.prototype.toString.call(list) !== '[object Array]') {
			this.$message.error('打印参数异常')
			return false
		}
		//	console.log('list', list)
		this.visible = T()
		if (isNil(this.printSize) || isEmpty(this.printSize)) {
			this.printSize = '10*10'
		}
		this.printSize = split('*', this.printSize)
		// const labelStandard = { width: head(this.printSize), length: last(this.printSize) }
		// const printerName = await this.getPrinter('Thermal.printer10*10')
		this.$message.info('开始下载运单')
		const promiseList = list.map((element) => this.demoDownloadPDF(element.path, element.distribute))
		let pdfList = await Promise.all(promiseList)
		// 过滤掉是的null
		pdfList = pdfList.filter((item) => item !== null)
		this.$message.info(`运单下载完成(共${pdfList.length}张),开始加入打印列队`)
		// 根据库位排序

		// pdfList.sort((a, b) => a.distribute - b.distribute)
		// pdfList.forEach((item) => {
		//   const type = getTypeByHeaders(item.type)
		//   const isImage = new RegExp(/(gif|jpg|jpeg|png|GIF|JPEG|JPG|PNG)$/).test(type)
		//   if (isImage) {
		//     blobTobase64(new Blob([item.value])).then((data) => {
		//       this.myPreviewImg(data, labelStandard, printerName)
		//     })
		//   } else {
		//     this.myPreviewPDF(getBASE64(new Uint8Array(item.value)), labelStandard, printerName)
		//   }
		// })
		// this.$notify({
		//   title: '提示',
		//   message: `加入指定打印机(${printerName})完成(共${pdfList.length}条)`,
		//   type: 'success',
		// })
	}
	close() {
		this.visible = F()
		this.printSize = ''
	}
	onOk() {
		this.visible = F()
	}
	public render() {
		return (
			<div>
				<div id="pickPrintPDF" style="position: absolute;z-index: -10;left: 99999px;"></div>
				<a-modal visible={this.visible} title="打印规格" on-cancel={this.close} on-ok={this.onOk}>
					<a-input v-model={this.printSize} placeholder="10*10(宽*高)" onPressEnter={this.onOk} />
				</a-modal>
			</div>
		)
	}
	/**
	 * 获取打印机名称  key 全局参数配置里面的key
	 */
	getPrinter(key: any) {
		return new Promise((resolve) => {
			const printerList = StorageModule.printerList
			if (isEmpty(printerList)) {
				StorageModule.addPrinterList()
					.then((data) => {
						const printer = data.find((_) => key === _.key)
						resolve((printer && printer.value) || 'rantion-thermal-printer10*10')
					})
					.catch(() => {
						resolve('rantion-thermal-printer10*10')
					})
			} else {
				const printer = printerList.find((_) => key === _.key)
				resolve((printer && printer.value) || 'rantion-thermal-printer10*10')
			}
		})
	}
	/**
	 * 获取打印内容  url pdf的URL  distribute 库位
	 * 返回 pdf 内容和库位
	 */
	demoDownloadPDF(url: any, distribute: any) {
		return new Promise((resolve) => {
			getFileByAjax(url)
				.then((response) => {
					resolve({
						value: response.data,
						distribute,
						url,
						type: response.headers['content-disposition']
					})
				})
				.catch((error) => {
					console.error(error)
					resolve(null)
				})
		})
	}
}
