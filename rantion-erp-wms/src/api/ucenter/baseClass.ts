class BaseResultResponseDto {
	/** 状态码 */
	code = ''

	/** 返回数据 */
	data = new IPage()

	/** 消息 */
	msg = ''

	/** 原数据，测试使用 */
	originData = undefined

	/** 结果状态是否成功，false:服务器运行错误 */
	success = false

	/** 返回数据total */
	total = undefined
}

class IPage {
	/** current */
	current = undefined

	/** hitCount */
	hitCount = false

	/** pages */
	pages = undefined

	/** records */
	records = []

	/** searchCount */
	searchCount = false

	/** size */
	size = undefined

	/** total */
	total = undefined
}

class LoginCheckRequestDto {
	/** sso重定向地址 */
	redirectUrl = ''

	/** 系统编号 */
	systemNo = ''

	/** 用户编号 */
	userNo = ''
}

class LoginCheckResponseDto {
	/** sso重定向地址 */
	redirectUrl = ''

	/** 系统编号 */
	systemNo = ''

	/** ticket票据 */
	ticket = ''
}

class LoginRequestDto {
	/** 密码 */
	password = ''

	/** sso重定向地址 */
	redirectUrl = ''

	/** 用户名 */
	userName = ''
}

class LoginResponseDto {
	/** accessToken */
	accessToken = ''

	/** 过期时间 */
	tokenExpire = ''

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class MainBodyRequestDto {
	/** 编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''
}

class MainBodyResponseDto {
	/** 编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class MediaSocialModel {
	/** createBy */
	createBy = ''

	/** createTime */
	createTime = ''

	/** deleted */
	deleted = undefined

	/** id */
	id = undefined

	/** lockVersion */
	lockVersion = undefined

	/** platformUserInfo */
	platformUserInfo = ''

	/** platformUserNo */
	platformUserNo = ''

	/** type */
	type = undefined

	/** updateBy */
	updateBy = ''

	/** updateTime */
	updateTime = ''

	/** userNo */
	userNo = ''
}

class MediaSocialRequestDto {
	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 第三方平台用户信息，json格式保存 */
	platformUserInfo = ''

	/** 平台用户编号 */
	platformUserNo = ''

	/** 类型，10：wechat，20：qq */
	type = undefined

	/** 用户编号 */
	userNo = ''
}

class MediaSocialResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 第三方平台用户信息，json格式保存 */
	platformUserInfo = ''

	/** 平台用户编号 */
	platformUserNo = ''

	/** 类型，10：wechat，20：qq */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户编号 */
	userNo = ''
}

class OrganizationLevelRequestDto {
	/** 主体编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 级别，L1 */
	level = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''
}

class OrganizationLevelResponseDto {
	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 级别，L1 */
	level = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class OrganizationPostRelationRequestDto {
	/** 是否到岗，0：未到，1：已到 */
	arrived = undefined

	/** 主体编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 是否主管，0：不是，1：是 */
	manager = undefined

	/** 组织架构id */
	organizationId = undefined

	/** 未入职计划职级等级，JSON格式 */
	planRank = ''

	/** 岗位id */
	postId = undefined

	/** 岗位名称 */
	postName = ''

	/** 职级id */
	rankId = undefined

	/** 职级等级，如1，2 */
	rankLevel = undefined

	/** 职级类型：E，M，P，B */
	rankType = ''

	/** 员工姓名 */
	realName = ''

	/** 岗位类型，10：全职，20：代理，30：兼职 */
	type = undefined

	/** 用户编号 */
	userNo = ''
}

class OrganizationPostRelationResponseDto {
	/** 是否到岗，0：未到，1：已到 */
	arrived = undefined

	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 是否主管，0：不是，1：是 */
	manager = undefined

	/** 组织架构id */
	organizationId = undefined

	/** 未入职计划职级等级，JSON格式 */
	planRank = ''

	/** 岗位id */
	postId = undefined

	/** 岗位名称 */
	postName = ''

	/** 职级id */
	rankId = undefined

	/** 职级等级，如1，2 */
	rankLevel = undefined

	/** 职级类型：E，M，P，B */
	rankType = ''

	/** 员工姓名 */
	realName = ''

