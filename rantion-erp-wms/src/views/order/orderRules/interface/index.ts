export interface RulerOption {
	id: number
	rulerId: number
	conditionId: number
	optionType: string
	valueRange: string
	value: string
	valueFullName: string
	superfluousField: string
	lockVersion: number
	deleted: number
	createId: number
	createBy: string
	createTime: string
	updateId: number
	updateBy: string
	updateTime: string
	platformId: string | null
}
export interface RulerCondition {
	rulerOptions: RulerOption[]
	id: number
	rulerId: number
	rulerName: string
	optionType: string
	lockVersion: number
	deleted: number
	createId: number
	createBy: string
	createTime: string
	updateId: number
	updateBy: string
	updateTime: string
}
export interface TableData {
	rulerConditions: RulerCondition[]
	id: number
	sortId: number
	rulerName: string
	orderAutoOperate: string
	postTypeJson: string
	status: number
	matchOtherWarehouses: number
	preferredType: string
	lockVersion: number
	deleted: number
	createId: number
	createBy: string
	createTime: string
	updateId: number
	updateBy: string
	updateTime: string
	logisticRulerType: string
}
