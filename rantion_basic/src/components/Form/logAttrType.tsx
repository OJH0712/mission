/*
 * @Description:物流属性类型组件
 * @Author: hyx
 * @Date: 2021-03-23 10:15
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
const formLogAttrType = defineComponent({
	name: 'form-logAttrType',
	props: Props,
	setup(porps, { emit }) {
		const computeCount = computed(() => {
			return {
				list: BasicDataModule.logisticsAttrTypeList
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
			if (isEmpty(BasicDataModule.logisticsAttrTypeList)) {
				BasicDataModule.getLogisticsAttrTypeList()
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

formLogAttrType.install = function(app: App) {
	app.component(formLogAttrType.name, formLogAttrType)
	return app
}
export default formLogAttrType as typeof formLogAttrType & Plugin