	/** 岗位类型，10：全职，20：代理，30：兼职 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户编号 */
	userNo = ''
}

class OrganizationPostRequestDto {
	/** 主体编号 */
	bodyNumber = ''

	/** 职责说明 */
	duty = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''
}

class OrganizationPostResponseDto {
	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 职责说明 */
	duty = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class OrganizationRankRequestDto {
	/** 主体编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 等级，如1，2 */
	level = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 全称 */
	name = ''

	/** 职级类型：E，M，P，B */
	type = ''
}

class OrganizationRankResponseDto {
	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 等级，如1，2 */
	level = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 全称 */
	name = ''

	/** 职级类型：E，M，P，B */
	type = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class OrganizationRequestDto {
	/** 主体编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 是否隐藏，0：否，1：是 */
	ifHidden = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 组织名称 */
	name = ''

	/** 已到岗人数 */
	numberOfArrived = undefined

	/** 下属人数 */
	numberOfSubordinates = undefined

	/** 级别id */
	organizationLevelId = undefined

	/** 组织架构岗位明细 */
	organizationPostRelation = []

	/** 上级id，0表示顶级 */
	parentId = undefined

	/** 全路径id，格式为1,2 */
	path = ''

	/** 主管用户编号 */
	supervisorUserCode = ''

	/** 主管用户姓名 */
	supervisorUserName = ''
}

class OrganizationResponseDto {
	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 是否隐藏，0：否，1：是 */
	ifHidden = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 组织名称 */
	name = ''

	/** 已到岗人数 */
	numberOfArrived = undefined

	/** 下属人数 */
	numberOfSubordinates = undefined

	/** 级别id */
	organizationLevelId = undefined

	/** 组织架构岗位明细 */
	organizationPostRelation = []

	/** 上级id，0表示顶级 */
	parentId = undefined

	/** 全路径id，格式为1,2 */
	path = ''

	/** 主管用户编号 */
	supervisorUserCode = ''

	/** 主管用户姓名 */
	supervisorUserName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class OrganizationStaffRelationResponseDto {
	/** 主体名称 */
	bodyName = ''

	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 离职时间 */
	departureTime = ''

	/** 企业邮箱 */
	email = ''

	/** 入职时间 */
	entryTime = ''

	/** id */
	id = undefined

	/** 工号 */
	jobNo = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 是否主管，0：不是，1：是 */
	manager = undefined

	/** 一级组织架构id，部门id */
	organizationDeptId = undefined

	/** 组织架构id */
	organizationId = undefined

	/** 手机号码 */
	phone = ''

	/** 岗位id */
	postId = undefined

	/** 职级id */
	rankId = undefined

	/** 姓名 */
	realName = ''

	/** 性别，0：男，1：女 */
	sex = undefined

	/** 状态，10：在职，20：离职 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户编号 */
	userNo = ''
}

class OrganizationStaffRequestDto {
	/** 生日 */
	birthday = ''

	/** 主体编号 */
	bodyNumber = ''

	/** 离职时间 */
	departureTime = ''

	/** 企业邮箱 */
	email = ''

	/** 入职时间 */
	entryTime = ''

	/** id */
	id = undefined

	/** 工号 */
	jobNo = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 是否主管，0：不是，1：是 */
	manager = undefined

	/** 组织架构id */
	organizationId = undefined

	/** 手机号码 */
	phone = ''

	/** 岗位id */
	postId = undefined

	/** 职级id */
	rankId = undefined

	/** 姓名 */
	realName = ''

	/** 性别，0：男，1：女 */
	sex = undefined

	/** 状态，10：在职，20：离职 */
	status = undefined

	/** 用户编号 */
	userNo = ''
}

class OrganizationStaffResponseDto {
	/** 生日 */
	birthday = ''

	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 离职时间 */
	departureTime = ''

	/** 企业邮箱 */
	email = ''

	/** 入职时间 */
	entryTime = ''

	/** id */
	id = undefined

	/** 工号 */
	jobNo = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 是否主管，0：不是，1：是 */
	manager = undefined

	/** 一级组织架构id，部门id */
	organizationDeptId = undefined

	/** 组织架构id */
	organizationId = undefined

	/** 组织架构名称 */
	organizationName = ''

