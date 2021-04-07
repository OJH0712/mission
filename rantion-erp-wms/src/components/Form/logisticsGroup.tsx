/*
 * @Author: antes
 * @Date: 2021-02-22 15:29:41
 * @LastEditTime: 2021-02-23 10:39:25
 * @LastEditors: antes
 * @Description: 物流分组
 */
import { F, isEmpty, isNil, map } from 'ramda'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import { StorageModule } from '@/store/modules/storage'
import { isArray } from '@/utils'
@Component({
	name: 'form-logistics-group'
})
export default class LogisticsGroup extends Vue {
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
			return []
		}
		return this.value
	}
	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	get list() {
		return StorageModule.logisticsGroup
	}

	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}

	mounted() {
		if (isEmpty(this.list)) {
			StorageModule.addGroupList()
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
						<a-select-option value={item.logisticsGroupCode} key={item.id}>
							{item.logisticsGroupName}
						</a-select-option>
					),
					this.list
				)}
			</a-select>
		)
	}
}
