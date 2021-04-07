import Platform from './select/platform'
import Zone from './select/zone'
import Transport from './select/transport'
import Country from './select/country'
// import orderItems from './select/orderItems'
// import logisticsGroup from './select/logisticsGroup'
// import whether from './select/whether'
// import range from './select/range'
//  option_type 条件类型，orderSource:订单来源, transformType:运输类型， destination:目的地, orderItems:订单产品
// option_type 选项类型，platform:平台, site:站点, account:账号, transformType:运输方式, country:国家
interface Date {
	name: string
	key: string
	list: ListDate[]
}
export interface ListDate {
	id: number
	optionType: OptionType
	type: string[] | string
	name: string
	linkText: string
	components: any
	isSelect: boolean
	postTypeShow?: boolean
}
export type OptionType = 'orderSource' | 'warehouse' | 'transformType' | 'destination' | 'zipZone'
const data: Array<Date> = [
	{
		name: '平台账号',
		key: 'accountNumberItems',
		list: [
			// 账号原始数据
			{
				id: 1,
				optionType: 'orderSource',
				type: ['platform', 'account', 'site'],
				name: '订单来源为',
				linkText: '指定平台/站点/账号',
				components: Platform,
				isSelect: false
			}
		]
	},
	{
		name: '物流',
		key: 'logisticsItems',
		list: [
			// {
			// 	id: 1,
			// 	optionType: 'warehouse',
			// 	type: 'warehouse',
			// 	name: '发货仓库为',
			// 	linkText: '指定仓库',
			// 	isSelect: false,
			// 	components: 'warehouse',
			// 	postTypeShow: true
			// },
			{
				id: 2,
				optionType: 'transformType',
				type: 'transformType',
				name: '买家选择的运输类型为',
				linkText: '指定运输类型',
				isSelect: false,
				components: Transport
			},
			{
				id: 3,
				optionType: 'destination',
				type: 'country',
				name: '订单目的地为',
				linkText: '指定国家',
				isSelect: false,
				components: Country
			},
			{
				id: 4,
				optionType: 'zipZone',
				type: 'zipZone',
				name: '订单目的地为',
				linkText: '指定邮编范围',
				isSelect: false,
				components: Zone
			}
		]
	}
]
export default data