	/** 手机号码 */
	phone = ''

	/** 岗位id */
	postId = undefined

	/** 岗位名称 */
	postName = ''

	/** 职级id */
	rankId = undefined

	/** 职级名称 */
	rankName = ''

	/** 姓名 */
	realName = ''

	/** 性别，0：男，1：女 */
	sex = undefined

	/** 状态，10：在职，20：离职 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户编号 */
	userNo = ''
}

class OrganizationTreeResponseDto {
	/** 主体编号 */
	bodyNumber = ''

	/** id */
	id = undefined

	/** 是否隐藏，0：否，1：是 */
	ifHidden = undefined

	/** 组织名称 */
	name = ''

	/** 已到岗人数 */
	numberOfArrived = undefined

	/** 下属人数 */
	numberOfSubordinates = undefined

	/** 下级组织架构信息 */
	organizationChildList = []

	/** 级别id */
	organizationLevelId = undefined

	/** 组织架构岗位明细 */
	organizationPostRelation = []

	/** 上级id，0表示顶级 */
	parentId = undefined

	/** 全路径id，格式为1,2 */
	path = ''

	/** 主管用户编号 */
	supervisorUserCode = ''

	/** 主管用户姓名 */
	supervisorUserName = ''
}

class ResponseDto {
	/** code */
	code = ''

	/** data */
	data = new UserDto()

	/** failed */
	failed = false

	/** msg */
	msg = ''

	/** success */
	success = false
}

class RoleMenuListResponseDto {
	/** 菜单代码 */
	code = ''

	/** id */
	id = undefined

	/** 菜单名称 */
	name = ''

	/** 菜单资源 */
	roleMenuResourceDtoList = []
}

class RoleMenuResourceRequestDto {
	/** 菜单编号 */
	menuCodeList = []

	/** 资源id */
	resourceIdList = []
}

class RoleMenuResourceResponseDto {
	/** 菜单编号 */
	menuCode = ''

	/** 资源备注 */
	remark = ''

	/** 资源路径 */
	resUrl = ''

	/** 资源Id */
	resourceId = undefined

	/** 资源名称 */
	resourceName = ''

	/** 路由别名 */
	routeAlias = ''

	/** 类型 1:按钮 5:资源 10:资源按钮 */
	type = undefined
}

class StaffAccountResponseDto {
	/** 用户头像 */
	avatar = ''

	/** 主体编号 */
	bodyNumber = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 企业邮箱 */
	email = ''

	/** 工号 */
	jobNo = ''

	/** 部门id */
	organizationDeptId = undefined

	/** 部门名称 */
	organizationDeptName = ''

	/** 手机号码 */
	phone = ''

	/** 岗位id */
	postId = undefined

	/** 岗位名称 */
	postName = ''

	/** 姓名 */
	realName = ''

	/** 性别，0：男，1：女 */
	sex = undefined

	/** 状态，10：在职，20：离职 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class SysMenuRequestDto {
	/** 所属系统资源路径 */
	appEntry = ''

	/** 所属系统 */
	appName = ''

	/** 菜单编码 */
	code = ''

	/** 功能描述 */
	description = ''

	/** 是否启用，0：否，1：是 */
	enable = undefined

	/** id */
	id = undefined

	/** 是否在导航栏显示，0：否，1：是 */
	ifHidden = undefined

	/** 菜单名称 */
	name = ''

	/** 父菜单编码 */
	parentCode = ''

	/** 菜单url */
	resUrl = ''

	/** 路由别名 */
	routeAlias = ''

	/** 排序 */
	sort = undefined
}

class SysMenuResourceRequestDto {
	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 菜单编码 */
	menuCode = ''

	/** 资源名称 */
	name = ''

	/** 描述 */
	remark = ''

	/** url */
	resUrl = ''

	/** 排序 */
	sort = undefined

	/** 类型 1:按钮 5:资源 10:资源按钮 */
	type = undefined
}

class SysMenuResourceResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 菜单编码 */
	menuCode = ''

	/** 资源名称 */
	name = ''

	/** 描述 */
	remark = ''

	/** url */
	resUrl = ''

	/** 排序 */
	sort = undefined

