/*
 * @Description:计量单位组件
 * @Author: hyx
 * @Date: 2021-03-22 14:00
 */
import { App, computed, defineComponent, onMounted, PropType, Plugin } from 'vue'
import { BasicDataModule } from '@/store/modules/basicData'
import { isEmpty } from 'ramda'
const Props = {
	value: [String, Number] as PropType<string | number>,
	label: [String, Number] as PropType<string | number>,
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
const formMeterUnit = defineComponent({
	name: 'form-meterUnit',
	props: Props,
	setup(porps, { emit }) {
		const computeCount = computed(() => {
			return {
				list: BasicDataModule.meteringUnitList
			}
		})
		function onChange(value: string, option?: any) {
			if (option) {
				emit('update:value', option.value)
				emit('update:label', option.label)
			} else {
				emit('update:modelValue', undefined)
				emit('update:label', undefined)
			}
		}
		onMounted(() => {
			if (isEmpty(BasicDataModule.meteringUnitList)) {
				BasicDataModule.getMeteringUnitList()
			}
		})
		return () => (
			<a-select
				onChange={onChange}
				mode={porps.mode}
				disabled={porps.disabled}
				allowClear={porps.allowClear}
				value={porps.value}
				placeholder={porps.placeholder}
				options={computeCount.value.list}
			/>
		)
	}
})
formMeterUnit.install = function(app: App) {
	app.component(formMeterUnit.name, formMeterUnit)
	return app
}
export default formMeterUnit as typeof formMeterUnit & Plugin
