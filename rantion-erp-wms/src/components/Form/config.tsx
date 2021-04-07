// 选择配置
import { options } from '@/dictionaries/config'
import { F, isNil } from 'ramda'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import { isArray } from '@/utils'
@Component({
	name: 'form-config'
})
export default class FormConfig extends Vue {
	@Model('change', { type: [String, Number, Array] }) readonly value!: string | number | []
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop(String) readonly prop!: string
	@Prop(Boolean) readonly showSearch!: boolean // 使单选模式可搜索
	@Prop({
		type: String,
		default: 'default'
	})
	readonly mode!: 'default' | 'multiple' | 'tags' | 'combobox' // 单选 多选
	@Prop({
		type: Boolean,
		default: F()
	})
	readonly allowClear!: boolean // 清除
	get childValue() {
		if (isArray(this.value)) {
			return this.value
		}
		if (isNil(this.value)) {
			return ''
		}
		return this.value.toString()
	}
	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	render() {
		return (
			<a-select
				v-model={this.childValue}
				showSearch={this.showSearch}
				options={options[this.prop]}
				allowClear={this.allowClear}
				mode={this.mode}
				placeholder={this.placeholder}
				disabled={this.disabled}
			/>
		)
	}
}