	/** 类型 1:按钮 5:资源 10:资源按钮 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class SysMenuResponseDto {
	/** 所属系统资源路径 */
	appEntry = ''

	/** 所属系统 */
	appName = ''

	/** 子菜单 */
	children = []

	/** 菜单编码 */
	code = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 功能描述 */
	description = ''

	/** 是否启用，0：否，1：是 */
	enable = undefined

	/** id */
	id = undefined

	/** 是否在导航栏显示，0：否，1：是 */
	ifHidden = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 菜单名称 */
	name = ''

	/** 父菜单编码 */
	parentCode = ''

	/** 菜单url */
	resUrl = ''

	/** 菜单资源 */
	roleMenuResourceDtoList = []

	/** 路由别名 */
	routeAlias = ''

	/** 排序 */
	sort = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class SysNumStepRequestDto {
	/** 开始数字,默认1 */
	beginNum = undefined

	/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久 */
	cycle = undefined

	/** 日期格式,支持date的格式 */
	dateStr = ''

	/** 超出异常处理 0:截取 1:抛出异常 */
	exceedFlag = undefined

	/** id */
	id = undefined

	/** 标签，在系统下唯一 */
	label = ''

	/** 长度，算上前缀、后缀 */
	lengthSize = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 编号名 */
	numStepName = ''

	/** 前缀 */
	prefix = ''

	/** 进制 */
	radix = undefined

	/** 备注 */
	remark = ''

	/** 补充字段 */
	spadChar = ''

	/** 补充位置 1:left 2:right */
	spadPosition = undefined

	/** 步进 */
	stepNum = undefined

	/** 后缀 */
	suffix = ''

	/** 所属系统，默认UC */
	systemNo = ''

	/** 作用的字段,用作后期数据恢复使用 */
	tableField = ''

	/** 作用的表 */
	tableName = ''
}

class SysNumStepResponseDto {
	/** 开始数字,默认1 */
	beginNum = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 循环周期 10:天循环 20:月循环 30:年循环 40:永久 */
	cycle = undefined

	/** 日期格式,支持date的格式 */
	dateStr = ''

	/** 超出异常处理 0:截取 1:抛出异常 */
	exceedFlag = undefined

	/** id */
	id = undefined

	/** 标签，在系统下唯一 */
	label = ''

	/** 长度，算上前缀、后缀 */
	lengthSize = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 编号名 */
	numStepName = ''

	/** 前缀 */
	prefix = ''

	/** 进制 */
	radix = undefined

	/** 备注 */
	remark = ''

	/** 补充字段 */
	spadChar = ''

	/** 补充位置 1:left 2:right */
	spadPosition = undefined

	/** 步进 */
	stepNum = undefined

	/** 后缀 */
	suffix = ''

	/** 所属系统，默认UC */
	systemNo = ''

	/** 作用的字段,用作后期数据恢复使用 */
	tableField = ''

	/** 作用的表 */
	tableName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class SysPropertiesRequestDto {
	/** id */
	id = undefined

	/** key */
	key = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''

	/** 备注 */
	remark = ''

	/** value */
	value = ''
}

class SysPropertiesResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** key */
	key = ''

	/** 乐观锁 */
	lockVersion = undefined

	/** 名称 */
	name = ''

	/** 备注 */
	remark = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** value */
	value = ''
}

class SysRoleRequestDto {
	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 角色描述 */
	roleDesc = ''

	/** 角色名称 */
	roleName = ''
}

class SysRoleResourceRequestDto {
	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 资源id */
	resourceId = undefined

	/** 角色id */
	roleId = undefined
}

class SysRoleResourceResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 资源id */
	resourceId = undefined

	/** 角色id */
	roleId = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class SysRoleResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 角色描述 */
	roleDesc = ''

