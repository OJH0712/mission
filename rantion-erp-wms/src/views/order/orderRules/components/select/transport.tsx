import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
	name: 'Transport'
})
export default class Transport extends Vue {
	public values = ''
	@Prop({ type: String, default: '' }) optionType: string
	@Prop({ type: String, default: '' }) type: string
	@Prop({ type: [Object, Array], default: () => [] }) options: any
	@Prop(Boolean) show: boolean
	hdChange() {
		const data = {
			optionType: this.optionType,
			rulerOptions: this.values.split(/[\n\r]/).map((res) => {
				return {
					optionType: this.type,
					value: res,
					valueFullName: res
				}
			})
		}
		this.$emit('changeDate', data)
	}
	@Watch('options')
	func(val: boolean, old: boolean) {
		if (val === true && old === false) {
			if (this.options && this.type && this.options[this.type]) {
				this.values = this.options[this.type].join('\n') || ''
			}
		}
	}

	mounted() {
		if (this.options && this.type && this.options[this.type]) {
			this.values = this.options[this.type].join('\n') || ''
		}
	}
	render() {
		return (
			<div>
				Shopify：
				<br />
				<a-textarea v-model={this.values} placeholder="多种运输方式用enter换行" on-change={this.hdChange} auto-size={{ minRows: 3, maxRows: 5 }} />
			</div>
		)
	}
}
