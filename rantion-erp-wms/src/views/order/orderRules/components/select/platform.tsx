import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { BasicDataModule } from '@/store/modules/basicData'
import { isEmpty } from 'ramda'
import { filterMap } from '@/utils'
@Component({
	name: 'Platform'
})
export default class Platform extends Vue {
	@Prop({ type: [Object, Array, String], default: '' }) optionType: string | string[]
	@Prop({ type: [String, Array], default: '' }) type: string
	@Prop({ type: [Object, Array], default: () => [] }) options: any
	@Prop(Boolean) show: boolean
	checkList: string[] = []
	get platformShopList() {
		return BasicDataModule.platformShopList.map((item) => {
			return {
				label: item.shopName,
				value: item.id + ''
			}
		})
	}
	@Watch('options')
	func() {
		this.init()
	}
	mounted() {
		this.init()
	}
	init() {
		if (isEmpty(this.platformShopList)) {
			BasicDataModule.getplatformShopList()
		}
		if (this.options && this.type && this.options.account) {
			this.checkList = this.options.account || []
		}
	}
	hdChange(newValue: string[]) {
		const data = {
			optionType: this.optionType,
			rulerOptions: this.getRulerOptions(newValue)
		}
		this.checkList = newValue
		this.$emit('changeDate', data)
	}
	getRulerOptions(newValue: string[]) {
		return filterMap(
			(item) => newValue.includes(item.id + ''),
			(item) => {
				return {
					optionType: 'account',
					value: String(item.id),
					superfluousField: `${item.platformId}|${item.platformName}` || null,
					valueFullName: item.shopName
				}
			},
			BasicDataModule.platformShopList
		)
	}
	render() {
		return (
			<div>
				Shopify：
				<br />
				<a-checkbox-group on-change={this.hdChange} value={this.checkList} defaultValue={this.checkList} options={this.platformShopList} />
			</div>
		)
	}
}