	/** 角色名称 */
	roleName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class SysUserLoginLogRequestDto {
	/** 客户端ip */
	clientIp = ''

	/** 客户端类型，10：电脑，20：手机 */
	clientType = undefined

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 操作类型，10:登录，20:登出 */
	operationType = undefined

	/** 系统编号 */
	systemNo = ''

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class SysUserLoginLogResponseDto {
	/** 客户端ip */
	clientIp = ''

	/** 客户端类型，10：电脑，20：手机 */
	clientType = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 操作类型，10:登录，20:登出 */
	operationType = undefined

	/** 系统编号 */
	systemNo = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class SysUserRequestDto {
	/** 用户头像 */
	avatar = ''

	/** 用户邮箱 */
	email = ''

	/** id */
	id = undefined

	/** 员工档案信息 */
	organizationStaff = new OrganizationStaffRequestDto()

	/** 用户手机号码 */
	phone = ''

	/** 状态，0：禁用，1：启用 */
	status = undefined

	/** 类型，10：内部，20：外部 */
	type = undefined

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class SysUserResponseDto {
	/** 用户头像 */
	avatar = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 用户邮箱 */
	email = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 员工档案信息 */
	organizationStaff = []

	/** 用户手机号码 */
	phone = ''

	/** 状态，0：禁用，1：启用 */
	status = undefined

	/** 类型，10：内部，20：外部 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''

	/** 用户角色分组，1：普通用户，2：普通管理员，3：超级管理员 */
	userRoleType = undefined

	/** 是否绑定微信账号，1：未绑定，2：已绑定 */
	wxBind = undefined
}

class SysUserTokenRequestDto {
	/** token */
	accessToken = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 过期时间 */
	tokenExpire = ''

	/** 用户id */
	userId = undefined

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class SysUserTokenResponseDto {
	/** token */
	accessToken = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 乐观锁 */
	lockVersion = undefined

	/** 过期时间 */
	tokenExpire = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 用户id */
	userId = undefined

	/** 用户姓名 */
	userName = ''

	/** 用户编号 */
	userNo = ''
}

class TicketCheckRequestDto {
	/** ticket票据 */
	ticket = ''
}

class UserDto {
	/** clientCode */
	clientCode = ''

	/** password */
	password = ''

	/** userCode */
	userCode = ''

	/** userId */
	userId = undefined

	/** userName */
	userName = ''
}

class UserPasswordRequestDto {
	/** 用户确认密码 */
	confirmPassword = ''

	/** 用户新密码 */
	newPassword = ''

	/** 用户原密码 */
	originalPassword = ''

	/** 用户编号 */
	userNo = ''
}

class UserRoleSetBatchRequestDto {
	/** 角色id集合 */
	roleIdList = []

	/** 用户编号集合 */
	userNoList = []
}

export const ucenter = {
	BaseResultResponseDto,
	IPage,
	LoginCheckRequestDto,
	LoginCheckResponseDto,
	LoginRequestDto,
	LoginResponseDto,
	MainBodyRequestDto,
	MainBodyResponseDto,
	MediaSocialModel,
	MediaSocialRequestDto,
	MediaSocialResponseDto,
	OrganizationLevelRequestDto,
	OrganizationLevelResponseDto,
	OrganizationPostRelationRequestDto,
	OrganizationPostRelationResponseDto,
	OrganizationPostRequestDto,
	OrganizationPostResponseDto,
	OrganizationRankRequestDto,
	OrganizationRankResponseDto,
	OrganizationRequestDto,
	OrganizationResponseDto,
	OrganizationStaffRelationResponseDto,
	OrganizationStaffRequestDto,
	OrganizationStaffResponseDto,
	OrganizationTreeResponseDto,
	ResponseDto,
	RoleMenuListResponseDto,
	RoleMenuResourceRequestDto,
	RoleMenuResourceResponseDto,
	StaffAccountResponseDto,
	SysMenuRequestDto,
	SysMenuResourceRequestDto,
	SysMenuResourceResponseDto,
	SysMenuResponseDto,
	SysNumStepRequestDto,
	SysNumStepResponseDto,
	SysPropertiesRequestDto,
	SysPropertiesResponseDto,
	SysRoleRequestDto,
	SysRoleResourceRequestDto,
	SysRoleResourceResponseDto,
	SysRoleResponseDto,
	SysUserLoginLogRequestDto,
	SysUserLoginLogResponseDto,
	SysUserRequestDto,
	SysUserResponseDto,
	SysUserTokenRequestDto,
	SysUserTokenResponseDto,
	TicketCheckRequestDto,
	UserDto,
	UserPasswordRequestDto,
	UserRoleSetBatchRequestDto
}
