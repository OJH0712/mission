import { Component, Vue, Model, Prop, Watch } from 'vue-property-decorator'
import { StorageModule } from '@/store/modules/storage'
import { equals, find, isEmpty, map } from 'ramda'
@Component({
	name: 'Country'
})
export default class Country extends Vue {
	@Model('change', { type: [String, Number, Object] }) readonly value!: []
	@Prop({ type: String, default: '' }) optionType: string
	@Prop({ type: String, default: '' }) type: string
	@Prop({ type: [Object, Array], default: () => [] }) options: any
	@Prop(Boolean) show: boolean
	public checkList: string[] = []
	public targetKeys: string[] = []
	hdChange() {
		const data = {
			optionType: this.optionType,
			rulerOptions:
				map((res) => {
					return {
						optionType: this.type,
						value: res,
						valueFullName: this.getName(res)
					}
				}, this.targetKeys) || []
		}
		this.$emit('changeDate', data)
	}
	getName(str: string) {
		const data = find((item) => equals(str, item.value + ''), StorageModule.countyList)
		if (data) {
			return data.label
		}
		return ''
	}
	@Watch('options')
	waOptions(params: any) {
		this.init()
	}
	mounted() {
		console.log(this.options)
		this.init()
	}
	init() {
		if (isEmpty(this.countryCodeList)) {
			StorageModule.addCountyList()
		}
		if (this.options && this.type && this.options[this.type]) {
			this.targetKeys = this.options[this.type] || []
			console.log(this.targetKeys)
		}
	}
	get countryCodeList() {
		const data =
			StorageModule.countyList.map((item) => {
				return {
					key: item.value + '',
					title: item.label,
					id: item.value,
					description: item.label
				}
			}) || []
		return data
	}
	handleChange(nextTargetKeys: string[]) {
		this.targetKeys = nextTargetKeys
		this.hdChange()
	}
	handleSelectChange(sourceSelectedKeys: string[], targetSelectedKeys: string[]) {
		this.checkList = [...sourceSelectedKeys, ...targetSelectedKeys]
	}
	render() {
		return (
			<a-transfer
				list-style={{
					width: '300px',
					height: '300px'
				}}
				data-source={this.countryCodeList}
				render={(item: any) => item.title}
				show-search
				titles={['国家', '已选国家']}
				targetKeys={this.targetKeys}
				selected-keys={this.checkList}
				onChange={this.handleChange}
				onselectChange={this.handleSelectChange}
			/>
		)
	}
}
