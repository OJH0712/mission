// 选择用户
import { BasicDataModule } from '@/store/modules/basicData'
import { F, isEmpty, T, map } from 'ramda'
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator'

@Component({
	name: 'form-userName'
})
export default class FormUserName extends Vue {
	@Model('change', { type: [String, Number, Array] }) readonly value!: string | number | []
	@Prop(Boolean) readonly disabled: boolean | undefined
	@Prop(String) readonly placeholder: string | undefined
	@Prop({ default: F(), type: Boolean }) readonly multiple!: boolean
	@Prop({ default: T(), type: Boolean }) readonly clearable!: boolean
	@Prop({ default: 'userName', type: String }) readonly prop!: keyof defs.ucenter.SysUserResponseDto
	get list() {
		return BasicDataModule.userList
	}
	get childValue() {
		return this.value
	}
	set childValue(newValue: any) {
		this.$emit('change', newValue)
	}
	mounted() {
		if (isEmpty(BasicDataModule.userList)) {
			BasicDataModule.getUserList()
		}
	}
	@Emit('change')
	hdChange(val: string | number | []) {
		return val
	}
	render() {
		return (
			<a-select clearable={this.clearable} disabled={this.disabled} multiple={this.multiple} placeholder={this.placeholder} filterable ref="subRef" v-model={this.childValue}>
				{map(
					(item) => (
						<a-select-option key={item.id} value={item[this.prop]}>
							{item.userName}
						</a-select-option>
					),
					this.list
				)}
			</a-select>
		)
	}
}
