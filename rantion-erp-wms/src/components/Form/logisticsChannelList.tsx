/*
 * @Author: Chan
 * @Date: 2021-02-22 15:29:41
 * @LastEditTime: 2021-04-01 18:33:52
 * @LastEditors: Please set LastEditors
 * @Description:物流方式
 */
import { F, isEmpty, isNil, T } from 'ramda'
import { Component, Model, Prop, Ref, Vue } from 'vue-property-decorator'
import { BasicDataModule } from '@/store/modules/basicData'
import { isArray } from '@/utils'
interface Option {
	value: string
	label: string
}
@Component({
	name: 'form-logistics-channel-list'
})
export default class LogisticsChannelList extends Vue {
	@Model('change', { type: [String, Number, Array] }) readonly value!: string | number | []
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop(String) readonly prop!: string
	@Prop({ default: T(), type: Boolean }) readonly clearable!: boolean
	@Prop(Boolean) readonly multiple: boolean | undefined
	@Prop(Boolean) readonly showSearch!: boolean // 使单选模式可搜索
	@Ref('cascader') readonly cascaderRef!: HTMLFormElement
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
		// return []
	}
	set childValue(newValue: string | number | []) {
		this.$emit('change', newValue)
	}
	get list() {
		return BasicDataModule.channelList.map((_) => {
			return {
				value: _.providerCode,
				label: _.providerName,
				disabled: _.status === 0,
				children: _.logisticsChannelResponseDtos.map((_) => {
					return {
						value: _.channelCode,
						label: _.channelName,
						disabled: _.status === 0
					}
				})
			}
		})
	}

	filterOption(input: any, option: any) {
		return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
	}

	mounted() {
		if (isEmpty(this.list)) {
			BasicDataModule.getChannelList()
		}
	}
	hdChange(_: Option, data: Array<Option>) {
		this.$emit('changeLabel', data && data.map((item) => item.label))
	}
	render() {
		return (
			<a-cascader
				on-change={this.hdChange}
				v-model={this.childValue}
				default-value={this.childValue}
				options={this.list}
				allowClear={this.clearable}
				ref="cascader"
				placeholder={this.placeholder}
				disabled={this.disabled}
				filterOption={this.filterOption}
			/>
		)
	}
}
