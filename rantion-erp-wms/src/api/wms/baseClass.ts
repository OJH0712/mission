class AllocationBatchDetailResponseDto {
	/** 调拨单 */
	allocationMasterResponseDtos = []

	/** 调拨批次 */
	batchResponseDto = new AllocationBatchResponseDto()
}

class AllocationBatchResponseDto {
	/** 调拨批次单号 */
	abno = ''

	/** 箱数 */
	boxQty = undefined

	/** centerId */
	centerId = ''

	/** 货柜号 */
	containerNo = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 出库时间 */
	deliveryTime = ''

	/** id */
	id = undefined

	/** 物流渠道 */
	logisticsChannel = ''

	/** 物流渠道名称 */
	logisticsChannelName = ''

	/** 物流商 */
	logisticsProvider = ''

	/** 物流商名称 */
	logisticsProviderName = ''

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType = undefined

	/** 来源仓库编号 */
	sourceWarehouseCode = ''

	/** 来源仓库名称 */
	sourceWarehouseName = ''

	/** 调拨批次状态：10 未扫描，20 已扫描，30 已确认，40 已发运，50 已完成 */
	status = undefined

	/** 目标仓库编号 */
	targetWarehouseCode = ''

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 调拨类型：10 普通调拨，20 FBA调拨 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 体积 */
	volume = undefined

	/** 重量 */
	weight = undefined
}

class AllocationBoxCollectDto {
	/** 调拨单分箱信息 */
	allocationBoxDtos = []

	/** 调拨单SKU信息 */
	allocationDetailDtos = []

	/** 调拨单信息 */
	allocationMasterDto = new AllocationMasterResponseDto()
}

class AllocationBoxDetailRequestDto {
	/** ASIN */
	asin = ''

	/** FNSKU */
	fnsku = ''

	/** MSKU */
	msku = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''
}

class AllocationBoxDetailResponseDto {
	/** ASIN */
	asin = ''

	/** 箱号 */
	boxNo = ''

	/** FNSKU */
	fnsku = ''

	/** MSKU */
	msku = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class AllocationBoxRequestDto {
	/** 调拨单号 */
	aono = ''

	/** 分箱明细 */
	boxDetailDtos = []

	/** 箱号 */
	boxNo = ''

	/** 高度（单位：cm） */
	height = undefined

	/** 长度（单位：cm） */
	length = undefined

	/** 重量 */
	weight = undefined

	/** 宽度（单位：cm） */
	width = undefined
}

class AllocationBoxResponseDto {
	/** 调拨单号 */
	aono = ''

	/** 箱外条码 */
	barcode = ''

	/** 箱号 */
	boxNo = ''

	/** 分箱明细 */
	detailModels = []

	/** 高度（单位：cm） */
	height = undefined

	/** 长度（单位：cm） */
	length = undefined

	/** 重量 */
	weight = undefined

	/** 宽度（单位：cm） */
	width = undefined
}

class AllocationBoxingReportDto {
	/** asin */
	asin = ''

	/** 箱号 */
	boxNo = ''

	/** 总箱数 */
	boxNum = ''

	/** 品牌 */
	brandName = ''

	/** 体积重 */
	chargeWeight = ''

	/** emptyStr */
	emptyStr = ''

	/** 英文标题 */
	englishTitle = ''

	/** 高度 */
	height = undefined

	/** 图片链接 */
	imageUrl = ''

	/** 是否拼箱 */
	isSpellBox = ''

	/** 长度 */
	length = undefined

	/** 物流分组 */
	logisticsGroup = ''

	/** 材质 */
	material = ''

	/** 采购单号 */
	pono = ''

	/** 产品图片 */
	productImageUrl = new ImageEntity()

	/** 产品链接 */
	productLink = ''

	/** 产品标题 */
	productTitle = ''

	/** 采购成本 */
	purchaseCost = undefined

	/** 用途 */
	purpose = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 总体积重 */
	sumChargeWeight = ''

	/** 总数量 */
	sumQty = ''

	/** 总体积 */
	sumVolume = ''

	/** 总重 */
	sumWeight = ''

	/** 体积/箱(m³) */
	volume = ''

	/** 重量 */
	weight = undefined

	/** 宽度 */
	width = undefined
}

class AllocationContainerRequestDto {
	/** 货柜号 */
	containerNo = ''

	/** 货柜容积（L） */
	containerVolume = undefined

	/** 装柜方式：10 整柜，20 散柜 */
	type = undefined
}

class AllocationContainerResponseDto {
	/** 实装率 */
	actualRate = undefined

	/** 箱数 */
	boxQty = undefined

	/** 货柜号 */
	containerNo = ''

	/** 装柜类型：10龙舟整柜，20 捷仕整柜，30 捷仕散柜，40 空运装柜 */
	containerType = undefined

	/** 货柜容积（L） */
	containerVolume = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 实装容积（L） */
	realVolume = undefined

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType = undefined

	/** 来源仓库编号 */
	sourceWarehouseCode = ''

	/** 来源仓库名称 */
	sourceWarehouseName = ''

	/** 目标仓库编号 */
	targetWarehouseCode = ''

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class AllocationContainerResultNsDto {
	/** 货柜号 */
	containerNo = ''

	/** 货柜容积（L） */
	containerVolume = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType = undefined

	/** 来源仓库编号 */
	sourceWarehouseCode = ''

	/** 来源仓库名称 */
	sourceWarehouseName = ''

	/** 目标仓库编号 */
	targetWarehouseCode = ''

	/** 目标仓库名称 */
	targetWarehouseName = ''
}

class AllocationDetailCreateRequestDto {
	/** ASIN */
	asin = ''

	/** 品牌名称 */
	brandName = ''

	/** 产品英文标题 */
	englishTitle = ''

	/** FNSKU */
	fnsku = ''

	/** 物流分组 */
	logisticsGroup = ''

	/** 材质 */
	material = ''

	/** MSKU */
	msku = ''

	/** 采购单号 */
	pono = ''

	/** 产品编号 */
	productCode = ''

	/** 产品高(cm) */
	productHeight = undefined

	/** 图片路径 */
	productImageUrl = ''

	/** 产品长(cm) */
	productLength = undefined

	/** 产品链接 */
	productLink = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 产品重量(g) */
	productWeight = undefined

	/** 产品宽(cm) */
	productWidth = undefined

	/** 采购成本 */
	purchaseCost = undefined

	/** 用途 */
	purpose = ''

	/** 数量 */
	qty = undefined

	/** SKU */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class AllocationDetailResponseDto {
	/** 调拨单号 */
	aono = ''

	/** ASIN */
	asin = ''

	/** 品牌名称 */
	brandName = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 售后邮箱 */
	email = ''

	/** 产品英文标题 */
	englishTitle = ''

	/** FNSKU */
	fnsku = ''

	/** FNSKU标签文件路径 */
	fnskuUrl = ''

	/** id */
	id = undefined

	/** 物流分组 */
	logisticsGroup = ''

	/** 材质 */
	material = ''

	/** MSKU */
	msku = ''

	/** 采购单号 */
	pono = ''

	/** 产品编号 */
	productCode = ''

	/** 产品高(cm) */
	productHeight = undefined

	/** 图片路径 */
	productImageUrl = ''

	/** 产品长(cm) */
	productLength = undefined

	/** 产品链接 */
	productLink = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 产品重量(g) */
	productWeight = undefined

	/** 产品宽(cm) */
	productWidth = undefined

	/** 采购成本 */
	purchaseCost = undefined

	/** 用途 */
	purpose = ''

	/** 数量 */
	qty = undefined

	/** SKU */
	sku = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 变体规格 */
	variants = ''
}

class AllocationMasterBoxDetailResponseDto {
	/** ASIN */
	asin = ''

	/** 箱号 */
	boxNo = ''

	/** 品牌 */
	brandName = ''

	/** 体积重 */
	chargeWeight = undefined

	/** FNSKU */
	fnsku = ''

	/** 高度 */
	height = undefined

	/** 长度 */
	length = undefined

	/** 材质 */
	material = ''

	/** 型号 */
	model = ''

	/** MSKU */
	msku = ''

	/** 用途 */
	purpose = ''

	/** 数量 */
	qty = undefined

	/** 备注 */
	remark = ''

	/** 单个重量 */
	singleWeight = undefined

	/** sku */
	sku = ''

	/** sku名称 */
	skuName = ''

	/** 产品体积 */
	volume = undefined

	/** 抛货率基数 */
	volumeGoodsBase = undefined

	/** 整箱重量 */
	weight = undefined

	/** 宽度 */
	width = undefined
}

class AllocationMasterBoxingReportDto {
	/** 空运模板数据 */
	air = []

	/** aono */
	aono = ''

	/** 总箱数 */
	boxNum = undefined

	/** centerId */
	centerId = ''

	/** 收件人国家 */
	country = ''

	/** 事业部 */
	department = ''

	/** 渠道服务 */
	logisticsChannelName = ''

	/** referenceId */
	referenceId = ''

	/** 海运模板数据 */
	sea = []

	/** shipTo */
	shipTo = ''

	/** shipment */
	shipment = ''

	/** shipmentName */
	shipmentName = ''

	/** 运输方式 */
	shippingType = undefined

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 交易主体名称 */
	tradeCompanyName = ''
}

class AllocationMasterCreateRequestDto {
	/** 地址 */
	address = ''

	/** 调拨单明细 */
	allocationDetailCreateRequestDtos = []

	/** 调拨单号 */
	aono = ''

	/** centerId */
	centerId = ''

	/** 城市 */
	city = ''

	/** 计泡基数 */
	countBubbleBase = undefined

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 申报币种 */
	declareCurrency = ''

	/** 申报价格 */
	declarePrice = undefined

	/** 邮箱地址 */
	email = ''

