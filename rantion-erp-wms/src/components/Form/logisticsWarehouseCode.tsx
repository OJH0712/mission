/*
 * @Author: Chan
 * @Date: 2021-02-20 09:28:05
 * @LastEditTime: 2021-02-20 09:43:35
 * @LastEditors: Chan
 * @Description:
 */
// 选择渠道商适用仓库
import { F, map, isNil, isEmpty } from 'ramda'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import { isArray } from '@/utils'
import { BasicDataModule } from '@/store/modules/basicData'
@Component({
	name: 'form-warehouse-code'
})
export default class WarehouseCode extends Vue {
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
		return this.value
	}
	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	get list() {
		return BasicDataModule.warehouseCodeList
	}

	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}

	mounted() {
		if (isEmpty(this.list)) {
			BasicDataModule.getWarehouseCodeList()
		}
	}
	render() {
		return (
			<a-select
				v-model={this.childValue}
				showSearch={this.showSearch}
				allowClear={this.allowClear}
				mode={this.mode}
				placeholder={this.placeholder}
				disabled={this.disabled}
				filterOption={this.filterOption}
				option-filter-prop="children"
			>
				{map(
					(item) => (
						<a-select-option value={item.warehouseCode} key={item.warehouseCode}>
							{item.warehouseName}
						</a-select-option>
					),
					this.list
				)}
			</a-select>
		)
	}
}
