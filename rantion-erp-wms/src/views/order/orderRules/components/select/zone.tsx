import { Component, Vue, Model, Prop } from 'vue-property-decorator'
import { BasicDataModule } from '@/store/modules/basicData'
import { equals, find, isEmpty, keys, map } from 'ramda'
@Component({
	name: 'Zone'
})
export default class Zone extends Vue {
	@Model('change', { type: [String, Number, Object] }) readonly value!: []
	@Prop({ type: String, default: '' }) optionType: string
	@Prop({ type: String, default: '' }) type: string
	@Prop({ type: [Object, Array], default: () => [] }) options: string
	@Prop(Boolean) show: boolean
	public pageValue = []
	get zoneList() {
		const keyList = keys(BasicDataModule.zoneList)
		return map((key) => {
			return {
				label: map((item) => item.code, BasicDataModule.zoneList[key]).join('，'),
				value: key,
				key: key
			}
		}, keyList)
	}
	mounted() {
		if (isEmpty(this.zoneList)) {
			BasicDataModule.getZoneList()
		}
		console.log(this.$props)
	}
	hdChange(newValue: string[]) {
		const data = {
			optionType: this.optionType,
			rulerOptions: this.getRulerOptions(newValue)
		}
		this.$emit('changeDate', data)
	}
	getRulerOptions(newValue: string[]) {
		return map((item) => {
			return {
				optionType: this.type,
				value: String(item),
				valueFullName: this.getName(item)
			}
		}, newValue)
	}
	getName(id: string) {
		const data = find((item) => equals(id, item.key), this.zoneList)
		if (data) {
			return data.label
		}
		return ''
	}
	render() {
		return (
			<div>
				Shopify：
				<br />
				<a-checkbox-group on-change={this.hdChange} defaultValue={this.value}>
					{map(
						(res) => (
							<div>
								<a-checkbox value={res.value} key={res.key}>
									{res.label}
								</a-checkbox>
								{/* <br /> */}
							</div>
						),
						this.zoneList
					)}
				</a-checkbox-group>
			</div>
		)
	}
}
