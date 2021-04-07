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
	roleUserStatus: {
		0: '禁用',
		1: '启用'
	},
	channelProviderStatus: {
		0: '禁用',
		1: '启用'
	},
	/** 业务属性分类 10:toB 20:toC，默认为10 */
	channelProviderServiceProperty: {
		10: 'toB',
		20: 'toC'
	},
	/** 状态 1:启用 0:停用 */
	logisticsChannelStatus: {
		0: '停用',
		1: '启用'
	},
	/** 报损状态 10:待审核 20:已审核 30:已驳回 */
	breakageStatus: {
		10: '待审核',
		20: '已审核',
		30: '已驳回'
	},
	/** 盘点状态：10:待执行 20:执行中 30:已执行 35:待审核 38:已驳回 40:已完成 */
	inventoryStatus: {
		10: '待执行',
		20: '执行中',
		30: '已执行',
		35: '待审核',
		38: '已驳回',
		40: '已完成'
	},
	/** 对账类型 10:账到实 20:实到账 */
	checkType: {
		10: '账到实',
		20: '实到账'
	},
	/** 盘点类型：10:普通盘点 ，20:年度盘点 */
	inventoryType: {
		10: '普通盘点',
		20: '年度盘点'
	},
	/** 库区类型：10:自营 ，20:FBA */
	areaType: {
		10: '自营',
		20: 'FBA'
	},
	// 设置关税起征点 币种
	currencyUnit: {
		美元: '美元'
	},
	/** 物流分组 状态 1:启用 0:停用 */
	groupStatus: {
		0: '停用',
		1: '启用'
	},
	// 物流状态 10:未发运 20:已发运 30:已妥投 40:已退回
	logisticsStatus: {
		'': '全部',
		10: '未发运',
		20: '已发运',
		30: '已投妥',
		40: '已退回'
	},
	/** 分拣状态 10:未扫描 20:已扫描 30:已发运 40:已取消 */
	pkgStatus: {
		10: '未扫描',
		20: '已扫描',
		30: '已发运',
		40: '已取消'
	},
	/** 调拨类型：10 普通调拨，20 FBA调拨 */
	requisitionType: {
		10: '普通调拨',
		20: 'FBA调拨'
	},
	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType: {
		10: '空运',
		20: '海运',
		30: '快船',
		40: '铁路'
	},
	/** 调拨状态：10 未处理，20 已打印，30 已拣货，40 已装箱，50 待发运，60 已发运，70 已完成，80 已取消 */
	requisitionStatus: {
		10: '未处理',
		20: '已打印',
		30: '已拣货',
		40: '已装箱',
		50: '待发运',
		60: '已发运',
		70: '已完成',
		80: '已取消'
	},
	/** 调拨批次状态：10 未扫描，20 已扫描，30 已确认，40 已发运，50 已完成 */
	batchStatus: {
		10: '未扫描',
		20: '已扫描',
		30: '已确认',
		40: '已发运',
		50: '已完成'
	},
	/** 装柜类型：10龙舟整柜，20 捷仕整柜，30 捷仕散柜，40 空运装柜 */
	containerType: {
		10: '龙舟整柜',
		20: '捷仕整柜',
		30: '捷仕散柜',
		40: '空运装柜'
	},
	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType: {
		10: '销售订单',
		20: '采购退货单',
		30: '调拨单',
		40: '借调单',
		50: 'SP销售单',
		60: '委托单',
		70: '多渠道订单'
	},
	/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
	DeliveryStatus: {
		0: '未分配',
		10: '待拣货',
		20: '已拣货',
		30: '已校验',
		40: '校验失败',
		45: '已还货',
		50: '已称重',
		60: '已扫描',
		70: '已出库',
		80: '待还货'
	},
	/** 拣货状态 0:未拣货 1:已拣货 */
	pickStatus: {
		0: '未拣货',
		1: '已拣货'
	},
	/** 打印标识 0：否1：是 */
	printedStatus: {
		false: '未打印',
		true: '已打印'
	},
	/** 物流分拣状态 10:未扫描 20:已扫描 30:已发运 40:已取消 */
	outmasterLogisticsStatus: {
		10: '未扫描',
		20: '已扫描',
		30: '已发运',
		40: '已取消'
	},
	addOrderStatus: {
		wait_processed: '待处理',
		wait_check: '待检查'
	},
	orderStatus: {
		wait_pay: '待付款',
		wait_check: '待检查',
		confirmed: '已确认',
		wait_processed: '待处理',
		wait_ship: '等待发货',
		shipped: '已发货',
		out_of_stock: '缺货',
		risk_order: '风险订单',
		delivery_issue: '发货问题',
		blocked: '已拦截',
		cancelled: '已取消',
		ignored: '已忽略',
		has_processed: '已处理'
	},
	orderType: {
		normal: '正常',
		reissue: '重发',
		split: '拆单',
		returned: '退货',
		change: '换货',
		other: '其他'
	},
	channelType: {
		10: '快递类',
		20: '邮政类',
		30: '专线类'
	},
	countWeightType: {
		10: '毛重体积重最大值/Max(材积,实重)',
		20: '方/立方米',
		30: '体积重'
	},
	shipWarehouse: {
		ps: '4px'
	},
	customerMessageFlag: {
		1: '有',
		2: '没有'
	},
	orderTimeOrderBy: {
		desc: '倒序',
		asc: '升序'
	},
	//入库管理 入库单状态 10:未签收 20:已签收 30:已收货 40:已质检 50:已称重 60:已上架 65:已完成 70:已取消
	entryStatus: {
		10: '未签收',
		20: '已签收',
		30: '已收货',
		40: '已质检',
		50: '已称重',
		60: '已上架',
		65: '已完成',
		70: '已取消'
	},
	// 入库单来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库
	entrySourceType: {
		10: '交货单',
		20: '退货入库',
		30: '调拨入库',
		40: '借调入库'
	},
	// 装板状态
	boardStatus: {
		1: '未使用',
		2: '装载中'
	},
	abNormalStatus: {
		1: '待处理',
		2: '处理中',
		3: '已完成'
	},
	// 领用单状态
	borrowStatus: {
		1: '未审核',
		2: '审核通过',
		3: '已拣货',
		4: '已发运',
		5: '已驳回'
	},
	//库存费用
	stockCostStatus: {
		1: '待提交',
		2: '审批中',
		3: '待付款',
		4: '已付款',
		5: '审批驳回'
	}
}

function getOptions(data: Config): { [index: string]: Array<OptionsValue> } {
	const _obj: { [index: string]: Array<OptionsValue> } = {}
	forEach((key) => {
		const list: Array<OptionsValue> = []
		const item = data[key]
		forEach((key) => {
			list.push({
				value: key,
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
