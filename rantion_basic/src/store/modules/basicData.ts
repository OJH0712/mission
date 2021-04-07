import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { isNil, map } from 'ramda'
import { throttle } from 'rantion-tools'
let getUserList: any
interface Options {
	value: string
	label: string
}
export interface BasicDataState {
	sysUserList: Array<Options>
	organizationList: Array<Options>
	productMaterialList: Array<Options>
	productBrandList: Array<Options>
	productTypeList: Array<Options>
	countryList: Array<Options>
	meteringUnitList: Array<Options>
	unitTypeList: Array<Options>
	logisticsAttrList: Array<Options>
	logisticsGroupList: Array<Options>
	logisticsAttrTypeList: Array<Options>
}
@Module({ namespaced: true, store, name: 'basicData', dynamic: true })
export class BasicData extends VuexModule implements BasicDataState {
	public sysUserList: Array<Options> = []
	public organizationList: Array<Options> = [] //事业部
	public productMaterialList: Array<Options> = [] //产品材质
	public productBrandList: Array<Options> = [] //产品品牌
	public productTypeList: Array<Options> = [] //产品类型
	public countryList: Array<Options> = [] //国家
	public meteringUnitList: Array<Options> = [] //计量单位
	public unitTypeList: Array<Options> = [] //单位类型
	public logisticsAttrList: Array<Options> = [] //物流属性
	public logisticsGroupList: Array<Options> = [] //物流分组
	public logisticsAttrTypeList: Array<Options> = [] //物流属性类型
	@Action
	public async getSysUserList() {
		if (isNil(getUserList)) {
			// 防抖
			getUserList = throttle(API.ucenter.sysUser.selectPage.request)
		}
		const { success, data } = await getUserList({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_SYSUSERLIST(data.records)
		}
	}

	//事业部
	@Action
	public async getOrganizationList() {
		const { success, data } = await API.ucenter.organization.selectPage.request({
			organizationLevelId: 5,
			size: 999,
			current: 1
		})
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_ORGANIZATIONLIST(data.records)
		}
	}

	//产品材质
	@Action
	public async getProductMaterialList() {
		const { success, data } = await API.basics.productMaterial.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_PRODUCTMATERIALLIST(data.records)
		}
	}

	//产品品牌
	@Action
	public async getProductBrandList() {
		const { success, data } = await API.basics.productBrand.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_PRODUCTBRANDLIST(data.records)
		}
	}

	//产品类型
	@Action
	public async getProductTypeList() {
		const { success, data } = await API.basics.productType.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_PRODUCTTYPELIST(data.records)
		}
	}

	//国家
	@Action
	public async getCountryList() {
		const { success, data } = await API.basics.baseCountry.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_COUNTRYLIST(data.records)
		}
	}

	//计量单位
	@Action
	public async getMeteringUnitList() {
		const { success, data } = await API.basics.baseUnit.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_METERINGUNITLIST(data.records)
		}
	}

	//单位类型
	@Action
	public async getUnitTypeList() {
		const { success, data } = await API.basics.baseUnitType.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_UNITTYPELIST(data.records)
		}
	}

	//物流属性
	@Action
	public async getLogisticsAttrList() {
		const { success, data } = await API.basics.logisticsAttr.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_LOGISTICSATTRLIST(data.records)
		}
	}

	//物流分组
	@Action
	public async getLogisticsGroupList() {
		const { success, data } = await API.basics.logisticsGroup.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_LOGISTICSGROUPLIST(data.records)
		}
	}

	//物流属性类型
	@Action
	public async getLogisticsAttrTypeList() {
		const { success, data } = await API.basics.logisticsAttrType.page.request({ size: 999, current: 1 })
		if (success && !isNil(data) && !isNil(data.records)) {
			this.SET_LOGISTICSATTRTYPELIST(data.records)
		}
	}

	@Mutation
	private SET_SYSUSERLIST(item: Array<defs.ucenter.SysUserResponseDto>) {
		this.sysUserList = map((res) => {
			return {
				value: res.userNo,
				label: res.userName
			}
		}, item)
	}

	//事业部
	@Mutation
	private SET_ORGANIZATIONLIST(item: Array<defs.ucenter.OrganizationResponseDto>) {
		this.organizationList = map((res) => {
			return {
				label: res.name,
				value: res.id + ''
			}
		}, item)
	}

	//产品材质
	@Mutation
	private SET_PRODUCTMATERIALLIST(item: Array<defs.basics.ProductMaterialResponseDto>) {
		this.productMaterialList = map((res) => {
			return {
				label: res.materialNameCn || '',
				value: res.materialNo + ''
			}
		}, item)
	}

	//产品品牌
	@Mutation
	private SET_PRODUCTBRANDLIST(item: Array<defs.basics.ProductBrandResponseDto>) {
		this.productBrandList = map((res) => {
			return {
				value: res.brandNo || '',
				label: res.brandNameCn || ''
			}
		}, item)
	}

	//产品类型
	@Mutation
	private SET_PRODUCTTYPELIST(item: Array<defs.basics.ProductTypeResponseDto>) {
		this.productTypeList = map((res) => {
			return {
				value: res.typeNo || '',
				label: res.typeNameCn || ''
			}
		}, item)
	}

	//国家
	@Mutation
	private SET_COUNTRYLIST(item: Array<defs.basics.BaseCountryResponseDto>) {
		this.countryList = map((res) => {
			return {
				value: res.secondWord || '',
				label: res.countryNameCn || ''
			}
		}, item)
	}

	//计量单位
	@Mutation
	private SET_METERINGUNITLIST(item: Array<defs.basics.BaseUnitResponseDto>) {
		this.meteringUnitList = map((res) => {
			return {
				value: res.unitNo || '',
				label: res.unitNameCn || ''
			}
		}, item)
	}

	//单位类型
	@Mutation
	private SET_UNITTYPELIST(item: Array<defs.basics.BaseUnitTypeResponseDto>) {
		this.unitTypeList = map((res) => {
			return {
				value: res.unitTypeNo || '',
				label: res.typeNameCn || ''
			}
		}, item)
	}

	//物流属性
	@Mutation
	private SET_LOGISTICSATTRLIST(item: Array<defs.basics.LogisticsAttrResponseDto>) {
		this.logisticsAttrList = map(
			(res) => ({
				value: res.attrNo || '',
				label: res.attrNameCn || ''
			}),
			item
		)
	}

	//物流分组
	@Mutation
	private SET_LOGISTICSGROUPLIST(item: Array<defs.basics.LogisticsGroupResponseDto>) {
		this.logisticsGroupList = map((res) => {
			return {
				value: res.groupNo || '',
				label: res.groupNameCn || ''
			}
		}, item)
	}

	//物流属性类型
	@Mutation
	private SET_LOGISTICSATTRTYPELIST(item: Array<defs.basics.LogisticsAttrTypeResponseDto>) {
		this.logisticsAttrTypeList = map(
			(res) => ({
				value: res.attrtypeNo || '',
				label: res.attrtypeNameCn || ''
			}),
			item
		)
	}
}
export const BasicDataModule = getModule(BasicData)
