import { Component } from 'vue-property-decorator'

import { map, F, isEmpty } from 'ramda'
import getLodo from '@/plugin/LodopFuncs'
import { deepCopy } from '@/utils'
import Vue from 'vue'
import { CreateElement, RenderContext, VNode } from 'vue/types/umd'
interface Option {
	lable: string | number
	value: string | number
}
export abstract class JsxComponent extends Vue {
	public abstract render(createElement: CreateElement, context: RenderContext): VNode
}

@Component({
	name: 'SelectPrinter'
})
export default class SelectPrinter extends JsxComponent {
	public sizeOptions: Array<Option> = [
		{
			lable: 'A4',
			value: 'A4'
		},
		{
			lable: 'A5',
			value: 'A5'
		}
	]
	public isShow = F()
	public fromData = {
		printer: '',
		size: 'A5',
		intOrient: 2,
		isSave: false,
		qty: 1
	}
	public printerList: Array<Option> = []
	public close() {
		this.isShow = F()
		this.$emit('close')
	}
	public show() {
		this.isShow = true
		const lodop = getLodo()
		let index = lodop.GET_PRINTER_COUNT()
		const option: Array<Option> = []
		while (index >= 0) {
			const lable = lodop.GET_PRINTER_NAME(index)
			option.push({ lable, value: lable })
			index--
		}
		this.printerList = option
	}
	public confirm() {
		console.log('开始打印')

		if (isEmpty(this.fromData.printer)) {
			this.$message.info('请选择打印机')
			return false
		}
		this.$emit('confirm', deepCopy(this.fromData))
		this.close()
		return
	}
	render() {
		return (
			<a-modal visible={this.isShow} on-cancel={this.close} title="打印选择" on-ok={this.confirm}>
				<a-form laba-width="100px">
					<a-form-item label="打印机" required>
						<a-select v-model={this.fromData.printer} placeholder="请选择">
							{map(
								(item) => (
									<a-option label={item.lable} value={item.value} key={item.value} />
								),
								this.printerList
							)}
						</a-select>
					</a-form-item>
					<a-form-item label="打印机规格" required>
						<a-select v-model={this.fromData.size} placeholder="请选择">
							<a-select-option label="A4" value="A4">
								A4
							</a-select-option>
							<a-select-option label="A5" value="A5">
								A5
							</a-select-option>
						</a-select>
					</a-form-item>
					<a-form-item label="打印方向" required>
						<a-select v-model={this.fromData.intOrient} placeholder="请选择">
							<a-select-option label="纵向打印" value={1}>
								纵向打印
							</a-select-option>
							<a-select-option label="横向打印" value={2}>
								横向打印
							</a-select-option>
						</a-select>
					</a-form-item>
					<a-form-item label="打印数量" required>
						<a-input v-model={this.fromData.qty} />
					</a-form-item>
					<a-form-item>
						<a-checkbox v-model={this.fromData.isSave}>本次不在提示</a-checkbox>
					</a-form-item>

					{/* <a-form-item>
						<a-button onClick={this.close}>取消</a-button>
						<a-button onClick={this.confirm} type="primary">
							确定
						</a-button>
					</a-form-item> */}
				</a-form>
			</a-modal>
		)
	}
}
// </script>
