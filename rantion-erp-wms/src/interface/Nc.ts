/**
 * @user: antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/5/16 上午11:31
 */
export interface ShopInt {
	deleted: 0 | 1
	fullCategoryFlag: number
	id: number
	immediatePaymentFlag: number
	lockVersion: number
	name: string
	outOfStockOption: number
	platformSites: Array<any>
	productMultipleAttributesFlag: number
	productTagsFlag: number
	status: string
	vatTaxRateFlag: number
}

interface ChildrenLogisticsChanne {
	bubble_count: string
	business_type: string
	classification: string
	days: string
	group: string
	id: string
	location: string
	name: string
	state: string | null
}
export interface LogisticsChanne {
	contact: string
	face_sheet: string
	id: string
	name: string
	state: string
	children: Array<ChildrenLogisticsChanne>
}
export interface Company {
	id: string
	state: string
	country: string
	name: string
	city: string
	currency: string
}

export interface Site {
	id: string
	name: string
	region: string
	website: string
	endpoint: string
	marketplace: string
	marketplace_id: string
	currency: string
	timezone: string
}
