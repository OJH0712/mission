// 选择用户
import { Component, Model, Prop, Ref, Vue } from 'vue-property-decorator'
import { BasicDataModule } from '@/store/modules/basicData'
import { isEmpty, isNil, map, T } from 'ramda'
import { isArray } from '@/utils'
@Component({
	name: 'form-sysUser'
})
export default class SysUser extends Vue {
	@Model('change', { type: [String, Number, Object] }) readonly value!: string | number | []
	@Prop(String) readonly valueKey: string | undefined
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop(Boolean) readonly showSearch!: boolean // 使单选模式可搜索
	@Prop({ default: T(), type: Boolean }) readonly allowClear!: boolean
	@Prop({ type: [String, Number] }) readonly status: string | undefined
	@Prop({ default: 'status', type: String }) readonly disabledType!: string
	@Ref('selectRef') readonly selectRef!: HTMLFormElement
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

	mounted() {
		if (isEmpty(BasicDataModule.sysUserList)) {
			BasicDataModule.getSysUserList()
		}
	}

	get list() {
		return BasicDataModule.sysUserList
	}

	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}

	render() {
		return (
			<a-select
				v-model={this.childValue}
				showSearch={this.showSearch}
				allowClear={this.allowClear}
				placeholder={this.placeholder}
				disabled={this.disabled}
				filterOption={this.filterOption}
				option-filter-prop="children"
			>
				{map(
					(item) => (
						<a-select-option value={item.value} key={item.value}>
							{item.label}
						</a-select-option>
					),
					this.list
				)}
			</a-select>
		)
	}
}
