type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
	[key in Key]: Value
}

declare namespace defs {
	export namespace basics {
		export class BaseCityModelObject {
			/** 城市代码 */
			cityCode?: string

			/** 城市中文名称 */
			cityNameCn?: string

			/** 城市英文名称 */
			cityNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCityRequestDto {
			/** 城市代码 */
			cityCode?: string

			/** 城市中文名称 */
			cityNameCn?: string

			/** 城市英文名称 */
			cityNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCityRequestParamsDto {
			/** 城市代码 */
			cityCode?: string

			/** 城市中文名称 */
			cityNameCn?: string

			/** 城市英文名称 */
			cityNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCityResponseDto {
			/** 城市代码 */
			cityCode?: string

			/** 城市中文名称 */
			cityNameCn?: string

			/** 城市英文名称 */
			cityNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCountryModelObject {
			/** 大洲 */
			continent?: string

			/** 中文名称 */
			countryNameCn?: string

			/** 英文名称 */
			countryNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 数字码 */
			digitalCode?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 二字码 */
			secondWord?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 三字码 */
			threeWord?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCountryRequestDto {
			/** 大洲 */
			continent?: string

			/** 中文名称 */
			countryNameCn?: string

			/** 英文名称 */
			countryNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 数字码 */
			digitalCode?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 二字码 */
			secondWord?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 三字码 */
			threeWord?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCountryRequestParamsDto {
			/** 大洲 */
			continent?: string

			/** 中文名称 */
			countryNameCn?: string

			/** 英文名称 */
			countryNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 数字码 */
			digitalCode?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 二字码 */
			secondWord?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 三字码 */
			threeWord?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCountryResponseDto {
			/** 大洲 */
			continent?: string

			/** 中文名称 */
			countryNameCn?: string

			/** 英文名称 */
			countryNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 数字码 */
			digitalCode?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 二字码 */
			secondWord?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 三字码 */
			threeWord?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseCountryTreeResponseDto {
			/** 大洲 */
			continent?: string

			/** 中文名称 */
			countryNameCn?: string

			/** 英文名称 */
			countryNameEn?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 数字码 */
			digitalCode?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 二字码 */
			secondWord?: string

			/** 洲（省） */
			stateList?: Array<defs.basics.BaseStateResponseDto>

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 三字码 */
			threeWord?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseStateModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 中文名称 */
			stateNameCn?: string

			/** 英文名称 */
			stateNameEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseStateRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）编号 */
			stateCode?: string

			/** 中文名称 */
			stateNameCn?: string

			/** 英文名称 */
			stateNameEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseStateRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 中文名称 */
			stateNameCn?: string

			/** 英文名称 */
			stateNameEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseStateResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 国家二字码 */
			secondWord?: string

			/** 洲（省）代码 */
			stateCode?: string

			/** 中文名称 */
			stateNameCn?: string

			/** 英文名称 */
			stateNameEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位简称 */
			unitAbbreviation?: string

			/** 计量单位名称（CN） */
			unitNameCn?: string

			/** 计量单位名称（EN） */
			unitNameEn?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位简称 */
			unitAbbreviation?: string

			/** 计量单位名称（CN） */
			unitNameCn?: string

			/** 计量单位名称（EN） */
			unitNameEn?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位简称 */
			unitAbbreviation?: string

			/** 计量单位名称（CN） */
			unitNameCn?: string

			/** 计量单位名称（EN） */
			unitNameEn?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位简称 */
			unitAbbreviation?: string

			/** 计量单位名称（CN） */
			unitNameCn?: string

			/** 计量单位名称（EN） */
			unitNameEn?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitTypeModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 单位类型简称 */
			typeAbbreviation?: string

			/** 单位类型名称（CN） */
			typeNameCn?: string

			/** 单位类型名称（EN） */
			typeNameEn?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitTypeRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 单位类型简称 */
			typeAbbreviation?: string

			/** 单位类型名称（CN） */
			typeNameCn?: string

			/** 单位类型名称（EN） */
			typeNameEn?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitTypeRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 单位类型简称 */
			typeAbbreviation?: string

			/** 单位类型名称（CN） */
			typeNameCn?: string

			/** 单位类型名称（EN） */
			typeNameEn?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class BaseUnitTypeResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 单位类型简称 */
			typeAbbreviation?: string

			/** 单位类型名称（CN） */
			typeNameCn?: string

			/** 单位类型名称（EN） */
			typeNameEn?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class IPage<T0 = any> {
			/** current */
			current?: number

			/** hitCount */
			hitCount?: boolean

			/** pages */
			pages?: number

			/** records */
			records?: Array<T0>

			/** searchCount */
			searchCount?: boolean

			/** size */
			size?: number

			/** total */
			total?: number
		}

		export class LogisticsAttrModelObject {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性值（暂时作用不大预留） */
			attrValue?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrRequestDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性值（暂时作用不大预留） */
			attrValue?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrRequestParamsDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性值（暂时作用不大预留） */
			attrValue?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrResponseDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性值（暂时作用不大预留） */
			attrValue?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrTypeDetailsResponseDto {
			/** 物流属性列表 */
			attrModelList?: Array<defs.basics.LogisticsAttrModelObject>

			/** 物流属性类型名称（CN） */
			attrtypeNameCn?: string

			/** 物流属性类型名称（EN） */
			attrtypeNameEn?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrTypeModelObject {
			/** 物流属性类型名称（CN） */
			attrtypeNameCn?: string

			/** 物流属性类型名称（EN） */
			attrtypeNameEn?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrTypeRequestDto {
			/** 物流属性类型名称（CN） */
			attrtypeNameCn?: string

			/** 物流属性类型名称（EN） */
			attrtypeNameEn?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrTypeRequestParamsDto {
			/** 物流属性类型名称（CN） */
			attrtypeNameCn?: string

			/** 物流属性类型名称（EN） */
			attrtypeNameEn?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsAttrTypeResponseDto {
			/** 物流属性类型名称（CN） */
			attrtypeNameCn?: string

			/** 物流属性类型名称（EN） */
			attrtypeNameEn?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupAttrModelObject {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1有效 or 0失效 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupAttrRequestDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1有效 or 0失效 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupAttrRequestParamsDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1有效 or 0失效 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupAttrResponseDto {
			/** 物流属性名称（CN） */
			attrNameCn?: string

			/** 物流属性名称（EN） */
			attrNameEn?: string

			/** 物流属性编号 */
			attrNo?: string

			/** 物流属性类型编号 */
			attrtypeNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1有效 or 0失效 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupDetailsResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** 物流分组-物流属性列表 */
			groupModelList?: Array<defs.basics.LogisticsGroupAttrModelObject>

			/** 物流分组名称（CN） */
			groupNameCn?: string

			/** 物流分组名称（EN） */
			groupNameEn?: string

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** 物流分组名称（CN） */
			groupNameCn?: string

			/** 物流分组名称（EN） */
			groupNameEn?: string

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** 物流分组名称（CN） */
			groupNameCn?: string

			/** 物流分组名称（EN） */
			groupNameEn?: string

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** 物流分组名称（CN） */
			groupNameCn?: string

			/** 物流分组名称（EN） */
			groupNameEn?: string

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class LogisticsGroupResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** 物流分组名称（CN） */
			groupNameCn?: string

			/** 物流分组名称（EN） */
			groupNameEn?: string

			/** 物流分组编号 */
			groupNo?: string

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductBrandModelObject {
			/** 品牌简称 */
			brandAbbreviation?: string

			/** 品牌名称（CN） */
			brandNameCn?: string

			/** 品牌名称（EN） */
			brandNameEn?: string

			/** 品牌编号 */
			brandNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 品牌中文名称首字母 */
			initialsCn?: string

			/** 品牌英文名称首字母 */
			initialsEn?: string

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductBrandRequestDto {
			/** 品牌简称 */
			brandAbbreviation?: string

			/** 品牌名称（CN） */
			brandNameCn?: string

			/** 品牌名称（EN） */
			brandNameEn?: string

			/** 品牌编号 */
			brandNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 品牌中文名称首字母 */
			initialsCn?: string

			/** 品牌英文名称首字母 */
			initialsEn?: string

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductBrandRequestParamsDto {
			/** 品牌简称 */
			brandAbbreviation?: string

			/** 品牌名称（CN） */
			brandNameCn?: string

			/** 品牌名称（EN） */
			brandNameEn?: string

			/** 品牌编号 */
			brandNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 品牌中文名称首字母 */
			initialsCn?: string

			/** 品牌英文名称首字母 */
			initialsEn?: string

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductBrandResponseDto {
			/** 品牌简称 */
			brandAbbreviation?: string

			/** 品牌名称（CN） */
			brandNameCn?: string

			/** 品牌名称（EN） */
			brandNameEn?: string

			/** 品牌编号 */
			brandNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** 描述 */
			description?: string

			/** id */
			id?: number

			/** 品牌中文名称首字母 */
			initialsCn?: string

			/** 品牌英文名称首字母 */
			initialsEn?: string

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductCategroyModelObject {
			/** 品类简称 */
			categoryAbbreviation?: string

			/** 品类名称（CN） */
			categoryNameCn?: string

			/** 品类名称（EN） */
			categoryNameEn?: string

			/** 品类编码 */
			categoryNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 等级 */
			levelNum?: number

			/** 版本 */
			lockVersion?: number

			/** 上级品类编码 */
			parentCategoryNo?: string

			/** 排序 */
			sortNum?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductCategroyRequestDto {
			/** 品类简称 */
			categoryAbbreviation?: string

			/** 品类名称（CN） */
			categoryNameCn?: string

			/** 品类名称（EN） */
			categoryNameEn?: string

			/** 品类编码 */
			categoryNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 等级 */
			levelNum?: number

			/** 版本 */
			lockVersion?: number

			/** 上级品类编码 */
			parentCategoryNo?: string

			/** 排序 */
			sortNum?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductCategroyRequestParamsDto {
			/** 品类简称 */
			categoryAbbreviation?: string

			/** 品类名称（CN） */
			categoryNameCn?: string

			/** 品类名称（EN） */
			categoryNameEn?: string

			/** 品类编码 */
			categoryNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 等级 */
			levelNum?: number

			/** 版本 */
			lockVersion?: number

			/** 上级品类编码 */
			parentCategoryNo?: string

			/** 排序 */
			sortNum?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductCategroyResponseDto {
			/** 品类简称 */
			categoryAbbreviation?: string

			/** 品类名称（CN） */
			categoryNameCn?: string

			/** 品类名称（EN） */
			categoryNameEn?: string

			/** 品类编码 */
			categoryNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 等级 */
			levelNum?: number

			/** 版本 */
			lockVersion?: number

			/** 上级品类编码 */
			parentCategoryNo?: string

			/** 排序 */
			sortNum?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductCategroyTreeResponseDto {
			/** 品类简称 */
			categoryAbbreviation?: string

			/** 品类名称（CN） */
			categoryNameCn?: string

			/** 品类名称（EN） */
			categoryNameEn?: string

			/** 品类编码 */
			categoryNo?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 等级 */
			levelNum?: number

			/** 版本 */
			lockVersion?: number

			/** 分类子集 */
			nextLevelList?: Array<defs.basics.ProductCategroyTreeResponseDto>

			/** 上级品类编码 */
			parentCategoryNo?: string

			/** 排序 */
			sortNum?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductMasterModelObject {
			/** 附件连接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 品牌名称 */
			brandName?: string

			/** 品牌编号 */
			brandNo?: string

			/** 品类名称 */
			categoryName?: string

			/** 品类编号 */
			categoryNo?: string

			/** 制造国家名称 */
			countryName?: string

			/** 制造国家二字码 */
			countrySecondWord?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 申报要素 */
			declareMemo?: string

			/** 申报名称（CN） */
			declareNameCn?: string

			/** 申报名称（EN） */
			declareNameEn?: string

			/** 删除标识 */
			deleted?: number

			/** 质保期（月） */
			expirydate?: number

			/** 首次采购金额 */
			firstPurchasePrice?: number

			/** HSCODE(国内) */
			hscodeCn?: string

			/** HSCODE(国外) */
			hscodeEn?: string

			/** id */
			id?: number

			/** 工作流实例ID */
			instanceId?: number

			/** 版本 */
			lockVersion?: number

			/** 物流分组名称 */
			logisticsGroupName?: string

			/** 物流分组编号 */
			logisticsGroupNo?: string

			/** 产品材质名称 */
			materialName?: string

			/** 产品材质编号 */
			materialNo?: string

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 事业部名称 */
			organizationNane?: string

			/** 事业部编号 */
			organizationNo?: string

			/** 计划员 */
			planner?: string

			/** 计划员名称 */
			plannerName?: string

			/** 产品简称 */
			productAbbreviation?: string

			/** 产品名称（CN） */
			productNameCn?: string

			/** 产品名称（EN） */
			productNameEn?: string

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 产品用途 */
			productUse?: string

			/** 采购负责人 */
			purchaser?: string

			/** 采购负责人名称 */
			purchaserName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 状态：启用 or 停用 */
			status?: number

			/** 退税率 */
			taxRebateRate?: number

			/** 产品类型名称 */
			typeName?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 增值税率 */
			vatRate?: number
		}

		export class ProductMasterRequestDto {
			/** 附件连接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 品牌名称 */
			brandName?: string

			/** 品牌编号 */
			brandNo?: string

			/** 品类名称 */
			categoryName?: string

			/** 品类编号 */
			categoryNo?: string

			/** 制造国家名称 */
			countryName?: string

			/** 制造国家二字码 */
			countrySecondWord?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 申报要素 */
			declareMemo?: string

			/** 申报名称（CN） */
			declareNameCn?: string

			/** 申报名称（EN） */
			declareNameEn?: string

			/** 删除标识 */
			deleted?: number

			/** 质保期（月） */
			expirydate?: number

			/** 首次采购金额 */
			firstPurchasePrice?: number

			/** HSCODE(国内) */
			hscodeCn?: string

			/** HSCODE(国外) */
			hscodeEn?: string

			/** id */
			id?: number

			/** 工作流实例ID */
			instanceId?: number

			/** 版本 */
			lockVersion?: number

			/** 物流分组名称 */
			logisticsGroupName?: string

			/** 物流分组编号 */
			logisticsGroupNo?: string

			/** 产品材质名称 */
			materialName?: string

			/** 产品材质编号 */
			materialNo?: string

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** 新增SKU集合 */
			newSkuModelList?: Array<defs.basics.ProductSkuModelObject>

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 事业部名称 */
			organizationNane?: string

			/** 事业部编号 */
			organizationNo?: string

			/** 计划员 */
			planner?: string

			/** 计划员名称 */
			plannerName?: string

			/** 产品简称 */
			productAbbreviation?: string

			/** 产品名称（CN） */
			productNameCn?: string

			/** 产品名称（EN） */
			productNameEn?: string

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 产品用途 */
			productUse?: string

			/** 采购负责人 */
			purchaser?: string

			/** 采购负责人名称 */
			purchaserName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 已有SKU集合 */
			skuModelList?: Array<defs.basics.ProductSkuModelObject>

			/** 状态：启用 or 停用 */
			status?: number

			/** 退税率 */
			taxRebateRate?: number

			/** 产品类型名称 */
			typeName?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 增值税率 */
			vatRate?: number
		}

		export class ProductMasterRequestParamsDto {
			/** 附件连接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 品牌名称 */
			brandName?: string

			/** 品牌编号 */
			brandNo?: string

			/** 品类名称 */
			categoryName?: string

			/** 品类编号 */
			categoryNo?: string

			/** 制造国家名称 */
			countryName?: string

			/** 制造国家二字码 */
			countrySecondWord?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 申报要素 */
			declareMemo?: string

			/** 申报名称（CN） */
			declareNameCn?: string

			/** 申报名称（EN） */
			declareNameEn?: string

			/** 删除标识 */
			deleted?: number

			/** 质保期（月） */
			expirydate?: number

			/** 首次采购金额 */
			firstPurchasePrice?: number

			/** HSCODE(国内) */
			hscodeCn?: string

			/** HSCODE(国外) */
			hscodeEn?: string

			/** id */
			id?: number

			/** 工作流实例ID */
			instanceId?: number

			/** 版本 */
			lockVersion?: number

			/** 物流分组名称 */
			logisticsGroupName?: string

			/** 物流分组编号 */
			logisticsGroupNo?: string

			/** 产品材质名称 */
			materialName?: string

			/** 产品材质编号 */
			materialNo?: string

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 事业部名称 */
			organizationNane?: string

			/** 事业部编号 */
			organizationNo?: string

			/** 计划员 */
			planner?: string

			/** 计划员名称 */
			plannerName?: string

			/** 产品简称 */
			productAbbreviation?: string

			/** 产品名称（CN） */
			productNameCn?: string

			/** 产品名称（EN） */
			productNameEn?: string

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 产品用途 */
			productUse?: string

			/** 采购负责人 */
			purchaser?: string

			/** 采购负责人名称 */
			purchaserName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 状态：启用 or 停用 */
			status?: number

			/** 退税率 */
			taxRebateRate?: number

			/** 产品类型名称 */
			typeName?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 增值税率 */
			vatRate?: number
		}

		export class ProductMasterResponseDto {
			/** 附件连接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 品牌 */
			brandModel?: defs.basics.ProductBrandModelObject

			/** 品牌名称 */
			brandName?: string

			/** 品牌编号 */
			brandNo?: string

			/** 品类名称 */
			categoryName?: string

			/** 品类名称（CN）全名称 */
			categoryNameCnFull?: string | string[]

			/** 品类编号 */
			categoryNo?: string

			/** 品类编码全名称 */
			categoryNoFull?: string | string[]

			/** 分类 */
			categroyModel?: defs.basics.ProductCategroyModelObject

			/** 制造国家名称 */
			countryName?: string

			/** 制造国家二字码 */
			countrySecondWord?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 申报要素 */
			declareMemo?: string

			/** 申报名称（CN） */
			declareNameCn?: string

			/** 申报名称（EN） */
			declareNameEn?: string

			/** 删除标识 */
			deleted?: number

			/** 质保期（月） */
			expirydate?: number

			/** 首次采购金额 */
			firstPurchasePrice?: number

			/** 物流属性分组 */
			groupModel?: defs.basics.LogisticsGroupModelObject

			/** HSCODE(国内) */
			hscodeCn?: string

			/** HSCODE(国外) */
			hscodeEn?: string

			/** id */
			id?: number

			/** 工作流实例ID */
			instanceId?: number

			/** 版本 */
			lockVersion?: number

			/** 物流分组名称 */
			logisticsGroupName?: string

			/** 物流分组编号 */
			logisticsGroupNo?: string

			/** 材质 */
			materialModel?: defs.basics.ProductMaterialModelObject

			/** 产品材质名称 */
			materialName?: string

			/** 产品材质编号 */
			materialNo?: string

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 事业部名称 */
			organizationNane?: string

			/** 事业部编号 */
			organizationNo?: string

			/** 计划员 */
			planner?: string

			/** 计划员名称 */
			plannerName?: string

			/** 产品简称 */
			productAbbreviation?: string

			/** 产品名称（CN） */
			productNameCn?: string

			/** 产品名称（EN） */
			productNameEn?: string

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 产品用途 */
			productUse?: string

			/** 采购负责人 */
			purchaser?: string

			/** 采购负责人名称 */
			purchaserName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** SKU集合 */
			skuModelList?: Array<defs.basics.ProductSkuModelObject>

			/** 状态：启用 or 停用 */
			status?: number

			/** 退税率 */
			taxRebateRate?: number

			/** 类型 */
			typeModel?: defs.basics.ProductTypeModelObject

			/** 产品类型名称 */
			typeName?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 增值税率 */
			vatRate?: number
		}

		export class ProductMaterialModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 产品材质名称（CN） */
			materialNameCn?: string

			/** 产品材质名称（EN） */
			materialNameEn?: string

			/** 产品材质编号 */
			materialNo?: string

			/** 产品材质值 */
			materialValue?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductMaterialRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 产品材质名称（CN） */
			materialNameCn?: string

			/** 产品材质名称（EN） */
			materialNameEn?: string

			/** 产品材质编号 */
			materialNo?: string

			/** 产品材质值 */
			materialValue?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductMaterialRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 产品材质名称（CN） */
			materialNameCn?: string

			/** 产品材质名称（EN） */
			materialNameEn?: string

			/** 产品材质编号 */
			materialNo?: string

			/** 产品材质值 */
			materialValue?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductMaterialResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 产品材质名称（CN） */
			materialNameCn?: string

			/** 产品材质名称（EN） */
			materialNameEn?: string

			/** 产品材质编号 */
			materialNo?: string

			/** 产品材质值 */
			materialValue?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductSkuModelObject {
			/** 附件链接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 装箱高 */
			boxHeightCm?: number

			/** 装箱长 */
			boxLongCm?: number

			/** 装箱宽 */
			boxWidthCm?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 删除标识 */
			deleted?: number

			/** 产品交期 */
			deliveryDay?: number

			/** 描述 */
			description?: string

			/** 产品高 */
			heightCm?: number

			/** id */
			id?: number

			/** 图片链接 */
			imageUrl?: string

			/** 产品初始分级 */
			initLevelNum?: string

			/** 工作流实例ID */
			instanceId?: number

			/** 是否研发产品：false or true */
			isDevolopFlag?: number

			/** 是否需要厂检 */
			isFactoryCheck?: number

			/** 是否需要质检 */
			isWarehouseCheck?: number

			/** 产品分级 */
			levelNum?: string

			/** 版本 */
			lockVersion?: number

			/** 物流周期 */
			logisticsCycle?: number

			/** 产品长 */
			longCm?: number

			/** 每箱数量（MPQ） */
			mpq?: number

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 默认运输方式名称 */
			shippingMethodName?: string

			/** 默认运输方式编号 */
			shippingMethodNo?: string

			/** 单个产品计费重（g） */
			singleBillingWeight?: number

			/** 单个产品装箱体积重(m3) */
			singleBoxVolumeWeight?: number

			/** 单个产品装箱重量(g) */
			singlePackingWeight?: number

			/** SKU简称 */
			skuAbbreviation?: string

			/** SKU编号 */
			skuNo?: string

			/** SKU标题（CN） */
			skuTitleCn?: string

			/** SKU标题（EN） */
			skuTitleEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位名称 */
			unitName?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型名称 */
			unitTypeName?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 默认供应商名称 */
			vendorName?: string

			/** 默认供应商编号 */
			vendorNo?: string

			/** 体积重 */
			volumeWeight?: number

			/** 产品重量（g） */
			weight?: number

			/** 产品宽 */
			widthCm?: number
		}

		export class ProductSkuRequestDto {
			/** 附件链接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 装箱高 */
			boxHeightCm?: number

			/** 装箱长 */
			boxLongCm?: number

			/** 装箱宽 */
			boxWidthCm?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 删除标识 */
			deleted?: number

			/** 产品交期 */
			deliveryDay?: number

			/** 描述 */
			description?: string

			/** 产品高 */
			heightCm?: number

			/** id */
			id?: number

			/** 图片链接 */
			imageUrl?: string

			/** 产品初始分级 */
			initLevelNum?: string

			/** 工作流实例ID */
			instanceId?: number

			/** 是否研发产品：false or true */
			isDevolopFlag?: number

			/** 是否需要厂检 */
			isFactoryCheck?: number

			/** 是否需要质检 */
			isWarehouseCheck?: number

			/** 产品分级 */
			levelNum?: string

			/** 版本 */
			lockVersion?: number

			/** 物流周期 */
			logisticsCycle?: number

			/** 产品长 */
			longCm?: number

			/** 每箱数量（MPQ） */
			mpq?: number

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 默认运输方式名称 */
			shippingMethodName?: string

			/** 默认运输方式编号 */
			shippingMethodNo?: string

			/** 单个产品计费重（g） */
			singleBillingWeight?: number

			/** 单个产品装箱体积重(m3) */
			singleBoxVolumeWeight?: number

			/** 单个产品装箱重量(g) */
			singlePackingWeight?: number

			/** SKU简称 */
			skuAbbreviation?: string

			/** SKU编号 */
			skuNo?: string

			/** SKU标题（CN） */
			skuTitleCn?: string

			/** SKU标题（EN） */
			skuTitleEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位名称 */
			unitName?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型名称 */
			unitTypeName?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 默认供应商名称 */
			vendorName?: string

			/** 默认供应商编号 */
			vendorNo?: string

			/** 体积重 */
			volumeWeight?: number

			/** 产品重量（g） */
			weight?: number

			/** 产品宽 */
			widthCm?: number
		}

		export class ProductSkuRequestParamsDto {
			/** 附件链接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 装箱高 */
			boxHeightCm?: number

			/** 装箱长 */
			boxLongCm?: number

			/** 装箱宽 */
			boxWidthCm?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 删除标识 */
			deleted?: number

			/** 产品交期 */
			deliveryDay?: number

			/** 描述 */
			description?: string

			/** 产品高 */
			heightCm?: number

			/** id */
			id?: number

			/** 图片链接 */
			imageUrl?: string

			/** 产品初始分级 */
			initLevelNum?: string

			/** 工作流实例ID */
			instanceId?: number

			/** 是否研发产品：false or true */
			isDevolopFlag?: number

			/** 是否需要厂检 */
			isFactoryCheck?: number

			/** 是否需要质检 */
			isWarehouseCheck?: number

			/** 产品分级 */
			levelNum?: string

			/** 版本 */
			lockVersion?: number

			/** 物流周期 */
			logisticsCycle?: number

			/** 产品长 */
			longCm?: number

			/** 每箱数量（MPQ） */
			mpq?: number

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 默认运输方式名称 */
			shippingMethodName?: string

			/** 默认运输方式编号 */
			shippingMethodNo?: string

			/** 单个产品计费重（g） */
			singleBillingWeight?: number

			/** 单个产品装箱体积重(m3) */
			singleBoxVolumeWeight?: number

			/** 单个产品装箱重量(g) */
			singlePackingWeight?: number

			/** SKU简称 */
			skuAbbreviation?: string

			/** SKU编号 */
			skuNo?: string

			/** SKU标题（CN） */
			skuTitleCn?: string

			/** SKU标题（EN） */
			skuTitleEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位名称 */
			unitName?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型名称 */
			unitTypeName?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 默认供应商名称 */
			vendorName?: string

			/** 默认供应商编号 */
			vendorNo?: string

			/** 体积重 */
			volumeWeight?: number

			/** 产品重量（g） */
			weight?: number

			/** 产品宽 */
			widthCm?: number
		}

		export class ProductSkuResponseDto {
			/** 附件链接 */
			annexUrl?: string

			/** 提交人ID */
			applyUser?: number

			/** 提交人备注 */
			applyUserMemo?: string

			/** 提交人名称 */
			applyUserName?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 装箱高 */
			boxHeightCm?: number

			/** 装箱长 */
			boxLongCm?: number

			/** 装箱宽 */
			boxWidthCm?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 删除标识 */
			deleted?: number

			/** 产品交期 */
			deliveryDay?: number

			/** 描述 */
			description?: string

			/** 产品高 */
			heightCm?: number

			/** id */
			id?: number

			/** 图片链接 */
			imageUrl?: string

			/** 产品初始分级 */
			initLevelNum?: string

			/** 工作流实例ID */
			instanceId?: number

			/** 是否研发产品：false or true */
			isDevolopFlag?: number

			/** 是否需要厂检 */
			isFactoryCheck?: number

			/** 是否需要质检 */
			isWarehouseCheck?: number

			/** 产品分级 */
			levelNum?: string

			/** 版本 */
			lockVersion?: number

			/** 物流周期 */
			logisticsCycle?: number

			/** 产品长 */
			longCm?: number

			/** 每箱数量（MPQ） */
			mpq?: number

			/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
			mqSendStatus?: number

			/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
			nsConsumeStatus?: number

			/** 产品编号 */
			productNo?: string

			/** 产品负责人 */
			productOwner?: string

			/** 产品负责人名称 */
			productOwnerName?: string

			/** 驳回人ID */
			rejecter?: number

			/** 驳回人名称 */
			rejecterName?: string

			/** 副产品负责人 */
			secondOwner?: string

			/** 副产品负责人名称 */
			secondOwnerName?: string

			/** 默认运输方式名称 */
			shippingMethodName?: string

			/** 默认运输方式编号 */
			shippingMethodNo?: string

			/** 单个产品计费重（g） */
			singleBillingWeight?: number

			/** 单个产品装箱体积重(m3) */
			singleBoxVolumeWeight?: number

			/** 单个产品装箱重量(g) */
			singlePackingWeight?: number

			/** SKU简称 */
			skuAbbreviation?: string

			/** SKU编号 */
			skuNo?: string

			/** SKU标题（CN） */
			skuTitleCn?: string

			/** SKU标题（EN） */
			skuTitleEn?: string

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 计量单位名称 */
			unitName?: string

			/** 计量单位编号 */
			unitNo?: string

			/** 单位类型名称 */
			unitTypeName?: string

			/** 单位类型编号 */
			unitTypeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string

			/** 默认供应商名称 */
			vendorName?: string

			/** 默认供应商编号 */
			vendorNo?: string

			/** 体积重 */
			volumeWeight?: number

			/** 产品重量（g） */
			weight?: number

			/** 产品宽 */
			widthCm?: number
		}

		export class ProductTypeModelObject {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 产品类型简称 */
			typeAbbreviation?: string

			/** 产品类型名称（CN） */
			typeNameCn?: string

			/** 产品类型名称（EN） */
			typeNameEn?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductTypeRequestDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 产品类型简称 */
			typeAbbreviation?: string

			/** 产品类型名称（CN） */
			typeNameCn?: string

			/** 产品类型名称（EN） */
			typeNameEn?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductTypeRequestParamsDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 产品类型简称 */
			typeAbbreviation?: string

			/** 产品类型名称（CN） */
			typeNameCn?: string

			/** 产品类型名称（EN） */
			typeNameEn?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ProductTypeResponseDto {
			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 删除标识 */
			deleted?: number

			/** id */
			id?: number

			/** 版本 */
			lockVersion?: number

			/** 状态：1启用 or 0停用 */
			status?: number

			/** 产品类型简称 */
			typeAbbreviation?: string

			/** 产品类型名称（CN） */
			typeNameCn?: string

			/** 产品类型名称（EN） */
			typeNameEn?: string

			/** 产品类型编号 */
			typeNo?: string

			/** 修改人 */
			updateBy?: string

			/** 修改时间 */
			updateTime?: string
		}

		export class ResponseDto<T0 = any> {
			/** code */
			code?: string

			/** data */
			data?: T0

			/** failed */
			failed?: boolean

			/** msg */
			msg?: string

			/** success */
			success?: boolean

			/** traceId */
			traceId?: string
		}

		export class SaveFiledDto {
			/** code */
			code?: string

			/** createdTime */
			createdTime?: string

			/** entity */
			entity?: object

			/** id */
			id?: string

			/** infoStr */
			infoStr?: string

			/** md5 */
			md5?: string

			/** syncStatus */
			syncStatus?: boolean

			/** type */
			type?: string

			/** updatedStatus */
			updatedStatus?: boolean

			/** updatedTime */
			updatedTime?: string
		}

		export class TaskGetDataRequestDto {
			/** currentPage */
			currentPage?: number

			/** dataType */
			dataType?: Array<string>

			/** pageSize */
			pageSize?: number
		}
	}
}

declare namespace API {
	export namespace basics {
		/**
		 * 城市
		 */
		export namespace baseCity {
			/**
			 * hello2
			 * /basics/baseCity/123/{a}
			 */
			export namespace hello2 {
				export class Params {
					/** a */
					a: string
					/** b */
					b: string
				}

				export type Response = any
				export function request(a: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据洲（省）和城市编号查询
			 * /basics/baseCity/byStateAndCityCode/{stateCode}/{cityCode}
			 */
			export namespace byStateAndCityCode {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseCityResponseDto>
				export function request(cityCode: string, stateCode: string, options?: any): Promise<Response>
			}

			/**
			 * commonMessage
			 * /basics/baseCity/commonMessage/{a}
			 */
			export namespace commonMessage {
				export type Response = string
				export function request(a: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/baseCity/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/baseCity/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseCity/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseCityModelObject>>
				export function request(body: defs.basics.BaseCityRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/baseCity/page
			 */
			export namespace page {
				export class Params {
					/** 城市代码 */
					cityCode?: string
					/** 城市中文名称 */
					cityNameCn?: string
					/** 城市英文名称 */
					cityNameEn?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 国家二字码 */
					secondWord?: string
					/** 洲（省）代码 */
					stateCode?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.BaseCityResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/baseCity/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseCityResponseDto>
				export function request(body: defs.basics.BaseCityRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 国家资料
		 */
		export namespace baseCountry {
			/**
			 * 根据二字码查询
			 * /basics/baseCountry/bySecondWord/{secondWord}
			 */
			export namespace bySecondWord {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseCountryResponseDto>
				export function request(secondWord: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/baseCountry/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/baseCountry/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseCountry/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseCountryModelObject>>
				export function request(body: defs.basics.BaseCountryRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseCountry/list/tree
			 */
			export namespace listTree {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseCountryTreeResponseDto>>
				export function request(body: defs.basics.BaseCountryRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/baseCountry/page
			 */
			export namespace page {
				export class Params {
					/** 大洲 */
					continent?: string
					/** countId */
					countId?: string
					/** 中文名称 */
					countryNameCn?: string
					/** 英文名称 */
					countryNameEn?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 数字码 */
					digitalCode?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 二字码 */
					secondWord?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 三字码 */
					threeWord?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.BaseCountryResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/baseCountry/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseCountryResponseDto>
				export function request(body: defs.basics.BaseCountryRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 洲（省）
		 */
		export namespace baseState {
			/**
			 * 根据国家二字码和洲（省）编号查询
			 * /basics/baseState/bySecondWordAndCode/{secondWord}/{stateCode}
			 */
			export namespace bySecondWordAndCode {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseStateResponseDto>
				export function request(secondWord: string, stateCode: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/baseState/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/baseState/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseState/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseStateModelObject>>
				export function request(body: defs.basics.BaseStateRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/baseState/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 国家二字码 */
					secondWord?: string
					/** 洲（省）代码 */
					stateCode?: string
					/** 中文名称 */
					stateNameCn?: string
					/** 英文名称 */
					stateNameEn?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.BaseStateResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/baseState/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseStateResponseDto>
				export function request(body: defs.basics.BaseStateRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 计量单位
		 */
		export namespace baseUnit {
			/**
			 * 根据单位类型编号和单位编号查询
			 * /basics/baseUnit/byUnique/{unitTypeCode}/{unitCode}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseUnitResponseDto>
				export function request(unitCode: string, unitTypeCode: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/baseUnit/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/baseUnit/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseUnit/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseUnitModelObject>>
				export function request(body: defs.basics.BaseUnitRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/baseUnit/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 计量单位简称 */
					unitAbbreviation?: string
					/** 计量单位名称（CN） */
					unitNameCn?: string
					/** 计量单位名称（EN） */
					unitNameEn?: string
					/** 计量单位编号 */
					unitNo?: string
					/** 单位类型编号 */
					unitTypeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.BaseUnitResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/baseUnit/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseUnitResponseDto>
				export function request(body: defs.basics.BaseUnitRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 单位类型
		 */
		export namespace baseUnitType {
			/**
			 * 根据单位类型编号查询
			 * /basics/baseUnitType/bySecondWordAndCode/{unitTypeCode}
			 */
			export namespace bySecondWordAndCode {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseUnitTypeResponseDto>
				export function request(unitTypeCode: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/baseUnitType/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/baseUnitType/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/baseUnitType/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.BaseUnitTypeModelObject>>
				export function request(body: defs.basics.BaseUnitTypeRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/baseUnitType/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 单位类型简称 */
					typeAbbreviation?: string
					/** 单位类型名称（CN） */
					typeNameCn?: string
					/** 单位类型名称（EN） */
					typeNameEn?: string
					/** 单位类型编号 */
					unitTypeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.BaseUnitTypeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/baseUnitType/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.BaseUnitTypeResponseDto>
				export function request(body: defs.basics.BaseUnitTypeRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流属性
		 */
		export namespace logisticsAttr {
			/**
			 * 根据物流属性类型编号和物流属性编号查询
			 * /basics/logisticsAttr/byUnique/{attrtypeNo}/{attrNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsAttrResponseDto>
				export function request(attrNo: string, attrtypeNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/logisticsAttr/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/logisticsAttr/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/logisticsAttr/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsAttrModelObject>>
				export function request(body: defs.basics.LogisticsAttrRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/logisticsAttr/page
			 */
			export namespace page {
				export class Params {
					/** 物流属性名称（CN） */
					attrNameCn?: string
					/** 物流属性名称（EN） */
					attrNameEn?: string
					/** 物流属性编号 */
					attrNo?: string
					/** 物流属性类型编号 */
					attrtypeNo?: string
					/** 物流属性值（暂时作用不大预留） */
					attrValue?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 描述 */
					description?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.LogisticsAttrResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/logisticsAttr/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsAttrResponseDto>
				export function request(body: defs.basics.LogisticsAttrRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流属性类型
		 */
		export namespace logisticsAttrType {
			/**
			 * 根据物流属性类型编号查询
			 * /basics/logisticsAttrType/byUnique/{attrtypeNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsAttrTypeResponseDto>
				export function request(attrtypeNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/logisticsAttrType/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/logisticsAttrType/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/logisticsAttrType/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsAttrTypeModelObject>>
				export function request(body: defs.basics.LogisticsAttrTypeRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 列表+详情
			 * /basics/logisticsAttrType/list/details
			 */
			export namespace listDetails {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsAttrTypeDetailsResponseDto>>
				export function request(body: defs.basics.LogisticsAttrTypeRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/logisticsAttrType/page
			 */
			export namespace page {
				export class Params {
					/** 物流属性类型名称（CN） */
					attrtypeNameCn?: string
					/** 物流属性类型名称（EN） */
					attrtypeNameEn?: string
					/** 物流属性类型编号 */
					attrtypeNo?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 描述 */
					description?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.LogisticsAttrTypeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/logisticsAttrType/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsAttrTypeResponseDto>
				export function request(body: defs.basics.LogisticsAttrTypeRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流分组
		 */
		export namespace logisticsGroup {
			/**
			 * 根据物流属性分组编号查询
			 * /basics/logisticsGroup/byUnique/{groupNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsGroupResponseDto>
				export function request(groupNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/logisticsGroup/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/logisticsGroup/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/logisticsGroup/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsGroupModelObject>>
				export function request(body: defs.basics.LogisticsGroupRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 列表+详情
			 * /basics/logisticsGroup/list/details
			 */
			export namespace listDetails {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsGroupDetailsResponseDto>>
				export function request(body: defs.basics.LogisticsGroupRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/logisticsGroup/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 描述 */
					description?: string
					/** 物流分组名称（CN） */
					groupNameCn?: string
					/** 物流分组名称（EN） */
					groupNameEn?: string
					/** 物流分组编号 */
					groupNo?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.LogisticsGroupResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/logisticsGroup/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsGroupDetailsResponseDto>
				export function request(body: defs.basics.LogisticsGroupRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流分组-物流属性
		 */
		export namespace logisticsGroupAttr {
			/**
			 * 根据物流属性分组编号、物流属性类型编号和物流属性编号查询
			 * /basics/logisticsGroupAttr/byUnique/{groupNo}/{attrtypeNo}/{attrNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsGroupAttrResponseDto>
				export function request(attrNo: string, attrtypeNo: string, groupNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/logisticsGroupAttr/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** id */
					id: number
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/logisticsGroupAttr/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.LogisticsGroupAttrModelObject>>
				export function request(body: defs.basics.LogisticsGroupAttrRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/logisticsGroupAttr/page
			 */
			export namespace page {
				export class Params {
					/** 物流属性名称（CN） */
					attrNameCn?: string
					/** 物流属性名称（EN） */
					attrNameEn?: string
					/** 物流属性编号 */
					attrNo?: string
					/** 物流属性类型编号 */
					attrtypeNo?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 物流分组编号 */
					groupNo?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1有效 or 0失效 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.LogisticsGroupAttrResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/logisticsGroupAttr/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.LogisticsGroupDetailsResponseDto>
				export function request(body: defs.basics.LogisticsGroupAttrRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品品牌
		 */
		export namespace productBrand {
			/**
			 * 根据品牌编号查询
			 * /basics/productBrand/byUnique/{brandNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductBrandResponseDto>
				export function request(brandNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/productBrand/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productBrand/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productBrand/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductBrandModelObject>>
				export function request(body: defs.basics.ProductBrandRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productBrand/page
			 */
			export namespace page {
				export class Params {
					/** 品牌简称 */
					brandAbbreviation?: string
					/** 品牌名称（CN） */
					brandNameCn?: string
					/** 品牌名称（EN） */
					brandNameEn?: string
					/** 品牌编号 */
					brandNo?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** 描述 */
					description?: string
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 品牌中文名称首字母 */
					initialsCn?: string
					/** 品牌英文名称首字母 */
					initialsEn?: string
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductBrandResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productBrand/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductBrandResponseDto>
				export function request(body: defs.basics.ProductBrandRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品品类
		 */
		export namespace productCategroy {
			/**
			 * 删除
			 * /basics/productCategroy/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productCategroy/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productCategroy/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductCategroyModelObject>>
				export function request(body: defs.basics.ProductCategroyRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 根据父分类编码查询
			 * /basics/productCategroy/list/parent/{parentCategoryNo}
			 */
			export namespace listByParentCategoryNo {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductCategroyModelObject>>
				export function request(parentCategoryNo: string, options?: any): Promise<Response>
			}

			/**
			 * 列表 树结构
			 * /basics/productCategroy/list/tree
			 */
			export namespace listTree {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductCategroyTreeResponseDto>>
				export function request(body: defs.basics.ProductCategroyRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 根据分类编码查询
			 * /basics/productCategroy/list/{categoryNo}
			 */
			export namespace listBycategoryNo {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductCategroyModelObject>>
				export function request(categoryNo: string, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productCategroy/page
			 */
			export namespace page {
				export class Params {
					/** 品类简称 */
					categoryAbbreviation?: string
					/** 品类名称（CN） */
					categoryNameCn?: string
					/** 品类名称（EN） */
					categoryNameEn?: string
					/** 品类编码 */
					categoryNo?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 等级 */
					levelNum?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 上级品类编码 */
					parentCategoryNo?: string
					/** 排序 */
					sortNum?: number
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductCategroyResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页 树结构
			 * /basics/productCategroy/page/tree
			 */
			export namespace pageTree {
				export class Params {
					/** 品类简称 */
					categoryAbbreviation?: string
					/** 品类名称（CN） */
					categoryNameCn?: string
					/** 品类名称（EN） */
					categoryNameEn?: string
					/** 品类编码 */
					categoryNo?: string
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 等级 */
					levelNum?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 上级品类编码 */
					parentCategoryNo?: string
					/** 排序 */
					sortNum?: number
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductCategroyTreeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productCategroy/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductCategroyResponseDto>
				export function request(body: defs.basics.ProductCategroyRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品主体
		 */
		export namespace productMaster {
			/**
			 * 查询单个产品信息
			 * /basics/productMaster/byUnique/{productNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductMasterResponseDto>
				export function request(productNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/productMaster/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productMaster/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productMaster/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductMasterModelObject>>
				export function request(body: defs.basics.ProductMasterRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 列表+明细
			 * /basics/productMaster/list/details
			 */
			export namespace listDetails {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductMasterResponseDto>>
				export function request(body: defs.basics.ProductMasterRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productMaster/page
			 */
			export namespace page {
				export class Params {
					/** 附件连接 */
					annexUrl?: string
					/** 提交人ID */
					applyUser?: number
					/** 提交人备注 */
					applyUserMemo?: string
					/** 提交人名称 */
					applyUserName?: string
					/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
					approvalStatus?: number
					/** 品牌名称 */
					brandName?: string
					/** 品牌编号 */
					brandNo?: string
					/** 品类名称 */
					categoryName?: string
					/** 品类编号 */
					categoryNo?: string
					/** countId */
					countId?: string
					/** 制造国家名称 */
					countryName?: string
					/** 制造国家二字码 */
					countrySecondWord?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 申报要素 */
					declareMemo?: string
					/** 申报名称（CN） */
					declareNameCn?: string
					/** 申报名称（EN） */
					declareNameEn?: string
					/** 删除标识 */
					deleted?: number
					/** 质保期（月） */
					expirydate?: number
					/** 首次采购金额 */
					firstPurchasePrice?: number
					/** hitCount */
					hitCount?: boolean
					/** HSCODE(国内) */
					hscodeCn?: string
					/** HSCODE(国外) */
					hscodeEn?: string
					/** id */
					id?: number
					/** 工作流实例ID */
					instanceId?: number
					/** 版本 */
					lockVersion?: number
					/** 物流分组名称 */
					logisticsGroupName?: string
					/** 物流分组编号 */
					logisticsGroupNo?: string
					/** 产品材质名称 */
					materialName?: string
					/** 产品材质编号 */
					materialNo?: string
					/** maxLimit */
					maxLimit?: number
					/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
					mqSendStatus?: number
					/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
					nsConsumeStatus?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 事业部名称 */
					organizationNane?: string
					/** 事业部编号 */
					organizationNo?: string
					/** 计划员 */
					planner?: string
					/** 计划员名称 */
					plannerName?: string
					/** 产品简称 */
					productAbbreviation?: string
					/** 产品名称（CN） */
					productNameCn?: string
					/** 产品名称（EN） */
					productNameEn?: string
					/** 产品编号 */
					productNo?: string
					/** 产品负责人 */
					productOwner?: string
					/** 产品负责人名称 */
					productOwnerName?: string
					/** 产品用途 */
					productUse?: string
					/** 采购负责人 */
					purchaser?: string
					/** 采购负责人名称 */
					purchaserName?: string
					/** 驳回人ID */
					rejecter?: number
					/** 驳回人名称 */
					rejecterName?: string
					/** 副产品负责人 */
					secondOwner?: string
					/** 副产品负责人名称 */
					secondOwnerName?: string
					/** 状态：启用 or 停用 */
					status?: number
					/** 退税率 */
					taxRebateRate?: number
					/** 产品类型名称 */
					typeName?: string
					/** 产品类型编号 */
					typeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** 增值税率 */
					vatRate?: number
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页+明细
			 * /basics/productMaster/page/details
			 */
			export namespace pageDetails {
				export class Params {
					/** 附件连接 */
					annexUrl?: string
					/** 提交人ID */
					applyUser?: number
					/** 提交人备注 */
					applyUserMemo?: string
					/** 提交人名称 */
					applyUserName?: string
					/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
					approvalStatus?: number
					/** 品牌名称 */
					brandName?: string
					/** 品牌编号 */
					brandNo?: string
					/** 品类名称 */
					categoryName?: string
					/** 品类编号 */
					categoryNo?: string
					/** countId */
					countId?: string
					/** 制造国家名称 */
					countryName?: string
					/** 制造国家二字码 */
					countrySecondWord?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 申报要素 */
					declareMemo?: string
					/** 申报名称（CN） */
					declareNameCn?: string
					/** 申报名称（EN） */
					declareNameEn?: string
					/** 删除标识 */
					deleted?: number
					/** 质保期（月） */
					expirydate?: number
					/** 首次采购金额 */
					firstPurchasePrice?: number
					/** hitCount */
					hitCount?: boolean
					/** HSCODE(国内) */
					hscodeCn?: string
					/** HSCODE(国外) */
					hscodeEn?: string
					/** id */
					id?: number
					/** 工作流实例ID */
					instanceId?: number
					/** 版本 */
					lockVersion?: number
					/** 物流分组名称 */
					logisticsGroupName?: string
					/** 物流分组编号 */
					logisticsGroupNo?: string
					/** 产品材质名称 */
					materialName?: string
					/** 产品材质编号 */
					materialNo?: string
					/** maxLimit */
					maxLimit?: number
					/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
					mqSendStatus?: number
					/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
					nsConsumeStatus?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 事业部名称 */
					organizationNane?: string
					/** 事业部编号 */
					organizationNo?: string
					/** 计划员 */
					planner?: string
					/** 计划员名称 */
					plannerName?: string
					/** 产品简称 */
					productAbbreviation?: string
					/** 产品名称（CN） */
					productNameCn?: string
					/** 产品名称（EN） */
					productNameEn?: string
					/** 产品编号 */
					productNo?: string
					/** 产品负责人 */
					productOwner?: string
					/** 产品负责人名称 */
					productOwnerName?: string
					/** 产品用途 */
					productUse?: string
					/** 采购负责人 */
					purchaser?: string
					/** 采购负责人名称 */
					purchaserName?: string
					/** 驳回人ID */
					rejecter?: number
					/** 驳回人名称 */
					rejecterName?: string
					/** 副产品负责人 */
					secondOwner?: string
					/** 副产品负责人名称 */
					secondOwnerName?: string
					/** 状态：启用 or 停用 */
					status?: number
					/** 退税率 */
					taxRebateRate?: number
					/** 产品类型名称 */
					typeName?: string
					/** 产品类型编号 */
					typeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** 增值税率 */
					vatRate?: number
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productMaster/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto
				export function request(body: defs.basics.ProductMasterRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 保存(spu+sku)
			 * /basics/productMaster/saveFull
			 */
			export namespace saveFull {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductMasterResponseDto>
				export function request(body: defs.basics.ProductMasterRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品材质
		 */
		export namespace productMaterial {
			/**
			 * 根据产品材质编号查询
			 * /basics/productMaterial/byUnique/{materialNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductMaterialResponseDto>
				export function request(materialNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/productMaterial/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productMaterial/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productMaterial/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductMaterialModelObject>>
				export function request(body: defs.basics.ProductMaterialRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productMaterial/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** 产品材质名称（CN） */
					materialNameCn?: string
					/** 产品材质名称（EN） */
					materialNameEn?: string
					/** 产品材质编号 */
					materialNo?: string
					/** 产品材质值 */
					materialValue?: string
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductMaterialResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productMaterial/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductMaterialResponseDto>
				export function request(body: defs.basics.ProductMaterialRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品SKU
		 */
		export namespace productSku {
			/**
			 * 删除
			 * /basics/productSku/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productSku/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productSku/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductSkuModelObject>>
				export function request(body: defs.basics.ProductSkuRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productSku/page
			 */
			export namespace page {
				export class Params {
					/** 附件链接 */
					annexUrl?: string
					/** 提交人ID */
					applyUser?: number
					/** 提交人备注 */
					applyUserMemo?: string
					/** 提交人名称 */
					applyUserName?: string
					/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
					approvalStatus?: number
					/** 装箱高 */
					boxHeightCm?: number
					/** 装箱长 */
					boxLongCm?: number
					/** 装箱宽 */
					boxWidthCm?: number
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 删除标识 */
					deleted?: number
					/** 产品交期 */
					deliveryDay?: number
					/** 描述 */
					description?: string
					/** 产品高 */
					heightCm?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 图片链接 */
					imageUrl?: string
					/** 产品初始分级 */
					initLevelNum?: string
					/** 工作流实例ID */
					instanceId?: number
					/** 是否研发产品：false or true */
					isDevolopFlag?: number
					/** 是否需要厂检 */
					isFactoryCheck?: number
					/** 是否需要质检 */
					isWarehouseCheck?: number
					/** 产品分级 */
					levelNum?: string
					/** 版本 */
					lockVersion?: number
					/** 物流周期 */
					logisticsCycle?: number
					/** 产品长 */
					longCm?: number
					/** maxLimit */
					maxLimit?: number
					/** 每箱数量（MPQ） */
					mpq?: number
					/** MQ推送状态: -1 未推送 0 推送失败 1推送成功 */
					mqSendStatus?: number
					/** NS消费状态：-1 未消费 0消费失败 1消费成功 */
					nsConsumeStatus?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 产品编号 */
					productNo?: string
					/** 产品负责人 */
					productOwner?: string
					/** 产品负责人名称 */
					productOwnerName?: string
					/** 驳回人ID */
					rejecter?: number
					/** 驳回人名称 */
					rejecterName?: string
					/** 副产品负责人 */
					secondOwner?: string
					/** 副产品负责人名称 */
					secondOwnerName?: string
					/** 默认运输方式名称 */
					shippingMethodName?: string
					/** 默认运输方式编号 */
					shippingMethodNo?: string
					/** 单个产品计费重（g） */
					singleBillingWeight?: number
					/** 单个产品装箱体积重(m3) */
					singleBoxVolumeWeight?: number
					/** 单个产品装箱重量(g) */
					singlePackingWeight?: number
					/** SKU简称 */
					skuAbbreviation?: string
					/** SKU编号 */
					skuNo?: string
					/** SKU标题（CN） */
					skuTitleCn?: string
					/** SKU标题（EN） */
					skuTitleEn?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 计量单位名称 */
					unitName?: string
					/** 计量单位编号 */
					unitNo?: string
					/** 单位类型名称 */
					unitTypeName?: string
					/** 单位类型编号 */
					unitTypeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** 默认供应商名称 */
					vendorName?: string
					/** 默认供应商编号 */
					vendorNo?: string
					/** 体积重 */
					volumeWeight?: number
					/** 产品重量（g） */
					weight?: number
					/** 产品宽 */
					widthCm?: number
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductSkuResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productSku/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductSkuResponseDto>
				export function request(body: defs.basics.ProductSkuRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品类型
		 */
		export namespace productType {
			/**
			 * 根据产品类型编号查询
			 * /basics/productType/byUnique/{typeNo}
			 */
			export namespace byUnique {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductTypeResponseDto>
				export function request(typeNo: string, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /basics/productType/delete
			 */
			export namespace deleteOne {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 启用 or 停用
			 * /basics/productType/enable
			 */
			export namespace enable {
				export class Params {
					/** code */
					code: string
					/** enable */
					enable: boolean
				}

				export type Response = defs.basics.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 列表
			 * /basics/productType/list
			 */
			export namespace list {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.ProductTypeModelObject>>
				export function request(body: defs.basics.ProductTypeRequestParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 分页
			 * /basics/productType/page
			 */
			export namespace page {
				export class Params {
					/** countId */
					countId?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** current */
					current?: number
					/** 删除标识 */
					deleted?: number
					/** hitCount */
					hitCount?: boolean
					/** id */
					id?: number
					/** 版本 */
					lockVersion?: number
					/** maxLimit */
					maxLimit?: number
					/** optimizeCountSql */
					optimizeCountSql?: boolean
					/** asc */
					asc?: boolean
					/** column */
					column?: string
					/** 状态：1启用 or 0停用 */
					status?: number
					/** 产品类型简称 */
					typeAbbreviation?: string
					/** 产品类型名称（CN） */
					typeNameCn?: string
					/** 产品类型名称（EN） */
					typeNameEn?: string
					/** 产品类型编号 */
					typeNo?: string
					/** 修改人 */
					updateBy?: string
					/** 修改时间 */
					updateTime?: string
					/** searchCount */
					searchCount?: boolean
					/** size */
					size?: number
					/** total */
					total?: number
				}

				export type Response = defs.basics.ResponseDto<defs.basics.IPage<defs.basics.ProductTypeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 保存
			 * /basics/productType/save
			 */
			export namespace save {
				export type Response = defs.basics.ResponseDto<defs.basics.ProductTypeResponseDto>
				export function request(body: defs.basics.ProductTypeRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 同步任务
		 */
		export namespace taskApi {
			/**
			 * MongoDB操作数据-获取
			 * /task/api/get/mdbData
			 */
			export namespace getMdbData {
				export type Response = defs.basics.ResponseDto<Array<defs.basics.SaveFiledDto>>
				export function request(body: defs.basics.TaskGetDataRequestDto, options?: any): Promise<Response>
			}

			/**
			 * MongoDB操作数据-更新同步状态
			 * /task/api/upd/mdbData/status
			 */
			export namespace updMdbDataStatus {
				export type Response = defs.basics.ResponseDto
				export function request(body: Array<string>, options?: any): Promise<Response>
			}
		}
	}
}