	/** FBA账号 */
	fbaAccount = ''

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 是否需要物流面单 0:否 1:是 */
	logisticsFlag = undefined

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 站点/市场 */
	marketplaces = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** shipment */
	shipment = ''

	/** shipmentName */
	shipmentName = ''

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路，50 卡车 */
	shippingType = undefined

	/** 来源仓库编号 */
	sourceWarehouseCode = ''

	/** 来源仓库名称 */
	sourceWarehouseName = ''

	/** 目标仓库编号 */
	targetWarehouseCode = ''

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 是否含税 0:否1:是 */
	taxFlag = undefined

	/** 固定电话 */
	telephone = ''

	/** 交易主体编号 */
	tradeCompanyCode = ''

	/** 交易主体名称 */
	tradeCompanyName = ''

	/** 调拨类型：10 普通调拨，20 FBA调拨 */
	type = undefined
}

class AllocationMasterResponseDto {
	/** 调拨批次号 */
	abno = ''

	/** 调拨单号 */
	aono = ''

	/** 箱外标签文件路径 */
	boxLabelPath = ''

	/** 箱数 */
	boxQty = undefined

	/** centerId */
	centerId = ''

	/** 体积重5k */
	chargeWeight5k = undefined

	/** 体积重6k */
	chargeWeight6k = undefined

	/** 货柜号 */
	containerNo = ''

	/** 计泡基数 */
	countBubbleBase = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 申报币种 */
	declareCurrency = ''

	/** 申报价格 */
	declarePrice = undefined

	/** 出库时间 */
	deliveryTime = ''

	/** 出库单号 */
	dono = ''

	/** FBA账号 */
	fbaAccount = ''

	/** id */
	id = undefined

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 是否需要物流面单 0:否 1:是 */
	logisticsFlag = undefined

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 站点/市场 */
	marketplaces = ''

	/** 拣货单号 */
	pickno = ''

	/** 总数量 */
	qty = undefined

	/** referenceId */
	referenceId = ''

	/** 备注 */
	remark = ''

	/** shipment */
	shipment = ''

	/** shipmentName */
	shipmentName = ''

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType = undefined

	/** 店铺信息 */
	shopDepartmentMappingResponseDto = new ShopDepartmentMappingResponseDto()

	/** sku种类数量 */
	skuQty = undefined

	/** 来源仓库编号 */
	sourceWarehouseCode = ''

	/** 来源仓库名称 */
	sourceWarehouseName = ''

	/** 调拨状态：10 未处理，20 已打印，30 已拣货，40 已装箱，50 待发运，60 已发运，70 已完成，80 已取消 */
	status = undefined

	/** 目标仓库编号 */
	targetWarehouseCode = ''

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 是否含税 0:否1:是 */
	taxFlag = undefined

	/** 交易主体编号 */
	tradeCompanyCode = ''

	/** 交易主体名称 */
	tradeCompanyName = ''

	/** 调拨类型：10 普通调拨，20 FBA调拨 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 体积 */
	volume = undefined

	/** 运单号 */
	waybillNo = ''

	/** 重量 */
	weight = undefined
}

class AllocationMasterResultNsDto {
	/** 调拨批次号 */
	abno = ''

	/** 调拨单号 */
	aono = ''

	/** 箱数 */
	boxQty = undefined

	/** 货柜号 */
	containerNo = ''

	/** delivery */
	delivery = false

	/** 发货时间 */
	deliveryTime = ''

	/** 出库单号 */
	dono = ''

	/** 发运失败时SKU集合 */
	skuList = []

	/** 发货SKU库存明细 */
	storageList = []

	/** 体积 */
	volume = undefined

	/** 发货包裹重量 */
	weight = undefined
}

class AllocationMasterUpdateRequestDto {
	/** 调拨单明细 */
	allocationDetailCreateRequestDtos = []

	/** 调拨单号 */
	aono = ''

	/** 修改人 */
	updateBy = ''
}

class AllocationOperationTimeResponseDto {
	/** 调拨单号 */
	aono = ''

	/** 分箱时间 */
	boxTime = ''

	/** 创建拣货单时间 */
	createPickTime = ''

	/** 创建时间 */
	createTime = ''

	/** 发运时间 */
	deliveryTime = ''

	/** 拣货时间 */
	pickTime = ''
}

class BatchUpdateLogisticsWareParamsDto {
	/** 要新增的关系列表 */
	addParams = []

	/** 要删除的关系列表 */
	deleteParams = []
}

class BrandEmailMappingRequestDto {
	/** 品牌 */
	brand = ''

	/** 售后邮箱 */
	email = ''

	/** id */
	id = undefined
}

class BrandEmailMappingResponseDto {
	/** 品牌 */
	brand = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 售后邮箱 */
	email = ''

	/** id */
	id = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class CenterCountyMappingRequestDto {
	/** centerId */
	centerId = ''

	/** 国家简码 */
	countyCode = ''

	/** id */
	id = undefined

	/** shipTo */
	shipTo = ''
}

class CenterCountyMappingResponseDto {
	/** centerId */
	centerId = ''

	/** 国家简码 */
	countyCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** shipTo */
	shipTo = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class CodeAndNameListResponseDto {
	/** code */
	code = ''

	/** id */
	id = undefined

	/** name */
	name = ''
}

class CountBubbleUpdateParamsDto {
	/** 计泡基数 */
	countBubbleBase = undefined
}

class CountyResponseDto {
	/** 编号 */
	code = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 中文名称 */
	name = ''

	/** 英文名称 */
	nameEn = ''

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class DeleteBillRequestDto {
	/** 单号 */
	code = []

	/** 类型 */
	type = undefined
}

class DeliveryNoteExcelDetailRequestDto {
	/** 箱数 */
	boxQty = ''

	/** 装箱数量 */
	boxSumQty = ''

	/** 单箱体积 */
	boxVolume = ''

	/** 是否质检 */
	itemCheck = ''

	/** 采购单号 */
	pono = ''

	/** 产品名称 */
	productName = ''

	/** 出货数量 */
	qty = ''

	/** 纸箱尺寸 */
	size = ''

	/** SKU */
	sku = ''

	/** 总体积 */
	sumVolume = ''

	/** 供应商型号款号（选填） */
	type = ''

	/** 单箱重量 */
	weight = ''
}

class DeliveryNoteExcelRequestDto {
	/** 交货单条码 */
	codeUrl = new ImageEntity()

	/** 交货单明细数据 */
	data = []

	/** 收货地址 */
	deliveryAddress = ''

	/** 送货类别 */
	deliveryCategory = ''

	/** 送货日期 */
	deliveryDate = ''

	/** 送货单号 */
	deliveryNo = ''

	/** 收货单位联系人 */
	deliveryRecipient = ''

	/** 发货方式 */
	deliveryType = ''

	/** 是否包含运费 */
	isContainLogisticsFee = ''

	/** 供货商地址 */
	supplierAddress = ''

	/** 供货商名称 */
	supplierName = ''

	/** 供货商联系人 */
	supplierRecipient = ''

	/** 交易主体 */
	tradeCompany = ''
}

class ImageEntity {
	/** colspan */
	colspan = undefined

	/** data */
	data = ''

	/** height */
	height = undefined

	/** rowspan */
	rowspan = undefined

	/** type */
	type = ''

	/** url */
	url = ''

	/** width */
	width = undefined
}

class InDetailBoxInfoCreateRequestDto {
	/** 高 */
	height = undefined

	/** 长 */
	length = undefined

	/** 宽 */
	width = undefined
}

class InDetailBoxPrintResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 入库单号 */
	iono = ''

	/** 产品标题 */
	productTitle = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 变体规格 */
	variant = ''
}

class InDetailBoxRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 状态 10:已收货 20:已质检 30:已上架 */
	boxStatus = undefined

	/** id */
	id = undefined

	/** 质检数量 */
	inspectionQty = undefined

	/** 质检备注 */
	inspectionRemark = ''

	/** 质检时间 */
	inspectionTime = ''

	/** 入库单号 */
	iono = ''

	/** 数量 */
	qty = undefined

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 不合格数量 */
	unqualifiedQty = undefined

	/** 不合格原因 不合格原因 10:尺寸问题 20:颜色错误 30:款式问题 40:面料问题 50:货物破损 60:货物缺漏 100:其它 */
	unqualifiedReason = ''
}

class InDetailBoxResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 状态 10:已收货 20:已质检 30:已上架 */
	boxStatus = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 质检数量 */
	inspectionQty = undefined

	/** 质检备注 */
	inspectionRemark = ''

	/** 质检时间 */
	inspectionTime = ''

	/** 入库单号 */
	iono = ''

	/** 数量 */
	qty = undefined

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 不合格数量 */
	unqualifiedQty = undefined

	/** 不合格原因 不合格原因 10:尺寸问题 20:颜色错误 30:款式问题 40:面料问题 50:货物破损 60:货物缺漏 100:其它 */
	unqualifiedReason = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class InDetailCreateRequestDto {
	/** 箱子信息 */
	boxInfo = new InDetailBoxInfoCreateRequestDto()

	/** 箱数 */
	boxNum = undefined

	/** 质检类型 10:全检 20:抽检 30:免检 */
	inspectionType = undefined

	/** 计划入库数 */
	planQty = undefined

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 余数 */
	remainderQty = undefined

	/** sku */
	sku = ''

	/** 供应商变体规格 json */
	supplierVariant = ''

	/** 变体规格 json */
	variant = ''
}

class InDetailInspectionResponseDto {
	/** 需质检数 */
	needInspectionQty = undefined

	/** 可质检数 */
	qty = undefined

	/** 质检合格率 */
	qualifiedRate = undefined
}

class InDetailPutOnRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 库位编号 */
	positionCode = ''

	/** 上架数量 */
	qty = undefined

