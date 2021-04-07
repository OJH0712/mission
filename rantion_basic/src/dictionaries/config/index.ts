/**
 * @user: antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/8/13 下午4:11
 */
import { forEach, keys } from 'ramda'
export interface Config {
	readonly [index: string]: { [index: string]: string | number }
}
export const optObject: Config = {
	// 角色管理-用户状态
	baseStatus: {
		0: '禁用',
		1: '启用'
	},
	//产品品牌状态
	status: {
		0: '停用',
		1: '启用'
	},
	//产品SKU审批状态
	approvalStatus: {
		'-1': '未提交审批',
		0: '已驳回',
		1: '已通过',
		2: '审批中'
	},
	//产品SKU MQ推送状态
	mqSendStatusStatus: {
		'-1': '未推送',
		0: '推送失败',
		1: '推送成功'
	},
	//产品SKU NS消费状态
	nsConsumeStatusStatus: {
		'-1': '未消费',
		0: '消费失败',
		1: '消费成功'
	},
	// 国家状态
	countryStatus: {
		0: '停用',
		1: '启用'
	},
	// 材质状态
	MaterialStatus: {
		0: '停用',
		1: '启用'
	},
	// 单位状态
	unitStatus: {
		0: '停用',
		1: '启用'
	},
	// 物流分组属性状态
	logisticsGroupAttrStatus: {
		0: '失效',
		1: '有效'
	},
	// 国家-大洲
	continent: {
		SZD: 'SZD',
		中美洲: '中美洲',
		亚洲: '亚洲',
		加勒比海地区: '加勒比海地区',
		北美洲: '北美洲',
		南美洲: '南美洲',
		大洋洲: '大洋洲',
		拉丁美洲: '拉丁美洲',
		欧洲: '欧洲',
		非洲: '非洲'
	},
	//是否需要厂检
	isFactoryCheck: {
		0: '否',
		1: '是'
	},
	//是否需要质检
	isWarehouseCheck: {
		0: '否',
		1: '是'
	},
	//是否研发产品
	isDevolopFlag: {
		0: '否',
		1: '是'
	},
	//运输方式
	shippingType: {
		10: '空运',
		20: '海运',
		30: '快船',
		40: '铁路'
	}
}

function getOptions(data: Config): { [index: string]: Array<OptionsValue> } {
	const _obj: { [index: string]: Array<OptionsValue> } = {}
	forEach((key) => {
		const list: Array<OptionsValue> = []
		const item = data[key]
		forEach((key) => {
			const a = Number(key)
			list.push({
				value: isNaN(a) ? key : a,
				label: item[key]
			})
		}, keys(item))
		_obj[key] = list
	}, keys(data))
	return _obj
}
export const options = getOptions(optObject)
export interface OptionsValue {
	value: string | number
	label: string | number
}
