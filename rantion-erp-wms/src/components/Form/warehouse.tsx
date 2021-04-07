/*
 * @Author:
 * @Date: 2021-03-24 11:34:58
 * @LastEditTime: 2021-03-27 15:36:11
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \rantion-erp-wms\src\components\Form\warehouse.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 选择仓库
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import { StorageModule } from '@/store/modules/storage'
import { map, isEmpty, T, equals, isNil } from 'ramda'
@Component({
	name: 'form-warehouse'
})
export default class FormWarehouse extends Vue {
	@Model('change', { type: [String, Number] }) value!: string | number | []
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop({ default: T(), type: Boolean }) readonly clearable!: boolean
	@Prop({ type: [String, Number] }) readonly status: string | undefined
	@Prop({ default: 'status', type: String })
	readonly disabledType!: string
	@Prop({ default: 'default', type: String }) readonly mode: string | undefined

	get list() {
		return StorageModule.warehouse
	}

	mounted() {
		if (isEmpty(StorageModule.warehouse)) {
			StorageModule.addWarehouse()
		}
	}
	get childValue() {
		if (isNil(this.value)) {
			console.log(1)
			return []
		}
		return this.value
	}

	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	handleChange(value: string) {
		this.$emit('change', value)
	}
	render() {
		return (
			<a-select
				allowClear={this.clearable}
				onChange={this.handleChange}
				mode={this.mode}
				disabled={this.disabled}
				placeholder={this.placeholder}
				defaultValue={this.childValue}
				v-model={this.childValue}
			>
				{map(
					(item: any) => (
						<a-select-option disabled={equals(item[this.disabledType], this.status)} value={item.warehouseCode} key={item.warehouseCode}>
							{item.warehouseName}
						</a-select-option>
					),
					this.list
				)}
			</a-select>
		)
	}
}
