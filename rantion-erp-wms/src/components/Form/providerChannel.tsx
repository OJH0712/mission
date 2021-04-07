// 邮寄方式

import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import { F, isEmpty, T } from 'ramda'
import { NsModule } from '@/store/modules/ns'
@Component({
	name: 'form-providerChannel'
})
export default class FormProviderChannel extends Vue {
	@Model('change', { type: [String, Number, Array] }) readonly value!: string | number | []
	@Prop(String) readonly valueKey: string | undefined
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop({ default: T(), type: Boolean }) readonly clearable!: boolean
	@Prop({ type: [String, Number] }) readonly status: string | undefined
	@Prop({ type: [String, Number] }) readonly country: string | undefined
	@Prop({ default: 'status', type: String }) readonly disabledType!: string
	@Prop({ default: '-', type: String }) readonly separator!: string
	@Prop({ default: F(), type: Boolean }) readonly isMultiple!: string
	get list() {
		return NsModule.logisticsList.map((data) => {
			return {
				value: data.id,
				label: data.name,
				// disabled: data.status === 0,
				children: data.children.map((item) => {
					return {
						value: item.id,
						label: item.name
						// disabled: item.status === 0
					}
				})
			}
		})
	}

	get childValue() {
		return this.value
	}
	set childValue(newValue) {
		this.$emit('change', newValue)
		this.$nextTick(() => {
			this.$emit('getData', this.getCurrentLabels(), newValue, (this.$refs.subRef as HTMLFormElement).getCheckedNodes())
		})
	}

	mounted() {
		if (isEmpty(NsModule.logisticsList)) {
			NsModule.FindLogisticsList({ pageSize: 999, page: 1 })
		}
	}
	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}
	private getCurrentLabels() {
		const data: string[] = []
		;(this.$refs.subRef as HTMLFormElement).getCheckedNodes().forEach((_: any) => {
			!_.hasChildren && data.push(_.pathLabels.join((this.$refs.subRef as HTMLFormElement).separator))
		})
		return this.isMultiple ? data : data.join('')
	}
	render() {
		return (
			<a-cascader
				v-model={this.childValue}
				default-value={this.childValue}
				options={this.list}
				allowClear={this.clearable}
				placeholder={this.placeholder}
				disabled={this.disabled}
				filterOption={this.filterOption}
			/>
		)
	}
}