	/** SKU */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InDetailReceivingByMxRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** ID */
	id = undefined

	/** 质检备注 */
	inspectionRemark = ''

	/** 入库单号 */
	iono = ''

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 不合格数量 */
	unqualifiedQty = undefined

	/** 不合格原因 */
	unqualifiedReason = ''
}

class InDetailReceivingRequestDto {
	/** 装箱数量 */
	boxNum = undefined

	/** 每箱数量 */
	perBoxQty = undefined

	/** 实收数量 */
	receivedQty = undefined

	/** 余数 */
	remainderQty = undefined

	/** sku */
	sku = ''
}

class InDetailRecordRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** id */
	id = undefined

	/** 入库单号 */
	iono = ''

	/** 库位编号 */
	positionCode = ''

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InDetailRecordResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 入库单号 */
	iono = ''

	/** 库位编号 */
	positionCode = ''

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class InDetailRecordResultDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 库位编号 */
	positionCode = ''

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InDetailRequestDto {
	/** 箱子信息 */
	boxInfo = ''

	/** 箱数 */
	boxNum = undefined

	/** 抽检需质检数 */
	extractInspectionQty = undefined

	/** 抽检质检次数 */
	extractTimes = undefined

	/** 抽检不合格数 */
	extractUnqualifiedQty = undefined

	/** id */
	id = undefined

	/** 质检数量 */
	inspectionQty = undefined

	/** 质检类型 10:全检 20:抽检 30:免检 */
	inspectionType = undefined

	/** 入库单号 */
	iono = ''

	/** 物流成本单价 */
	logisticsUnitPrice = undefined

	/** 计划入库数 */
	planQty = undefined

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 采购单价 */
	purchaseUnitPrice = undefined

	/** 收货数量 */
	receivedQty = undefined

	/** 余数 */
	remainderQty = undefined

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 供应商变体规格 */
	supplierVariant = ''

	/** 不合格数 */
	unqualifiedQty = undefined

	/** 变体规格 */
	variant = ''
}

class InDetailResponseDto {
	/** 箱子信息 */
	boxInfo = ''

	/** 箱数 */
	boxNum = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 抽检需质检数 */
	extractInspectionQty = undefined

	/** 抽检质检次数 */
	extractTimes = undefined

	/** 抽检不合格数 */
	extractUnqualifiedQty = undefined

	/** id */
	id = undefined

	/** 质检数量 */
	inspectionQty = undefined

	/** 质检类型 10:全检 20:抽检 30:免检 */
	inspectionType = undefined

	/** 入库单号 */
	iono = ''

	/** 物流成本单价 */
	logisticsUnitPrice = undefined

	/** 计划入库数 */
	planQty = undefined

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 采购单价 */
	purchaseUnitPrice = undefined

	/** 收货数量 */
	receivedQty = undefined

	/** 余数 */
	remainderQty = undefined

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 供应商变体规格 */
	supplierVariant = ''

	/** 不合格数 */
	unqualifiedQty = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 变体规格 */
	variant = ''
}

class InDetailResultDto {
	/** sku上架明细 */
	detailRecordList = []

	/** 计划入库数 */
	planQty = undefined

	/** 实收数量 */
	receivedQty = undefined

	/** 上架数量 */
	shelvesQty = undefined

	/** sku */
	sku = ''

	/** 质检不合格数 */
	unqualifiedQty = undefined
}

class InMasterCreateRequestDto {
	/** 箱数 */
	boxNum = undefined

	/** 预计到货时间 */
	estimateTime = ''

	/** 质检类型 10:全检 20:抽检 */
	inspectionType = undefined

	/** 计划入库数量 */
	planQty = undefined

	/** 采购单号 */
	pono = ''

	/** 采购员 */
	purchaser = ''

	/** 备注 */
	remark = ''

	/** 入库SKU明细 */
	skuList = []

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
	sourceType = undefined

	/** 供应商编号 */
	supplierCode = ''

	/** 供应商名称 */
	supplierName = ''

	/** 是否含税 0:否1:是 */
	taxFlag = undefined

	/** 交易主体编号 */
	tradeCompanyCode = ''

	/** 交易主体名称 */
	tradeCompanyName = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''
}

class InMasterInspectionRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 质检备注 */
	inspectionRemark = ''

	/** 入库单号 */
	iono = ''

	/** 不合格数量 */
	unqualifiedQty = undefined

	/** 不合格原因 */
	unqualifiedReason = ''
}

class InMasterInspectionResponseDto {
	/** 入库单SKU装箱信息 */
	inDetailBoxResponseDto = new InDetailBoxResponseDto()

	/** 入库单SKU质检信息 */
	inDetailInspectionResponseDto = new InDetailInspectionResponseDto()

	/** 入库单SKU */
	inDetailResponseDto = new InDetailResponseDto()

	/** 入库单 */
	inMasterResponseDto = new InMasterResponseDto()
}

class InMasterPutOnRequestDto {
	/** 入库单号 */
	iono = ''

	/** 上架明细 */
	putOnDetailList = []
}

class InMasterPutOnResponseDto {
	/** 入库单SKU装箱信息 */
	inDetailBoxResponseDto = []

	/** 入库单SKU */
	inDetailResponseDto = []

	/** 入库单 */
	inMasterResponseDto = new InMasterResponseDto()
}

class InMasterReceivingByMxRequestDto {
	/** 入库收货SKU明细 */
	inDetails = []

	/** 入库单号 */
	iono = ''
}

class InMasterReceivingRequestDto {
	/** 入库收货SKU明细 */
	inDetails = []

	/** 入库单号 */
	iono = ''
}

class InMasterReceivingResponseDto {
	/** 入库单装箱明细 */
	inDetailBoxResponseDtoList = []

	/** 入库单明细 */
	inDetailResponseDtoList = []

	/** 入库单 */
	inMasterResponseDto = new InMasterResponseDto()
}

class InMasterResponseDto {
	/** 箱数 */
	boxNum = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 预计到货时间 */
	estimateTime = ''

	/** id */
	id = undefined

	/** 质检类型 10:全检 20:抽检 30:免检 */
	inspectionType = undefined

	/** 入库单号 */
	iono = ''

	/** 数量(计划入库数量) */
	planQty = undefined

	/** 采购单号 */
	pono = ''

	/** 采购员 */
	purchaser = ''

	/** 备注 */
	remark = ''

	/** 上架数量 */
	shelvesQty = undefined

	/** 签收人 */
	signatory = ''

	/** 签收时间 */
	signingTime = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
	sourceType = undefined

	/** 状态 10:未签收 20:已签收 30:已收货 40:已质检 50:已称重 60:已上架 65:已完成 70:已取消 */
	status = undefined

	/** 供应商编号 */
	supplierCode = ''

	/** 供应商名称 */
	supplierName = ''

	/** 是否含税 0:否1:是 */
	taxFlag = undefined

	/** 交易主体编号 */
	tradeCompanyCode = ''

	/** 交易主体名称 */
	tradeCompanyName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''

	/** 收货备注 */
	waybillRemark = ''
}

class InMasterResultDto {
	/** 入库明细 */
	detailList = []

	/** 备注 */
	remark = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
	sourceType = undefined
}

class InoutStepRecordRequestDto {
	/** 条码 */
	barcode = ''

	/** id */
	id = undefined

	/** 操作内容 */
	operationContent = ''

	/** 操作单号 */
	operationNo = ''

	/** 单据类型 10:入库单 20:出库单 */
	operationOrderType = undefined

	/** 类型 10:收货 20:质检 30:称重 40:上架 50:下架 60:校验 70:发货 80:还货 */
	operationType = undefined

	/** 库位 */
	positionCode = ''

	/** 产品数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InoutStepRecordResponseDto {
	/** 条码 */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 操作内容 */
	operationContent = ''

	/** 操作单号 */
	operationNo = ''

	/** 单据类型 10:入库单 20:出库单 */
	operationOrderType = undefined

	/** 类型 10:收货 20:质检 30:称重 40:上架 50:下架 60:校验 70:发货 80:还货 */
	operationType = undefined

	/** 库位 */
	positionCode = ''

	/** 产品名称 */
	productTitle = ''

	/** 产品数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryCreateForSkuRequestDto {
	/** 备注 */
	remark = ''

	/** sku */
	sku = ''

	/** 仓库编码 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryDetailRecordResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 盘点单单号 */
	icno = ''

	/** id */
	id = undefined

	/** 库位编号 */
	positionCode = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 变体规格 */
	variants = ''
}

class InventoryDetailResultRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 盘点数 */
	inventoryQty = undefined

	/** 库位编号 */
	positionCode = ''

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InventoryDetailResultResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 盘点单单号 */
	icno = ''

	/** id */
	id = undefined

	/** 盘点数 */
	inventoryQty = undefined

	/** 盘亏数量 */
	lossesQty = undefined

	/** 操作人 */
	operator = ''

	/** 库位编号 */
	positionCode = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** sku */
	sku = ''

	/** 盘盈数量 */
	surplusQty = undefined

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 变体规格 */
	variants = ''
}

class InventoryDetailResultStatisticsRequestDto {
	/** 盘点单单号 */
	icno = ''

	/** 操作人 */
	operator = ''

	/** 库位编号 */
	positionCode = ''

	/** 产品盘点明细 */
	resultRequestDtos = []
}

class InventoryErrorListResponseDto {
	/** 审核时间 */
	auditTime = ''

	/** 审核人 */
	auditor = ''

	/** 盘点单号 */
	icno = ''

	/** 库位 */
	positionCode = ''

	/** 数量差异 */
	quantityVariance = undefined

	/** 备注 */
	remark = ''

