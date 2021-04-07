/*
 * @Description:配置组件
 * @Author: hyx
 * @Date: 2021-03-19 11:35
 */
// 选择配置
import { App, defineComponent, PropType, Plugin } from 'vue'
import { options } from '@/dictionaries/config'
const Props = {
	value: [String, Number] as PropType<string | number>,
	label: [String, Number] as PropType<string | number>,
	// @Prop(String) readonly prop!: string,
	prop: {
		type: String as PropType<string>,
		default: 'status'
	},
	disabled: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	mode: String as PropType<string>,
	placeholder: String as PropType<string>,
	allowClear: {
		type: Boolean as PropType<boolean>,
		default: true
	}
}
const FormConfig = defineComponent({
	name: 'form-config',
	props: Props,
	setup(porps, { emit }) {
		function onChange(value: number) {
			emit('update:value', value)
		}
		return () => (
			<a-select
				onChange={onChange}
				mode={porps.mode}
				disabled={porps.disabled}
				allowClear={porps.allowClear}
				value={isNaN(Number(porps.value)) ? porps.value : Number(porps.value)}
				placeholder={porps.placeholder}
				options={options[porps.prop]}
			/>
		)
	}
})

FormConfig.install = function(app: App) {
	app.component(FormConfig.name, FormConfig)
	return app
}
export default FormConfig as typeof FormConfig & Plugin
