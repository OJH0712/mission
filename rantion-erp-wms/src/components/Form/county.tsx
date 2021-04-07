/*
 * @Author:
 * @Date: 2021-03-24 11:34:58
 * @LastEditTime: 2021-03-27 15:58:57
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \rantion-erp-wms\src\components\Form\county.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 选择国家
import { Component, Model, Prop, Ref, Vue } from 'vue-property-decorator'
import { StorageModule } from '@/store/modules/storage'
import { isEmpty, isNil, T } from 'ramda'
import { isArray } from '@/utils'
@Component({
	name: 'form-county'
})
export default class FormWarehouse extends Vue {
	@Model('change', { type: [String, Number, Object] }) readonly value!: string | number | []
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(Boolean) readonly showSearch: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop({ default: T(), type: Boolean }) readonly clearable!: boolean
	@Prop({ type: [String, Number] }) readonly status: string | undefined
	@Prop({ default: 'status', type: String }) readonly disabledType!: string
	@Ref('selectRef') readonly selectRef!: HTMLFormElement
	get list() {
		return StorageModule.countyList
	}

	mounted() {
		if (isEmpty(StorageModule.countyList)) {
			StorageModule.addCountyList()
		}
	}
	hdChange(newValue: any) {
		this.$emit('change', newValue.key)
		this.$emit('changeLabel', newValue.label)
	}
	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}
	get childValue() {
		if (isArray(this.value)) {
			return this.value
		}
		if (isNil(this.value)) {
			return []
		}
		return this.value
	}
	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	render() {
		return (
			<a-select
				filterOption={this.filterOption}
				option-filter-prop="children"
				on-change={this.hdChange}
				labelInValue
				allowClear={this.clearable}
				defaultValue={{ key: this.value + '' }}
				disabled={this.disabled}
				placeholder={this.placeholder}
				showSearch={this.showSearch}
				options={this.list}
			></a-select>
		)
	}
}
