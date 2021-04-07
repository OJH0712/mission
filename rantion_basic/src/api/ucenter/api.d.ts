type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
	[key in Key]: Value
}

declare namespace defs {
	export namespace ucenter {
		export class BaseResultResponseDto<T0 = any> {
			/** 状态码 */
			code?: string

			/** 返回数据 */
			data?: T0

			/** 消息 */
			msg?: string

			/** 原数据，测试使用 */
			originData?: object

			/** 结果状态是否成功，false:服务器运行错误 */
			success?: boolean

			/** 返回数据total */
			total?: number
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

		export class LoginCheckRequestDto {
			/** sso重定向地址 */
			redirectUrl: string

			/** 系统编号 */
			systemNo: string

			/** 用户编号 */
			userNo: string
		}

		export class LoginCheckResponseDto {
			/** sso重定向地址 */
			redirectUrl: string

			/** 系统编号 */
			systemNo: string

			/** ticket票据 */
			ticket: string
		}

		export class LoginRequestDto {
			/** 密码 */
			password: string

			/** sso重定向地址 */
			redirectUrl?: string

			/** 用户名 */
			userName: string
		}

		export class LoginResponseDto {
			/** accessToken */
			accessToken: string

			/** 过期时间 */
			tokenExpire: string

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class MainBodyRequestDto {
			/** 编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 名称 */
			name: string
		}

		export class MainBodyResponseDto {
			/** 编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 名称 */
			name: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class MediaSocialModel {
			/** createBy */
			createBy?: string

			/** createTime */
			createTime?: string

			/** deleted */
			deleted?: number

			/** id */
			id?: number

			/** lockVersion */
			lockVersion?: number

			/** platformUserInfo */
			platformUserInfo?: string

			/** platformUserNo */
			platformUserNo?: string

			/** type */
			type?: number

			/** updateBy */
			updateBy?: string

			/** updateTime */
			updateTime?: string

			/** userNo */
			userNo?: string
		}

		export class MediaSocialRequestDto {
			/** id */
			id: number

			/** 第三方平台用户信息，json格式保存 */
			platformUserInfo: string

			/** 平台用户编号 */
			platformUserNo: string

			/** 类型，10：wechat，20：qq */
			type: number

			/** 用户编号 */
			userNo: string
		}

		export class MediaSocialResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 第三方平台用户信息，json格式保存 */
			platformUserInfo: string

			/** 平台用户编号 */
			platformUserNo: string

			/** 类型，10：wechat，20：qq */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationLevelRequestDto {
			/** 主体编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 级别，L1 */
			level: string

			/** 名称 */
			name: string
		}

		export class OrganizationLevelResponseDto {
			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 级别，L1 */
			level: string

			/** 乐观锁 */
			lockVersion: number