	/** sku */
	sku = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryMasterRequestDto {
	/** 对账类型 10:账到实 20:实到账 */
	checkType = undefined

	/** 盘点单号 */
	icno = ''

	/** 库位 */
	inventoryPositions = []

	/** 盘点类型：10：普通盘点 ，20：年度盘点 */
	inventoryType = undefined

	/** 计划开始时间 */
	planBeginTime = ''

	/** 计划结束时间 */
	planEndTime = ''

	/** 备注 */
	remark = ''

	/** 异常盘点sku */
	sku = ''

	/** 仓库编码 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryMasterResponseDto {
	/** 实际开始时间 */
	actualBeginTime = ''

	/** 实际结束时间 */
	actualEndTime = ''

	/** 审核时间 */
	auditTime = ''

	/** 审核人 */
	auditor = ''

	/** 对账类型 10:账到实 20:实到账 */
	checkType = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 盘点单号 */
	icno = ''

	/** id */
	id = undefined

	/** 库位 */
	inventoryPositionList = []

	/** 盘点状态：10:待执行 20:执行中 30:已执行 35:待审核 38:已驳回 40:已完成 */
	inventoryStatus = undefined

	/** 盘点类型：10:普通盘点 ，20:年度盘点，30:异常盘点 */
	inventoryType = undefined

	/** 计划开始时间 */
	planBeginTime = ''

	/** 计划结束时间 */
	planEndTime = ''

	/** 备注 */
	remark = ''

	/** 异常盘点sku */
	sku = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编码 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryMasterResultNsDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 盘点单单号 */
	icno = ''

	/** 盘亏数量 */
	lossesQty = undefined

	/** 操作人 */
	operator = ''

	/** 库位编号 */
	positionCode = ''

	/** sku */
	sku = ''

	/** 盘盈数量 */
	surplusQty = undefined

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class InventoryPositionResponseDto {
	/** 库区编号 */
	areaCode = ''

	/** 货架组编号 */
	groupCode = ''

	/** 盘点单单号 */
	icno = ''

	/** id */
	id = undefined

	/** 库位编号 */
	positionCode = ''

	/** 货架编号 */
	shelvesCode = ''

	/** 仓库编码 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class InventoryScreenPositionResponseDto {
	/** 库区编号 */
	areaCode = ''

	/** 货架组编号 */
	groupCode = ''

	/** 库位编号 */
	positionCode = ''

	/** 货架编号 */
	shelvesCode = ''

	/** 仓库编号 */
	warehouseCode = ''
}

class LogisticsChannelAddRequestDto {
	/** 渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** 面单要求 */
	labelStandard = ''

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 业务属性分类 */
	serviceProperty = undefined
}

class LogisticsChannelDiscountRequestDto {
	/** 折扣  默认1.0 */
	discount = undefined
}

class LogisticsChannelJoinGroupResponseDto {
	/** 渠道编号 */
	channelCode = ''

	/** 物流分组编号 */
	logisticsGroupCode = ''

	/** 物流分组名称 */
	logisticsGroupName = ''

	/** 物流商编号 */
	providerCode = ''
}

class LogisticsChannelLabelStandardRequestDto {
	/** 渠道编号 */
	channelCode = ''

	/** 面单要求 */
	labelStandard = ''

	/** 物流商编号 */
	providerCode = ''
}

class LogisticsChannelMsgRequestDto {
	/** 平均时效 (天) */
	averageDay = undefined

	/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
	channelType = undefined

	/** 计重类型 10：毛重体积重最大值/Max(材积,实重), 20：方/立方米, 30：体积重，默认为10 */
	countWeightType = undefined

	/** 默认进位重 默认为：1.000 */
	defaultCarryBit = undefined

	/** 物流分组编号 */
	groupCodeList = []
}

class LogisticsChannelPlatformRequestDto {
	/** 物流渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** id */
	id = undefined

	/** 10:货物到达后不生成最终单号，20:货物到达后生成最终单号 */
	isGenerateFtno = undefined

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 平台邮寄方式 */
	platformPost = ''

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 跟踪地址 */
	traceAddresse = ''

	/** 10:取最终单号，20:取物流商单号 */
	trackingNoType = undefined

	/** 10:上传运单号，20:不填单号上传，30:NoShipping */
	waybillNoUploadWay = undefined
}

class LogisticsChannelPlatformResponseDto {
	/** 物流渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 10:货物到达后不生成最终单号，20:货物到达后生成最终单号 */
	isGenerateFtno = undefined

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 平台邮寄方式 */
	platformPost = ''

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 跟踪地址 */
	traceAddresse = ''

	/** 10:取最终单号，20:取物流商单号 */
	trackingNoType = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 10:上传运单号，20:不填单号上传，30:NoShipping */
	waybillNoUploadWay = undefined
}

class LogisticsChannelPriceModel {
	/** additionalWeightPrice */
	additionalWeightPrice = undefined

	/** additionalWeightUnit */
	additionalWeightUnit = undefined

	/** beginWeight */
	beginWeight = undefined

	/** channelCode */
	channelCode = ''

	/** channelName */
	channelName = ''

	/** createBy */
	createBy = ''

	/** createTime */
	createTime = ''

	/** deleted */
	deleted = undefined

	/** endWeight */
	endWeight = undefined

	/** excessAdditionalWeightPrice */
	excessAdditionalWeightPrice = undefined

	/** excessAdditionalWeightUnit */
	excessAdditionalWeightUnit = undefined

	/** excessFirstWeight */
	excessFirstWeight = undefined

	/** excessFirstWeightPrice */
	excessFirstWeightPrice = undefined

	/** firstWeight */
	firstWeight = undefined

	/** firstWeightPrice */
	firstWeightPrice = undefined

	/** id */
	id = undefined

	/** matchPostcode */
	matchPostcode = ''

	/** providerCode */
	providerCode = ''

	/** providerName */
	providerName = ''

	/** registrationPrice */
	registrationPrice = undefined

	/** targetCountryCode */
	targetCountryCode = ''

	/** targetCountryName */
	targetCountryName = ''

	/** updateBy */
	updateBy = ''

	/** updateTime */
	updateTime = ''
}

class LogisticsChannelPriceRequestDto {
	/** 续重费用 */
	additionalWeightPrice = undefined

	/** 续重单位数量 */
	additionalWeightUnit = undefined

	/** begin重量 > */
	beginWeight = undefined

	/** 物流渠道编号 */
	channelCode = ''

	/** 物流渠道名称 */
	channelName = ''

	/** end重量 <= */
	endWeight = undefined

	/** 附加费续重费用 */
	excessAdditionalWeightPrice = undefined

	/** 附加费续重单位 */
	excessAdditionalWeightUnit = undefined

	/** 附加费首重 */
	excessFirstWeight = undefined

	/** 附加费首重费用 */
	excessFirstWeightPrice = undefined

	/** 首重 */
	firstWeight = undefined

	/** 首重费用(RMB)  */
	firstWeightPrice = undefined

	/** id */
	id = undefined

	/** 邮编匹配正则 */
	matchPostcode = ''

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 挂号费(RMB) */
	registrationPrice = undefined

	/** 目标国家简码 */
	targetCountryCode = ''

	/** 目标国家名称 */
	targetCountryName = ''
}

class LogisticsChannelPriceResponseDto {
	/** 续重费用 */
	additionalWeightPrice = undefined

	/** 续重单位数量 */
	additionalWeightUnit = undefined

	/** begin重量 > */
	beginWeight = undefined

	/** 物流渠道编号 */
	channelCode = ''

	/** 物流渠道名称 */
	channelName = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** end重量 <= */
	endWeight = undefined

	/** 附加费续重费用 */
	excessAdditionalWeightPrice = undefined

	/** 附加费续重单位 */
	excessAdditionalWeightUnit = undefined

	/** 附加费首重 */
	excessFirstWeight = undefined

	/** 附加费首重费用 */
	excessFirstWeightPrice = undefined

	/** 首重 */
	firstWeight = undefined

	/** 首重费用(RMB)  */
	firstWeightPrice = undefined

	/** id */
	id = undefined

	/** 邮编匹配正则 */
	matchPostcode = ''

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 挂号费(RMB) */
	registrationPrice = undefined

	/** 目标国家简码 */
	targetCountryCode = ''

	/** 目标国家名称 */
	targetCountryName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsChannelResponseDto {
	/** 平均时效 (天) */
	averageDay = undefined

	/** 渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
	channelType = undefined

	/** 联系方式 */
	contact = ''

	/** 计泡基数 */
	countBubbleBase = undefined

	/** 计重类型 10：毛重体积重最大值/Max(材积,实重), 20：方/立方米, 30：体积重 */
	countWeightType = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 默认进位重 */
	defaultCarryBit = undefined

	/** 折扣  默认1.0 */
	discount = undefined

	/** 物流分组适用列表 */
	groupList = []

	/** id */
	id = undefined

	/** 面单要求 */
	labelStandard = ''

	/** 渠道服务适用仓库列表 */
	logisticsChannelWarehouseResponseDtos = []

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 业务属性分类 10：toC, 20：toB */
	serviceProperty = undefined

	/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
	shippingType = undefined

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsChannelStatusRequestDto {
	/** 状态 1:启用 0:停用 */
	status = undefined
}

class LogisticsChannelWarehouseParamsDto {
	/** 物流渠道编号 */
	channelCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 物流商编号 */
	providerCode = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class LogisticsChannelWarehouseRequestDto {
	/** 物流渠道编号 */
	channelCode = ''

	/** id */
	id = undefined

	/** 物流商编号 */
	providerCode = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class LogisticsChannelWarehouseResponseDto {
	/** 物流渠道编号 */
	channelCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 物流商编号 */
	providerCode = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class LogisticsGroupModifyRequestDto {
	/** 物流分组编号 */
	logisticsGroupCode = ''
}

class LogisticsGroupRequestDto {
	/** id */
	id = undefined

	/** 物流分组编号 */
	logisticsGroupCode = ''

	/** 物流分组名称 */
	logisticsGroupName = ''

	/** 状态 1:启用 0:停用 */
	status = undefined
}

class LogisticsGroupResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 物流分组编号 */
	logisticsGroupCode = ''

	/** 物流分组名称 */
	logisticsGroupName = ''

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 状态名称 1:启用 0:停用 */
	statusName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsProviderChannelResponseDto {
	/** 平均时效 (天) */
	averageDay = undefined

	/** 渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
	channelType = undefined

	/** 联系方式 */
	contact = ''

	/** id */
	id = undefined

	/** 面单要求 */
	labelStandard = ''

	/** 渠道列表 */
	logisticsChannelResponseDtos = []

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 状态 1:启用 0:停用 */
	status = undefined
}

class LogisticsProviderResponseDto {
	/** 联系方式 */
	contact = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 预报邮箱 */
	forecastMails = ''

	/** id */
	id = undefined

	/** 面单要求 */
	labelStandard = ''

	/** 渠道商适用仓库列表 */
	logisticsChannelWarehouseResponseDtos = []

	/** 物流商编号 */
	providerCode = ''

	/** 物流商名称 */
	providerName = ''

	/** 业务属性分类 10:toB 20:toC */
	serviceProperty = undefined

	/** 状态 1:启用 0:停用 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsReturnRecordResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 处理结果 10:入库 20:报损 30:重发 */
	handleResult = undefined

	/** id */
	id = undefined

	/** 退件记录号 */
	returnNo = ''

	/** 退件签收时间 */
	signTime = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:销售订单 20:调拨单 */
	sourceType = undefined

	/** 状态 10:未处理 20:已处理 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsShippingTypeRequestDto {
	/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
	shippingType = undefined
}

class LogisticsShippingTypeResponseDto {
	/** 渠道编号 */
	channelCode = ''

	/** 物流商编号 */
	providerCode = ''

	/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
	shippingType = undefined
}

class LogisticsTariffThresholdRequestDto {
	/** 货币单位 */
	currencyUnit = ''

	/** id */
	id = undefined

	/** 起始国家简码 */
	originCountryCode = ''

	/** 起始国家 */
	originCountryName = ''

	/** 目标国家简码 */
	targetCountryCode = ''

	/** 目标国家 */
	targetCountryName = ''

	/** 起征点 */
	threshold = undefined
}

class LogisticsTariffThresholdResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 货币单位 */
	currencyUnit = ''

	/** id */
	id = undefined

	/** 起始国家简码 */
	originCountryCode = ''

	/** 起始国家 */
	originCountryName = ''

	/** 目标国家简码 */
	targetCountryCode = ''

	/** 目标国家 */
	targetCountryName = ''

	/** 起征点 */
	threshold = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class LogisticsWaybillLabelResponseDto {
	/** 内容 */
	content = ''

	/** 数据类型 1:url 2:base64 */
	contentType = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 文件类型 */
	fileType = ''

	/** id */
	id = undefined

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 文件路径 */
	path = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 运单号 */
	waybillNo = ''
}

class NsCallbackForUpdateBoxRequestDto {
	/** 地址 */
	address = ''

	/** 调拨单号 */
	aono = ''

	/** 箱外标签文件路径 */
	boxLabelPath = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 邮箱地址 */
	email = ''

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 收件人 */
	recipient = ''

	/** 固定电话 */
	telephone = ''

	/** 运单号 */
	waybillNo = ''
}

class NsRequestRecordResponseDto {
	/** 请求编号 */
	apiCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 操作单号 */
	operationNo = ''

	/** 单据类型 10:入库单 20:出库单 30:调拨单 40:装柜单 50:盘点单 60:报损单 70:移库 */
	operationOrderType = undefined

	/** 请求body */
	requestBody = ''

	/** 请求流水ID */
	requestId = ''

	/** 请求状态 10:处理中 20:处理成功 30:处理失败 */
	requestStatus = undefined

	/** 返回数据 */
	resultData = ''

	/** 重试次数 */
	retryTimes = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class NsStorageRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 库位编号 */
	positionCode = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class NsStorageResponseDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** id */
	id = undefined

	/** 库位编号 */
	positionCode = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class NsUpdateReferenceIdRequestDto {
	/** 调拨单号 */
	aono = ''

	/** referenceId */
	referenceId = ''
}

class OperationRecordResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 操作描述 */
	operationDescribe = ''

	/** 操作单号 */
	operationNo = ''

	/** 操作类型  */
	operationType = undefined

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 50:销售订单 60:采购退货出库 70:调拨出库 80:借调出库 */
	sourceType = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class OutCheckResponseDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 发货时间 */
	deliveryTime = ''

	/** 出库单号 */
	dono = ''

	/** 邮箱地址 */
	email = ''

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 出库单校验产品明细 */
	outInfoSkuResponseDtos = []

	/** 拣货单号 */
	pickno = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 数量 */
	qty = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 平台编号 */
	shopCode = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源订单状态 10:正常 20:订单取消 */
	sourceStatus = undefined

	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType = undefined

	/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
	status = undefined

	/** 固定电话 */
	telephone = ''

	/** 最终跟踪号 */
	trackingNo = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''

	/** 出库重量 */
	weight = undefined
}

class OutDetailCheckRequestDto {
	/** 校验数量 */
	qty = undefined

	/** SKU */
	sku = ''
}

class OutDetailCreateFromSaleRequestDto {
	/** 单价 */
	price = undefined

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 出库数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class OutDetailCreateRequestDto {
	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 出库数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class OutInfoResponseDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 发货时间 */
	deliveryTime = ''

	/** 配货位 */
	distribute = undefined

	/** 出库单号 */
	dono = ''

	/** 邮箱地址 */
	email = ''

	/** 出库sku信息 */
	infoSkuList = []

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 拣货单号 */
	pickno = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 数量 */
	qty = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 平台编号 */
	shopCode = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源订单状态 10:正常 20:订单取消 */
	sourceStatus = undefined

	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType = undefined

	/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
	status = undefined

	/** 固定电话 */
	telephone = ''

	/** 最终跟踪号 */
	trackingNo = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''

	/** 出库重量 */
	weight = undefined
}

class OutInfoSkuResponseDto {
	/** 出库单号 */
	dono = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 出库数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class OutMasterCreateFromSaleRequestDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 出库单明细 */
	detailCreateRequestDtos = []

	/** 邮箱地址 */
	email = ''

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 平台订单号 */
	platformOrderId = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 下单时间 */
	purchaseDate = ''

	/** 数量 */
	qty = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 店铺编号 */
	shopCode = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 50:SP销售单 60:委托单 70:多渠道订单 */
	sourceType = undefined

	/** 固定电话 */
	telephone = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class OutMasterCreateRequestDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 出库单明细 */
	detailCreateRequestDtos = []

	/** 邮箱地址 */
	email = ''

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 数量 */
	qty = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 店铺编号 */
	shopCode = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType = undefined

	/** 固定电话 */
	telephone = ''

	/** 最终跟踪号 */
	trackingNo = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''
}

class OutMasterResponseDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 发货时间 */
	deliveryTime = ''

	/** 出库单号 */
	dono = ''

	/** 邮箱地址 */
	email = ''

	/** id */
	id = undefined

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流面单文件路径 */
	logisticsLabelPath = ''

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 移动电话 */
	mobilePhone = ''

	/** 拣货单号 */
	pickno = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 下单时间 */
	purchaseDate = ''

	/** 数量 */
	qty = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 平台编号 */
	shopCode = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源订单状态 10:正常 20:订单取消 */
	sourceStatus = undefined

	/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType = undefined

	/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
	status = undefined

	/** 固定电话 */
	telephone = ''

	/** 最终跟踪号 */
	trackingNo = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''

	/** 出库重量 */
	weight = undefined
}

class OutMasterResultNsDto {
	/** delivery */
	delivery = false

	/** 发货时间 */
	deliveryTime = ''

	/** 发运失败时SKU集合 */
	skuList = []

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 */
	sourceType = undefined

	/** 发货SKU库存明细 */
	storageList = []

	/** 发货包裹重量 */
	weight = undefined
}

class OutReturnRequestDto {
	/** 库位还货产品明细 */
	outReturnSerialRequestDtos = []

	/** 库位编号 */
	positionCode = ''
}

class OutReturnResponseDto {
	/** 出库单号 */
	dono = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 数量 */
	realQty = undefined

	/** sku */
	sku = ''

	/** 变体规格 */
	variants = ''
}

class OutReturnSerialRequestDto {
	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''
}

class OutReturnSignRequestDto {
	/** 出库单号 */
	dono = ''

	/** 备注 */
	remark = ''
}

class OutStorageInterceptRequestDto {
	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 50:SP销售单 */
	sourceType = undefined
}

class PackageDetailResponseDto {
	/** 地址 */
	address = ''

	/** 渠道编号 */
	channelCode = ''

	/** 渠道名称 */
	channelName = ''

	/** 城市 */
	city = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 发货时间 */
	deliveryTime = ''

	/** 出库单号 */
	dono = ''

	/** 主键 */
	id = undefined

	/** 订单号 */
	orderNo = ''

	/** 订单状态 */
	orderStatus = undefined

	/** pkg号 */
	pkg = ''

	/** 省份 */
	province = ''

	/** 发货数量 */
	qty = undefined

	/** 备注 */
	remark = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''
}

class PackageMasterDetailResponseDto {
	/** 包裹分拣详情 */
	detailResponseDtos = []

	/** 包裹分拣主表 */
	masterResponseDto = new PackageMasterResponseDto()
}

class PackageMasterResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 发运时间 */
	deliveryTime = ''

	/** 主键 */
	id = undefined

	/** 物流商编号 */
	logisticsProviderCode = ''

	/** 物流商名称 */
	logisticsProviderName = ''

	/** pkg号 */
	pkg = ''

	/** 备注 */
	remark = ''

	/** 状态 10:未扫描 20:已扫描 30:已发运 40:已取消 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class PackageWaybillResponseDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 关联单号 */
	correlationNo = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 物流渠道 */
	logisticsChannel = ''

	/** 物流渠道商 */
	logisticsProvider = ''

	/** 操作单号 */
	operationNo = ''

	/** 订单状态 */
	orderStatus = undefined

	/** 省份 */
	province = ''

	/** 物流跟踪号 */
	trackingNo = ''

	/** 运单号 */
	waybillNo = ''
}

class PageInfo {
	/** endRow */
	endRow = undefined

	/** hasNextPage */
	hasNextPage = false

	/** hasPreviousPage */
	hasPreviousPage = false

	/** isFirstPage */
	isFirstPage = false

	/** isLastPage */
	isLastPage = false

	/** list */
	list = []

	/** navigateFirstPage */
	navigateFirstPage = undefined

	/** navigateLastPage */
	navigateLastPage = undefined

	/** navigatePages */
	navigatePages = undefined

	/** navigatepageNums */
	navigatepageNums = []

	/** nextPage */
	nextPage = undefined

	/** pageNum */
	pageNum = undefined

	/** pageSize */
	pageSize = undefined

	/** pages */
	pages = undefined

	/** prePage */
	prePage = undefined

	/** size */
	size = undefined

	/** startRow */
	startRow = undefined

	/** total */
	total = undefined
}

class PdfContentDto {
	/** base64 */
	base64 = ''
}

class PickAddRequestDto {
	/** 创建拣货单筛选项 */
	pickDetailFilterRequestDto = new PickDetailFilterRequestDto()

	/** 出库单配货位列表 */
	pickOutRequestDtoList = []
}

class PickDetailFilterRequestDto {
	/** 出库单开始创建时间 */
	beginCreateTime = ''

	/** begin总数量 */
	beginQty = undefined

	/** 出库单结束创建时间 */
	endCreateTime = ''

	/** end总数量 */
	endQty = undefined

	/** 物流渠道 */
	logisticsList = []

	/** 平台 */
	platformList = []

	/** 包裹上限 */
	upperLimit = undefined

	/** 仓库编号 */
	warehouseCode = ''
}

class PickDetailFilterResponseDto {
	/** 配货位 */
	distribute = ''

	/** 出库单号 */
	dono = ''

	/** 物流渠道 */
	logistics = ''

	/** 平台名称 */
	platformName = ''

	/** 运单号 */
	waybillNo = ''
}

class PickDetailResponseDto {
	/** 地址 */
	address = ''

	/** 配货位 */
	distribute = undefined

	/** 出库单号 */
	dono = ''

	/** 物流渠道 */
	logisticsChannel = ''

	/** 拣货单号 */
	pickno = ''

	/** 平台编号 */
	platformCode = ''

	/** 平台名称 */
	platformName = ''

	/** 店铺名称 */
	shopName = ''

	/** 来源单号 */
	sourceNo = ''

	/** 来源类型 10:销售订单 20:调拨单 30:库存调整单 40:移库单 */
	sourceType = undefined

	/** 状态 10:待拣货 20:已拣货 30:已校验 40:校验失败 50:已称重 60:已发运 */
	status = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 运单号 */
	waybillNo = ''
}

class PickDetailSerialResponseDto {
	/** asin */
	asin = ''

	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 配货位 */
	distribute = undefined

	/** 出库单号 */
	dono = ''

	/** fnsku */
	fnsku = ''

	/** id */
	id = undefined

	/** msku */
	msku = ''

	/** 拣货单号 */
	pickno = ''

	/** 库位编号 */
	positionCode = ''

	/** 产品编号 */
	productCode = ''

	/** 图片路径 */
	productImageUrl = ''

	/** 产品标题 */
	productTitle = ''

	/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
	productType = undefined

	/** 数量 */
	qty = undefined

	/** 实拣数量 */
	realQty = undefined

	/** sku */
	sku = ''

	/** 状态 10:未拣货 20:已拣货 30:丢失 40:已还货 */
	status = undefined

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 变体规格 */
	variants = ''
}

class PickInfoPositionResponseDto {
	/** 库位编号 */
	positionCode = ''

	/** 拣货sku */
	skuResponseDtos = []
}

class PickInfoResponseDto {
	/** 包裹数 */
	boxNum = undefined

	/** 创建时间 */
	createTime = ''

	/** 物流渠道 */
	logisticsChannelName = ''

	/** 物流商 */
	logisticsProviderName = ''

	/** 拣货单号 */
	pickno = ''

	/** 拣货库位列表 */
	positionResponseDtos = []

	/** 拣货数量 */
	qty = undefined

	/** 备注 */
	remark = ''

	/** shipment */
	shipment = ''

	/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
	shippingType = undefined

	/** 目标仓库名称 */
	targetWarehouseName = ''

	/** 交易主体 */
	tradeCompanyName = ''

	/** 来源仓库名称 */
	warehouseName = ''
}

class PickInfoSkuDetailResponseDto {
	/** 配货位 */
	distribute = undefined

	/** fnsku */
	fnsku = ''

	/** 物流分组 */
	logisticsGroup = ''

	/** 库位编号 */
	positionCode = ''

	/** 产品标题 */
	productTitle = ''

	/** 拣货数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 规格 */
	variants = ''
}

class PickInfoSkuResponseDto {
	/** 库位编号 */
	positionCode = ''

	/** 拣货数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** sku配货明细 */
	skuDetailResponseDtos = []

	/** 规格 */
	variants = ''
}

class PickMasterResponseDto {
	/** 库位数量 */
	binNum = undefined

	/** 包裹数量 */
	boxNum = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 总数量 */
	num = undefined

	/** 拣货单号 */
	pickno = ''

	/** 打印人 */
	printBy = ''

	/** 打印时间 */
	printTime = ''

	/** 打印标识 0：否1：是 */
	printed = false

	/** 产品数量 (sku+批次) */
	productNum = undefined

	/** 备注 */
	remark = ''

	/** 状态 0:未拣货 1:已拣货 */
	status = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class PickOutRequestDto {
	/** 配货位 */
	distribute = undefined

	/** 出库单号 */
	dono = ''
}

class PickPositionResponseDto {
	/** 拣货产品 */
	pickDetailSerialResponseDtos = []

	/** 库位编号 */
	positionCode = ''
}

class PickRequestDto {
	/** 条码 */
	barcode = ''

	/** dono */
	dono = ''

	/** id */
	id = undefined

	/** 拣货单号 */
	pickno = ''

	/** 库位编号 */
	positionCode = ''

	/** 拣货数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 状态 20:已拣货 30:丢失 */
	status = undefined

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class PickWaitInfoResponseDto {
	/** 拣货单信息 */
	pickMasterResponseDto = new PickMasterResponseDto()

	/** 拣货库位信息 */
	pickPositionList = []
}

class ProductInfoDto {
	/** 审批提交人备注 */
	applyMemo = ''

	/** 审批提交人 */
	applyUserId = ''

	/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
	approvalStatus = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 当前审批步骤 */
	currentApprovalStep = ''

	/** 首次采购金额 */
	firstPurchasePrice = undefined

	/** id */
	id = undefined

	/** 物流分组 */
	logisticsGroup = ''

	/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
	netsuitePushStatus = undefined

	/** 工作流实例id */
	processInstanceId = undefined

	/** 产品简称 */
	productAbbr = ''

	/** 增值税率 */
	productAddedTax = undefined

	/** 附件链接 */
	productAttr = ''

	/** 品牌 */
	productBrand = ''

	/** 类目 */
	productCategory = ''

	/** 产品编号 */
	productCode = ''

	/** 申报名称(中文) */
	productDeclareCn = ''

	/** 申报名称(英文) */
	productDeclareEn = ''

	/** 申报要素 */
	productDeclareMemo = ''

	/** 事业部 */
	productDepartment = ''

	/** 质保期(月) */
	productExpirydate = undefined

	/** HSCODE(国内) */
	productHscodeCn = ''

	/** HSCODE(国外) */
	productHscodeEn = ''

	/** 制造国家 */
	productMadeCountry = ''

	/** 产品名称 */
	productNameCn = ''

	/** 英文名称 */
	productNameEn = ''

	/** 产品材质 */
	productNature = ''

	/** 产品负责人 */
	productOwner = ''

	/** 副产品负责人 */
	productOwner2 = ''

	/** 计划员 */
	productPlanner = ''

	/** 采购负责人 */
	productPurchaser = ''

	/** SKU列表 */
	productSkuList = []

	/** 状态 1:有效 2:无效 */
	productStatus = ''

	/** 退税率 */
	productTaxrebates = undefined

	/** 产品类型 */
	productType = ''

	/** 产品用途 */
	productUse = ''

	/** 驳回人 */
	rejecter = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 版本 */
	version = undefined
}

class ProductSkuInfoDto {
	/** 审批提交人备注 */
	applyMemo = ''

	/** 审批提交人 */
	applyUserId = ''

	/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
	approvalStatus = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 当前审批步骤 */
	currentApprovalStep = ''

	/** 产品交期 */
	deliveryDay = undefined

	/** id */
	id = undefined

	/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
	netsuitePushStatus = undefined

	/** 工作流实例id */
	processInstanceId = undefined

	/** 品牌 */
	productBrand = ''

	/** 产品编号 */
	productCode = ''

	/** HSCODE(国内) */
	productHscodeCn = ''

	/** HSCODE(国外) */
	productHscodeEn = ''

	/** 产品初始分级 */
	productInitGrading = ''

	/** SKU编号 */
	productSku = ''

	/** SKU简称 */
	productSkuAbbr = ''

	/** 附件链接 */
	productSkuAttr = ''

	/** 单个产品计费重量(g) */
	productSkuBillingWeight = undefined

	/** 装箱箱高(cm) */
	productSkuBoxHeight = undefined

	/** 装箱箱长(CM) */
	productSkuBoxLong = undefined

	/** 装箱箱宽(CM) */
	productSkuBoxWidth = undefined

	/** 描述 */
	productSkuDescribe = ''

	/** 是否研发产品 */
	productSkuDevolopFlag = undefined

	/** 是否需要厂检 */
	productSkuFactoryCheck = ''

	/** 产品分级 */
	productSkuGrading = ''

	/** 产品高(cm) */
	productSkuHeight = undefined

	/** 图片链接 */
	productSkuImageUrl = ''

	/** 物流周期(天) */
	productSkuLogisticsCycle = undefined

	/** 产品长(cm) */
	productSkuLong = undefined

	/** 每箱数量(MPQ) */
	productSkuMpq = undefined

	/** SKU中文标题 */
	productSkuName = ''

	/** SKU英文标题 */
	productSkuNameEn = ''

	/** 产品负责人 */
	productSkuOwner = ''

	/** 副产品负责人 */
	productSkuOwner2 = ''

	/** 单个产品装箱重量(g) */
	productSkuPackingWeight = undefined

	/** 单个产品装箱体积(m3) */
	productSkuSingleVolume = undefined

	/** 默认运输方式 */
	productSkuTransport = ''

	/** 默认供应商 */
	productSkuVendor = ''

	/** 体积重(g) */
	productSkuVolumeWeight = undefined

	/** 是否需要质检 */
	productSkuWarehouseCheck = ''

	/** 产品重量(g) */
	productSkuWeight = undefined

	/** 产品宽(cm) */
	productSkuWidth = undefined

	/** 计量单位 */
	productUnitsOfMeasure = ''

	/** 单位类型 */
	productUnitsType = ''

	/** 驳回人 */
	rejecter = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 版本 */
	version = undefined
}

class ProductUnitsMeasureAllResponseDto {
	/** 计量单位编号 */
	unitsMeasureCode = ''

	/** 计量单位名称 */
	unitsMeasureName = ''
}

class ProductUnitsMeasureResponseDto {
	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 计量单位编号 */
	unitsMeasureCode = ''

	/** 计量单位名称 */
	unitsMeasureName = ''

	/** 单位类型编号 */
	unitsTypeCode = ''

	/** 单位类型名称 */
	unitsTypeName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class ProductWorkflowDto {
	/** 提交人备注 */
	applyMemo = ''

	/** 提交人ID */
	applyUserId = undefined

	/** 审批结果 1:通过 0:驳回 */
	approvalStatus = undefined

	/** 工作流实例ID */
	processInstanceId = ''

	/** 产品编号 */
	productCode = ''

	/** SKU编号 */
	sku = ''

	/** 工作流TaskID */
	taskId = ''
}

class ResponseDto {
	/** code */
	code = ''

	/** data */
	data = new AllocationBatchDetailResponseDto()

	/** failed */
	failed = false

	/** msg */
	msg = ''

	/** success */
	success = false
}

class ShelvesAddRequestDto {
	/** 库区编号 */
	areaCode = ''

	/** 编号 */
	code = ''

	/** id */
	id = undefined

	/** 名称 */
	name = ''

	/** 状态 0:停用 1:启用 */
	status = undefined

	/** 货架组集合 */
	storageGroupList = []

	/** 仓库编号 */
	warehouseCode = ''
}

class ShopDepartmentMappingRequestDto {
	/** 地址 */
	address = ''

	/** 事业部 */
	department = ''

	/** id */
	id = undefined

	/** 名称 */
	name = ''

	/** 货代信息 */
	representativesInformation = ''

	/** 店铺 */
	shopName = ''
}

class ShopDepartmentMappingResponseDto {
	/** 地址 */
	address = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 事业部 */
	department = ''

	/** id */
	id = undefined

	/** 名称 */
	name = ''

	/** 货代信息 */
	representativesInformation = ''

	/** 店铺 */
	shopName = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''
}

class StockMoveRequestDto {
	/** 整箱移库信息 */
	boxtorageDto = new StorageMoveBoxRequestDto()

	/** Sku移库信息 */
	skuStorageDto = new StorageMoveSkuRequestDto()
}

class StorageDamagetWorkflowDto {
	/** 提交人备注 */
	applyMemo = ''

	/** 提交人ID */
	applyUserId = undefined

	/** 审批结果 1:通过 0:驳回 */
	approvalStatus = undefined

	/** 报损单号 */
	fono = ''

	/** 工作流实例ID */
	processInstanceId = ''

	/** 工作流TaskID */
	taskId = ''
}

class StorageGroupRequestDto {
	/** 货架组编号 */
	code = ''

	/** 列数 (货架组必填) */
	columns = undefined

	/** 层数 (货架组必填) */
	layers = undefined
}

class StorageLocationListRequestDto {
	/** 库区编号 */
	areaCode = ''

	/** 货架组编号 */
	groupCode = ''

	/** 货架编号 */
	shelvesCode = ''

	/** 仓库编号 */
	warehouseCode = ''
}

class StorageMoveBoxRequestDto {
	/** 箱号 */
	barcode = ''

	/** 新库位 */
	newPositionCode = ''

	/** 旧库位 */
	oldPositionCode = ''
}

class StorageMoveSkuRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 新箱号 */
	newBarcode = ''

	/** 新库位 */
	newPosition = ''

	/** 旧库位 */
	positionCode = ''

	/** 数量 */
	qty = undefined

	/** SKU */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class StorageOfOccupyResponseDto {
	/** 出库单号 */
	dono = ''

	/** 数量 */
	qty = undefined

	/** sku */
	sku = ''

	/** 单据号 */
	sourceNo = ''

	/** 单据类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
	sourceType = undefined

	/** 仓库编号 */
	warehouseCode = ''
}

class StorageReportDamageRequestDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 数量 */
	num = undefined

	/** 库位编号 */
	positionCode = ''

	/** 备注 */
	remark = ''

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class StorageReportDamageResponseDto {
	/** 审核时间 */
	auditTime = ''

	/** 审核人 */
	auditor = ''

	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 当前审批步骤 */
	currentApprovalStep = ''

	/** 事业部 */
	department = ''

	/** 报损单号 */
	fono = ''

	/** id */
	id = undefined

	/** 数量 */
	num = undefined

	/** 库位编号 */
	positionCode = ''

	/** 工作流实例id */
	processInstanceId = undefined

	/** 驳回人 */
	rejecter = ''

	/** 备注 */
	remark = ''

	/** sku */
	sku = ''

	/** 报损状态 10:待审核 20:已审核 30:已驳回 */
	status = undefined

	/** 库存成本 */
	storageCost = undefined

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class StorageReportDamageResultNsDto {
	/** 审核时间 */
	auditTime = ''

	/** 审核人 */
	auditor = ''

	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 报损单号 */
	fono = ''

	/** 数量 */
	num = undefined

	/** 库位编号 */
	positionCode = ''

	/** 备注 */
	remark = ''

	/** sku */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class StorageResultNsDto {
	/** 条码 装箱条码/SKU */
	barcode = ''

	/** 库位编号 */
	positionCode = ''

	/** 数量 */
	qty = undefined

	/** SKU */
	sku = ''

	/** 类型 1:已装箱 2:未装箱 */
	type = undefined
}

class StorageUnitAreaRequestDto {
	/** 库区类型 10:自营 20:FBA */
	areaType = undefined

	/** 编号 */
	code = ''

	/** id */
	id = undefined

	/** 名称 */
	name = ''

	/** 状态 0:停用 1:启用 */
	status = undefined

	/** 仓库编号 */
	warehouseCode = ''
}

class StorageUnitResponseDto {
	/** 库区编号 */
	areaCode = ''

	/** 库区类型 10:自营 20:FBA */
	areaType = undefined

	/** 编号 */
	code = ''

	/** 列数 (货架组必填) */
	columns = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** id */
	id = undefined

	/** 层数 (货架组必填) */
	layers = undefined

	/** 名称 */
	name = ''

	/** 关联编号(弃用) */
	relationCode = ''

	/** 行数 (货架组必填 默认1) */
	rows = undefined

	/** 货架编号 */
	shelvesCode = ''

	/** 状态 0:停用 1:启用 */
	status = undefined

	/** 存储类型 10:库区 20:货架 30:货架组 */
	storageType = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 仓库编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''
}

class WarehousePositionRequestDto {
	/** 高度(mm) */
	height = undefined

	/** id */
	id = undefined

	/** 长度(mm) */
	length = undefined

	/** 拣货顺序 */
	order = undefined

	/** 体积(mm3) */
	volume = undefined

	/** 宽度(mm) */
	width = undefined
}

class WarehousePositionResponseDto {
	/** 库区编号 */
	areaCode = ''

	/** 列 */
	column = undefined

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 货架组编号 */
	groupCode = ''

	/** 高度(mm) */
	height = undefined

	/** id */
	id = undefined

	/** 层 */
	layer = undefined

	/** 长度(mm) */
	length = undefined

	/** 拣货顺序 */
	order = undefined

	/** 库位编号 */
	positionCode = ''

	/** 库存总数 */
	qty = undefined

	/** 行 */
	row = undefined

	/** 货架编号 */
	shelvesCode = ''

	/** sku个数 */
	skuNum = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 体积(mm3) */
	volume = undefined

	/** 仓库编号 */
	warehouseCode = ''

	/** 宽度(mm) */
	width = undefined
}

class WarehouseRequestDto {
	/** 地址 */
	address = ''

	/** 区 */
	area = ''

	/** 城市 */
	city = ''

	/** 联系人 */
	contacts = ''

	/** 国家 */
	country = ''

	/** 邮箱 */
	email = ''

	/** id */
	id = undefined

	/** 移动电话 */
	mobilePhone = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 状态 0:停用 1:启用 */
	status = undefined

	/** 固定电话 */
	telephone = ''

	/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
	type = undefined

	/** 编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 重量单位 10:g 20:kg */
	weightUnit = undefined
}

class WarehouseResponseDto {
	/** 地址 */
	address = ''

	/** 区 */
	area = ''

	/** 城市 */
	city = ''

	/** 联系人 */
	contacts = ''

	/** 国家 */
	country = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 邮箱 */
	email = ''

	/** id */
	id = undefined

	/** 移动电话 */
	mobilePhone = ''

	/** 邮编 */
	postcode = ''

	/** 省份 */
	province = ''

	/** 状态 0:停用 1:启用 */
	status = undefined

	/** 固定电话 */
	telephone = ''

	/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
	type = undefined

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 编号 */
	warehouseCode = ''

	/** 仓库名称 */
	warehouseName = ''

	/** 重量单位 10:g 20:kg */
	weightUnit = undefined
}

class WaybillMasterResponseDto {
	/** 地址 */
	address = ''

	/** 城市 */
	city = ''

	/** 关联单号 */
	correlationNo = ''

	/** 国家 */
	country = ''

	/** 国家简码 */
	countryCode = ''

	/** 创建人 */
	createBy = ''

	/** 创建时间 */
	createTime = ''

	/** 申报价格USD */
	declarePrice = undefined

	/** 妥投时间 */
	deliveredTime = ''

	/** 发货时间 */
	deliveryTime = ''

	/** 邮箱地址 */
	email = ''

	/** 预估费用 */
	estimatePrice = undefined

	/** 预估重量 */
	estimateWeight = undefined

	/** id */
	id = undefined

	/** 物流渠道服务编号 */
	logisticsChannelCode = ''

	/** 物流渠道服务名称 */
	logisticsChannelName = ''

	/** 物流商运费 */
	logisticsPrice = undefined

	/** 物流渠道商编号 */
	logisticsProviderCode = ''

	/** 物流渠道商名称 */
	logisticsProviderName = ''

	/** 物流状态 10:未发运 20:已发运 30:已妥投 40:已退回 */
	logisticsStatus = undefined

	/** 物流商重量 */
	logisticsWeight = undefined

	/** 移动电话 */
	mobilePhone = ''

	/** 操作单号 */
	operationNo = ''

	/** 单据类型 10:入库单 20:出库单 */
	operationOrderType = undefined

	/** 邮编 */
	postcode = ''

	/** 产品集合 */
	productJson = ''

	/** 省份 */
	province = ''

	/** 出库数量 */
	qty = undefined

	/** 实际费用 */
	realityPrice = undefined

	/** 实际重量 */
	realityWeight = undefined

	/** 收件人 */
	recipient = ''

	/** 备注 */
	remark = ''

	/** 销售价格USD */
	salePrice = undefined

	/** 固定电话 */
	telephone = ''

	/** 跟踪号 */
	trackingNo = ''

	/** 更新人 */
	updateBy = ''

	/** 更新时间 */
	updateTime = ''

	/** 运单号 */
	waybillNo = ''
}

export const wms = {
	AllocationBatchDetailResponseDto,
	AllocationBatchResponseDto,
	AllocationBoxCollectDto,
	AllocationBoxDetailRequestDto,
	AllocationBoxDetailResponseDto,
	AllocationBoxRequestDto,
	AllocationBoxResponseDto,
	AllocationBoxingReportDto,
	AllocationContainerRequestDto,
	AllocationContainerResponseDto,
	AllocationContainerResultNsDto,
	AllocationDetailCreateRequestDto,
	AllocationDetailResponseDto,
	AllocationMasterBoxDetailResponseDto,
	AllocationMasterBoxingReportDto,
	AllocationMasterCreateRequestDto,
	AllocationMasterResponseDto,
	AllocationMasterResultNsDto,
	AllocationMasterUpdateRequestDto,
	AllocationOperationTimeResponseDto,
	BatchUpdateLogisticsWareParamsDto,
	BrandEmailMappingRequestDto,
	BrandEmailMappingResponseDto,
	CenterCountyMappingRequestDto,
	CenterCountyMappingResponseDto,
	CodeAndNameListResponseDto,
	CountBubbleUpdateParamsDto,
	CountyResponseDto,
	DeleteBillRequestDto,
	DeliveryNoteExcelDetailRequestDto,
	DeliveryNoteExcelRequestDto,
	ImageEntity,
	InDetailBoxInfoCreateRequestDto,
	InDetailBoxPrintResponseDto,
	InDetailBoxRequestDto,
	InDetailBoxResponseDto,
	InDetailCreateRequestDto,
	InDetailInspectionResponseDto,
	InDetailPutOnRequestDto,
	InDetailReceivingByMxRequestDto,
	InDetailReceivingRequestDto,
	InDetailRecordRequestDto,
	InDetailRecordResponseDto,
	InDetailRecordResultDto,
	InDetailRequestDto,
	InDetailResponseDto,
	InDetailResultDto,
	InMasterCreateRequestDto,
	InMasterInspectionRequestDto,
	InMasterInspectionResponseDto,
	InMasterPutOnRequestDto,
	InMasterPutOnResponseDto,
	InMasterReceivingByMxRequestDto,
	InMasterReceivingRequestDto,
	InMasterReceivingResponseDto,
	InMasterResponseDto,
	InMasterResultDto,
	InoutStepRecordRequestDto,
	InoutStepRecordResponseDto,
	InventoryCreateForSkuRequestDto,
	InventoryDetailRecordResponseDto,
	InventoryDetailResultRequestDto,
	InventoryDetailResultResponseDto,
	InventoryDetailResultStatisticsRequestDto,
	InventoryErrorListResponseDto,
	InventoryMasterRequestDto,
	InventoryMasterResponseDto,
	InventoryMasterResultNsDto,
	InventoryPositionResponseDto,
	InventoryScreenPositionResponseDto,
	LogisticsChannelAddRequestDto,
	LogisticsChannelDiscountRequestDto,
	LogisticsChannelJoinGroupResponseDto,
	LogisticsChannelLabelStandardRequestDto,
	LogisticsChannelMsgRequestDto,
	LogisticsChannelPlatformRequestDto,
	LogisticsChannelPlatformResponseDto,
	LogisticsChannelPriceModel,
	LogisticsChannelPriceRequestDto,
	LogisticsChannelPriceResponseDto,
	LogisticsChannelResponseDto,
	LogisticsChannelStatusRequestDto,
	LogisticsChannelWarehouseParamsDto,
	LogisticsChannelWarehouseRequestDto,
	LogisticsChannelWarehouseResponseDto,
	LogisticsGroupModifyRequestDto,
	LogisticsGroupRequestDto,
	LogisticsGroupResponseDto,
	LogisticsProviderChannelResponseDto,
	LogisticsProviderResponseDto,
	LogisticsReturnRecordResponseDto,
	LogisticsShippingTypeRequestDto,
	LogisticsShippingTypeResponseDto,
	LogisticsTariffThresholdRequestDto,
	LogisticsTariffThresholdResponseDto,
	LogisticsWaybillLabelResponseDto,
	NsCallbackForUpdateBoxRequestDto,
	NsRequestRecordResponseDto,
	NsStorageRequestDto,
	NsStorageResponseDto,
	NsUpdateReferenceIdRequestDto,
	OperationRecordResponseDto,
	OutCheckResponseDto,
	OutDetailCheckRequestDto,
	OutDetailCreateFromSaleRequestDto,
	OutDetailCreateRequestDto,
	OutInfoResponseDto,
	OutInfoSkuResponseDto,
	OutMasterCreateFromSaleRequestDto,
	OutMasterCreateRequestDto,
	OutMasterResponseDto,
	OutMasterResultNsDto,
	OutReturnRequestDto,
	OutReturnResponseDto,
	OutReturnSerialRequestDto,
	OutReturnSignRequestDto,
	OutStorageInterceptRequestDto,
	PackageDetailResponseDto,
	PackageMasterDetailResponseDto,
	PackageMasterResponseDto,
	PackageWaybillResponseDto,
	PageInfo,
	PdfContentDto,
	PickAddRequestDto,
	PickDetailFilterRequestDto,
	PickDetailFilterResponseDto,
	PickDetailResponseDto,
	PickDetailSerialResponseDto,
	PickInfoPositionResponseDto,
	PickInfoResponseDto,
	PickInfoSkuDetailResponseDto,
	PickInfoSkuResponseDto,
	PickMasterResponseDto,
	PickOutRequestDto,
	PickPositionResponseDto,
	PickRequestDto,
	PickWaitInfoResponseDto,
	ProductInfoDto,
	ProductSkuInfoDto,
	ProductUnitsMeasureAllResponseDto,
	ProductUnitsMeasureResponseDto,
	ProductWorkflowDto,
	ResponseDto,
	ShelvesAddRequestDto,
	ShopDepartmentMappingRequestDto,
	ShopDepartmentMappingResponseDto,
	StockMoveRequestDto,
	StorageDamagetWorkflowDto,
	StorageGroupRequestDto,
	StorageLocationListRequestDto,
	StorageMoveBoxRequestDto,
	StorageMoveSkuRequestDto,
	StorageOfOccupyResponseDto,
	StorageReportDamageRequestDto,
	StorageReportDamageResponseDto,
	StorageReportDamageResultNsDto,
	StorageResultNsDto,
	StorageUnitAreaRequestDto,
	StorageUnitResponseDto,
	WarehousePositionRequestDto,
	WarehousePositionResponseDto,
	WarehouseRequestDto,
	WarehouseResponseDto,
	WaybillMasterResponseDto
}