			/** 名称 */
			name: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class OrganizationPostRelationRequestDto {
			/** 是否到岗，0：未到，1：已到 */
			arrived: number

			/** 主体编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 是否主管，0：不是，1：是 */
			manager: number

			/** 组织架构id */
			organizationId: number

			/** 未入职计划职级等级，JSON格式 */
			planRank: string

			/** 岗位id */
			postId: number

			/** 岗位名称 */
			postName: string

			/** 职级id */
			rankId: number

			/** 职级等级，如1，2 */
			rankLevel: number

			/** 职级类型：E，M，P，B */
			rankType: string

			/** 员工姓名 */
			realName: string

			/** 岗位类型，10：全职，20：代理，30：兼职 */
			type: number

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationPostRelationResponseDto {
			/** 是否到岗，0：未到，1：已到 */
			arrived: number

			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 是否主管，0：不是，1：是 */
			manager: number

			/** 组织架构id */
			organizationId: number

			/** 未入职计划职级等级，JSON格式 */
			planRank: string

			/** 岗位id */
			postId: number

			/** 岗位名称 */
			postName: string

			/** 职级id */
			rankId: number

			/** 职级等级，如1，2 */
			rankLevel: number

			/** 职级类型：E，M，P，B */
			rankType: string

			/** 员工姓名 */
			realName: string

			/** 岗位类型，10：全职，20：代理，30：兼职 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationPostRequestDto {
			/** 主体编号 */
			bodyNumber: string

			/** 职责说明 */
			duty: string

			/** id */
			id: number

			/** 名称 */
			name: string
		}

		export class OrganizationPostResponseDto {
			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 职责说明 */
			duty: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 名称 */
			name: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class OrganizationRankRequestDto {
			/** 主体编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 等级，如1，2 */
			level: number

			/** 全称 */
			name: string

			/** 职级类型：E，M，P，B */
			type: string
		}

		export class OrganizationRankResponseDto {
			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 等级，如1，2 */
			level: number

			/** 乐观锁 */
			lockVersion: number

			/** 全称 */
			name: string

			/** 职级类型：E，M，P，B */
			type: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class OrganizationRequestDto {
			/** 主体编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 是否隐藏，0：否，1：是 */
			ifHidden: number

			/** 乐观锁 */
			lockVersion: number

			/** 组织名称 */
			name: string

			/** 已到岗人数 */
			numberOfArrived: number

			/** 下属人数 */
			numberOfSubordinates: number

			/** 级别id */
			organizationLevelId: number

			/** 组织架构岗位明细 */
			organizationPostRelation: Array<defs.ucenter.OrganizationPostRelationRequestDto>

			/** 上级id，0表示顶级 */
			parentId: number

			/** 全路径id，格式为1,2 */
			path: string

			/** 主管用户编号 */
			supervisorUserCode: string

			/** 主管用户姓名 */
			supervisorUserName: string
		}

		export class OrganizationResponseDto {
			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 是否隐藏，0：否，1：是 */
			ifHidden: number

			/** 乐观锁 */
			lockVersion: number

			/** 组织名称 */
			name: string

			/** 已到岗人数 */
			numberOfArrived: number

			/** 下属人数 */
			numberOfSubordinates: number

			/** 级别id */
			organizationLevelId: number

			/** 组织架构岗位明细 */
			organizationPostRelation: Array<defs.ucenter.OrganizationPostRelationResponseDto>

			/** 上级id，0表示顶级 */
			parentId: number

			/** 全路径id，格式为1,2 */
			path: string

			/** 主管用户编号 */
			supervisorUserCode: string

			/** 主管用户姓名 */
			supervisorUserName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class OrganizationStaffRelationResponseDto {
			/** 主体名称 */
			bodyName: string

			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 离职时间 */
			departureTime: string

			/** 企业邮箱 */
			email: string

			/** 入职时间 */
			entryTime: string

			/** id */
			id: number

			/** 工号 */
			jobNo: string

			/** 乐观锁 */
			lockVersion: number

			/** 是否主管，0：不是，1：是 */
			manager: number

			/** 一级组织架构id，部门id */
			organizationDeptId: number

			/** 组织架构id */
			organizationId: number

			/** 手机号码 */
			phone: string

			/** 岗位id */
			postId: number

			/** 职级id */
			rankId: number

			/** 姓名 */
			realName: string

			/** 性别，0：男，1：女 */
			sex: number

			/** 状态，10：在职，20：离职 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationStaffRequestDto {
			/** 生日 */
			birthday: string

			/** 主体编号 */
			bodyNumber: string

			/** 离职时间 */
			departureTime: string

			/** 企业邮箱 */
			email: string

			/** 入职时间 */
			entryTime: string

			/** id */
			id: number

			/** 工号 */
			jobNo: string

			/** 是否主管，0：不是，1：是 */
			manager: number

			/** 组织架构id */
			organizationId: number

			/** 手机号码 */
			phone: string

			/** 岗位id */
			postId: number

			/** 职级id */
			rankId: number

			/** 姓名 */
			realName: string

			/** 性别，0：男，1：女 */
			sex: number

			/** 状态，10：在职，20：离职 */
			status: number

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationStaffResponseDto {
			/** 生日 */
			birthday: string

			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 离职时间 */
			departureTime: string

			/** 企业邮箱 */
			email: string

			/** 入职时间 */
			entryTime: string

			/** id */
			id: number

			/** 工号 */
			jobNo: string

			/** 乐观锁 */
			lockVersion: number

			/** 是否主管，0：不是，1：是 */
			manager: number

			/** 一级组织架构id，部门id */
			organizationDeptId: number

			/** 组织架构id */
			organizationId: number

			/** 组织架构名称 */
			organizationName: string

			/** 手机号码 */
			phone: string

			/** 岗位id */
			postId: number

			/** 岗位名称 */
			postName: string

			/** 职级id */
			rankId: number

			/** 职级名称 */
			rankName: string

			/** 姓名 */
			realName: string

			/** 性别，0：男，1：女 */
			sex: number

			/** 状态，10：在职，20：离职 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户编号 */
			userNo: string
		}

		export class OrganizationTreeResponseDto {
			/** 主体编号 */
			bodyNumber: string

			/** id */
			id: number

			/** 是否隐藏，0：否，1：是 */
			ifHidden: number

			/** 组织名称 */
			name: string

			/** 已到岗人数 */
			numberOfArrived: number

			/** 下属人数 */
			numberOfSubordinates: number

			/** 下级组织架构信息 */
			organizationChildList: Array<defs.ucenter.OrganizationTreeResponseDto>

			/** 级别id */
			organizationLevelId: number

			/** 组织架构岗位明细 */
			organizationPostRelation: Array<defs.ucenter.OrganizationPostRelationResponseDto>

			/** 上级id，0表示顶级 */
			parentId: number

			/** 全路径id，格式为1,2 */
			path: string

			/** 主管用户编号 */
			supervisorUserCode: string

			/** 主管用户姓名 */
			supervisorUserName: string
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

		export class RoleMenuListResponseDto {
			/** 菜单代码 */
			code?: string

			/** id */
			id?: number

			/** 菜单名称 */
			name?: string

			/** 菜单资源 */
			roleMenuResourceDtoList?: Array<defs.ucenter.RoleMenuResourceResponseDto>
		}

		export class RoleMenuResourceRequestDto {
			/** 菜单编号 */
			menuCodeList?: Array<string>

			/** 资源id */
			resourceIdList?: Array<number>
		}

		export class RoleMenuResourceResponseDto {
			/** 菜单编号 */
			menuCode?: string

			/** 资源备注 */
			remark?: string

			/** 资源路径 */
			resUrl?: string

			/** 资源Id */
			resourceId?: number

			/** 资源名称 */
			resourceName?: string

			/** 路由别名 */
			routeAlias?: string

			/** 类型 1:按钮 5:资源 10:资源按钮 */
			type?: number
		}

		export class StaffAccountResponseDto {
			/** 用户头像 */
			avatar: string

			/** 主体编号 */
			bodyNumber: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 企业邮箱 */
			email: string

			/** 工号 */
			jobNo: string

			/** 部门id */
			organizationDeptId: number

			/** 部门名称 */
			organizationDeptName: string

			/** 手机号码 */
			phone: string

			/** 岗位id */
			postId: number

			/** 岗位名称 */
			postName: string

			/** 姓名 */
			realName: string

			/** 性别，0：男，1：女 */
			sex: number

			/** 状态，10：在职，20：离职 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class SysDataDetailRequestDto {
			/** 是否可授权 0:仅查看、1:查看与授权 */
			authorized?: number

			/** 数据权限编码 */
			dataCode: string
		}

		export class SysDataResponseDto {
			/** 是否可授权 0:仅查看、1:查看与授权 */
			authorized?: number

			/** 数据权限编码 */
			dataCode?: string

			/** 数据权限类型 1:产品线、2:BU类型、3:登录菜单首页 */
			dataType?: number
		}

		export class SysMenuRequestDto {
			/** 所属系统资源路径 */
			appEntry?: string

			/** 所属系统 */
			appName?: string

			/** 菜单编码 */
			code: string

			/** 功能描述 */
			description: string

			/** 是否启用，0：否，1：是 */
			enable: number

			/** id */
			id: number

			/** 是否在导航栏显示，0：否，1：是 */
			ifHidden: number

			/** 菜单名称 */
			name: string

			/** 父菜单编码 */
			parentCode: string

			/** 菜单url */
			resUrl: string

			/** 路由别名 */
			routeAlias: string

			/** 排序 */
			sort: number
		}

		export class SysMenuResourceRequestDto {
			/** id */
			id: number

			/** 菜单编码 */
			menuCode: string

			/** 资源名称 */
			name: string

			/** 描述 */
			remark: string

			/** url */
			resUrl: string

			/** 排序 */
			sort: number

			/** 类型 1:按钮 5:资源 10:资源按钮 */
			type: number
		}

		export class SysMenuResourceResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 菜单编码 */
			menuCode: string

			/** 资源名称 */
			name: string

			/** 描述 */
			remark: string

			/** url */
			resUrl: string

			/** 排序 */
			sort: number

			/** 类型 1:按钮 5:资源 10:资源按钮 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class SysMenuResponseDto {
			/** 所属系统资源路径 */
			appEntry: string

			/** 所属系统 */
			appName: string

			/** 子菜单 */
			children: Array<defs.ucenter.SysMenuResponseDto>

			/** 菜单编码 */
			code: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 功能描述 */
			description: string

			/** 是否启用，0：否，1：是 */
			enable: number

			/** id */
			id: number

			/** 是否在导航栏显示，0：否，1：是 */
			ifHidden: number

			/** 乐观锁 */
			lockVersion: number

			/** 菜单名称 */
			name: string

			/** 父菜单编码 */
			parentCode: string

			/** 菜单url */
			resUrl: string

			/** 菜单资源 */
			roleMenuResourceDtoList?: Array<defs.ucenter.RoleMenuResourceResponseDto>

			/** 路由别名 */
			routeAlias: string

			/** 排序 */
			sort: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class SysNumStepRequestDto {
			/** 开始数字,默认1 */
			beginNum: number

			/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久 */
			cycle: number

			/** 日期格式,支持date的格式 */
			dateStr: string

			/** 超出异常处理 0:截取 1:抛出异常 */
			exceedFlag: number

			/** id */
			id: number

			/** 标签，在系统下唯一 */
			label: string

			/** 长度，算上前缀、后缀 */
			lengthSize: number

			/** 编号名 */
			numStepName: string

			/** 前缀 */
			prefix: string

			/** 进制 */
			radix: number

			/** 备注 */
			remark: string

			/** 补充字段 */
			spadChar: string

			/** 补充位置 1:left 2:right */
			spadPosition: number

			/** 步进 */
			stepNum: number

			/** 后缀 */
			suffix: string

			/** 所属系统，默认UC */
			systemNo: string

			/** 作用的字段,用作后期数据恢复使用 */
			tableField: string

			/** 作用的表 */
			tableName: string
		}

		export class SysNumStepResponseDto {
			/** 开始数字,默认1 */
			beginNum: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久 */
			cycle: number

			/** 日期格式,支持date的格式 */
			dateStr: string

			/** 超出异常处理 0:截取 1:抛出异常 */
			exceedFlag: number

			/** id */
			id: number

			/** 标签，在系统下唯一 */
			label: string

			/** 长度，算上前缀、后缀 */
			lengthSize: number

			/** 乐观锁 */
			lockVersion: number

			/** 编号名 */
			numStepName: string

			/** 前缀 */
			prefix: string

			/** 进制 */
			radix: number

			/** 备注 */
			remark: string

			/** 补充字段 */
			spadChar: string

			/** 补充位置 1:left 2:right */
			spadPosition: number

			/** 步进 */
			stepNum: number

			/** 后缀 */
			suffix: string

			/** 所属系统，默认UC */
			systemNo: string

			/** 作用的字段,用作后期数据恢复使用 */
			tableField: string

			/** 作用的表 */
			tableName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class SysPropertiesRequestDto {
			/** id */
			id: number

			/** key */
			key: string

			/** 名称 */
			name: string

			/** 备注 */
			remark: string

			/** value */
			value: string
		}

		export class SysPropertiesResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** key */
			key: string

			/** 乐观锁 */
			lockVersion: number

			/** 名称 */
			name: string

			/** 备注 */
			remark: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** value */
			value: string
		}

		export class SysRoleDataRequestDto {
			/** 数据权限类型 1:产品线、2:BU类型、3:登录菜单首页 */
			dataType: number

			/** details */
			details: Array<defs.ucenter.SysDataDetailRequestDto>

			/** 角色ID */
			roleId: number
		}

		export class SysRoleRequestDto {
			/** id */
			id: number

			/** 角色描述 */
			roleDesc: string

			/** 角色名称 */
			roleName: string
		}

		export class SysRoleResourceRequestDto {
			/** id */
			id: number

			/** 资源id */
			resourceId: number

			/** 角色id */
			roleId: number
		}

		export class SysRoleResourceResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 资源id */
			resourceId: number

			/** 角色id */
			roleId: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class SysRoleResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 角色描述 */
			roleDesc: string

			/** 角色名称 */
			roleName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class SysTableauResponseDto {
			/** siteId */
			siteId: string

			/** token */
			token: string

			/** userId */
			userId: string
		}

		export class SysTableauViewResponseDto {
			/** contentUrl */
			contentUrl?: string

			/** createdAt */
			createdAt?: string

			/** id */
			id?: string

			/** name */
			name?: string

			/** updatedAt */
			updatedAt?: string

			/** viewUrlName */
			viewUrlName?: string
		}

		export class SysTableauWorkbookResponseDto {
			/** contentUrl */
			contentUrl?: string

			/** createdAt */
			createdAt?: string

			/** dataAccelerationConfig */
			dataAccelerationConfig?: object

			/** defaultViewId */
			defaultViewId?: string

			/** description */
			description?: string

			/** encryptExtracts */
			encryptExtracts?: boolean

			/** id */
			id?: string

			/** name */
			name?: string

			/** owner */
			owner?: object

			/** project */
			project?: object

			/** showTabs */
			showTabs?: boolean

			/** size */
			size?: number

			/** updatedAt */
			updatedAt?: string

			/** webpageUrl */
			webpageUrl?: string
		}

		export class SysUserDataRequestDto {
			/** 数据权限类型 1:产品线、2:BU类型、3:登录菜单首页 */
			dataType: number

			/** details */
			details: Array<defs.ucenter.SysDataDetailRequestDto>

			/** 用户编号 */
			userNo: string
		}

		export class SysUserLoginLogRequestDto {
			/** 客户端ip */
			clientIp: string

			/** 客户端类型，10：电脑，20：手机 */
			clientType: number

			/** id */
			id: number

			/** 操作类型，10:登录，20:登出 */
			operationType: number

			/** 系统编号 */
			systemNo: string

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class SysUserLoginLogResponseDto {
			/** 客户端ip */
			clientIp: string

			/** 客户端类型，10：电脑，20：手机 */
			clientType: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 操作类型，10:登录，20:登出 */
			operationType: number

			/** 系统编号 */
			systemNo: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class SysUserRequestDto {
			/** 用户头像 */
			avatar?: string

			/** 用户邮箱 */
			email: string

			/** id */
			id?: number

			/** 员工档案信息 */
			organizationStaff?: defs.ucenter.OrganizationStaffRequestDto

			/** 用户手机号码 */
			phone: string

			/** 状态，0：禁用，1：启用 */
			status?: number

			/** 类型，10：内部，20：外部 */
			type?: number

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo?: string
		}

		export class SysUserResponseDto {
			/** 用户头像 */
			avatar: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 用户邮箱 */
			email: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 员工档案信息 */
			organizationStaff?: Array<defs.ucenter.OrganizationStaffRelationResponseDto>

			/** 用户手机号码 */
			phone: string

			/** 状态，0：禁用，1：启用 */
			status: number

			/** 类型，10：内部，20：外部 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string

			/** 用户角色分组，1：普通用户，2：普通管理员，3：超级管理员 */
			userRoleType?: number

			/** 是否绑定微信账号，1：未绑定，2：已绑定 */
			wxBind?: number
		}

		export class SysUserTableauRequestDto {
			/** tableau账号 */
			tableauNo: string

			/** tableau密码 */
			tableauPassword: string

			/** 用户编号 */
			userNo: string
		}

		export class SysUserTokenRequestDto {
			/** token */
			accessToken: string

			/** id */
			id: number

			/** 过期时间 */
			tokenExpire: string

			/** 用户id */
			userId: number

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class SysUserTokenResponseDto {
			/** token */
			accessToken: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 乐观锁 */
			lockVersion: number

			/** 过期时间 */
			tokenExpire: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 用户id */
			userId: number

			/** 用户姓名 */
			userName: string

			/** 用户编号 */
			userNo: string
		}

		export class TicketCheckRequestDto {
			/** ticket票据 */
			ticket: string
		}

		export class UserDto {
			/** clientCode */
			clientCode?: string

			/** clientType */
			clientType?: 'ADMIN' | 'APP'

			/** password */
			password?: string

			/** userCode */
			userCode?: string

			/** userId */
			userId?: number

			/** userName */
			userName?: string
		}

		export class UserPasswordRequestDto {
			/** 用户确认密码 */
			confirmPassword?: string

			/** 用户新密码 */
			newPassword?: string

			/** 用户原密码 */
			originalPassword?: string

			/** 用户编号 */
			userNo?: string
		}

		export class UserRoleSetBatchRequestDto {
			/** 角色id集合 */
			roleIdList: Array<number>

			/** 用户编号集合 */
			userNoList: Array<string>
		}
	}
}

declare namespace API {
	export namespace ucenter {
		/**
		 * 主体信息管理控制器
		 */
		export namespace mainBody {
			/**
			 * 新增主体
			 * /mainBody/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.MainBodyRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /mainBody/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 编号，等于 */
					bodyNumber?: string
					/** 编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 编号，不等于 */
					bodyNumberNe?: string
					/** 编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 名称，等于 */
					name?: string
					/** 名称，全模糊匹配包含 */
					nameLike?: string
					/** 名称，不等于 */
					nameNe?: string
					/** 名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.IPage<defs.ucenter.MainBodyResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改主体信息
			 * /mainBody/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.MainBodyRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /mainBody/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.MainBodyResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 第三方社交账号关联控制器
		 */
		export namespace mediaSocial {
			/**
			 * 新增
			 * /mediaSocial/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.MediaSocialRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据用户编号获取详情
			 * /mediaSocial/getByUserNo/{userNo}
			 */
			export namespace getByUserNo {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.MediaSocialResponseDto>
				export function request(userNo: string, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /mediaSocial/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 第三方平台用户信息，json格式保存，等于 */
					platformUserInfo?: string
					/** 第三方平台用户信息，json格式保存，全模糊匹配包含 */
					platformUserInfoLike?: string
					/** 第三方平台用户信息，json格式保存，不等于 */
					platformUserInfoNe?: string
					/** 第三方平台用户信息，json格式保存，全模糊匹配不包含 */
					platformUserInfoNotLike?: string
					/** 平台用户编号，等于 */
					platformUserNo?: string
					/** 平台用户编号，全模糊匹配包含 */
					platformUserNoLike?: string
					/** 平台用户编号，不等于 */
					platformUserNoNe?: string
					/** 平台用户编号，全模糊匹配不包含 */
					platformUserNoNotLike?: string
					/** 每页条数 */
					size?: number
					/** 类型，10：wechat，20：qq，等于 */
					type?: number
					/** 类型，10：wechat，20：qq，不等于 */
					typeNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.MediaSocialResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /mediaSocial/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.MediaSocialRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /mediaSocial/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.MediaSocialResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /mediaSocial/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * Num Step Facade Impl
		 */
		export namespace numStepFacadeImpl {
			/**
			 * getBatchStep
			 * /numStep/getBatchStep
			 */
			export namespace getBatchStep {
				export class Params {
					/** label */
					label: string
					/** num */
					num: number
					/** systemNo */
					systemNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<string>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * getStepNum
			 * /numStep/getStepNum
			 */
			export namespace getStepNum {
				export class Params {
					/** label */
					label: string
					/** systemNo */
					systemNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<string>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 组织架构管理控制器
		 */
		export namespace organization {
			/**
			 * 新增
			 * /organization/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationResponseDto>
				export function request(body: defs.ucenter.OrganizationRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取下一级组织架构信息
			 * /organization/getChild/{parentId}
			 */
			export namespace getByParentId {
				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.OrganizationResponseDto>>
				export function request(parentId: number, options?: any): Promise<Response>
			}

			/**
			 * 获取树形组织架构列表
			 * /organization/getTreeList
			 */
			export namespace getTreeList {
				export class Params {
					/** 主体编号 */
					bodyNumber: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.OrganizationTreeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organization/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 是否隐藏，0：否，1：是，等于 */
					ifHidden?: number
					/** 是否隐藏，0：否，1：是，不等于 */
					ifHiddenNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 组织名称，等于 */
					name?: string
					/** 组织名称，全模糊匹配包含 */
					nameLike?: string
					/** 组织名称，不等于 */
					nameNe?: string
					/** 组织名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 已到岗人数，等于 */
					numberOfArrived?: number
					/** 已到岗人数，不等于 */
					numberOfArrivedNe?: number
					/** 下属人数，等于 */
					numberOfSubordinates?: number
					/** 下属人数，不等于 */
					numberOfSubordinatesNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 级别id，等于 */
					organizationLevelId?: number
					/** 级别id，不等于 */
					organizationLevelIdNe?: number
					/** 上级id，0表示顶级，等于 */
					parentId?: number
					/** 上级id，0表示顶级，不等于 */
					parentIdNe?: number
					/** 全路径id，格式为1,2，等于 */
					path?: string
					/** 全路径id，格式为1,2，全模糊匹配包含 */
					pathLike?: string
					/** 全路径id，格式为1,2，不等于 */
					pathNe?: string
					/** 全路径id，格式为1,2，全模糊匹配不包含 */
					pathNotLike?: string
					/** 每页条数 */
					size?: number
					/** 主管用户编号，等于 */
					supervisorUserCode?: string
					/** 主管用户编号，全模糊匹配包含 */
					supervisorUserCodeLike?: string
					/** 主管用户编号，不等于 */
					supervisorUserCodeNe?: string
					/** 主管用户编号，全模糊匹配不包含 */
					supervisorUserCodeNotLike?: string
					/** 主管用户姓名，等于 */
					supervisorUserName?: string
					/** 主管用户姓名，全模糊匹配包含 */
					supervisorUserNameLike?: string
					/** 主管用户姓名，不等于 */
					supervisorUserNameNe?: string
					/** 主管用户姓名，全模糊匹配不包含 */
					supervisorUserNameNotLike?: string
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 同步组织架构分组
			 * /organization/syncGroups
			 */
			export namespace syncGroups {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organization/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationResponseDto>
				export function request(body: defs.ucenter.OrganizationRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organization/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organization/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * Organization Facade Impl
		 */
		export namespace organizationFacadeImpl {
			/**
			 * getAllTreeList
			 * /organization/getAllTreeList
			 */
			export namespace getAllTreeList {
				export type Response = defs.ucenter.BaseResultResponseDto<
					ObjectMap<string, Array<defs.ucenter.OrganizationTreeResponseDto>>
				>
				export function request(options?: any): Promise<Response>
			}
		}

		/**
		 * 组织架构级别控制器
		 */
		export namespace organizationLevel {
			/**
			 * 新增
			 * /organizationLevel/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationLevelRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organizationLevel/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 级别，L1，等于 */
					level?: string
					/** 级别，L1，全模糊匹配包含 */
					levelLike?: string
					/** 级别，L1，不等于 */
					levelNe?: string
					/** 级别，L1，全模糊匹配不包含 */
					levelNotLike?: string
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 名称，等于 */
					name?: string
					/** 名称，全模糊匹配包含 */
					nameLike?: string
					/** 名称，不等于 */
					nameNe?: string
					/** 名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationLevelResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organizationLevel/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationLevelRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organizationLevel/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationLevelResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organizationLevel/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 岗位管理控制器
		 */
		export namespace organizationPost {
			/**
			 * 新增
			 * /organizationPost/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationPostRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organizationPost/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** 职责说明，等于 */
					duty?: string
					/** 职责说明，全模糊匹配包含 */
					dutyLike?: string
					/** 职责说明，不等于 */
					dutyNe?: string
					/** 职责说明，全模糊匹配不包含 */
					dutyNotLike?: string
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 名称，等于 */
					name?: string
					/** 名称，全模糊匹配包含 */
					nameLike?: string
					/** 名称，不等于 */
					nameNe?: string
					/** 名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationPostResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organizationPost/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationPostRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organizationPost/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationPostResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organizationPost/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 组织架构-岗位关联控制器
		 */
		export namespace organizationPostRelation {
			/**
			 * 新增
			 * /organizationPostRelation/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationPostRelationRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organizationPostRelation/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 是否到岗，0：未到，1：已到，等于 */
					arrived?: number
					/** 是否到岗，0：未到，1：已到，不等于 */
					arrivedNe?: number
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 是否主管，0：不是，1：是，等于 */
					manager?: number
					/** 是否主管，0：不是，1：是，不等于 */
					managerNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 组织架构id，等于 */
					organizationId?: number
					/** 组织架构id，不等于 */
					organizationIdNe?: number
					/** 未入职计划职级等级，JSON格式，等于 */
					planRank?: string
					/** 未入职计划职级等级，JSON格式，全模糊匹配包含 */
					planRankLike?: string
					/** 未入职计划职级等级，JSON格式，不等于 */
					planRankNe?: string
					/** 未入职计划职级等级，JSON格式，全模糊匹配不包含 */
					planRankNotLike?: string
					/** 岗位id，等于 */
					postId?: number
					/** 岗位id，不等于 */
					postIdNe?: number
					/** 岗位名称，等于 */
					postName?: string
					/** 岗位名称，全模糊匹配包含 */
					postNameLike?: string
					/** 岗位名称，不等于 */
					postNameNe?: string
					/** 岗位名称，全模糊匹配不包含 */
					postNameNotLike?: string
					/** 职级id，等于 */
					rankId?: number
					/** 职级id，不等于 */
					rankIdNe?: number
					/** 职级等级，如1，2，等于 */
					rankLevel?: number
					/** 职级等级，如1，2，不等于 */
					rankLevelNe?: number
					/** 职级类型：E，M，P，B，等于 */
					rankType?: string
					/** 职级类型：E，M，P，B，全模糊匹配包含 */
					rankTypeLike?: string
					/** 职级类型：E，M，P，B，不等于 */
					rankTypeNe?: string
					/** 职级类型：E，M，P，B，全模糊匹配不包含 */
					rankTypeNotLike?: string
					/** 员工姓名，等于 */
					realName?: string
					/** 员工姓名，全模糊匹配包含 */
					realNameLike?: string
					/** 员工姓名，不等于 */
					realNameNe?: string
					/** 员工姓名，全模糊匹配不包含 */
					realNameNotLike?: string
					/** 每页条数 */
					size?: number
					/** 岗位类型，10：全职，20：代理，30：兼职，等于 */
					type?: number
					/** 岗位类型，10：全职，20：代理，30：兼职，不等于 */
					typeNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationPostRelationResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organizationPostRelation/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationPostRelationRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organizationPostRelation/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationPostRelationResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organizationPostRelation/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 职级管理控制器
		 */
		export namespace organizationRank {
			/**
			 * 新增
			 * /organizationRank/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationRankRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organizationRank/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 等级，如1，2，等于 */
					level?: number
					/** 等级，如1，2，不等于 */
					levelNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 全称，等于 */
					name?: string
					/** 全称，全模糊匹配包含 */
					nameLike?: string
					/** 全称，不等于 */
					nameNe?: string
					/** 全称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 职级类型：E，M，P，B，等于 */
					type?: string
					/** 职级类型：E，M，P，B，全模糊匹配包含 */
					typeLike?: string
					/** 职级类型：E，M，P，B，不等于 */
					typeNe?: string
					/** 职级类型：E，M，P，B，全模糊匹配不包含 */
					typeNotLike?: string
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationRankResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organizationRank/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationRankRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organizationRank/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationRankResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organizationRank/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 员工管理控制器
		 */
		export namespace organizationStaff {
			/**
			 * 新增
			 * /organizationStaff/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationStaffRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据用户编号获取详情
			 * /organizationStaff/getStaffInfo
			 */
			export namespace getStaffInfo {
				export class Params {
					/** 主体编号 */
					bodyNumber: string
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationStaffResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /organizationStaff/selectPage
			 */
			export namespace selectRelationList {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，大于等于 */
					createTimeGe?: string
					/** 创建时间，小于等于 */
					createTimeLe?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** 离职时间，等于 */
					departureTime?: string
					/** 离职时间，大于等于 */
					departureTimeGe?: string
					/** 离职时间，小于等于 */
					departureTimeLe?: string
					/** 离职时间，不等于 */
					departureTimeNe?: string
					/** 企业邮箱，等于 */
					email?: string
					/** 企业邮箱，全模糊匹配包含 */
					emailLike?: string
					/** 企业邮箱，不等于 */
					emailNe?: string
					/** 企业邮箱，全模糊匹配不包含 */
					emailNotLike?: string
					/** 入职时间，等于 */
					entryTime?: string
					/** 入职时间，大于等于 */
					entryTimeGe?: string
					/** 入职时间，小于等于 */
					entryTimeLe?: string
					/** 入职时间，不等于 */
					entryTimeNe?: string
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 工号，等于 */
					jobNo?: string
					/** 工号，全模糊匹配包含 */
					jobNoLike?: string
					/** 工号，不等于 */
					jobNoNe?: string
					/** 工号，全模糊匹配不包含 */
					jobNoNotLike?: string
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 是否主管，0：不是，1：是，等于 */
					manager?: number
					/** 是否主管，0：不是，1：是，不等于 */
					managerNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 一级组织架构id，部门id，等于 */
					organizationDeptId?: number
					/** 组织架构id，等于 */
					organizationId?: number
					/** 组织架构id，不等于 */
					organizationIdNe?: number
					/** 手机号码，等于 */
					phone?: string
					/** 手机号码，全模糊匹配包含 */
					phoneLike?: string
					/** 手机号码，不等于 */
					phoneNe?: string
					/** 手机号码，全模糊匹配不包含 */
					phoneNotLike?: string
					/** 岗位id，等于 */
					postId?: number
					/** 岗位id，不等于 */
					postIdNe?: number
					/** 职级id，等于 */
					rankId?: number
					/** 职级id，不等于 */
					rankIdNe?: number
					/** 姓名，等于 */
					realName?: string
					/** 姓名，全模糊匹配包含 */
					realNameLike?: string
					/** 姓名，不等于 */
					realNameNe?: string
					/** 姓名，全模糊匹配不包含 */
					realNameNotLike?: string
					/** 性别，0：男，1：女，等于 */
					sex?: number
					/** 性别，0：男，1：女，不等于 */
					sexNe?: number
					/** 每页条数 */
					size?: number
					/** 状态，10：在职，20：离职，等于 */
					status?: number
					/** 状态，10：在职，20：离职，不等于 */
					statusNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，大于等于 */
					updateTimeGe?: string
					/** 更新时间，小于等于 */
					updateTimeLe?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
					/** 用户表更新时间，大于等于 */
					userUpdateTimeGe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.OrganizationStaffResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /organizationStaff/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.OrganizationStaffRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /organizationStaff/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.OrganizationStaffResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /organizationStaff/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * Organization Staff Facade Impl
		 */
		export namespace organizationStaffFacadeImpl {
			/**
			 * getStaffAccountList
			 * /organizationStaff/getStaffAccountList
			 */
			export namespace getStaffAccountList {
				export class Params {
					/** 主体编号，等于 */
					bodyNumber?: string
					/** 主体编号，全模糊匹配包含 */
					bodyNumberLike?: string
					/** 主体编号，不等于 */
					bodyNumberNe?: string
					/** 主体编号，全模糊匹配不包含 */
					bodyNumberNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，大于等于 */
					createTimeGe?: string
					/** 创建时间，小于等于 */
					createTimeLe?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 离职时间，等于 */
					departureTime?: string
					/** 离职时间，大于等于 */
					departureTimeGe?: string
					/** 离职时间，小于等于 */
					departureTimeLe?: string
					/** 离职时间，不等于 */
					departureTimeNe?: string
					/** 企业邮箱，等于 */
					email?: string
					/** 企业邮箱，全模糊匹配包含 */
					emailLike?: string
					/** 企业邮箱，不等于 */
					emailNe?: string
					/** 企业邮箱，全模糊匹配不包含 */
					emailNotLike?: string
					/** 入职时间，等于 */
					entryTime?: string
					/** 入职时间，大于等于 */
					entryTimeGe?: string
					/** 入职时间，小于等于 */
					entryTimeLe?: string
					/** 入职时间，不等于 */
					entryTimeNe?: string
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 工号，等于 */
					jobNo?: string
					/** 工号，全模糊匹配包含 */
					jobNoLike?: string
					/** 工号，不等于 */
					jobNoNe?: string
					/** 工号，全模糊匹配不包含 */
					jobNoNotLike?: string
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 是否主管，0：不是，1：是，等于 */
					manager?: number
					/** 是否主管，0：不是，1：是，不等于 */
					managerNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 一级组织架构id，部门id，等于 */
					organizationDeptId?: number
					/** 组织架构id，等于 */
					organizationId?: number
					/** 组织架构id，不等于 */
					organizationIdNe?: number
					/** 手机号码，等于 */
					phone?: string
					/** 手机号码，全模糊匹配包含 */
					phoneLike?: string
					/** 手机号码，不等于 */
					phoneNe?: string
					/** 手机号码，全模糊匹配不包含 */
					phoneNotLike?: string
					/** 岗位id，等于 */
					postId?: number
					/** 岗位id，不等于 */
					postIdNe?: number
					/** 职级id，等于 */
					rankId?: number
					/** 职级id，不等于 */
					rankIdNe?: number
					/** 姓名，等于 */
					realName?: string
					/** 姓名，全模糊匹配包含 */
					realNameLike?: string
					/** 姓名，不等于 */
					realNameNe?: string
					/** 姓名，全模糊匹配不包含 */
					realNameNotLike?: string
					/** 性别，0：男，1：女，等于 */
					sex?: number
					/** 性别，0：男，1：女，不等于 */
					sexNe?: number
					/** 状态，10：在职，20：离职，等于 */
					status?: number
					/** 状态，10：在职，20：离职，不等于 */
					statusNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，大于等于 */
					updateTimeGe?: string
					/** 更新时间，小于等于 */
					updateTimeLe?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
					/** 用户表更新时间，大于等于 */
					userUpdateTimeGe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.StaffAccountResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 菜单管理控制器
		 */
		export namespace sysMenu {
			/**
			 * 新增
			 * /sysMenu/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysMenuRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取菜单树形列表
			 * /sysMenu/getMenuList
			 */
			export namespace getMenuList {
				export class Params {
					/** code */
					code?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.SysMenuResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysMenu/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 所属系统，等于 */
					appName?: string
					/** 菜单编码，等于 */
					code?: string
					/** 菜单编码，全模糊匹配包含 */
					codeLike?: string
					/** 菜单编码，不等于 */
					codeNe?: string
					/** 菜单编码，全模糊匹配不包含 */
					codeNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** 功能描述，等于 */
					description?: string
					/** 功能描述，全模糊匹配包含 */
					descriptionLike?: string
					/** 功能描述，不等于 */
					descriptionNe?: string
					/** 功能描述，全模糊匹配不包含 */
					descriptionNotLike?: string
					/** 是否启用，0：否，1：是，等于 */
					enable?: number
					/** 是否启用，0：否，1：是，不等于 */
					enableNe?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 是否在导航栏显示，0：否，1：是，等于 */
					ifHidden?: number
					/** 是否在导航栏显示，0：否，1：是，不等于 */
					ifHiddenNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 菜单名称，等于 */
					name?: string
					/** 菜单名称，全模糊匹配包含 */
					nameLike?: string
					/** 菜单名称，不等于 */
					nameNe?: string
					/** 菜单名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 父菜单编码，等于 */
					parentCode?: string
					/** 父菜单编码，全模糊匹配包含 */
					parentCodeLike?: string
					/** 父菜单编码，不等于 */
					parentCodeNe?: string
					/** 父菜单编码，全模糊匹配不包含 */
					parentCodeNotLike?: string
					/** 菜单url，等于 */
					resUrl?: string
					/** 菜单url，全模糊匹配包含 */
					resUrlLike?: string
					/** 菜单url，不等于 */
					resUrlNe?: string
					/** 菜单url，全模糊匹配不包含 */
					resUrlNotLike?: string
					/** 路由别名，等于 */
					routeAlias?: string
					/** 路由别名，全模糊匹配包含 */
					routeAliasLike?: string
					/** 路由别名，不等于 */
					routeAliasNe?: string
					/** 路由别名，全模糊匹配不包含 */
					routeAliasNotLike?: string
					/** 每页条数 */
					size?: number
					/** 排序，等于 */
					sort?: number
					/** 排序，不等于 */
					sortNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.IPage<defs.ucenter.SysMenuResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取用户菜单列表
			 * /sysMenu/source/{userNo}
			 */
			export namespace getByUserNo {
				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.SysMenuResponseDto>>
				export function request(userNo: string, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysMenu/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysMenuRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysMenu/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 菜单资源权限控制器
		 */
		export namespace sysMenuResource {
			/**
			 * 新增
			 * /sysMenuResource/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysMenuResourceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 查询列表
			 * /sysMenuResource/selectList
			 */
			export namespace selectList {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 菜单编码，等于 */
					menuCode?: string
					/** 菜单编码，全模糊匹配包含 */
					menuCodeLike?: string
					/** 菜单编码，不等于 */
					menuCodeNe?: string
					/** 菜单编码，全模糊匹配不包含 */
					menuCodeNotLike?: string
					/** 资源名称，等于 */
					name?: string
					/** 资源名称，全模糊匹配包含 */
					nameLike?: string
					/** 资源名称，不等于 */
					nameNe?: string
					/** 资源名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 描述，等于 */
					remark?: string
					/** 描述，全模糊匹配包含 */
					remarkLike?: string
					/** 描述，不等于 */
					remarkNe?: string
					/** 描述，全模糊匹配不包含 */
					remarkNotLike?: string
					/** url，等于 */
					resUrl?: string
					/** url，全模糊匹配包含 */
					resUrlLike?: string
					/** url，不等于 */
					resUrlNe?: string
					/** url，全模糊匹配不包含 */
					resUrlNotLike?: string
					/** 排序，等于 */
					sort?: number
					/** 排序，不等于 */
					sortNe?: number
					/** 类型 1:按钮 5:资源 10:资源按钮，等于 */
					type?: number
					/** 类型 1:按钮 5:资源 10:资源按钮，不等于 */
					typeNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.SysMenuResourceResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysMenuResource/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 菜单编码，等于 */
					menuCode?: string
					/** 菜单编码，全模糊匹配包含 */
					menuCodeLike?: string
					/** 菜单编码，不等于 */
					menuCodeNe?: string
					/** 菜单编码，全模糊匹配不包含 */
					menuCodeNotLike?: string
					/** 资源名称，等于 */
					name?: string
					/** 资源名称，全模糊匹配包含 */
					nameLike?: string
					/** 资源名称，不等于 */
					nameNe?: string
					/** 资源名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 描述，等于 */
					remark?: string
					/** 描述，全模糊匹配包含 */
					remarkLike?: string
					/** 描述，不等于 */
					remarkNe?: string
					/** 描述，全模糊匹配不包含 */
					remarkNotLike?: string
					/** url，等于 */
					resUrl?: string
					/** url，全模糊匹配包含 */
					resUrlLike?: string
					/** url，不等于 */
					resUrlNe?: string
					/** url，全模糊匹配不包含 */
					resUrlNotLike?: string
					/** 每页条数 */
					size?: number
					/** 排序，等于 */
					sort?: number
					/** 排序，不等于 */
					sortNe?: number
					/** 类型 1:按钮 5:资源 10:资源按钮，等于 */
					type?: number
					/** 类型 1:按钮 5:资源 10:资源按钮，不等于 */
					typeNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysMenuResourceResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysMenuResource/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysMenuResourceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysMenuResource/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysMenuResourceResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysMenuResource/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 编号生成控制器
		 */
		export namespace sysNumStep {
			/**
			 * 新增
			 * /sysNumStep/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysNumStepRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 缓存刷新
			 * /sysNumStep/initCache
			 */
			export namespace initCache {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysNumStep/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 开始数字,默认1，等于 */
					beginNum?: number
					/** 开始数字,默认1，不等于 */
					beginNumNe?: number
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久，等于 */
					cycle?: number
					/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久，不等于 */
					cycleNe?: number
					/** 日期格式,支持date的格式，等于 */
					dateStr?: string
					/** 日期格式,支持date的格式，全模糊匹配包含 */
					dateStrLike?: string
					/** 日期格式,支持date的格式，不等于 */
					dateStrNe?: string
					/** 日期格式,支持date的格式，全模糊匹配不包含 */
					dateStrNotLike?: string
					/** 超出异常处理 0:截取 1:抛出异常，等于 */
					exceedFlag?: number
					/** 超出异常处理 0:截取 1:抛出异常，不等于 */
					exceedFlagNe?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 标签，在系统下唯一，等于 */
					label?: string
					/** 标签，在系统下唯一，全模糊匹配包含 */
					labelLike?: string
					/** 标签，在系统下唯一，不等于 */
					labelNe?: string
					/** 标签，在系统下唯一，全模糊匹配不包含 */
					labelNotLike?: string
					/** 长度，算上前缀、后缀，等于 */
					lengthSize?: number
					/** 长度，算上前缀、后缀，不等于 */
					lengthSizeNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 编号名，等于 */
					numStepName?: string
					/** 编号名，全模糊匹配包含 */
					numStepNameLike?: string
					/** 编号名，不等于 */
					numStepNameNe?: string
					/** 编号名，全模糊匹配不包含 */
					numStepNameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 前缀，等于 */
					prefix?: string
					/** 前缀，全模糊匹配包含 */
					prefixLike?: string
					/** 前缀，不等于 */
					prefixNe?: string
					/** 前缀，全模糊匹配不包含 */
					prefixNotLike?: string
					/** 进制，等于 */
					radix?: number
					/** 进制，不等于 */
					radixNe?: number
					/** 备注，等于 */
					remark?: string
					/** 备注，全模糊匹配包含 */
					remarkLike?: string
					/** 备注，不等于 */
					remarkNe?: string
					/** 备注，全模糊匹配不包含 */
					remarkNotLike?: string
					/** 每页条数 */
					size?: number
					/** 补充字段，等于 */
					spadChar?: string
					/** 补充字段，全模糊匹配包含 */
					spadCharLike?: string
					/** 补充字段，不等于 */
					spadCharNe?: string
					/** 补充字段，全模糊匹配不包含 */
					spadCharNotLike?: string
					/** 补充位置 1:left 2:right，等于 */
					spadPosition?: number
					/** 补充位置 1:left 2:right，不等于 */
					spadPositionNe?: number
					/** 步进，等于 */
					stepNum?: number
					/** 步进，不等于 */
					stepNumNe?: number
					/** 后缀，等于 */
					suffix?: string
					/** 后缀，全模糊匹配包含 */
					suffixLike?: string
					/** 后缀，不等于 */
					suffixNe?: string
					/** 后缀，全模糊匹配不包含 */
					suffixNotLike?: string
					/** 所属系统，默认UC，等于 */
					systemNo?: string
					/** 所属系统，默认UC，全模糊匹配包含 */
					systemNoLike?: string
					/** 所属系统，默认UC，不等于 */
					systemNoNe?: string
					/** 所属系统，默认UC，全模糊匹配不包含 */
					systemNoNotLike?: string
					/** 作用的字段,用作后期数据恢复使用，等于 */
					tableField?: string
					/** 作用的字段,用作后期数据恢复使用，全模糊匹配包含 */
					tableFieldLike?: string
					/** 作用的字段,用作后期数据恢复使用，不等于 */
					tableFieldNe?: string
					/** 作用的字段,用作后期数据恢复使用，全模糊匹配不包含 */
					tableFieldNotLike?: string
					/** 作用的表，等于 */
					tableName?: string
					/** 作用的表，全模糊匹配包含 */
					tableNameLike?: string
					/** 作用的表，不等于 */
					tableNameNe?: string
					/** 作用的表，全模糊匹配不包含 */
					tableNameNotLike?: string
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysNumStepResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysNumStep/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysNumStepRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysNumStep/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysNumStepResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysNumStep/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 全局参数设置控制器
		 */
		export namespace sysProperties {
			/**
			 * 新增
			 * /sysProperties/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysPropertiesRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysProperties/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** key，等于 */
					key?: string
					/** key，全模糊匹配包含 */
					keyLike?: string
					/** key，不等于 */
					keyNe?: string
					/** key，全模糊匹配不包含 */
					keyNotLike?: string
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 名称，等于 */
					name?: string
					/** 名称，全模糊匹配包含 */
					nameLike?: string
					/** 名称，不等于 */
					nameNe?: string
					/** 名称，全模糊匹配不包含 */
					nameNotLike?: string
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 备注，等于 */
					remark?: string
					/** 备注，全模糊匹配包含 */
					remarkLike?: string
					/** 备注，不等于 */
					remarkNe?: string
					/** 备注，全模糊匹配不包含 */
					remarkNotLike?: string
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** value，等于 */
					value?: string
					/** value，全模糊匹配包含 */
					valueLike?: string
					/** value，不等于 */
					valueNe?: string
					/** value，全模糊匹配不包含 */
					valueNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysPropertiesResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysProperties/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysPropertiesRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysProperties/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysPropertiesResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysProperties/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 角色管理控制器
		 */
		export namespace sysRole {
			/**
			 * 新增
			 * /sysRole/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysRoleRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysRole/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 角色描述，等于 */
					roleDesc?: string
					/** 角色描述，全模糊匹配包含 */
					roleDescLike?: string
					/** 角色描述，不等于 */
					roleDescNe?: string
					/** 角色描述，全模糊匹配不包含 */
					roleDescNotLike?: string
					/** 角色名称，等于 */
					roleName?: string
					/** 角色名称，全模糊匹配包含 */
					roleNameLike?: string
					/** 角色名称，不等于 */
					roleNameNe?: string
					/** 角色名称，全模糊匹配不包含 */
					roleNameNotLike?: string
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.IPage<defs.ucenter.SysRoleResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysRole/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysRoleRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysRole/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysRoleResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysRole/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 角色-数据权限控制器
		 */
		export namespace sysRoleData {
			/**
			 * 根据roleId查询数据权限列表
			 * /sysRoleData/getDatasByRoleId/{roleId}
			 */
			export namespace getDatasByRoleId {
				export type Response = defs.ucenter.ResponseDto<Array<defs.ucenter.SysDataResponseDto>>
				export function request(roleId: number, options?: any): Promise<Response>
			}

			/**
			 * 获取角色登录首页
			 * /sysRoleData/getRoleHomePage/{roleId}
			 */
			export namespace getRoleHomePage {
				export type Response = defs.ucenter.ResponseDto<defs.ucenter.SysDataResponseDto>
				export function request(roleId: number, options?: any): Promise<Response>
			}

			/**
			 * 配置角色数据权限
			 * /sysRoleData/setRoleDataResource
			 */
			export namespace setRoleDataResource {
				export type Response = defs.ucenter.ResponseDto
				export function request(body: defs.ucenter.SysRoleDataRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 设置角色登录首页
			 * /sysRoleData/setRoleHomePage
			 */
			export namespace setRoleHomePage {
				export type Response = defs.ucenter.ResponseDto
				export function request(body: defs.ucenter.SysRoleDataRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 角色-菜单管理控制器
		 */
		export namespace sysRoleMenu {
			/**
			 * 根据roleId查询角色的菜单列表
			 * /sysRoleMenu/getMenus/{roleId}
			 */
			export namespace getMenuListByRoleId {
				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.RoleMenuListResponseDto>>
				export function request(roleId: number, options?: any): Promise<Response>
			}

			/**
			 * 配置角色菜单权限
			 * /sysRoleMenu/setRoleMenuResource/{roleId}
			 */
			export namespace setRoleMenuResource {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(
					roleId: number,
					body: defs.ucenter.RoleMenuResourceRequestDto,
					options?: any
				): Promise<Response>
			}
		}

		/**
		 * 角色-资源管理控制器
		 */
		export namespace sysRoleResource {
			/**
			 * 新增
			 * /sysRoleResource/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysRoleResourceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysRoleResource/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 资源id，等于 */
					resourceId?: number
					/** 资源id，不等于 */
					resourceIdNe?: number
					/** 角色id，等于 */
					roleId?: number
					/** 角色id，不等于 */
					roleIdNe?: number
					/** 每页条数 */
					size?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysRoleResourceResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysRoleResource/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysRoleResourceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysRoleResource/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysRoleResourceResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysRoleResource/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户管理控制器
		 */
		export namespace sysUser {
			/**
			 * 创建用户
			 * /sysUser/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取用户信息
			 * /sysUser/getByUserNo
			 */
			export namespace getByUserNo {
				export class Params {
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysUserResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 批量重置用户密码
			 * /sysUser/resetUserPassword
			 */
			export namespace resetUserPassword {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: Array<string>, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysUser/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** 用户邮箱，等于 */
					email?: string
					/** 用户邮箱，全模糊匹配包含 */
					emailLike?: string
					/** 用户邮箱，不等于 */
					emailNe?: string
					/** 用户邮箱，全模糊匹配不包含 */
					emailNotLike?: string
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 用户手机号码，等于 */
					phone?: string
					/** 用户手机号码，全模糊匹配包含 */
					phoneLike?: string
					/** 用户手机号码，不等于 */
					phoneNe?: string
					/** 用户手机号码，全模糊匹配不包含 */
					phoneNotLike?: string
					/** 每页条数 */
					size?: number
					/** 状态，0：禁用，1：启用，等于 */
					status?: number
					/** 状态，0：禁用，1：启用，不等于 */
					statusNe?: number
					/** 类型，10：内部，20：外部，等于 */
					type?: number
					/** 类型，10：内部，20：外部，不等于 */
					typeNe?: number
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户姓名，等于 */
					userName?: string
					/** 用户姓名，全模糊匹配包含 */
					userNameLike?: string
					/** 用户姓名，不等于 */
					userNameNe?: string
					/** 用户姓名，全模糊匹配不包含 */
					userNameNotLike?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.IPage<defs.ucenter.SysUserResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改用户信息
			 * /sysUser/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 修改用户密码
			 * /sysUser/update/password
			 */
			export namespace setUserPassword {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.UserPasswordRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysUser/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysUserResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户-数据权限控制器
		 */
		export namespace sysUserData {
			/**
			 * 根据userNo查询数据权限
			 * /sysUserData/getDatasByUserNo/{userNo}
			 */
			export namespace getDatasByUserNo {
				export type Response = defs.ucenter.ResponseDto<Array<defs.ucenter.SysDataResponseDto>>
				export function request(userNo: string, options?: any): Promise<Response>
			}

			/**
			 * 获取用户登录首页
			 * /sysUserData/getUserHomePage/{userNo}
			 */
			export namespace getUserHomePage {
				export type Response = defs.ucenter.ResponseDto<defs.ucenter.SysDataResponseDto>
				export function request(userNo: string, options?: any): Promise<Response>
			}

			/**
			 * 配置用户数据权限
			 * /sysUserData/setUserDataResource
			 */
			export namespace setUserDataResource {
				export type Response = defs.ucenter.ResponseDto
				export function request(body: defs.ucenter.SysUserDataRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 设置用户登录首页
			 * /sysUserData/setUserHomePage
			 */
			export namespace setUserHomePage {
				export type Response = defs.ucenter.ResponseDto
				export function request(body: defs.ucenter.SysUserDataRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户登录控制器
		 */
		export namespace sysUserLogin {
			/**
			 * 登录
			 * /sys/user/login/login
			 */
			export namespace login {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.LoginResponseDto>
				export function request(body: defs.ucenter.LoginRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 登录检查，请求ticket
			 * /sys/user/login/loginCheck
			 */
			export namespace loginCheck {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.LoginCheckResponseDto>
				export function request(body: defs.ucenter.LoginCheckRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 登出
			 * /sys/user/login/logout
			 */
			export namespace logout {
				export class Params {
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 检查ticket有效性
			 * /sys/user/login/ticketCheck
			 */
			export namespace ticketCheck {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysUserResponseDto>
				export function request(body: defs.ucenter.TicketCheckRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 微信登录认证
			 * /sys/user/login/wechat
			 */
			export namespace wxlogin {
				export class Params {
					/** 授权code */
					code: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.LoginResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 关联微信账号
			 * /sys/user/login/wechat/bind
			 */
			export namespace wxBind {
				export class Params {
					/** 授权code */
					code: string
					/** 自定义参数（用户编号） */
					state: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.MediaSocialModel>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 解绑微信账号
			 * /sys/user/login/wechat/unbind
			 */
			export namespace wxUnbind {
				export class Params {
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户登录日志控制器
		 */
		export namespace sysUserLoginLog {
			/**
			 * 新增
			 * /sysUserLoginLog/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserLoginLogRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysUserLoginLog/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** 客户端ip，等于 */
					clientIp?: string
					/** 客户端ip，全模糊匹配包含 */
					clientIpLike?: string
					/** 客户端ip，不等于 */
					clientIpNe?: string
					/** 客户端ip，全模糊匹配不包含 */
					clientIpNotLike?: string
					/** 客户端类型，10：电脑，20：手机，等于 */
					clientType?: number
					/** 客户端类型，10：电脑，20：手机，不等于 */
					clientTypeNe?: number
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 操作类型，10:登录，20:登出，等于 */
					operationType?: number
					/** 操作类型，10:登录，20:登出，不等于 */
					operationTypeNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 系统编号，等于 */
					systemNo?: string
					/** 系统编号，全模糊匹配包含 */
					systemNoLike?: string
					/** 系统编号，不等于 */
					systemNoNe?: string
					/** 系统编号，全模糊匹配不包含 */
					systemNoNotLike?: string
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户姓名，等于 */
					userName?: string
					/** 用户姓名，全模糊匹配包含 */
					userNameLike?: string
					/** 用户姓名，不等于 */
					userNameNe?: string
					/** 用户姓名，全模糊匹配不包含 */
					userNameNotLike?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysUserLoginLogResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysUserLoginLog/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserLoginLogRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysUserLoginLog/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysUserLoginLogResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysUserLoginLog/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户-角色关联控制器
		 */
		export namespace sysUserRole {
			/**
			 * 获取用户所属的角色列表
			 * /sysUserRole/getRoleByUserNo
			 */
			export namespace getRoleByUserNo {
				export class Params {
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<Array<defs.ucenter.SysRoleResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取角色对应的用户列表
			 * /sysUserRole/getUserList
			 */
			export namespace getUserListByRoleId {
				export class Params {
					/** 页码 */
					current?: number
					/** 角色id */
					roleId: number
					/** 每页条数 */
					size?: number
				}

				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.IPage<defs.ucenter.SysUserResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 批量设置用户角色
			 * /sysUserRole/setUserRoleBatch
			 */
			export namespace setUserRoleBatch {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.UserRoleSetBatchRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户-Tableau关联控制器
		 */
		export namespace sysUserTableau {
			/**
			 * 获取用户关联的Tableau信息
			 * /sysUserTableau/getTableauByUserNo
			 */
			export namespace getTableauByUserNo {
				export class Params {
					/** 用户编号 */
					userNo: string
				}

				export type Response = defs.ucenter.ResponseDto<defs.ucenter.SysTableauResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取视图
			 * /sysUserTableau/getTableauViewByWorkbookId
			 */
			export namespace getTableauViewByWorkbookId {
				export class Params {
					/** siteId */
					siteId: string
					/** token */
					token: string
					/** 工作簿ID */
					workbookId: string
				}

				export type Response = defs.ucenter.ResponseDto<Array<defs.ucenter.SysTableauViewResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取工作簿
			 * /sysUserTableau/getTableauWorkbook
			 */
			export namespace getTableauWorkbook {
				export class Params {
					/** 页码 */
					pageNumber?: number
					/** 每页条数 */
					pageSize?: number
					/** siteId */
					siteId: string
					/** token */
					token: string
				}

				export type Response = defs.ucenter.ResponseDto<defs.ucenter.IPage<defs.ucenter.SysTableauWorkbookResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 设置用户关联Tableau信息
			 * /sysUserTableau/setTableauInfo
			 */
			export namespace setTableauInfo {
				export type Response = defs.ucenter.ResponseDto
				export function request(body: defs.ucenter.SysUserTableauRequestDto, options?: any): Promise<Response>
			}

			/**
			 * Tableau登录
			 * /sysUserTableau/tableauLogin
			 */
			export namespace tableauLogin {
				export type Response = defs.ucenter.ResponseDto<defs.ucenter.SysTableauResponseDto>
				export function request(body: defs.ucenter.SysUserTableauRequestDto, options?: any): Promise<Response>
			}

			/**
			 * tableauTrust
			 * /sysUserTableau/tableauTrust/{userNo}
			 */
			export namespace tableauTrust {
				export type Response = defs.ucenter.ResponseDto<string>
				export function request(userNo: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 用户授权凭证控制器
		 */
		export namespace sysUserToken {
			/**
			 * 新增
			 * /sysUserToken/add
			 */
			export namespace add {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserTokenRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 分页查询列表
			 * /sysUserToken/selectPage
			 */
			export namespace selectPage {
				export class Params {
					/** token，等于 */
					accessToken?: string
					/** token，全模糊匹配包含 */
					accessTokenLike?: string
					/** token，不等于 */
					accessTokenNe?: string
					/** token，全模糊匹配不包含 */
					accessTokenNotLike?: string
					/** 创建人，等于 */
					createBy?: string
					/** 创建人，全模糊匹配包含 */
					createByLike?: string
					/** 创建人，不等于 */
					createByNe?: string
					/** 创建人，全模糊匹配不包含 */
					createByNotLike?: string
					/** 创建时间，等于 */
					createTime?: string
					/** 创建时间，不等于 */
					createTimeNe?: string
					/** 页码 */
					current?: number
					/** id，等于 */
					id?: number
					/** id，不等于 */
					idNe?: number
					/** 乐观锁，等于 */
					lockVersion?: number
					/** 乐观锁，不等于 */
					lockVersionNe?: number
					/** 排序，如id|desc,name|asc */
					orderBy?: string
					/** 每页条数 */
					size?: number
					/** 过期时间，等于 */
					tokenExpire?: string
					/** 过期时间，不等于 */
					tokenExpireNe?: string
					/** 更新人，等于 */
					updateBy?: string
					/** 更新人，全模糊匹配包含 */
					updateByLike?: string
					/** 更新人，不等于 */
					updateByNe?: string
					/** 更新人，全模糊匹配不包含 */
					updateByNotLike?: string
					/** 更新时间，等于 */
					updateTime?: string
					/** 更新时间，不等于 */
					updateTimeNe?: string
					/** 用户id，等于 */
					userId?: number
					/** 用户id，不等于 */
					userIdNe?: number
					/** 用户姓名，等于 */
					userName?: string
					/** 用户姓名，全模糊匹配包含 */
					userNameLike?: string
					/** 用户姓名，不等于 */
					userNameNe?: string
					/** 用户姓名，全模糊匹配不包含 */
					userNameNotLike?: string
					/** 用户编号，等于 */
					userNo?: string
					/** 用户编号，全模糊匹配包含 */
					userNoLike?: string
					/** 用户编号，不等于 */
					userNoNe?: string
					/** 用户编号，全模糊匹配不包含 */
					userNoNotLike?: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<
					defs.ucenter.IPage<defs.ucenter.SysUserTokenResponseDto>
				>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /sysUserToken/update
			 */
			export namespace modify {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(body: defs.ucenter.SysUserTokenRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取详情
			 * /sysUserToken/{id}
			 */
			export namespace getById {
				export type Response = defs.ucenter.BaseResultResponseDto<defs.ucenter.SysUserTokenResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 软删除
			 * /sysUserToken/{id}
			 */
			export namespace deleteById {
				export type Response = defs.ucenter.BaseResultResponseDto
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * User Facade Impl
		 */
		export namespace userFacadeImpl {
			/**
			 * getRoleByUserCode
			 * /user/findRoleByUserCode
			 */
			export namespace getRoleByUserCode {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.ucenter.ResponseDto<Array<defs.ucenter.SysRoleResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * getUserListByRoleId
			 * /user/findUserByRoleId
			 */
			export namespace getUserListByRoleId {
				export class Params {
					/** pageNumber */
					pageNumber: number
					/** pageSize */
					pageSize: number
					/** roleId */
					roleId: number
				}

				export type Response = defs.ucenter.ResponseDto<Array<defs.ucenter.SysUserResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * findUserByUserCode
			 * /user/findUserByUserCode
			 */
			export namespace findUserByUserCode {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.ucenter.ResponseDto<defs.ucenter.SysUserResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * getUserByCode
			 * /user/userByCode
			 */
			export namespace getUserByCode {
				export class Params {
					/** code */
					code: string
				}

				export type Response = defs.ucenter.ResponseDto<defs.ucenter.UserDto>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 微信开放平台控制器
		 */
		export namespace wechatOpen {
			/**
			 * 获取微信绑定二维码
			 * /wechat/open/bindScan
			 */
			export namespace bindScan {
				export class Params {
					/** redirect */
					redirect: string
					/** userNo */
					userNo: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<string>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取微信登陆二维码
			 * /wechat/open/loginScan
			 */
			export namespace loginScan {
				export class Params {
					/** redirect */
					redirect: string
				}

				export type Response = defs.ucenter.BaseResultResponseDto<string>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}
	}
}
