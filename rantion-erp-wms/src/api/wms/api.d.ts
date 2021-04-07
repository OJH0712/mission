type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
	[key in Key]: Value
}

declare namespace defs {
	export namespace wms {
		export class AllocationBatchDetailResponseDto {
			/** 调拨单 */
			allocationMasterResponseDtos?: Array<defs.wms.AllocationMasterResponseDto>

			/** 调拨批次 */
			batchResponseDto?: defs.wms.AllocationBatchResponseDto
		}

		export class AllocationBatchResponseDto {
			/** 调拨批次单号 */
			abno: string

			/** 箱数 */
			boxQty: number

			/** centerId */
			centerId: string

			/** 货柜号 */
			containerNo: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 出库时间 */
			deliveryTime: string

			/** id */
			id: number

			/** 物流渠道 */
			logisticsChannel: string

			/** 物流渠道名称 */
			logisticsChannelName: string

			/** 物流商 */
			logisticsProvider: string

			/** 物流商名称 */
			logisticsProviderName: string

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
			shippingType: number

			/** 来源仓库编号 */
			sourceWarehouseCode: string

			/** 来源仓库名称 */
			sourceWarehouseName: string

			/** 调拨批次状态：10 未扫描，20 已扫描，30 已确认，40 已发运，50 已完成 */
			status: number

			/** 目标仓库编号 */
			targetWarehouseCode: string

			/** 目标仓库名称 */
			targetWarehouseName: string

			/** 调拨类型：10 普通调拨，20 FBA调拨 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 体积 */
			volume: number

			/** 重量 */
			weight: number
		}

		export class AllocationBoxCollectDto {
			/** 调拨单分箱信息 */
			allocationBoxDtos?: Array<defs.wms.AllocationBoxResponseDto>

			/** 调拨单SKU信息 */
			allocationDetailDtos?: Array<defs.wms.AllocationDetailResponseDto>

			/** 调拨单信息 */
			allocationMasterDto?: defs.wms.AllocationMasterResponseDto
		}

		export class AllocationBoxDetailRequestDto {
			/** ASIN */
			asin: string

			/** FNSKU */
			fnsku: string

			/** MSKU */
			msku: string

			/** 数量 */
			qty: number

			/** sku */
			sku: string
		}

		export class AllocationBoxDetailResponseDto {
			/** ASIN */
			asin: string

			/** 箱号 */
			boxNo: string

			/** FNSKU */
			fnsku: string

			/** MSKU */
			msku: string

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 数量 */
			qty: number

			/** sku */
			sku: string

			/** 变体规格 */
			variants: string
		}

		export class AllocationBoxRequestDto {
			/** 调拨单号 */
			aono: string

			/** 分箱明细 */
			boxDetailDtos: Array<defs.wms.AllocationBoxDetailRequestDto>

			/** 箱号 */
			boxNo: string

			/** 高度（单位：cm） */
			height: number

			/** 长度（单位：cm） */
			length: number

			/** 重量 */
			weight: number

			/** 宽度（单位：cm） */
			width: number
		}

		export class AllocationBoxResponseDto {
			/** 调拨单号 */
			aono: string

			/** 箱外条码 */
			barcode: string

			/** 箱号 */
			boxNo: string

			/** 分箱明细 */
			detailModels?: Array<defs.wms.AllocationBoxDetailResponseDto>

			/** 高度（单位：cm） */
			height: number

			/** 长度（单位：cm） */
			length: number

			/** 重量 */
			weight: number

			/** 宽度（单位：cm） */
			width: number
		}

		export class AllocationBoxingReportDto {
			/** asin */
			asin?: string

			/** 箱号 */
			boxNo?: string

			/** 总箱数 */
			boxNum?: string

			/** 品牌 */
			brandName?: string

			/** 体积重 */
			chargeWeight?: string

			/** emptyStr */
			emptyStr?: string

			/** 英文标题 */
			englishTitle?: string

			/** 高度 */
			height?: number

			/** 图片链接 */
			imageUrl?: string

			/** 是否拼箱 */
			isSpellBox?: string

			/** 长度 */
			length?: number

			/** 物流分组 */
			logisticsGroup?: string

			/** 材质 */
			material?: string

			/** 采购单号 */
			pono?: string

			/** 产品图片 */
			productImageUrl?: defs.wms.ImageEntity

			/** 产品链接 */
			productLink?: string

			/** 产品标题 */
			productTitle?: string

			/** 采购成本 */
			purchaseCost?: number

			/** 用途 */
			purpose?: string

			/** 数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 总体积重 */
			sumChargeWeight?: string

			/** 总数量 */
			sumQty?: string

			/** 总体积 */
			sumVolume?: string

			/** 总重 */
			sumWeight?: string

			/** 体积/箱(m³) */
			volume?: string

			/** 重量 */
			weight?: number

			/** 宽度 */
			width?: number
		}

		export class AllocationContainerRequestDto {
			/** 货柜号 */
			containerNo?: string

			/** 货柜容积（L） */
			containerVolume?: number

			/** 装柜方式：10 整柜，20 散柜 */
			type: number
		}

		export class AllocationContainerResponseDto {
			/** 实装率 */
			actualRate?: number

			/** 箱数 */
			boxQty: number

			/** 货柜号 */
			containerNo: string

			/** 装柜类型：10龙舟整柜，20 捷仕整柜，30 捷仕散柜，40 空运装柜 */
			containerType: number

			/** 货柜容积（L） */
			containerVolume: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 实装容积（L） */
			realVolume: number

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
			shippingType: number

			/** 来源仓库编号 */
			sourceWarehouseCode: string

			/** 来源仓库名称 */
			sourceWarehouseName: string

			/** 目标仓库编号 */
			targetWarehouseCode: string

			/** 目标仓库名称 */
			targetWarehouseName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class AllocationContainerResultNsDto {
			/** 货柜号 */
			containerNo: string

			/** 货柜容积（L） */
			containerVolume: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
			shippingType: number

			/** 来源仓库编号 */
			sourceWarehouseCode: string

			/** 来源仓库名称 */
			sourceWarehouseName: string

			/** 目标仓库编号 */
			targetWarehouseCode: string

			/** 目标仓库名称 */
			targetWarehouseName: string
		}

		export class AllocationDetailCreateRequestDto {
			/** ASIN */
			asin: string

			/** 品牌名称 */
			brandName?: string

			/** 产品英文标题 */
			englishTitle?: string

			/** FNSKU */
			fnsku: string

			/** 物流分组 */
			logisticsGroup?: string

			/** 材质 */
			material?: string

			/** MSKU */
			msku: string

			/** 采购单号 */
			pono?: string

			/** 产品编号 */
			productCode?: string

			/** 产品高(cm) */
			productHeight: number

			/** 图片路径 */
			productImageUrl: string

			/** 产品长(cm) */
			productLength: number

			/** 产品链接 */
			productLink?: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType?: number

			/** 产品重量(g) */
			productWeight: number

			/** 产品宽(cm) */
			productWidth: number

			/** 采购成本 */
			purchaseCost?: number

			/** 用途 */
			purpose?: string

			/** 数量 */
			qty: number

			/** SKU */
			sku: string

			/** 变体规格 */
			variants?: string
		}

		export class AllocationDetailResponseDto {
			/** 调拨单号 */
			aono: string

			/** ASIN */
			asin: string

			/** 品牌名称 */
			brandName: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 售后邮箱 */
			email: string

			/** 产品英文标题 */
			englishTitle: string

			/** FNSKU */
			fnsku: string

			/** FNSKU标签文件路径 */
			fnskuUrl: string

			/** id */
			id: number

			/** 物流分组 */
			logisticsGroup: string

			/** 材质 */
			material: string

			/** MSKU */
			msku: string

			/** 采购单号 */
			pono: string

			/** 产品编号 */
			productCode: string

			/** 产品高(cm) */
			productHeight: number

			/** 图片路径 */
			productImageUrl: string

			/** 产品长(cm) */
			productLength: number

			/** 产品链接 */
			productLink: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 产品重量(g) */
			productWeight: number

			/** 产品宽(cm) */
			productWidth: number

			/** 采购成本 */
			purchaseCost: number

			/** 用途 */
			purpose: string

			/** 数量 */
			qty: number

			/** SKU */
			sku: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 变体规格 */
			variants: string
		}

		export class AllocationMasterBoxDetailResponseDto {
			/** ASIN */
			asin: string

			/** 箱号 */
			boxNo?: string

			/** 品牌 */
			brandName?: string

			/** 体积重 */
			chargeWeight?: number

			/** FNSKU */
			fnsku: string

			/** 高度 */
			height?: number

			/** 长度 */
			length?: number

			/** 材质 */
			material?: string

			/** 型号 */
			model?: string

			/** MSKU */
			msku: string

			/** 用途 */
			purpose?: string

			/** 数量 */
			qty?: number

			/** 备注 */
			remark?: string

			/** 单个重量 */
			singleWeight?: number

			/** sku */
			sku?: string

			/** sku名称 */
			skuName?: string

			/** 产品体积 */
			volume?: number

			/** 抛货率基数 */
			volumeGoodsBase?: number

			/** 整箱重量 */
			weight?: number

			/** 宽度 */
			width?: number
		}

		export class AllocationMasterBoxingReportDto {
			/** 空运模板数据 */
			air?: Array<defs.wms.AllocationBoxingReportDto>

			/** aono */
			aono?: string

			/** 总箱数 */
			boxNum?: number

			/** centerId */
			centerId?: string

			/** 收件人国家 */
			country?: string

			/** 事业部 */
			department?: string

			/** 渠道服务 */
			logisticsChannelName?: string

			/** referenceId */
			referenceId?: string

			/** 海运模板数据 */
			sea?: Array<defs.wms.AllocationBoxingReportDto>

			/** shipTo */
			shipTo?: string

			/** shipment */
			shipment?: string

			/** shipmentName */
			shipmentName?: string

			/** 运输方式 */
			shippingType?: number

			/** 目标仓库名称 */
			targetWarehouseName?: string

			/** 交易主体名称 */
			tradeCompanyName?: string
		}

		export class AllocationMasterCreateRequestDto {
			/** 地址 */
			address?: string

			/** 调拨单明细 */
			allocationDetailCreateRequestDtos: Array<defs.wms.AllocationDetailCreateRequestDto>

			/** 调拨单号 */
			aono: string

			/** centerId */
			centerId?: string

			/** 城市 */
			city?: string

			/** 计泡基数 */
			countBubbleBase: number

			/** 国家 */
			country?: string

			/** 国家简码 */
			countryCode?: string

			/** 创建人 */
			createBy: string

			/** 申报币种 */
			declareCurrency: string

			/** 申报价格 */
			declarePrice: number

			/** 邮箱地址 */
			email?: string

			/** FBA账号 */
			fbaAccount?: string

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 是否需要物流面单 0:否 1:是 */
			logisticsFlag: number

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 站点/市场 */
			marketplaces?: string

			/** 移动电话 */
			mobilePhone?: string

			/** 邮编 */
			postcode?: string

			/** 省份 */
			province?: string

			/** 收件人 */
			recipient?: string

			/** 备注 */
			remark?: string

			/** shipment */
			shipment?: string

			/** shipmentName */
			shipmentName?: string

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路，50 卡车 */
			shippingType: number

			/** 来源仓库编号 */
			sourceWarehouseCode: string

			/** 来源仓库名称 */
			sourceWarehouseName: string

			/** 目标仓库编号 */
			targetWarehouseCode: string

			/** 目标仓库名称 */
			targetWarehouseName: string

			/** 是否含税 0:否1:是 */
			taxFlag: number

			/** 固定电话 */
			telephone?: string

			/** 交易主体编号 */
			tradeCompanyCode: string

			/** 交易主体名称 */
			tradeCompanyName: string

			/** 调拨类型：10 普通调拨，20 FBA调拨 */
			type: number
		}

		export class AllocationMasterResponseDto {
			/** 调拨批次号 */
			abno: string

			/** 调拨单号 */
			aono: string

			/** 箱外标签文件路径 */
			boxLabelPath: string

			/** 箱数 */
			boxQty: number

			/** centerId */
			centerId: string

			/** 体积重5k */
			chargeWeight5k: number

			/** 体积重6k */
			chargeWeight6k: number

			/** 货柜号 */
			containerNo: string

			/** 计泡基数 */
			countBubbleBase: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 申报币种 */
			declareCurrency: string

			/** 申报价格 */
			declarePrice: number

			/** 出库时间 */
			deliveryTime: string

			/** 出库单号 */
			dono: string

			/** FBA账号 */
			fbaAccount: string

			/** id */
			id: number

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 是否需要物流面单 0:否 1:是 */
			logisticsFlag: number

			/** 物流面单文件路径 */
			logisticsLabelPath: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 站点/市场 */
			marketplaces: string

			/** 拣货单号 */
			pickno: string

			/** 总数量 */
			qty?: number

			/** referenceId */
			referenceId?: string

			/** 备注 */
			remark: string

			/** shipment */
			shipment: string

			/** shipmentName */
			shipmentName?: string

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
			shippingType: number

			/** 店铺信息 */
			shopDepartmentMappingResponseDto: defs.wms.ShopDepartmentMappingResponseDto

			/** sku种类数量 */
			skuQty?: number

			/** 来源仓库编号 */
			sourceWarehouseCode: string

			/** 来源仓库名称 */
			sourceWarehouseName: string

			/** 调拨状态：10 未处理，20 已打印，30 已拣货，40 已装箱，50 待发运，60 已发运，70 已完成，80 已取消 */
			status: number

			/** 目标仓库编号 */
			targetWarehouseCode: string

			/** 目标仓库名称 */
			targetWarehouseName: string

			/** 是否含税 0:否1:是 */
			taxFlag: number

			/** 交易主体编号 */
			tradeCompanyCode: string

			/** 交易主体名称 */
			tradeCompanyName: string

			/** 调拨类型：10 普通调拨，20 FBA调拨 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 体积 */
			volume: number

			/** 运单号 */
			waybillNo: string

			/** 重量 */
			weight: number
		}

		export class AllocationMasterResultNsDto {
			/** 调拨批次号 */
			abno?: string

			/** 调拨单号 */
			aono?: string

			/** 箱数 */
			boxQty?: number

			/** 货柜号 */
			containerNo?: string

			/** delivery */
			delivery?: boolean

			/** 发货时间 */
			deliveryTime?: string

			/** 出库单号 */
			dono?: string

			/** 发运失败时SKU集合 */
			skuList?: Array<string>

			/** 发货SKU库存明细 */
			storageList?: Array<defs.wms.StorageResultNsDto>

			/** 体积 */
			volume?: number

			/** 发货包裹重量 */
			weight?: number
		}

		export class AllocationMasterUpdateRequestDto {
			/** 调拨单明细 */
			allocationDetailCreateRequestDtos: Array<defs.wms.AllocationDetailCreateRequestDto>

			/** 调拨单号 */
			aono: string

			/** 修改人 */
			updateBy: string
		}

		export class AllocationOperationTimeResponseDto {
			/** 调拨单号 */
			aono?: string

			/** 分箱时间 */
			boxTime?: string

			/** 创建拣货单时间 */
			createPickTime?: string

			/** 创建时间 */
			createTime?: string

			/** 发运时间 */
			deliveryTime?: string

			/** 拣货时间 */
			pickTime?: string
		}

		export class BatchUpdateLogisticsWareParamsDto {
			/** 要新增的关系列表 */
			addParams?: Array<defs.wms.LogisticsChannelWarehouseParamsDto>

			/** 要删除的关系列表 */
			deleteParams?: Array<defs.wms.LogisticsChannelWarehouseParamsDto>
		}

		export class BrandEmailMappingRequestDto {
			/** 品牌 */
			brand: string

			/** 售后邮箱 */
			email: string

			/** id */
			id: number
		}

		export class BrandEmailMappingResponseDto {
			/** 品牌 */
			brand: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 售后邮箱 */
			email: string

			/** id */
			id: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class CenterCountyMappingRequestDto {
			/** centerId */
			centerId: string

			/** 国家简码 */
			countyCode: string

			/** id */
			id: number

			/** shipTo */
			shipTo: string
		}

		export class CenterCountyMappingResponseDto {
			/** centerId */
			centerId: string

			/** 国家简码 */
			countyCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** shipTo */
			shipTo: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class CodeAndNameListResponseDto {
			/** code */
			code?: string

			/** id */
			id: number

			/** name */
			name?: string
		}

		export class CountBubbleUpdateParamsDto {
			/** 计泡基数 */
			countBubbleBase?: number
		}

		export class CountyResponseDto {
			/** 编号 */
			code: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 中文名称 */
			name: string

			/** 英文名称 */
			nameEn: string

			/** 状态 1:启用 0:停用 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class DeleteBillRequestDto {
			/** 单号 */
			code?: Array<string>

			/** 类型 */
			type?: number
		}

		export class DeliveryNoteExcelDetailRequestDto {
			/** 箱数 */
			boxQty?: string

			/** 装箱数量 */
			boxSumQty?: string

			/** 单箱体积 */
			boxVolume?: string

			/** 是否质检 */
			itemCheck?: string

			/** 采购单号 */
			pono?: string

			/** 产品名称 */
			productName?: string

			/** 出货数量 */
			qty?: string

			/** 纸箱尺寸 */
			size?: string

			/** SKU */
			sku?: string

			/** 总体积 */
			sumVolume?: string

			/** 供应商型号款号（选填） */
			type?: string

			/** 单箱重量 */
			weight?: string
		}

		export class DeliveryNoteExcelRequestDto {
			/** 交货单条码 */
			codeUrl?: defs.wms.ImageEntity

			/** 交货单明细数据 */
			data?: Array<defs.wms.DeliveryNoteExcelDetailRequestDto>

			/** 收货地址 */
			deliveryAddress?: string

			/** 送货类别 */
			deliveryCategory?: string

			/** 送货日期 */
			deliveryDate?: string

			/** 送货单号 */
			deliveryNo?: string

			/** 收货单位联系人 */
			deliveryRecipient?: string

			/** 发货方式 */
			deliveryType?: string

			/** 是否包含运费 */
			isContainLogisticsFee?: string

			/** 供货商地址 */
			supplierAddress?: string

			/** 供货商名称 */
			supplierName?: string

			/** 供货商联系人 */
			supplierRecipient?: string

			/** 交易主体 */
			tradeCompany?: string
		}

		export class ImageEntity {
			/** colspan */
			colspan?: number

			/** data */
			data?: string

			/** height */
			height?: number

			/** rowspan */
			rowspan?: number

			/** type */
			type?: string

			/** url */
			url?: string

			/** width */
			width?: number
		}

		export class InDetailBoxInfoCreateRequestDto {
			/** 高 */
			height: number

			/** 长 */
			length: number

			/** 宽 */
			width: number
		}

		export class InDetailBoxPrintResponseDto {
			/** 条码 装箱条码/SKU */
			barcode?: string

			/** 入库单号 */
			iono?: string

			/** 产品标题 */
			productTitle?: string

			/** 数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type?: number

			/** 变体规格 */
			variant?: string
		}

		export class InDetailBoxRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 状态 10:已收货 20:已质检 30:已上架 */
			boxStatus: number

			/** id */
			id: number

			/** 质检数量 */
			inspectionQty: number

			/** 质检备注 */
			inspectionRemark: string

			/** 质检时间 */
			inspectionTime?: string

			/** 入库单号 */
			iono: string

			/** 数量 */
			qty: number

			/** 上架数量 */
			shelvesQty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 不合格数量 */
			unqualifiedQty: number

			/** 不合格原因 不合格原因 10:尺寸问题 20:颜色错误 30:款式问题 40:面料问题 50:货物破损 60:货物缺漏 100:其它 */
			unqualifiedReason: string
		}

		export class InDetailBoxResponseDto {
			/** 条码 装箱条码/SKU */
			barcode?: string

			/** 状态 10:已收货 20:已质检 30:已上架 */
			boxStatus?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** id */
			id?: number

			/** 质检数量 */
			inspectionQty?: number

			/** 质检备注 */
			inspectionRemark?: string

			/** 质检时间 */
			inspectionTime?: string

			/** 入库单号 */
			iono?: string

			/** 数量 */
			qty?: number

			/** 上架数量 */
			shelvesQty?: number

			/** sku */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type?: number

			/** 不合格数量 */
			unqualifiedQty?: number

			/** 不合格原因 不合格原因 10:尺寸问题 20:颜色错误 30:款式问题 40:面料问题 50:货物破损 60:货物缺漏 100:其它 */
			unqualifiedReason?: string

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string
		}

		export class InDetailCreateRequestDto {
			/** 箱子信息 */
			boxInfo: defs.wms.InDetailBoxInfoCreateRequestDto

			/** 箱数 */
			boxNum: number

			/** 质检类型 10:全检 20:抽检 30:免检 */
			inspectionType: number

			/** 计划入库数 */
			planQty: number

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 余数 */
			remainderQty: number

			/** sku */
			sku: string

			/** 供应商变体规格 json */
			supplierVariant?: string

			/** 变体规格 json */
			variant?: string
		}

		export class InDetailInspectionResponseDto {
			/** 需质检数 */
			needInspectionQty?: number

			/** 可质检数 */
			qty?: number

			/** 质检合格率 */
			qualifiedRate?: number
		}

		export class InDetailPutOnRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 库位编号 */
			positionCode?: string

			/** 上架数量 */
			qty: number

			/** SKU */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InDetailReceivingByMxRequestDto {
			/** 条码 装箱条码/SKU */
			barcode?: string

			/** ID */
			id?: number

			/** 质检备注 */
			inspectionRemark?: string

			/** 入库单号 */
			iono?: string

			/** sku */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type?: number

			/** 不合格数量 */
			unqualifiedQty?: number

			/** 不合格原因 */
			unqualifiedReason?: string
		}

		export class InDetailReceivingRequestDto {
			/** 装箱数量 */
			boxNum: number

			/** 每箱数量 */
			perBoxQty: number

			/** 实收数量 */
			receivedQty: number

			/** 余数 */
			remainderQty: number

			/** sku */
			sku: string
		}

		export class InDetailRecordRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** id */
			id: number

			/** 入库单号 */
			iono: string

			/** 库位编号 */
			positionCode: string

			/** 上架数量 */
			shelvesQty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InDetailRecordResponseDto {
			/** 条码 装箱条码/SKU */
			barcode?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** id */
			id?: number

			/** 入库单号 */
			iono?: string

			/** 库位编号 */
			positionCode?: string

			/** 上架数量 */
			shelvesQty?: number

			/** sku */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type?: number

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string
		}

		export class InDetailRecordResultDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 库位编号 */
			positionCode: string

			/** 上架数量 */
			shelvesQty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InDetailRequestDto {
			/** 箱子信息 */
			boxInfo: string

			/** 箱数 */
			boxNum: number

			/** 抽检需质检数 */
			extractInspectionQty: number

			/** 抽检质检次数 */
			extractTimes: number

			/** 抽检不合格数 */
			extractUnqualifiedQty: number

			/** id */
			id: number

			/** 质检数量 */
			inspectionQty: number

			/** 质检类型 10:全检 20:抽检 30:免检 */
			inspectionType: number

			/** 入库单号 */
			iono: string

			/** 物流成本单价 */
			logisticsUnitPrice: number

			/** 计划入库数 */
			planQty: number

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 采购单价 */
			purchaseUnitPrice: number

			/** 收货数量 */
			receivedQty: number

			/** 余数 */
			remainderQty: number

			/** 上架数量 */
			shelvesQty: number

			/** sku */
			sku: string

			/** 供应商变体规格 */
			supplierVariant: string

			/** 不合格数 */
			unqualifiedQty: number

			/** 变体规格 */
			variant: string
		}

		export class InDetailResponseDto {
			/** 箱子信息 */
			boxInfo?: string

			/** 箱数 */
			boxNum?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 抽检需质检数 */
			extractInspectionQty?: number

			/** 抽检质检次数 */
			extractTimes?: number

			/** 抽检不合格数 */
			extractUnqualifiedQty?: number

			/** id */
			id?: number

			/** 质检数量 */
			inspectionQty?: number

			/** 质检类型 10:全检 20:抽检 30:免检 */
			inspectionType?: number

			/** 入库单号 */
			iono?: string

			/** 物流成本单价 */
			logisticsUnitPrice?: number

			/** 计划入库数 */
			planQty?: number

			/** 产品编号 */
			productCode?: string

			/** 图片路径 */
			productImageUrl?: string

			/** 产品标题 */
			productTitle?: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType?: number

			/** 采购单价 */
			purchaseUnitPrice?: number

			/** 收货数量 */
			receivedQty?: number

			/** 余数 */
			remainderQty?: number

			/** 上架数量 */
			shelvesQty?: number

			/** sku */
			sku?: string

			/** 供应商变体规格 */
			supplierVariant?: string

			/** 不合格数 */
			unqualifiedQty?: number

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string

			/** 变体规格 */
			variant?: string
		}

		export class InDetailResultDto {
			/** sku上架明细 */
			detailRecordList: Array<defs.wms.InDetailRecordResultDto>

			/** 计划入库数 */
			planQty: number

			/** 实收数量 */
			receivedQty: number

			/** 上架数量 */
			shelvesQty: number

			/** sku */
			sku: string

			/** 质检不合格数 */
			unqualifiedQty: number
		}

		export class InMasterCreateRequestDto {
			/** 箱数 */
			boxNum: number

			/** 预计到货时间 */
			estimateTime: string

			/** 质检类型 10:全检 20:抽检 */
			inspectionType: number

			/** 计划入库数量 */
			planQty: number

			/** 采购单号 */
			pono?: string

			/** 采购员 */
			purchaser: string

			/** 备注 */
			remark?: string

			/** 入库SKU明细 */
			skuList: Array<defs.wms.InDetailCreateRequestDto>

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
			sourceType: number

			/** 供应商编号 */
			supplierCode?: string

			/** 供应商名称 */
			supplierName?: string

			/** 是否含税 0:否1:是 */
			taxFlag: number

			/** 交易主体编号 */
			tradeCompanyCode: string

			/** 交易主体名称 */
			tradeCompanyName: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo?: string
		}

		export class InMasterInspectionRequestDto {
			/** 条码 装箱条码/SKU */
			barcode?: string

			/** 质检备注 */
			inspectionRemark?: string

			/** 入库单号 */
			iono?: string

			/** 不合格数量 */
			unqualifiedQty?: number

			/** 不合格原因 */
			unqualifiedReason?: string
		}

		export class InMasterInspectionResponseDto {
			/** 入库单SKU装箱信息 */
			inDetailBoxResponseDto?: defs.wms.InDetailBoxResponseDto

			/** 入库单SKU质检信息 */
			inDetailInspectionResponseDto?: defs.wms.InDetailInspectionResponseDto

			/** 入库单SKU */
			inDetailResponseDto?: defs.wms.InDetailResponseDto

			/** 入库单 */
			inMasterResponseDto?: defs.wms.InMasterResponseDto
		}

		export class InMasterPutOnRequestDto {
			/** 入库单号 */
			iono?: string

			/** 上架明细 */
			putOnDetailList?: Array<defs.wms.InDetailPutOnRequestDto>
		}

		export class InMasterPutOnResponseDto {
			/** 入库单SKU装箱信息 */
			inDetailBoxResponseDto?: Array<defs.wms.InDetailBoxResponseDto>

			/** 入库单SKU */
			inDetailResponseDto?: Array<defs.wms.InDetailResponseDto>

			/** 入库单 */
			inMasterResponseDto?: defs.wms.InMasterResponseDto
		}

		export class InMasterReceivingByMxRequestDto {
			/** 入库收货SKU明细 */
			inDetails: Array<defs.wms.InDetailReceivingByMxRequestDto>

			/** 入库单号 */
			iono: string
		}

		export class InMasterReceivingRequestDto {
			/** 入库收货SKU明细 */
			inDetails: Array<defs.wms.InDetailReceivingRequestDto>

			/** 入库单号 */
			iono: string
		}

		export class InMasterReceivingResponseDto {
			/** 入库单装箱明细 */
			inDetailBoxResponseDtoList?: Array<defs.wms.InDetailBoxResponseDto>

			/** 入库单明细 */
			inDetailResponseDtoList?: Array<defs.wms.InDetailResponseDto>

			/** 入库单 */
			inMasterResponseDto?: defs.wms.InMasterResponseDto
		}

		export class InMasterResponseDto {
			/** 箱数 */
			boxNum?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 预计到货时间 */
			estimateTime?: string

			/** id */
			id?: number

			/** 质检类型 10:全检 20:抽检 30:免检 */
			inspectionType?: number

			/** 入库单号 */
			iono?: string

			/** 数量(计划入库数量) */
			planQty?: number

			/** 采购单号 */
			pono?: string

			/** 采购员 */
			purchaser?: string

			/** 备注 */
			remark?: string

			/** 上架数量 */
			shelvesQty?: number

			/** 签收人 */
			signatory?: string

			/** 签收时间 */
			signingTime?: string

			/** 来源单号 */
			sourceNo?: string

			/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
			sourceType?: number

			/** 状态 10:未签收 20:已签收 30:已收货 40:已质检 50:已称重 60:已上架 65:已完成 70:已取消 */
			status?: number

			/** 供应商编号 */
			supplierCode?: string

			/** 供应商名称 */
			supplierName?: string

			/** 是否含税 0:否1:是 */
			taxFlag?: number

			/** 交易主体编号 */
			tradeCompanyCode?: string

			/** 交易主体名称 */
			tradeCompanyName?: string

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string

			/** 仓库编号 */
			warehouseCode?: string

			/** 仓库名称 */
			warehouseName?: string

			/** 运单号 */
			waybillNo?: string

			/** 收货备注 */
			waybillRemark?: string
		}

		export class InMasterResultDto {
			/** 入库明细 */
			detailList: Array<defs.wms.InDetailResultDto>

			/** 备注 */
			remark: string

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
			sourceType: number
		}

		export class InoutStepRecordRequestDto {
			/** 条码 */
			barcode: string

			/** id */
			id: number

			/** 操作内容 */
			operationContent: string

			/** 操作单号 */
			operationNo: string

			/** 单据类型 10:入库单 20:出库单 */
			operationOrderType: number

			/** 类型 10:收货 20:质检 30:称重 40:上架 50:下架 60:校验 70:发货 80:还货 */
			operationType: number

			/** 库位 */
			positionCode?: string

			/** 产品数量 */
			qty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InoutStepRecordResponseDto {
			/** 条码 */
			barcode?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 操作内容 */
			operationContent?: string

			/** 操作单号 */
			operationNo?: string

			/** 单据类型 10:入库单 20:出库单 */
			operationOrderType?: number

			/** 类型 10:收货 20:质检 30:称重 40:上架 50:下架 60:校验 70:发货 80:还货 */
			operationType?: number

			/** 库位 */
			positionCode?: string

			/** 产品名称 */
			productTitle?: string

			/** 产品数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 类型 1:已装箱 2:未装箱 */
			type?: number

			/** 仓库编号 */
			warehouseCode?: string

			/** 仓库名称 */
			warehouseName?: string
		}

		export class InventoryCreateForSkuRequestDto {
			/** 备注 */
			remark?: string

			/** sku */
			sku: string

			/** 仓库编码 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class InventoryDetailRecordResponseDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 盘点单单号 */
			icno: string

			/** id */
			id: number

			/** 库位编号 */
			positionCode: string

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 数量 */
			qty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 变体规格 */
			variants: string
		}

		export class InventoryDetailResultRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 盘点数 */
			inventoryQty: number

			/** 库位编号 */
			positionCode: string

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InventoryDetailResultResponseDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 盘点单单号 */
			icno: string

			/** id */
			id: number

			/** 盘点数 */
			inventoryQty: number

			/** 盘亏数量 */
			lossesQty: number

			/** 操作人 */
			operator: string

			/** 库位编号 */
			positionCode: string

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** sku */
			sku: string

			/** 盘盈数量 */
			surplusQty: number

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 变体规格 */
			variants: string
		}

		export class InventoryDetailResultStatisticsRequestDto {
			/** 盘点单单号 */
			icno: string

			/** 操作人 */
			operator: string

			/** 库位编号 */
			positionCode: string

			/** 产品盘点明细 */
			resultRequestDtos: Array<defs.wms.InventoryDetailResultRequestDto>
		}

		export class InventoryErrorListResponseDto {
			/** 审核时间 */
			auditTime: string

			/** 审核人 */
			auditor: string

			/** 盘点单号 */
			icno: string

			/** 库位 */
			positionCode: string

			/** 数量差异 */
			quantityVariance: number

			/** 备注 */
			remark: string

			/** sku */
			sku: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class InventoryMasterRequestDto {
			/** 对账类型 10:账到实 20:实到账 */
			checkType: number

			/** 盘点单号 */
			icno: string

			/** 库位 */
			inventoryPositions: Array<string>

			/** 盘点类型：10：普通盘点 ，20：年度盘点 */
			inventoryType: number

			/** 计划开始时间 */
			planBeginTime: string

			/** 计划结束时间 */
			planEndTime: string

			/** 备注 */
			remark?: string

			/** 异常盘点sku */
			sku?: string

			/** 仓库编码 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class InventoryMasterResponseDto {
			/** 实际开始时间 */
			actualBeginTime: string

			/** 实际结束时间 */
			actualEndTime: string

			/** 审核时间 */
			auditTime: string

			/** 审核人 */
			auditor: string

			/** 对账类型 10:账到实 20:实到账 */
			checkType: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 盘点单号 */
			icno: string

			/** id */
			id: number

			/** 库位 */
			inventoryPositionList: Array<defs.wms.InventoryPositionResponseDto>

			/** 盘点状态：10:待执行 20:执行中 30:已执行 35:待审核 38:已驳回 40:已完成 */
			inventoryStatus: number

			/** 盘点类型：10:普通盘点 ，20:年度盘点，30:异常盘点 */
			inventoryType: number

			/** 计划开始时间 */
			planBeginTime: string

			/** 计划结束时间 */
			planEndTime: string

			/** 备注 */
			remark: string

			/** 异常盘点sku */
			sku: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编码 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class InventoryMasterResultNsDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 盘点单单号 */
			icno: string

			/** 盘亏数量 */
			lossesQty: number

			/** 操作人 */
			operator: string

			/** 库位编号 */
			positionCode: string

			/** sku */
			sku: string

			/** 盘盈数量 */
			surplusQty: number

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class InventoryPositionResponseDto {
			/** 库区编号 */
			areaCode: string

			/** 货架组编号 */
			groupCode: string

			/** 盘点单单号 */
			icno: string

			/** id */
			id: number

			/** 库位编号 */
			positionCode: string

			/** 货架编号 */
			shelvesCode: string

			/** 仓库编码 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class InventoryScreenPositionResponseDto {
			/** 库区编号 */
			areaCode?: string

			/** 货架组编号 */
			groupCode?: string

			/** 库位编号 */
			positionCode?: string

			/** 货架编号 */
			shelvesCode?: string

			/** 仓库编号 */
			warehouseCode?: string
		}

		export class LogisticsChannelAddRequestDto {
			/** 渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 面单要求 */
			labelStandard: string

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 业务属性分类 */
			serviceProperty: number
		}

		export class LogisticsChannelDiscountRequestDto {
			/** 折扣  默认1.0 */
			discount: number
		}

		export class LogisticsChannelJoinGroupResponseDto {
			/** 渠道编号 */
			channelCode?: string

			/** 物流分组编号 */
			logisticsGroupCode?: string

			/** 物流分组名称 */
			logisticsGroupName?: string

			/** 物流商编号 */
			providerCode?: string
		}

		export class LogisticsChannelLabelStandardRequestDto {
			/** 渠道编号 */
			channelCode: string

			/** 面单要求 */
			labelStandard: string

			/** 物流商编号 */
			providerCode: string
		}

		export class LogisticsChannelMsgRequestDto {
			/** 平均时效 (天) */
			averageDay?: number | undefined

			/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
			channelType?: number | undefined

			/** 计重类型 10：毛重体积重最大值/Max(材积,实重), 20：方/立方米, 30：体积重，默认为10 */
			countWeightType?: number | undefined

			/** 默认进位重 默认为：1.000 */
			defaultCarryBit?: number | undefined

			/** 物流分组编号 */
			groupCodeList?: Array<string>

			/** 物流分组编号 */
			providerName?: string | undefined
		}

		export class LogisticsChannelPlatformRequestDto {
			/** 物流渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** id */
			id: number

			/** 10:货物到达后不生成最终单号，20:货物到达后生成最终单号 */
			isGenerateFtno: number

			/** 平台编号 */
			platformCode: string

			/** 平台名称 */
			platformName: string

			/** 平台邮寄方式 */
			platformPost: string

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 状态 1:启用 0:停用 */
			status: number

			/** 跟踪地址 */
			traceAddresse: string

			/** 10:取最终单号，20:取物流商单号 */
			trackingNoType: number

			/** 10:上传运单号，20:不填单号上传，30:NoShipping */
			waybillNoUploadWay: number
		}

		export class LogisticsChannelPlatformResponseDto {
			/** 物流渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 10:货物到达后不生成最终单号，20:货物到达后生成最终单号 */
			isGenerateFtno: number

			/** 平台编号 */
			platformCode: string

			/** 平台名称 */
			platformName: string

			/** 平台邮寄方式 */
			platformPost: string

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 状态 1:启用 0:停用 */
			status: number

			/** 跟踪地址 */
			traceAddresse: string

			/** 10:取最终单号，20:取物流商单号 */
			trackingNoType: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 10:上传运单号，20:不填单号上传，30:NoShipping */
			waybillNoUploadWay: number
		}

		export class LogisticsChannelPriceModel {
			/** additionalWeightPrice */
			additionalWeightPrice?: number

			/** additionalWeightUnit */
			additionalWeightUnit?: number

			/** beginWeight */
			beginWeight?: number

			/** channelCode */
			channelCode?: string

			/** channelName */
			channelName?: string

			/** createBy */
			createBy?: string

			/** createTime */
			createTime?: string

			/** deleted */
			deleted?: number

			/** endWeight */
			endWeight?: number

			/** excessAdditionalWeightPrice */
			excessAdditionalWeightPrice?: number

			/** excessAdditionalWeightUnit */
			excessAdditionalWeightUnit?: number

			/** excessFirstWeight */
			excessFirstWeight?: number

			/** excessFirstWeightPrice */
			excessFirstWeightPrice?: number

			/** firstWeight */
			firstWeight?: number

			/** firstWeightPrice */
			firstWeightPrice?: number

			/** id */
			id?: number

			/** matchPostcode */
			matchPostcode?: string

			/** providerCode */
			providerCode?: string

			/** providerName */
			providerName?: string

			/** registrationPrice */
			registrationPrice?: number

			/** targetCountryCode */
			targetCountryCode?: string

			/** targetCountryName */
			targetCountryName?: string

			/** updateBy */
			updateBy?: string

			/** updateTime */
			updateTime?: string
		}

		export class LogisticsChannelPriceRequestDto {
			/** 续重费用 */
			additionalWeightPrice: number

			/** 续重单位数量 */
			additionalWeightUnit: number

			/** begin重量 > */
			beginWeight: number

			/** 物流渠道编号 */
			channelCode: string

			/** 物流渠道名称 */
			channelName: string

			/** end重量 <= */
			endWeight: number

			/** 附加费续重费用 */
			excessAdditionalWeightPrice: number

			/** 附加费续重单位 */
			excessAdditionalWeightUnit: number

			/** 附加费首重 */
			excessFirstWeight: number

			/** 附加费首重费用 */
			excessFirstWeightPrice: number

			/** 首重 */
			firstWeight: number

			/** 首重费用(RMB)  */
			firstWeightPrice: number

			/** id */
			id?: number

			/** 邮编匹配正则 */
			matchPostcode: string

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 挂号费(RMB) */
			registrationPrice: number

			/** 目标国家简码 */
			targetCountryCode: string

			/** 目标国家名称 */
			targetCountryName: string
		}

		export class LogisticsChannelPriceResponseDto {
			/** 续重费用 */
			additionalWeightPrice: number

			/** 续重单位数量 */
			additionalWeightUnit: number

			/** begin重量 > */
			beginWeight: number

			/** 物流渠道编号 */
			channelCode: string

			/** 物流渠道名称 */
			channelName: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** end重量 <= */
			endWeight: number

			/** 附加费续重费用 */
			excessAdditionalWeightPrice: number

			/** 附加费续重单位 */
			excessAdditionalWeightUnit: number

			/** 附加费首重 */
			excessFirstWeight: number

			/** 附加费首重费用 */
			excessFirstWeightPrice: number

			/** 首重 */
			firstWeight: number

			/** 首重费用(RMB)  */
			firstWeightPrice: number

			/** id */
			id: number

			/** 邮编匹配正则 */
			matchPostcode: string

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 挂号费(RMB) */
			registrationPrice: number

			/** 目标国家简码 */
			targetCountryCode: string

			/** 目标国家名称 */
			targetCountryName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class LogisticsChannelResponseDto {
			/** 平均时效 (天) */
			averageDay: number

			/** 渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
			channelType: number

			/** 联系方式 */
			contact: string

			/** 计泡基数 */
			countBubbleBase: number

			/** 计重类型 10：毛重体积重最大值/Max(材积,实重), 20：方/立方米, 30：体积重 */
			countWeightType: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 默认进位重 */
			defaultCarryBit: number

			/** 折扣  默认1.0 */
			discount: number

			/** 物流分组适用列表 */
			groupList?: Array<defs.wms.LogisticsChannelJoinGroupResponseDto>

			/** id */
			id: number

			/** 面单要求 */
			labelStandard: string

			/** 渠道服务适用仓库列表 */
			logisticsChannelWarehouseResponseDtos?: Array<defs.wms.LogisticsChannelWarehouseResponseDto>

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 业务属性分类 10：toC, 20：toB */
			serviceProperty: number

			/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
			shippingType: number

			/** 状态 1:启用 0:停用 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class LogisticsChannelStatusRequestDto {
			/** 状态 1:启用 0:停用 */
			status: number
		}

		export class LogisticsChannelWarehouseParamsDto {
			/** 物流渠道编号 */
			channelCode?: string

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** id */
			id?: number

			/** 物流商编号 */
			providerCode?: string

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string

			/** 仓库编号 */
			warehouseCode?: string

			/** 仓库名称 */
			warehouseName?: string
		}

		export class LogisticsChannelWarehouseRequestDto {
			/** 物流渠道编号 */
			channelCode: string

			/** id */
			id: number

			/** 物流商编号 */
			providerCode: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class LogisticsChannelWarehouseResponseDto {
			/** 物流渠道编号 */
			channelCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 物流商编号 */
			providerCode: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class LogisticsGroupModifyRequestDto {
			/** 物流分组编号 */
			logisticsGroupCode: string
		}

		export class LogisticsGroupRequestDto {
			/** id */
			id: number

			/** 物流分组编号 */
			logisticsGroupCode: string

			/** 物流分组名称 */
			logisticsGroupName: string

			/** 状态 1:启用 0:停用 */
			status: number
		}

		export class LogisticsGroupResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 物流分组编号 */
			logisticsGroupCode: string

			/** 物流分组名称 */
			logisticsGroupName: string

			/** 状态 1:启用 0:停用 */
			status: number

			/** 状态名称 1:启用 0:停用 */
			statusName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class LogisticsProviderChannelResponseDto {
			/** 平均时效 (天) */
			averageDay: number

			/** 渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 渠道类型 10:快递类 20:邮政类 30:专线类 */
			channelType: number

			/** 联系方式 */
			contact: string

			/** id */
			id: number

			/** 面单要求 */
			labelStandard?: string

			/** 渠道列表 */
			logisticsChannelResponseDtos: Array<defs.wms.LogisticsProviderChannelResponseDto>

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 状态 1:启用 0:停用 */
			status: number
		}

		export class LogisticsProviderResponseDto {
			/** 联系方式 */
			contact: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 预报邮箱 */
			forecastMails: string

			/** id */
			id: number

			/** 面单要求 */
			labelStandard: string

			/** 渠道商适用仓库列表 */
			logisticsChannelWarehouseResponseDtos?: Array<defs.wms.LogisticsChannelWarehouseResponseDto>

			/** 物流商编号 */
			providerCode: string

			/** 物流商名称 */
			providerName: string

			/** 业务属性分类 10:toB 20:toC */
			serviceProperty: number

			/** 状态 1:启用 0:停用 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 渠道编码 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 物流分组 */
			groupList: Array
		}

		export class LogisticsReturnRecordResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 处理结果 10:入库 20:报损 30:重发 */
			handleResult: number

			/** id */
			id: number

			/** 退件记录号 */
			returnNo: string

			/** 退件签收时间 */
			signTime: string

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:销售订单 20:调拨单 */
			sourceType: number

			/** 状态 10:未处理 20:已处理 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class LogisticsShippingTypeRequestDto {
			/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
			shippingType: number
		}

		export class LogisticsShippingTypeResponseDto {
			/** 渠道编号 */
			channelCode: string

			/** 物流商编号 */
			providerCode: string

			/** 运输方式：10 sea-普通，20 air-快递-红单，30 air-专线-红单 */
			shippingType?: number
		}

		export class LogisticsTariffThresholdRequestDto {
			/** 货币单位 */
			currencyUnit: string

			/** id */
			id: number

			/** 起始国家简码 */
			originCountryCode: string

			/** 起始国家 */
			originCountryName: string

			/** 目标国家简码 */
			targetCountryCode: string

			/** 目标国家 */
			targetCountryName: string

			/** 起征点 */
			threshold: number
		}

		export class LogisticsTariffThresholdResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 货币单位 */
			currencyUnit: string

			/** id */
			id: number

			/** 起始国家简码 */
			originCountryCode: string

			/** 起始国家 */
			originCountryName: string

			/** 目标国家简码 */
			targetCountryCode: string

			/** 目标国家 */
			targetCountryName: string

			/** 起征点 */
			threshold: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class LogisticsWaybillLabelResponseDto {
			/** 内容 */
			content: string

			/** 数据类型 1:url 2:base64 */
			contentType: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 文件类型 */
			fileType: string

			/** id */
			id: number

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 文件路径 */
			path: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 运单号 */
			waybillNo: string
		}

		export class NsCallbackForUpdateBoxRequestDto {
			/** 地址 */
			address?: string

			/** 调拨单号 */
			aono: string

			/** 箱外标签文件路径 */
			boxLabelPath?: string

			/** 城市 */
			city?: string

			/** 国家 */
			country?: string

			/** 国家简码 */
			countryCode?: string

			/** 邮箱地址 */
			email?: string

			/** 物流面单文件路径 */
			logisticsLabelPath?: string

			/** 移动电话 */
			mobilePhone?: string

			/** 邮编 */
			postcode?: string

			/** 省份 */
			province?: string

			/** 收件人 */
			recipient?: string

			/** 固定电话 */
			telephone?: string

			/** 运单号 */
			waybillNo?: string
		}

		export class NsRequestRecordResponseDto {
			/** 请求编号 */
			apiCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 操作单号 */
			operationNo: string

			/** 单据类型 10:入库单 20:出库单 30:调拨单 40:装柜单 50:盘点单 60:报损单 70:移库 */
			operationOrderType: number

			/** 请求body */
			requestBody: string

			/** 请求流水ID */
			requestId: string

			/** 请求状态 10:处理中 20:处理成功 30:处理失败 */
			requestStatus: number

			/** 返回数据 */
			resultData: string

			/** 重试次数 */
			retryTimes: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class NsStorageRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 库位编号 */
			positionCode: string

			/** 数量 */
			qty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class NsStorageResponseDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** id */
			id: number

			/** 库位编号 */
			positionCode: string

			/** 数量 */
			qty: number

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class NsUpdateReferenceIdRequestDto {
			/** 调拨单号 */
			aono: string

			/** referenceId */
			referenceId: string
		}

		export class OperationRecordResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 操作描述 */
			operationDescribe: string

			/** 操作单号 */
			operationNo: string

			/** 操作类型  */
			operationType: number

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 50:销售订单 60:采购退货出库 70:调拨出库 80:借调出库 */
			sourceType: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class OutCheckResponseDto {
			/** 地址 */
			address: string

			/** 城市 */
			city: string

			/** 国家 */
			country: string

			/** 国家简码 */
			countryCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 发货时间 */
			deliveryTime: string

			/** 出库单号 */
			dono: string

			/** 邮箱地址 */
			email: string

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流面单文件路径 */
			logisticsLabelPath: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 移动电话 */
			mobilePhone: string

			/** 出库单校验产品明细 */
			outInfoSkuResponseDtos?: Array<defs.wms.OutInfoSkuResponseDto>

			/** 拣货单号 */
			pickno: string

			/** 平台编号 */
			platformCode: string

			/** 平台名称 */
			platformName: string

			/** 邮编 */
			postcode: string

			/** 省份 */
			province: string

			/** 数量 */
			qty: number

			/** 收件人 */
			recipient: string

			/** 备注 */
			remark: string

			/** 平台编号 */
			shopCode: string

			/** 店铺名称 */
			shopName: string

			/** 来源单号 */
			sourceNo: string

			/** 来源订单状态 10:正常 20:订单取消 */
			sourceStatus: number

			/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
			sourceType: number

			/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
			status: number

			/** 固定电话 */
			telephone: string

			/** 最终跟踪号 */
			trackingNo: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo: string

			/** 出库重量 */
			weight: number
		}

		export class OutDetailCheckRequestDto {
			/** 校验数量 */
			qty: number

			/** SKU */
			sku: string
		}

		export class OutDetailCreateFromSaleRequestDto {
			/** 单价 */
			price: number

			/** 产品编号 */
			productCode?: string

			/** 图片路径 */
			productImageUrl?: string

			/** 产品标题 */
			productTitle?: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType?: number

			/** 出库数量 */
			qty: number

			/** sku */
			sku: string

			/** 变体规格 */
			variants?: string
		}

		export class OutDetailCreateRequestDto {
			/** 产品编号 */
			productCode?: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType?: number

			/** 出库数量 */
			qty: number

			/** sku */
			sku: string

			/** 变体规格 */
			variants?: string
		}

		export class OutInfoResponseDto {
			/** 地址 */
			address: string

			/** 城市 */
			city: string

			/** 国家 */
			country: string

			/** 国家简码 */
			countryCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 发货时间 */
			deliveryTime: string

			/** 配货位 */
			distribute?: number

			/** 出库单号 */
			dono: string

			/** 邮箱地址 */
			email: string

			/** 出库sku信息 */
			infoSkuList?: Array<defs.wms.OutInfoSkuResponseDto>

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流面单文件路径 */
			logisticsLabelPath: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 移动电话 */
			mobilePhone: string

			/** 拣货单号 */
			pickno: string

			/** 平台编号 */
			platformCode: string

			/** 平台名称 */
			platformName: string

			/** 邮编 */
			postcode: string

			/** 省份 */
			province: string

			/** 数量 */
			qty: number

			/** 收件人 */
			recipient: string

			/** 备注 */
			remark: string

			/** 平台编号 */
			shopCode: string

			/** 店铺名称 */
			shopName: string

			/** 来源单号 */
			sourceNo: string

			/** 来源订单状态 10:正常 20:订单取消 */
			sourceStatus: number

			/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
			sourceType: number

			/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
			status: number

			/** 固定电话 */
			telephone: string

			/** 最终跟踪号 */
			trackingNo: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo: string

			/** 出库重量 */
			weight: number
		}

		export class OutInfoSkuResponseDto {
			/** 出库单号 */
			dono: string

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 出库数量 */
			qty: number

			/** sku */
			sku: string

			/** 变体规格 */
			variants: string
		}

		export class OutMasterCreateFromSaleRequestDto {
			/** 地址 */
			address?: string

			/** 城市 */
			city?: string

			/** 国家 */
			country?: string

			/** 国家简码 */
			countryCode?: string

			/** 出库单明细 */
			detailCreateRequestDtos: Array<defs.wms.OutDetailCreateFromSaleRequestDto>

			/** 邮箱地址 */
			email?: string

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 移动电话 */
			mobilePhone?: string

			/** 平台编号 */
			platformCode?: string

			/** 平台名称 */
			platformName?: string

			/** 平台订单号 */
			platformOrderId?: string

			/** 邮编 */
			postcode?: string

			/** 省份 */
			province?: string

			/** 下单时间 */
			purchaseDate?: string

			/** 数量 */
			qty?: number

			/** 收件人 */
			recipient?: string

			/** 备注 */
			remark?: string

			/** 店铺编号 */
			shopCode?: string

			/** 店铺名称 */
			shopName?: string

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 50:SP销售单 60:委托单 70:多渠道订单 */
			sourceType: number

			/** 固定电话 */
			telephone?: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class OutMasterCreateRequestDto {
			/** 地址 */
			address?: string

			/** 城市 */
			city?: string

			/** 国家 */
			country?: string

			/** 国家简码 */
			countryCode?: string

			/** 出库单明细 */
			detailCreateRequestDtos: Array<defs.wms.OutDetailCreateRequestDto>

			/** 邮箱地址 */
			email?: string

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流面单文件路径 */
			logisticsLabelPath?: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 移动电话 */
			mobilePhone?: string

			/** 平台编号 */
			platformCode?: string

			/** 平台名称 */
			platformName?: string

			/** 邮编 */
			postcode?: string

			/** 省份 */
			province?: string

			/** 数量 */
			qty?: number

			/** 收件人 */
			recipient?: string

			/** 备注 */
			remark?: string

			/** 店铺编号 */
			shopCode?: string

			/** 店铺名称 */
			shopName?: string

			/** 来源单号 */
			sourceNo: string

			/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
			sourceType: number

			/** 固定电话 */
			telephone?: string

			/** 最终跟踪号 */
			trackingNo?: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo?: string
		}

		export class OutMasterResponseDto {
			/** 地址 */
			address: string

			/** 城市 */
			city: string

			/** 国家 */
			country: string

			/** 国家简码 */
			countryCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 发货时间 */
			deliveryTime: string

			/** 出库单号 */
			dono: string

			/** 邮箱地址 */
			email: string

			/** id */
			id: number

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流面单文件路径 */
			logisticsLabelPath: string

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 移动电话 */
			mobilePhone: string

			/** 拣货单号 */
			pickno: string

			/** 平台编号 */
			platformCode: string

			/** 平台名称 */
			platformName: string

			/** 邮编 */
			postcode: string

			/** 省份 */
			province: string

			/** 下单时间 */
			purchaseDate: string

			/** 数量 */
			qty: number

			/** 收件人 */
			recipient: string

			/** 备注 */
			remark: string

			/** 平台编号 */
			shopCode: string

			/** 店铺名称 */
			shopName: string

			/** 来源单号 */
			sourceNo: string

			/** 来源订单状态 10:正常 20:订单取消 */
			sourceStatus: number

			/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
			sourceType: number

			/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
			status: number

			/** 固定电话 */
			telephone: string

			/** 最终跟踪号 */
			trackingNo: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo: string

			/** 出库重量 */
			weight: number
		}

		export class OutMasterResultNsDto {
			/** delivery */
			delivery?: boolean

			/** 发货时间 */
			deliveryTime?: string

			/** 发运失败时SKU集合 */
			skuList?: Array<string>

			/** 来源单号 */
			sourceNo?: string

			/** 来源类型 */
			sourceType?: number

			/** 发货SKU库存明细 */
			storageList?: Array<defs.wms.StorageResultNsDto>

			/** 发货包裹重量 */
			weight?: number
		}

		export class OutReturnRequestDto {
			/** 库位还货产品明细 */
			outReturnSerialRequestDtos?: Array<defs.wms.OutReturnSerialRequestDto>

			/** 库位编号 */
			positionCode?: string
		}

		export class OutReturnResponseDto {
			/** 出库单号 */
			dono?: string

			/** 产品编号 */
			productCode?: string

			/** 图片路径 */
			productImageUrl?: string

			/** 产品标题 */
			productTitle?: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType?: number

			/** 数量 */
			realQty?: number

			/** sku */
			sku?: string

			/** 变体规格 */
			variants?: string
		}

		export class OutReturnSerialRequestDto {
			/** 数量 */
			qty?: number

			/** sku */
			sku?: string
		}

		export class OutReturnSignRequestDto {
			/** 出库单号 */
			dono?: string

			/** 备注 */
			remark?: string
		}

		export class OutStorageInterceptRequestDto {
			/** 来源单号 */
			sourceNo?: string

			/** 来源类型 50:SP销售单 */
			sourceType?: number
		}

		export class PackageDetailResponseDto {
			/** 地址 */
			address: string

			/** 渠道编号 */
			channelCode: string

			/** 渠道名称 */
			channelName: string

			/** 城市 */
			city: string

			/** 国家 */
			country: string

			/** 国家简码 */
			countryCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 发货时间 */
			deliveryTime: string

			/** 出库单号 */
			dono: string

			/** 主键 */
			id: number

			/** 订单号 */
			orderNo: string

			/** 订单状态 */
			orderStatus: number

			/** pkg号 */
			pkg: string

			/** 省份 */
			province: string

			/** 发货数量 */
			qty: number

			/** 备注 */
			remark: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 运单号 */
			waybillNo: string
		}

		export class PackageMasterDetailResponseDto {
			/** 包裹分拣详情 */
			detailResponseDtos?: Array<defs.wms.PackageDetailResponseDto>

			/** 包裹分拣主表 */
			masterResponseDto?: defs.wms.PackageMasterResponseDto
		}

		export class PackageMasterResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 发运时间 */
			deliveryTime: string

			/** 主键 */
			id: number

			/** 物流商编号 */
			logisticsProviderCode: string

			/** 物流商名称 */
			logisticsProviderName: string

			/** pkg号 */
			pkg: string

			/** 备注 */
			remark: string

			/** 状态 10:未扫描 20:已扫描 30:已发运 40:已取消 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class PackageWaybillResponseDto {
			/** 地址 */
			address?: string

			/** 城市 */
			city?: string

			/** 关联单号 */
			correlationNo?: string

			/** 国家 */
			country?: string

			/** 国家简码 */
			countryCode?: string

			/** 物流渠道 */
			logisticsChannel?: string

			/** 物流渠道商 */
			logisticsProvider?: string

			/** 操作单号 */
			operationNo?: string

			/** 订单状态 */
			orderStatus?: number

			/** 省份 */
			province?: string

			/** 物流跟踪号 */
			trackingNo?: string

			/** 运单号 */
			waybillNo?: string
		}

		export class PageInfo<T0 = any> {
			/** endRow */
			endRow?: number

			/** hasNextPage */
			hasNextPage?: boolean

			/** hasPreviousPage */
			hasPreviousPage?: boolean

			/** isFirstPage */
			isFirstPage?: boolean

			/** isLastPage */
			isLastPage?: boolean

			/** list */
			list?: Array<T0>

			/** navigateFirstPage */
			navigateFirstPage?: number

			/** navigateLastPage */
			navigateLastPage?: number

			/** navigatePages */
			navigatePages?: number

			/** navigatepageNums */
			navigatepageNums?: Array<number>

			/** nextPage */
			nextPage?: number

			/** pageNum */
			pageNum?: number

			/** pageSize */
			pageSize?: number

			/** pages */
			pages?: number

			/** prePage */
			prePage?: number

			/** size */
			size?: number

			/** startRow */
			startRow?: number

			/** total */
			total?: number
		}

		export class PdfContentDto {
			/** base64 */
			base64?: string
		}

		export class PickAddRequestDto {
			/** 创建拣货单筛选项 */
			pickDetailFilterRequestDto?: defs.wms.PickDetailFilterRequestDto

			/** 出库单配货位列表 */
			pickOutRequestDtoList?: Array<defs.wms.PickOutRequestDto>
		}

		export class PickDetailFilterRequestDto {
			/** 出库单开始创建时间 */
			beginCreateTime?: string

			/** begin总数量 */
			beginQty?: number

			/** 出库单结束创建时间 */
			endCreateTime?: string

			/** end总数量 */
			endQty?: number

			/** 物流渠道 */
			logisticsList?: Array<string>

			/** 平台 */
			platformList?: Array<string>

			/** 包裹上限 */
			upperLimit?: number

			/** 仓库编号 */
			warehouseCode?: string
		}

		export class PickDetailFilterResponseDto {
			/** 配货位 */
			distribute?: string

			/** 出库单号 */
			dono?: string

			/** 物流渠道 */
			logistics?: string

			/** 平台名称 */
			platformName?: string

			/** 运单号 */
			waybillNo?: string
		}

		export class PickDetailResponseDto {
			/** 地址 */
			address: string

			/** 配货位 */
			distribute?: number

			/** 出库单号 */
			dono?: string

			/** 物流渠道 */
			logisticsChannel?: string

			/** 拣货单号 */
			pickno?: string

			/** 平台编号 */
			platformCode?: string

			/** 平台名称 */
			platformName?: string

			/** 店铺名称 */
			shopName?: string

			/** 来源单号 */
			sourceNo?: string

			/** 来源类型 10:销售订单 20:调拨单 30:库存调整单 40:移库单 */
			sourceType?: number

			/** 状态 10:待拣货 20:已拣货 30:已校验 40:校验失败 50:已称重 60:已发运 */
			status?: number

			/** 仓库编号 */
			warehouseCode?: string

			/** 仓库名称 */
			warehouseName?: string

			/** 运单号 */
			waybillNo?: string
		}

		export class PickDetailSerialResponseDto {
			/** asin */
			asin: string

			/** 条码 装箱条码/SKU */
			barcode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 配货位 */
			distribute?: number

			/** 出库单号 */
			dono: string

			/** fnsku */
			fnsku: string

			/** id */
			id: number

			/** msku */
			msku: string

			/** 拣货单号 */
			pickno: string

			/** 库位编号 */
			positionCode: string

			/** 产品编号 */
			productCode: string

			/** 图片路径 */
			productImageUrl: string

			/** 产品标题 */
			productTitle: string

			/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
			productType: number

			/** 数量 */
			qty: number

			/** 实拣数量 */
			realQty: number

			/** sku */
			sku: string

			/** 状态 10:未拣货 20:已拣货 30:丢失 40:已还货 */
			status: number

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 变体规格 */
			variants: string
		}

		export class PickInfoPositionResponseDto {
			/** 库位编号 */
			positionCode?: string

			/** 拣货sku */
			skuResponseDtos?: Array<defs.wms.PickInfoSkuResponseDto>
		}

		export class PickInfoResponseDto {
			/** 包裹数 */
			boxNum?: number

			/** 创建时间 */
			createTime?: string

			/** 物流渠道 */
			logisticsChannelName?: string

			/** 物流商 */
			logisticsProviderName?: string

			/** 拣货单号 */
			pickno?: string

			/** 拣货库位列表 */
			positionResponseDtos?: Array<defs.wms.PickInfoPositionResponseDto>

			/** 拣货数量 */
			qty?: number

			/** 备注 */
			remark?: string

			/** shipment */
			shipment?: string

			/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
			shippingType?: number

			/** 目标仓库名称 */
			targetWarehouseName?: string

			/** 交易主体 */
			tradeCompanyName?: string

			/** 来源仓库名称 */
			warehouseName?: string
		}

		export class PickInfoSkuDetailResponseDto {
			/** 配货位 */
			distribute?: number

			/** fnsku */
			fnsku?: string

			/** 物流分组 */
			logisticsGroup?: string

			/** 库位编号 */
			positionCode?: string

			/** 产品标题 */
			productTitle?: string

			/** 拣货数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 规格 */
			variants?: string
		}

		export class PickInfoSkuResponseDto {
			/** 库位编号 */
			positionCode?: string

			/** 拣货数量 */
			qty?: number

			/** sku */
			sku?: string

			/** sku配货明细 */
			skuDetailResponseDtos?: Array<defs.wms.PickInfoSkuDetailResponseDto>

			/** 规格 */
			variants?: string
		}

		export class PickMasterResponseDto {
			/** 库位数量 */
			binNum: number

			/** 包裹数量 */
			boxNum: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 总数量 */
			num: number

			/** 拣货单号 */
			pickno: string

			/** 打印人 */
			printBy: string

			/** 打印时间 */
			printTime: string

			/** 打印标识 0：否1：是 */
			printed: boolean

			/** 产品数量 (sku+批次) */
			productNum: number

			/** 备注 */
			remark: string

			/** 状态 0:未拣货 1:已拣货 */
			status: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class PickOutRequestDto {
			/** 配货位 */
			distribute?: number

			/** 出库单号 */
			dono?: string
		}

		export class PickPositionResponseDto {
			/** 拣货产品 */
			pickDetailSerialResponseDtos?: Array<defs.wms.PickDetailSerialResponseDto>

			/** 库位编号 */
			positionCode?: string
		}

		export class PickRequestDto {
			/** 条码 */
			barcode?: string

			/** dono */
			dono?: string

			/** id */
			id?: number

			/** 拣货单号 */
			pickno?: string

			/** 库位编号 */
			positionCode?: string

			/** 拣货数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 状态 20:已拣货 30:丢失 */
			status?: number

			/** 类型 1:已装箱 2:未装箱 */
			type?: number
		}

		export class PickWaitInfoResponseDto {
			/** 拣货单信息 */
			pickMasterResponseDto?: defs.wms.PickMasterResponseDto

			/** 拣货库位信息 */
			pickPositionList?: Array<defs.wms.PickPositionResponseDto>
		}

		export class ProductInfoDto {
			/** 审批提交人备注 */
			applyMemo?: string

			/** 审批提交人 */
			applyUserId?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 首次采购金额 */
			firstPurchasePrice?: number

			/** id */
			id?: number

			/** 物流分组 */
			logisticsGroup?: string

			/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
			netsuitePushStatus?: number

			/** 工作流实例id */
			processInstanceId?: number

			/** 产品简称 */
			productAbbr?: string

			/** 增值税率 */
			productAddedTax?: number

			/** 附件链接 */
			productAttr?: string

			/** 品牌 */
			productBrand?: string

			/** 类目 */
			productCategory?: string

			/** 产品编号 */
			productCode?: string

			/** 申报名称(中文) */
			productDeclareCn?: string

			/** 申报名称(英文) */
			productDeclareEn?: string

			/** 申报要素 */
			productDeclareMemo?: string

			/** 事业部 */
			productDepartment?: string

			/** 质保期(月) */
			productExpirydate?: number

			/** HSCODE(国内) */
			productHscodeCn?: string

			/** HSCODE(国外) */
			productHscodeEn?: string

			/** 制造国家 */
			productMadeCountry?: string

			/** 产品名称 */
			productNameCn?: string

			/** 英文名称 */
			productNameEn?: string

			/** 产品材质 */
			productNature?: string

			/** 产品负责人 */
			productOwner?: string

			/** 副产品负责人 */
			productOwner2?: string

			/** 计划员 */
			productPlanner?: string

			/** 采购负责人 */
			productPurchaser?: string

			/** SKU列表 */
			productSkuList?: Array<defs.wms.ProductSkuInfoDto>

			/** 状态 1:有效 2:无效 */
			productStatus?: string

			/** 退税率 */
			productTaxrebates?: number

			/** 产品类型 */
			productType?: string

			/** 产品用途 */
			productUse?: string

			/** 驳回人 */
			rejecter?: string

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string

			/** 版本 */
			version?: number
		}

		export class ProductSkuInfoDto {
			/** 审批提交人备注 */
			applyMemo?: string

			/** 审批提交人 */
			applyUserId?: string

			/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
			approvalStatus?: number

			/** 创建人 */
			createBy?: string

			/** 创建时间 */
			createTime?: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 产品交期 */
			deliveryDay?: number

			/** id */
			id?: number

			/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
			netsuitePushStatus?: number

			/** 工作流实例id */
			processInstanceId?: number

			/** 品牌 */
			productBrand?: string

			/** 产品编号 */
			productCode?: string

			/** HSCODE(国内) */
			productHscodeCn?: string

			/** HSCODE(国外) */
			productHscodeEn?: string

			/** 产品初始分级 */
			productInitGrading?: string

			/** SKU编号 */
			productSku?: string

			/** SKU简称 */
			productSkuAbbr?: string

			/** 附件链接 */
			productSkuAttr?: string

			/** 单个产品计费重量(g) */
			productSkuBillingWeight?: number

			/** 装箱箱高(cm) */
			productSkuBoxHeight?: number

			/** 装箱箱长(CM) */
			productSkuBoxLong?: number

			/** 装箱箱宽(CM) */
			productSkuBoxWidth?: number

			/** 描述 */
			productSkuDescribe?: string

			/** 是否研发产品 */
			productSkuDevolopFlag?: number

			/** 是否需要厂检 */
			productSkuFactoryCheck?: string

			/** 产品分级 */
			productSkuGrading?: string

			/** 产品高(cm) */
			productSkuHeight?: number

			/** 图片链接 */
			productSkuImageUrl?: string

			/** 物流周期(天) */
			productSkuLogisticsCycle?: number

			/** 产品长(cm) */
			productSkuLong?: number

			/** 每箱数量(MPQ) */
			productSkuMpq?: number

			/** SKU中文标题 */
			productSkuName?: string

			/** SKU英文标题 */
			productSkuNameEn?: string

			/** 产品负责人 */
			productSkuOwner?: string

			/** 副产品负责人 */
			productSkuOwner2?: string

			/** 单个产品装箱重量(g) */
			productSkuPackingWeight?: number

			/** 单个产品装箱体积(m3) */
			productSkuSingleVolume?: number

			/** 默认运输方式 */
			productSkuTransport?: string

			/** 默认供应商 */
			productSkuVendor?: string

			/** 体积重(g) */
			productSkuVolumeWeight?: number

			/** 是否需要质检 */
			productSkuWarehouseCheck?: string

			/** 产品重量(g) */
			productSkuWeight?: number

			/** 产品宽(cm) */
			productSkuWidth?: number

			/** 计量单位 */
			productUnitsOfMeasure?: string

			/** 单位类型 */
			productUnitsType?: string

			/** 驳回人 */
			rejecter?: string

			/** 更新人 */
			updateBy?: string

			/** 更新时间 */
			updateTime?: string

			/** 版本 */
			version?: number
		}

		export class ProductUnitsMeasureAllResponseDto {
			/** 计量单位编号 */
			unitsMeasureCode: string

			/** 计量单位名称 */
			unitsMeasureName: string
		}

		export class ProductUnitsMeasureResponseDto {
			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 计量单位编号 */
			unitsMeasureCode: string

			/** 计量单位名称 */
			unitsMeasureName: string

			/** 单位类型编号 */
			unitsTypeCode: string

			/** 单位类型名称 */
			unitsTypeName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class ProductWorkflowDto {
			/** 提交人备注 */
			applyMemo?: string

			/** 提交人ID */
			applyUserId?: number

			/** 审批结果 1:通过 0:驳回 */
			approvalStatus?: number

			/** 工作流实例ID */
			processInstanceId?: string

			/** 产品编号 */
			productCode?: string

			/** SKU编号 */
			sku?: string

			/** 工作流TaskID */
			taskId?: string
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
		}

		export class ShelvesAddRequestDto {
			/** 库区编号 */
			areaCode: string

			/** 编号 */
			code: string

			/** id */
			id: number

			/** 名称 */
			name: string

			/** 状态 0:停用 1:启用 */
			status: number

			/** 货架组集合 */
			storageGroupList: Array<defs.wms.StorageGroupRequestDto>

			/** 仓库编号 */
			warehouseCode: string
		}

		export class ShopDepartmentMappingRequestDto {
			/** 地址 */
			address?: string

			/** 事业部 */
			department: string

			/** id */
			id: number

			/** 名称 */
			name?: string

			/** 货代信息 */
			representativesInformation?: string

			/** 店铺 */
			shopName: string
		}

		export class ShopDepartmentMappingResponseDto {
			/** 地址 */
			address: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 事业部 */
			department: string

			/** id */
			id: number

			/** 名称 */
			name: string

			/** 货代信息 */
			representativesInformation: string

			/** 店铺 */
			shopName: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string
		}

		export class StockMoveRequestDto {
			/** 整箱移库信息 */
			boxtorageDto: defs.wms.StorageMoveBoxRequestDto

			/** Sku移库信息 */
			skuStorageDto: defs.wms.StorageMoveSkuRequestDto
		}

		export class StorageDamagetWorkflowDto {
			/** 提交人备注 */
			applyMemo?: string

			/** 提交人ID */
			applyUserId?: number

			/** 审批结果 1:通过 0:驳回 */
			approvalStatus?: number

			/** 报损单号 */
			fono?: string

			/** 工作流实例ID */
			processInstanceId?: string

			/** 工作流TaskID */
			taskId?: string
		}

		export class StorageGroupRequestDto {
			/** 货架组编号 */
			code: string

			/** 列数 (货架组必填) */
			columns: number

			/** 层数 (货架组必填) */
			layers: number
		}

		export class StorageLocationListRequestDto {
			/** 库区编号 */
			areaCode: string

			/** 货架组编号 */
			groupCode: string

			/** 货架编号 */
			shelvesCode: string

			/** 仓库编号 */
			warehouseCode: string
		}

		export class StorageMoveBoxRequestDto {
			/** 箱号 */
			barcode: string

			/** 新库位 */
			newPositionCode: string

			/** 旧库位 */
			oldPositionCode: string
		}

		export class StorageMoveSkuRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 新箱号 */
			newBarcode: string

			/** 新库位 */
			newPosition: string

			/** 旧库位 */
			positionCode: string

			/** 数量 */
			qty: number

			/** SKU */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class StorageOfOccupyResponseDto {
			/** 出库单号 */
			dono?: string

			/** 数量 */
			qty?: number

			/** sku */
			sku?: string

			/** 单据号 */
			sourceNo?: string

			/** 单据类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
			sourceType?: number

			/** 仓库编号 */
			warehouseCode?: string
		}

		export class StorageReportDamageRequestDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 数量 */
			num: number

			/** 库位编号 */
			positionCode: string

			/** 备注 */
			remark: string

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class StorageReportDamageResponseDto {
			/** 审核时间 */
			auditTime: string

			/** 审核人 */
			auditor: string

			/** 条码 装箱条码/SKU */
			barcode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 当前审批步骤 */
			currentApprovalStep?: string

			/** 事业部 */
			department?: string

			/** 报损单号 */
			fono: string

			/** id */
			id: number

			/** 数量 */
			num: number

			/** 库位编号 */
			positionCode: string

			/** 工作流实例id */
			processInstanceId?: number

			/** 驳回人 */
			rejecter?: string

			/** 备注 */
			remark: string

			/** sku */
			sku: string

			/** 报损状态 10:待审核 20:已审核 30:已驳回 */
			status: number

			/** 库存成本 */
			storageCost?: number

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class StorageReportDamageResultNsDto {
			/** 审核时间 */
			auditTime: string

			/** 审核人 */
			auditor: string

			/** 条码 装箱条码/SKU */
			barcode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 报损单号 */
			fono: string

			/** 数量 */
			num: number

			/** 库位编号 */
			positionCode: string

			/** 备注 */
			remark: string

			/** sku */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class StorageResultNsDto {
			/** 条码 装箱条码/SKU */
			barcode: string

			/** 库位编号 */
			positionCode: string

			/** 数量 */
			qty: number

			/** SKU */
			sku: string

			/** 类型 1:已装箱 2:未装箱 */
			type: number
		}

		export class StorageUnitAreaRequestDto {
			/** 库区类型 10:自营 20:FBA */
			areaType: number

			/** 编号 */
			code: string

			/** id */
			id: number

			/** 名称 */
			name: string

			/** 状态 0:停用 1:启用 */
			status: number

			/** 仓库编号 */
			warehouseCode: string
		}

		export class StorageUnitResponseDto {
			/** 库区编号 */
			areaCode: string

			/** 库区类型 10:自营 20:FBA */
			areaType: number

			/** 编号 */
			code: string

			/** 列数 (货架组必填) */
			columns: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** id */
			id: number

			/** 层数 (货架组必填) */
			layers: number

			/** 名称 */
			name: string

			/** 关联编号(弃用) */
			relationCode: string

			/** 行数 (货架组必填 默认1) */
			rows: number

			/** 货架编号 */
			shelvesCode: string

			/** 状态 0:停用 1:启用 */
			status: number

			/** 存储类型 10:库区 20:货架 30:货架组 */
			storageType: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 仓库编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string
		}

		export class WarehousePositionRequestDto {
			/** 高度(mm) */
			height: number

			/** id */
			id: number

			/** 长度(mm) */
			length: number

			/** 拣货顺序 */
			order: number

			/** 体积(mm3) */
			volume: number

			/** 宽度(mm) */
			width: number
		}

		export class WarehousePositionResponseDto {
			/** 库区编号 */
			areaCode: string

			/** 列 */
			column: number

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 货架组编号 */
			groupCode: string

			/** 高度(mm) */
			height: number

			/** id */
			id: number

			/** 层 */
			layer: number

			/** 长度(mm) */
			length: number

			/** 拣货顺序 */
			order: number

			/** 库位编号 */
			positionCode: string

			/** 库存总数 */
			qty: number

			/** 行 */
			row: number

			/** 货架编号 */
			shelvesCode: string

			/** sku个数 */
			skuNum: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 体积(mm3) */
			volume: number

			/** 仓库编号 */
			warehouseCode: string

			/** 宽度(mm) */
			width: number
		}

		export class WarehouseRequestDto {
			/** 地址 */
			address: string

			/** 区 */
			area: string

			/** 城市 */
			city: string

			/** 联系人 */
			contacts: string

			/** 国家 */
			country: string

			/** 邮箱 */
			email: string

			/** id */
			id: number

			/** 移动电话 */
			mobilePhone: string

			/** 邮编 */
			postcode: string

			/** 省份 */
			province: string

			/** 状态 0:停用 1:启用 */
			status: number

			/** 固定电话 */
			telephone: string

			/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
			type: number

			/** 编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 重量单位 10:g 20:kg */
			weightUnit: number
		}

		export class WarehouseResponseDto {
			/** 地址 */
			address: string

			/** 区 */
			area: string

			/** 城市 */
			city: string

			/** 联系人 */
			contacts: string

			/** 国家 */
			country: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 邮箱 */
			email: string

			/** id */
			id: number

			/** 移动电话 */
			mobilePhone: string

			/** 邮编 */
			postcode: string

			/** 省份 */
			province: string

			/** 状态 0:停用 1:启用 */
			status: number

			/** 固定电话 */
			telephone: string

			/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
			type: number

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 编号 */
			warehouseCode: string

			/** 仓库名称 */
			warehouseName: string

			/** 重量单位 10:g 20:kg */
			weightUnit: number
		}

		export class WaybillMasterResponseDto {
			/** 地址 */
			address: string

			/** 城市 */
			city: string

			/** 关联单号 */
			correlationNo: string

			/** 国家 */
			country: string

			/** 国家简码 */
			countryCode: string

			/** 创建人 */
			createBy: string

			/** 创建时间 */
			createTime: string

			/** 申报价格USD */
			declarePrice: number

			/** 妥投时间 */
			deliveredTime: string

			/** 发货时间 */
			deliveryTime: string

			/** 邮箱地址 */
			email: string

			/** 预估费用 */
			estimatePrice: number

			/** 预估重量 */
			estimateWeight: number

			/** id */
			id: number

			/** 物流渠道服务编号 */
			logisticsChannelCode: string

			/** 物流渠道服务名称 */
			logisticsChannelName: string

			/** 物流商运费 */
			logisticsPrice: number

			/** 物流渠道商编号 */
			logisticsProviderCode: string

			/** 物流渠道商名称 */
			logisticsProviderName: string

			/** 物流状态 10:未发运 20:已发运 30:已妥投 40:已退回 */
			logisticsStatus: number

			/** 物流商重量 */
			logisticsWeight: number

			/** 移动电话 */
			mobilePhone: string

			/** 操作单号 */
			operationNo: string

			/** 单据类型 10:入库单 20:出库单 */
			operationOrderType: number

			/** 邮编 */
			postcode: string

			/** 产品集合 */
			productJson: string

			/** 省份 */
			province: string

			/** 出库数量 */
			qty: number

			/** 实际费用 */
			realityPrice: number

			/** 实际重量 */
			realityWeight: number

			/** 收件人 */
			recipient: string

			/** 备注 */
			remark: string

			/** 销售价格USD */
			salePrice: number

			/** 固定电话 */
			telephone: string

			/** 跟踪号 */
			trackingNo: string

			/** 更新人 */
			updateBy: string

			/** 更新时间 */
			updateTime: string

			/** 运单号 */
			waybillNo: string
		}
	}
}

declare namespace API {
	export namespace wms {
		/**
		 * 调拨批次
		 */
		export namespace allocationBatch {
			/**
			 * 调拨批次分页查询
			 * /allocationBatch
			 */
			export namespace list {
				export class Params {
					/** 调拨批次单号 */
					abno?: string
					/** 开始出库时间 */
					beginDeliveryTime?: string
					/** centerId */
					centerId?: string
					/** 货柜号 */
					containerNo?: string
					/** 结束出库时间 */
					endDeliveryTime?: string
					/** id */
					id?: number
					/** 物流渠道 */
					logisticsChannel?: string
					/** 物流渠道名称 */
					logisticsChannelName?: string
					/** 物流商 */
					logisticsProvider?: string
					/** 物流商名称 */
					logisticsProviderName?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
					shippingType?: number
					/** 来源仓库编号 */
					sourceWarehouseCode?: string
					/** 来源仓库名称 */
					sourceWarehouseName?: string
					/** 调拨批次状态：10 未扫描，20 已扫描，30 已确认，40 已发运，50 已完成 */
					status?: number
					/** 目标仓库编号 */
					targetWarehouseCode?: string
					/** 目标仓库名称 */
					targetWarehouseName?: string
					/** 调拨类型：10 普通调拨，20 FBA调拨 */
					type?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.AllocationBatchResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 调拨批次新增
			 * /allocationBatch
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(options?: any): Promise<Response>
			}

			/**
			 * 调拨批次汇总明细导出
			 * /allocationBatch/batchDetailReport
			 */
			export namespace batchDetailReport {
				export class Params {
					/** endDate */
					endDate: string
					/** startDate */
					startDate: string
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 取消调拨批次单
			 * /allocationBatch/cancel
			 */
			export namespace cancel {
				export class Params {
					/** abnos */
					abnos?: Array<string>
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 通过abno确认绑定
			 * /allocationBatch/confirm/{abno}
			 */
			export namespace confirm {
				export type Response = defs.wms.ResponseDto
				export function request(abno: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨批次单确认发货
			 * /allocationBatch/dispatch/{abno}
			 */
			export namespace dispatch {
				export type Response = defs.wms.ResponseDto
				export function request(abno: string, body: defs.wms.AllocationContainerRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号绑定调拨批次号
			 * /allocationBatch/scan
			 */
			export namespace getByWaybillNo {
				export class Params {
					/** abno */
					abno: string
					/** aono */
					aono: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.AllocationMasterResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 通过abno取消绑定
			 * /allocationBatch/unbind/{abno}
			 */
			export namespace unbind {
				export type Response = defs.wms.ResponseDto
				export function request(abno: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号解绑调拨批次号
			 * /allocationBatch/unbindAono
			 */
			export namespace unbindAono {
				export class Params {
					/** abno */
					abno: string
					/** aono */
					aono: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 调拨批次号查询明细
			 * /allocationBatch/{abno}
			 */
			export namespace getDetailByAbno {
				export type Response = defs.wms.ResponseDto<defs.wms.AllocationBatchDetailResponseDto>
				export function request(abno: string, options?: any): Promise<Response>
			}

			/**
			 * 删除调拨批次单
			 * /allocationBatch/{abno}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto
				export function request(abno: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 调拨分箱
		 */
		export namespace allocationBox {
			/**
			 * 录入单条分箱信息（可修改）
			 * /allocationBox
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.AllocationBoxRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 录入多条分箱信息（可修改）
			 * /allocationBox/addBatch
			 */
			export namespace addBatch {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<defs.wms.AllocationBoxRequestDto>, options?: any): Promise<Response>
			}

			/**
			 * 确认分箱信息
			 * /allocationBox/confirm/{aono}
			 */
			export namespace confirm {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号一键删除分箱信息
			 * /allocationBox/deleteBox/{aono}
			 */
			export namespace deleteBox {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号获取分箱信息
			 * /allocationBox/{aono}
			 */
			export namespace getByAono {
				export type Response = defs.wms.ResponseDto<defs.wms.AllocationBoxCollectDto>
				export function request(aono: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 调拨装柜信息
		 */
		export namespace allocationContainer {
			/**
			 * 分页查询
			 * /allocationContainer
			 */
			export namespace list {
				export class Params {
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 箱数 */
					boxQty?: number
					/** 货柜号 */
					containerNo?: string
					/** 装柜类型：10龙舟整柜，20 捷仕整柜，30 捷仕散柜，40 空运装柜 */
					containerType?: number
					/** 货柜容积（L） */
					containerVolume?: number
					/** 结束创建时间 */
					endCreateTime?: string
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 实装容积（L） */
					realVolume?: number
					/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
					shippingType?: number
					/** 来源仓库编号 */
					sourceWarehouseCode?: string
					/** 来源仓库名称 */
					sourceWarehouseName?: string
					/** 目标仓库编号 */
					targetWarehouseCode?: string
					/** 目标仓库名称 */
					targetWarehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.AllocationContainerResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 装柜信息汇总明细导出
			 * /allocationContainer/batchDetailReport
			 */
			export namespace batchDetailReport {
				export class Params {
					/** containerNos */
					containerNos?: Array<string>
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 调拨单
		 */
		export namespace allocationMaster {
			/**
			 * 调拨单列表
			 * /allocationMaster
			 */
			export namespace list {
				export class Params {
					/** 调拨批次号 */
					abno?: string
					/** 调拨单号 */
					aono?: string
					/** 起始箱数 */
					beginBoxQty?: number
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 开始出库时间 */
					beginDeliveryTime?: string
					/** 箱数 */
					boxQty?: number
					/** centerId */
					centerId?: string
					/** 货柜号 */
					containerNo?: string
					/** 计泡基数 */
					countBubbleBase?: number
					/** 申报币种 */
					declareCurrency?: string
					/** 申报价格 */
					declarePrice?: number
					/** 出库时间 */
					deliveryTime?: string
					/** 出库单号 */
					dono?: string
					/** 结束箱数 */
					endBoxQty?: number
					/** 结束创建时间 */
					endCreateTime?: string
					/** 结束出库时间 */
					endDeliveryTime?: string
					/** FBA账号 */
					fbaAccount?: string
					/** id */
					id?: number
					/** 物流渠道服务编号 */
					logisticsChannelCode?: string
					/** 物流渠道服务名称 */
					logisticsChannelName?: string
					/** 是否需要物流面单 0:否 1:是 */
					logisticsFlag?: number
					/** 物流面单文件路径 */
					logisticsLabelPath?: string
					/** 物流渠道商编号 */
					logisticsProviderCode?: string
					/** 物流渠道商名称 */
					logisticsProviderName?: string
					/** 站点/市场 */
					marketplaces?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 拣货人 */
					pickBy?: string
					/** 拣货单号 */
					pickno?: string
					/** 总数量 */
					qty?: number
					/** referenceId */
					referenceId?: string
					/** shipment */
					shipment?: string
					/** shipmentName */
					shipmentName?: string
					/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
					shippingType?: number
					/** sku */
					sku?: string
					/** sku种类数量 */
					skuQty?: number
					/** 来源仓库编号 */
					sourceWarehouseCode?: string
					/** 来源仓库名称 */
					sourceWarehouseName?: string
					/** 调拨状态：10 未处理，20 已打印，30 已拣货，40 已装箱，50 待发运，55 发运中，57 发运失败 ，60 已发运，62 已退件签收，65 中转签收，68 中转发运，70 已完成，80 已取消 */
					status?: number
					/** 调拨状态范围 */
					statusRange?: number
					/** 目标仓库编号 */
					targetWarehouseCode?: string
					/** 目标仓库名称 */
					targetWarehouseName?: string
					/** 是否含税 0:否1:是 */
					taxFlag?: number
					/** 交易主体编号 */
					tradeCompanyCode?: string
					/** 交易主体名称 */
					tradeCompanyName?: string
					/** 调拨类型：10 普通调拨，20 FBA调拨 */
					type?: number
					/** 体积 */
					volume?: number
					/** 运单号 */
					waybillNo?: string
					/** 重量 */
					weight?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.AllocationMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建调拨单
			 * /allocationMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.AllocationMasterCreateRequestDto, options?: any): Promise<Response>
			}

			/**
			 * FBA调拨入库完成回传WMS
			 * /allocationMaster/allocationFinishForFBA/{aono}
			 */
			export namespace allocationFinishForFba {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号查询SKU明细
			 * /allocationMaster/allocationetail/{aono}
			 */
			export namespace getAllocationetailByAono {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.AllocationDetailResponseDto>>
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单号查询分箱明细
			 * /allocationMaster/boxdetail/{aono}
			 */
			export namespace getBoxDetailByAono {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.AllocationMasterBoxDetailResponseDto>>
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * NS-回传调拨单箱外标签文件
			 * /allocationMaster/callbackForBox
			 */
			export namespace callbackForUpdateBoxLabelPath {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.NsCallbackForUpdateBoxRequestDto, options?: any): Promise<Response>
			}

			/**
			 * PDA调拨-确认拣货数据
			 * /allocationMaster/confirmPick/{pickno}
			 */
			export namespace confirmPick {
				export type Response = defs.wms.ResponseDto
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * 生成拣货单
			 * /allocationMaster/createPick/{aono}
			 */
			export namespace createPick {
				export type Response = defs.wms.ResponseDto<defs.wms.AllocationMasterResponseDto>
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 删除调拨单
			 * /allocationMaster/delete
			 */
			export namespace remove {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<string>, options?: any): Promise<Response>
			}

			/**
			 * 美西仓调拨单直接发运
			 * /allocationMaster/dispatchByMx/{aono}
			 */
			export namespace dispatchByMx {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单导出
			 * /allocationMaster/exportAllocationReport
			 */
			export namespace exportAllocationReport {
				export class Params {
					/** 调拨批次号 */
					abno?: string
					/** 调拨单号 */
					aono?: string
					/** 起始箱数 */
					beginBoxQty?: number
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 开始出库时间 */
					beginDeliveryTime?: string
					/** 箱数 */
					boxQty?: number
					/** centerId */
					centerId?: string
					/** 货柜号 */
					containerNo?: string
					/** 计泡基数 */
					countBubbleBase?: number
					/** 申报币种 */
					declareCurrency?: string
					/** 申报价格 */
					declarePrice?: number
					/** 出库时间 */
					deliveryTime?: string
					/** 出库单号 */
					dono?: string
					/** 结束箱数 */
					endBoxQty?: number
					/** 结束创建时间 */
					endCreateTime?: string
					/** 结束出库时间 */
					endDeliveryTime?: string
					/** FBA账号 */
					fbaAccount?: string
					/** id */
					id?: number
					/** 物流渠道服务编号 */
					logisticsChannelCode?: string
					/** 物流渠道服务名称 */
					logisticsChannelName?: string
					/** 是否需要物流面单 0:否 1:是 */
					logisticsFlag?: number
					/** 物流面单文件路径 */
					logisticsLabelPath?: string
					/** 物流渠道商编号 */
					logisticsProviderCode?: string
					/** 物流渠道商名称 */
					logisticsProviderName?: string
					/** 站点/市场 */
					marketplaces?: string
					/** 拣货人 */
					pickBy?: string
					/** 拣货单号 */
					pickno?: string
					/** 总数量 */
					qty?: number
					/** referenceId */
					referenceId?: string
					/** shipment */
					shipment?: string
					/** shipmentName */
					shipmentName?: string
					/** 运输方式：10 空运，20 海运，30 快船，40 铁路 */
					shippingType?: number
					/** sku */
					sku?: string
					/** sku种类数量 */
					skuQty?: number
					/** 来源仓库编号 */
					sourceWarehouseCode?: string
					/** 来源仓库名称 */
					sourceWarehouseName?: string
					/** 调拨状态：10 未处理，20 已打印，30 已拣货，40 已装箱，50 待发运，55 发运中，57 发运失败 ，60 已发运，62 已退件签收，65 中转签收，68 中转发运，70 已完成，80 已取消 */
					status?: number
					/** 调拨状态范围 */
					statusRange?: number
					/** 目标仓库编号 */
					targetWarehouseCode?: string
					/** 目标仓库名称 */
					targetWarehouseName?: string
					/** 是否含税 0:否1:是 */
					taxFlag?: number
					/** 交易主体编号 */
					tradeCompanyCode?: string
					/** 交易主体名称 */
					tradeCompanyName?: string
					/** 调拨类型：10 普通调拨，20 FBA调拨 */
					type?: number
					/** 体积 */
					volume?: number
					/** 运单号 */
					waybillNo?: string
					/** 重量 */
					weight?: number
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 调拨单导出装箱单
			 * /allocationMaster/exportBoxingBill/{aono}
			 */
			export namespace exportBoxingBill {
				export type Response = any
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单导出发票
			 * /allocationMaster/exportInvoice/{aono}
			 */
			export namespace exportInvoice {
				export type Response = any
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * aono获取调拨单信息
			 * /allocationMaster/getAllocationMaster
			 */
			export namespace getAllocationMaster {
				export class Params {
					/** aono */
					aono: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.AllocationMasterResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 编号获取调拨单
			 * /allocationMaster/getAllocationMasterByCode/{code}
			 */
			export namespace getAllocationMasterByCode {
				export type Response = defs.wms.ResponseDto<defs.wms.AllocationMasterResponseDto>
				export function request(code: string, options?: any): Promise<Response>
			}

			/**
			 * 获取文件流
			 * /allocationMaster/getFileStream
			 */
			export namespace getBoxLabel {
				export class Params {
					/** 文件路径 */
					filePath: string
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * PDA调拨-获取拣货单拣货数据
			 * /allocationMaster/pick/{pickno}
			 */
			export namespace getPickList {
				export type Response = defs.wms.ResponseDto<defs.wms.PickWaitInfoResponseDto>
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * PDA调拨-提交拣货数据
			 * /allocationMaster/pick/{pickno}
			 */
			export namespace pick {
				export type Response = defs.wms.ResponseDto<defs.wms.PickWaitInfoResponseDto>
				export function request(pickno: string, body: defs.wms.PickRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 调拨单打印运单
			 * /allocationMaster/printWaybillLabel/{aono}
			 */
			export namespace printWaybillLabel {
				export type Response = defs.wms.ResponseDto<string>
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * PDA调拨-重置拣货数据
			 * /allocationMaster/resetPick/{pickno}
			 */
			export namespace resetPick {
				export type Response = defs.wms.ResponseDto
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * 回滚调拨单
			 * /allocationMaster/rollback
			 */
			export namespace rollback {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<string>, options?: any): Promise<Response>
			}

			/**
			 * 查询调拨单操作时间
			 * /allocationMaster/selectOperationTime
			 */
			export namespace selectOperationTime {
				export class Params {
					/** 开始分箱时间 */
					beginBoxTime?: string
					/** 开始创建拣货单时间 */
					beginCreatePickTime?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 开始发运时间 */
					beginDeliveryTime?: string
					/** 开始拣货时间 */
					beginPickTime?: string
					/** 结束分箱时间 */
					endBoxTime?: string
					/** 结束创建拣货单时间 */
					endCreatePickTime?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 结束发运时间 */
					endDeliveryTime?: string
					/** 结束拣货时间 */
					endPickTime?: string
					/** orderBy */
					orderBy?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.AllocationOperationTimeResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 调拨单中转发运
			 * /allocationMaster/transferDispatch/{aono}
			 */
			export namespace allocationTransferDispatch {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 调拨单中转签收
			 * /allocationMaster/transferSign/{aono}
			 */
			export namespace allocationTransferSign {
				export type Response = defs.wms.ResponseDto
				export function request(aono: string, options?: any): Promise<Response>
			}

			/**
			 * 修改申报价格
			 * /allocationMaster/updateDeclare
			 */
			export namespace updateDeclare {
				export class Params {
					/** 调拨单号 */
					aono: string
					/** 申报币种 */
					declareCurrency: string
					/** 申报价格 */
					declarePrice: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 更新调拨单明细
			 * /allocationMaster/updateDetail
			 */
			export namespace updateDetail {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.AllocationMasterUpdateRequestDto, options?: any): Promise<Response>
			}

			/**
			 * NS-更新ReferenceId
			 * /allocationMaster/updateReferenceId
			 */
			export namespace updateReferenceId {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.NsUpdateReferenceIdRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 品牌and售后邮箱
		 */
		export namespace brandEmailMapping {
			/**
			 * 分页查询
			 * /brandEmailMapping
			 */
			export namespace list {
				export class Params {
					/** 品牌 */
					brand?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 售后邮箱 */
					email?: string
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.BrandEmailMappingResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 新增
			 * /brandEmailMapping
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.BrandEmailMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 更新
			 * /brandEmailMapping
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.BrandEmailMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /brandEmailMapping/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.BrandEmailMappingResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * Center County Mapping Controller
		 */
		export namespace centerIdAndShipTo {
			/**
			 * 列表查询
			 * /centerCountyMapping
			 */
			export namespace list {
				export class Params {
					/** centerId */
					centerId?: string
					/** 国家简码 */
					countyCode?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** shipTo */
					shipTo?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.CenterCountyMappingResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 新增
			 * /centerCountyMapping
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.CenterCountyMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 更新
			 * /centerCountyMapping
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.CenterCountyMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /centerCountyMapping/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.CenterCountyMappingResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 通用方法
		 */
		export namespace common {
			/**
			 * 临时删除单据
			 * /common/deleteBill
			 */
			export namespace deleteBill {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.DeleteBillRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 生成装箱单Excel
			 * /common/export/getBoxingReportExcel/{redisId}
			 */
			export namespace getBoxingReportExcel {
				export type Response = any
				export function request(redisId: string, options?: any): Promise<Response>
			}

			/**
			 * 生成交货单Excel
			 * /common/export/getDeliveryNoteExcel/{redisId}
			 */
			export namespace getDeliveryNoteExcel {
				export type Response = any
				export function request(redisId: string, options?: any): Promise<Response>
			}

			/**
			 * getLabel
			 * /common/getLabel
			 */
			export namespace getLabel {
				export class Params {
					/** token */
					token: string
					/** url */
					url: string
				}

				export type Response = defs.wms.ResponseDto<string>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * getLabels
			 * /common/getLabels
			 */
			export namespace getLabels {
				export class Params {
					/** param */
					param: string
					/** token */
					token: string
					/** url */
					url: string
				}

				export type Response = defs.wms.ResponseDto<string>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 生成产品条码pdf
			 * /common/getProductCodePdf
			 */
			export namespace getProductCodePdf {
				export class Params {
					/** 店铺 */
					account: string
					/** fnsku */
					fnsku: string
					/** 是否显示made in china */
					isMade: number
					/** sku */
					sku: string
					/** sku名称 */
					skuName: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 生成产品欧代pdf
			 * /common/getProductEuPdf
			 */
			export namespace getProductEuPdf {
				export class Params {
					/** 店铺 */
					account: string
					/** fnsku */
					fnsku: string
					/** sku */
					sku: string
					/** sku名称 */
					skuName: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * pdf提取文本
			 * /common/pdfParseToText
			 */
			export namespace pdfParseToText {
				export type Response = defs.wms.ResponseDto<string>
				export function request(body: defs.wms.PdfContentDto, options?: any): Promise<Response>
			}

			/**
			 * 保存装箱单body至redis
			 * /common/setBoxingReportBodyByRedis/{redisId}
			 */
			export namespace setBoxingReportBodyByRedis {
				export type Response = defs.wms.ResponseDto
				export function request(redisId: string, body: defs.wms.AllocationMasterBoxingReportDto, options?: any): Promise<Response>
			}

			/**
			 * 保存交货单body至redis
			 * /common/setDeliveryBodyByRedis/{redisId}
			 */
			export namespace setDeliveryBodyByRedis {
				export type Response = defs.wms.ResponseDto
				export function request(redisId: string, body: defs.wms.DeliveryNoteExcelRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 国家
		 */
		export namespace county {
			/**
			 * 获取国家列表
			 * /county/all
			 */
			export namespace listAll {
				export class Params {
					/** 国家简码 */
					code?: string
					/** 国家名称 */
					name?: string
					/** 国家英文名 */
					nameEn?: string
					/** 简码/名称 */
					searchKey?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.CountyResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * In Detail Controller
		 */
		export namespace inDetail {
			/**
			 * list
			 * /inDetail
			 */
			export namespace list {
				export class Params {
					/** 箱数 */
					boxNum?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 抽检需质检数 */
					extractInspectionQty?: number
					/** 抽检质检次数 */
					extractTimes?: number
					/** 抽检不合格数 */
					extractUnqualifiedQty?: number
					/** id */
					id?: number
					/** 质检数量 */
					inspectionQty?: number
					/** 质检类型 10:全检 20:抽检 30:免检 */
					inspectionType?: number
					/** 入库单号 */
					iono?: string
					/** 物流成本单价 */
					logisticsUnitPrice?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 计划入库数 */
					planQty?: number
					/** 产品编号 */
					productCode?: string
					/** 图片路径 */
					productImageUrl?: string
					/** 产品标题 */
					productTitle?: string
					/** 产品类型 10:成品 20:半成品 30:组合产品 40:包装材料 */
					productType?: number
					/** 采购单价 */
					purchaseUnitPrice?: number
					/** 收货数量 */
					receivedQty?: number
					/** 余数 */
					remainderQty?: number
					/** 上架数量 */
					shelvesQty?: number
					/** sku */
					sku?: string
					/** 供应商变体规格 */
					supplierVariant?: string
					/** 不合格数 */
					unqualifiedQty?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 变体规格 */
					variant?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InDetailResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * add
			 * /inDetail
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailRequestDto, options?: any): Promise<Response>
			}

			/**
			 * modify
			 * /inDetail
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailRequestDto, options?: any): Promise<Response>
			}

			/**
			 * getById
			 * /inDetail/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * deleteById
			 * /inDetail/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * In Detail Box Controller
		 */
		export namespace inDetailBox {
			/**
			 * list
			 * /inDetailBox
			 */
			export namespace list {
				export class Params {
					/** 条码 装箱条码/SKU */
					barcode?: string
					/** 状态 10:已收货 20:已质检 30:已上架 */
					boxStatus?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 质检数量 */
					inspectionQty?: number
					/** 质检备注 */
					inspectionRemark?: string
					/** 入库单号 */
					iono?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 数量 */
					qty?: number
					/** 上架数量 */
					shelvesQty?: number
					/** sku */
					sku?: string
					/** 类型 1:已装箱 2:未装箱 */
					type?: number
					/** 不合格数量 */
					unqualifiedQty?: number
					/** 不合格原因 不合格原因 10:尺寸问题 20:颜色错误 30:款式问题 40:面料问题 50:货物破损 60:货物缺漏 100:其它 */
					unqualifiedReason?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InDetailBoxResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * add
			 * /inDetailBox
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailBoxRequestDto, options?: any): Promise<Response>
			}

			/**
			 * modify
			 * /inDetailBox
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailBoxRequestDto, options?: any): Promise<Response>
			}

			/**
			 * getById
			 * /inDetailBox/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailBoxResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * deleteById
			 * /inDetailBox/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailBoxResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * In Detail Record Controller
		 */
		export namespace inDetailRecord {
			/**
			 * list
			 * /inDetailRecord
			 */
			export namespace list {
				export class Params {
					/** 条码 装箱条码/SKU */
					barcode?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 入库单号 */
					iono?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 库位编号 */
					positionCode?: string
					/** 上架数量 */
					shelvesQty?: number
					/** sku */
					sku?: string
					/** 类型 1:已装箱 2:未装箱 */
					type?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InDetailRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * add
			 * /inDetailRecord
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailRecordRequestDto, options?: any): Promise<Response>
			}

			/**
			 * modify
			 * /inDetailRecord
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InDetailRecordRequestDto, options?: any): Promise<Response>
			}

			/**
			 * getById
			 * /inDetailRecord/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailRecordResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * deleteById
			 * /inDetailRecord/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.InDetailRecordResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 入库
		 */
		export namespace inMaster {
			/**
			 * 入库单列表
			 * /inMaster
			 */
			export namespace list {
				export class Params {
					/** begin箱数 */
					beginBoxNum?: number
					/** 创建时间 */
					beginCreateDate?: string
					/** begin预计到货时间 */
					beginEstimateDate?: string
					/** begin数量(计划入库数量) */
					beginPlanQty?: number
					/** 箱数 */
					boxNum?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** end箱数 */
					endBoxNum?: number
					/** 创建时间 */
					endCreateDate?: string
					/** end预计到货时间 */
					endEstimateDate?: string
					/** end数量(计划入库数量) */
					endPlanQty?: number
					/** 预计到货时间 */
					estimateTime?: string
					/** id */
					id?: number
					/** 质检类型 10:全检 20:抽检 30:免检 */
					inspectionType?: number
					/** 入库单号 */
					iono?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 数量(计划入库数量) */
					planQty?: number
					/** 采购单号 */
					pono?: string
					/** 采购员 */
					purchaser?: string
					/** 备注 */
					remark?: string
					/** 签收人 */
					signatory?: string
					/** 签收时间 */
					signingTime?: string
					/** SKU */
					sku?: string
					/** 来源单号 */
					sourceNo?: string
					/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 */
					sourceType?: number
					/** 状态 10:未签收 20:已签收 30:已收货 40:已质检 50:已称重 60:已上架 65:已完成 70:已取消 */
					status?: number
					/** 供应商编号 */
					supplierCode?: string
					/** 供应商名称 */
					supplierName?: string
					/** 是否含税 0:否1:是 */
					taxFlag?: number
					/** 交易主体编号 */
					tradeCompanyCode?: string
					/** 交易主体名称 */
					tradeCompanyName?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 仓库编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
					/** 运单号 */
					waybillNo?: string
					/** 收货备注 */
					waybillRemark?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建入库单
			 * /inMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterCreateRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 入库单跳过质检
			 * /inMaster/continueInspection
			 */
			export namespace continueInspection {
				export class Params {
					/** 入库单号 */
					iono: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 导出交货单Excel
			 * /inMaster/export/getDeliveryNoteExcel/{deliveryNo}
			 */
			export namespace getDeliveryNoteExcel {
				export type Response = any
				export function request(deliveryNo: string, options?: any): Promise<Response>
			}

			/**
			 * 获取入库箱号信息
			 * /inMaster/getInBoxInfo
			 */
			export namespace getInBoxInfo {
				export class Params {
					/** 箱号 */
					barcode: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.InDetailResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取入库单打印明细
			 * /inMaster/getInDetailBox
			 */
			export namespace getInDetailBox {
				export class Params {
					/** 入库单号 */
					iono: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InDetailBoxPrintResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 入库单质检
			 * /inMaster/inspection
			 */
			export namespace inspection {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterInspectionRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取入库单质检信息
			 * /inMaster/inspection/{number}
			 */
			export namespace getInspectionInfo {
				export class Params {
					/** SKU/箱号 */
					barcode: string
					/** 单号 */
					number: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.InMasterInspectionResponseDto>
				export function request(number: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 入库单上架
			 * /inMaster/putOn
			 */
			export namespace putOn {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterPutOnRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 获取入库单上架信息
			 * /inMaster/putOn/{number}
			 */
			export namespace getPutOnInfo {
				export class Params {
					/** SKU/箱号 */
					barcode: string
					/** 单号 */
					number: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.InMasterPutOnResponseDto>
				export function request(number: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 入库单收货
			 * /inMaster/receiving
			 */
			export namespace receiving {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterReceivingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 单号查询入库单收货明细信息
			 * /inMaster/receiving/{number}
			 */
			export namespace getDetailByIono {
				export type Response = defs.wms.ResponseDto<defs.wms.InMasterReceivingResponseDto>
				export function request(number: string, options?: any): Promise<Response>
			}

			/**
			 * 美西仓-入库单收货
			 * /inMaster/receivingByMX
			 */
			export namespace receivingByMx {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterReceivingByMxRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 美西仓-单号查询入库单收货明细信息
			 * /inMaster/receivingByMX/{number}
			 */
			export namespace receivingGetDetailByMx {
				export type Response = defs.wms.ResponseDto<defs.wms.InMasterReceivingResponseDto>
				export function request(number: string, options?: any): Promise<Response>
			}

			/**
			 * 入库单签收
			 * /inMaster/signing
			 */
			export namespace signing {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<number>, options?: any): Promise<Response>
			}

			/**
			 * 单号查询入库单信息
			 * /inMaster/{number}
			 */
			export namespace getInfoByNumber {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.InMasterResponseDto>>
				export function request(number: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 出入库操作记录
		 */
		export namespace inoutStepRecord {
			/**
			 * 库存变动日志
			 * /inoutStepRecord
			 */
			export namespace list {
				export class Params {
					/** 条码 */
					barcode?: string
					/** begin操作日期 */
					beginCreateDate?: string
					/** begin操作时间 */
					beginCreateTime?: string
					/** 创建人 */
					createBy?: string
					/** end操作日期 */
					endCreateDate?: string
					/** end操作时间 */
					endCreateTime?: string
					/** 操作单号 */
					operationNo?: string
					/** 单据类型 10:入库单 20:出库单 */
					operationOrderType?: number
					/** 类型 10:收货 20:质检 30:称重 40:上架 50:下架 60:校验 70:发货 80:还货 */
					operationType?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 库位 */
					positionCode?: string
					/** 产品数量 */
					qty?: number
					/** sku */
					sku?: string
					/** 类型 1:已装箱 2:未装箱 */
					type?: number
					/** 仓库编号 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InoutStepRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 新增
			 * /inoutStepRecord
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InoutStepRecordRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 盘点单
		 */
		export namespace inventoryMaster {
			/**
			 * 盘点单列表
			 * /inventoryMaster
			 */
			export namespace list {
				export class Params {
					/** 实际开始时间 */
					actualBeginTime?: string
					/** 实际结束时间 */
					actualEndTime?: string
					/** 审核人 */
					auditor?: string
					/** 审核时间 */
					auditTime?: string
					/** 对账类型 10:账到实 20:实到账 */
					checkType?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 盘点单号 */
					icno?: string
					/** id */
					id?: number
					/** 盘点状态：10:待执行 20:执行中 30:已执行 35:待审核 38:已驳回 40:已完成 */
					inventoryStatus?: number
					/** 盘点类型：10:普通盘点 ，20:年度盘点 */
					inventoryType?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 计划开始时间 */
					planBeginTime?: string
					/** 计划结束时间 */
					planEndTime?: string
					/** 异常SKU */
					sku?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 仓库编码 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InventoryMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建盘点单
			 * /inventoryMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InventoryMasterRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 修改盘点单
			 * /inventoryMaster
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InventoryMasterRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 确认盘点单
			 * /inventoryMaster/affirm
			 */
			export namespace affirm {
				export class Params {
					/** 盘点单号 */
					icno?: Array<string>
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 发起盘点结果审核
			 * /inventoryMaster/auditResult
			 */
			export namespace auditResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InventoryMasterRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 创建异常SKU盘点单
			 * /inventoryMaster/createForSku
			 */
			export namespace createForSku {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InventoryCreateForSkuRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 盘点单明细列表
			 * /inventoryMaster/getIcnoDetailList
			 */
			export namespace getIcnoDetailList {
				export class Params {
					/** 盘点单号 */
					icno: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryDetailResultResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 盘点误差统计报表
			 * /inventoryMaster/getInventoryErrorList
			 */
			export namespace getInventoryErrorList {
				export class Params {
					/** 审核开始时间 */
					auditBeginTime?: string
					/** 审核结束时间 */
					auditEndTime?: string
					/** 审核人 */
					auditor?: string
					/** 盘点单号 */
					icno?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** sku */
					sku?: string
					/** 差额起始值 */
					varianceBegin?: number
					/** 差额结束值 */
					varianceEnd?: number
					/** 仓库编码 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.InventoryErrorListResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 盘点单盘亏列表
			 * /inventoryMaster/getInventoryLossesList
			 */
			export namespace getInventoryLossesList {
				export class Params {
					/** 盘点单号 */
					icno?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryDetailResultResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * icno获取盘点单信息
			 * /inventoryMaster/getInventoryMaster
			 */
			export namespace getInventoryMaster {
				export class Params {
					/** icno */
					icno: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.InventoryMasterResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 盘点单盘盈列表
			 * /inventoryMaster/getInventoryProfitList
			 */
			export namespace getInventoryProfitList {
				export class Params {
					/** 盘点单号 */
					icno: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryDetailResultResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 移库
			 * /inventoryMaster/move
			 */
			export namespace move {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StockMoveRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据盘点单获取库位列表信息
			 * /inventoryMaster/positonList
			 */
			export namespace getPositionCodeList {
				export class Params {
					/** icno */
					icno: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryPositionResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 记录镜像数据并返回库位盘点产品列表
			 * /inventoryMaster/record
			 */
			export namespace rocordMsgAndGetProductLsit {
				export class Params {
					/** 盘点单单号 */
					icno: string
					/** 库位编号 */
					positionCode: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryDetailRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 驳回盘点单
			 * /inventoryMaster/reject
			 */
			export namespace reject {
				export class Params {
					/** 盘点单号 */
					icno?: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 盘点单结果盘点
			 * /inventoryMaster/reslut
			 */
			export namespace serialResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InventoryDetailResultStatisticsRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 创建盘点单筛选库位-查询库区列表
			 * /inventoryMaster/screenAreaList
			 */
			export namespace screenAreaList {
				export class Params {
					/** 仓库编号 */
					warehouseCode: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryScreenPositionResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建盘点单筛选库位-查询货架组列表
			 * /inventoryMaster/screenGroupList
			 */
			export namespace screenGroupList {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryScreenPositionResponseDto>>
				export function request(body: Array<defs.wms.InventoryScreenPositionResponseDto>, options?: any): Promise<Response>
			}

			/**
			 * 创建盘点单筛选库位-查询库位列表
			 * /inventoryMaster/screenPositionList
			 */
			export namespace screenPositionList {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryScreenPositionResponseDto>>
				export function request(body: Array<defs.wms.InventoryScreenPositionResponseDto>, options?: any): Promise<Response>
			}

			/**
			 * 创建盘点单筛选库位-查询货架列表
			 * /inventoryMaster/screenShelvesList
			 */
			export namespace screenShelvesList {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.InventoryScreenPositionResponseDto>>
				export function request(body: Array<defs.wms.InventoryScreenPositionResponseDto>, options?: any): Promise<Response>
			}

			/**
			 * 删除盘点单
			 * /inventoryMaster/{icno}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto
				export function request(icno: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 渠道服务
		 */
		export namespace logisticsChannel {
			/**
			 * 查询渠道信息列表
			 * /logisticsChannel
			 */
			export namespace list {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 渠道编号 */
					channelCode?: string
					/** 渠道名称 */
					channelName?: string
					/** 创建人 */
					createBy?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 物流商编号 */
					providerCode?: string
					/** 物流商名称 */
					providerName?: string
					/** 业务属性分类 10:toB 20:toC，默认为10 */
					serviceProperty?: number
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 适用仓库编码 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsChannelResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 渠道服务新增
			 * /logisticsChannel
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto<number>
				export function request(body: Partial<defs.wms.LogisticsChannelAddRequestDto>, options?: any): Promise<Response>
			}

			/**
			 * 更新物流服务关联的计泡基数
			 * /logisticsChannel/bubbles/{providerCode}/{channelCode}
			 */
			export namespace updateCountBubbleBase {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: defs.wms.CountBubbleUpdateParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 修改渠道信息维护
			 * /logisticsChannel/channelGroupMsg/{providerCode}/{channelCode}
			 */
			export namespace modifyChannelMsg {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelMsgRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据物流商编号查询渠道信息列表
			 * /logisticsChannel/channelList/{providerCode}
			 */
			export namespace getChannelListByProviderCode {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsChannelResponseDto>>
				export function request(providerCode: string, options?: any): Promise<Response>
			}

			/**
			 * 修改渠道商折扣
			 * /logisticsChannel/discount/{providerCode}/{channelCode}
			 */
			export namespace modifyDiscount {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelDiscountRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据渠道商编号和渠道编号查询
			 * /logisticsChannel/getLogisticsChannelResponseDto
			 */
			export namespace getLogisticsChannelResponseDto {
				export class Params {
					/** 渠道编号 */
					channelCode: string
					/** 渠道商编号 */
					providerCode: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改面单要求
			 * /logisticsChannel/labelStandard
			 */
			export namespace modifyLabelStandard {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsChannelLabelStandardRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 查询该物流商的该物流渠道对应的运输方式
			 * /logisticsChannel/logisticsShippingType/{providerCode}/{channelCode}
			 */
			export namespace getLogisticsShippingType {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsShippingTypeResponseDto>>
				export function request(channelCode: string, providerCode: string, options?: any): Promise<Response>
			}

			/**
			 * 修改渠道服务对应的运输方式
			 * /logisticsChannel/logisticsShippingType/{providerCode}/{channelCode}
			 */
			export namespace updateLogisticsShippingType {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsShippingTypeRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 查询供货商-渠道信息列表
			 * /logisticsChannel/providerChannelList
			 */
			export namespace getProviderChannelList {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 渠道编号 */
					channelCode?: string
					/** 渠道名称 */
					channelName?: string
					/** 创建人 */
					createBy?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 物流商编号 */
					providerCode?: string
					/** 物流商名称 */
					providerName?: string
					/** 业务属性分类 10:toB 20:toC，默认为10 */
					serviceProperty?: number
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 适用仓库编码 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsProviderChannelResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改渠道商状态
			 * /logisticsChannel/status/{providerCode}/{channelCode}
			 */
			export namespace modifyStatus {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: defs.wms.LogisticsChannelStatusRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流渠道分组关系表
		 */
		export namespace logisticsChannelGroup {
			/**
			 * 根据分组id查询对应的渠道列表
			 * /logisticsChannelGroup/channelList
			 */
			export namespace getChannelList {
				export class Params {
					/** logisticsGroupCode */
					logisticsGroupCode: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsChannelResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 渠道服务平台对应关系
		 */
		export namespace logisticsChannelPlatform {
			/**
			 * 平台映射关系列表
			 * /logisticsChannelPlatform
			 */
			export namespace list {
				export class Params {
					/** 物流渠道编号 */
					channelCode?: string
					/** 渠道名称 */
					channelName?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 10:货物到达后不生成最终单号，20:货物到达后生成最终单号 */
					isGenerateFtno?: number
					/** 平台编号 */
					platformCode?: string
					/** 平台名称 */
					platformName?: string
					/** 平台邮寄方式 */
					platformPost?: string
					/** 物流商编号 */
					providerCode?: string
					/** 物流商名称 */
					providerName?: string
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 跟踪地址 */
					traceAddresse?: string
					/** 10:取最终单号，20:取物流商单号 */
					trackingNoType?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 10:上传运单号，20:不填单号上传，30:NoShipping */
					waybillNoUploadWay?: number
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsChannelPlatformResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 通过平台编号，获取该平台渠道信息
			 * /logisticsChannelPlatform/channelPlatformInfo
			 */
			export namespace channelPlatformInfo {
				export class Params {
					/** platformCode */
					platformCode?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsChannelPlatformResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 平台映射关系批量修改
			 * /logisticsChannelPlatform/{providerCode}/{channelCode}
			 */
			export namespace batchModify {
				export type Response = defs.wms.ResponseDto
				export function request(channelCode: string, providerCode: string, body: Array<defs.wms.LogisticsChannelPlatformRequestDto>, options?: any): Promise<Response>
			}
		}

		/**
		 * 渠道计费规则
		 */
		export namespace logisticsChannelPrice {
			/**
			 * 渠道计费规则列表
			 * /logisticsChannelPrice
			 */
			export namespace list {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 物流渠道编号 */
					channelCode?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 物流商编号 */
					providerCode?: string
					/** 目标国家简码 */
					targetCountryCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsChannelPriceResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 渠道计费规则新增
			 * /logisticsChannelPrice
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto<number>
				export function request(body: defs.wms.LogisticsChannelPriceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 渠道计费规则修改
			 * /logisticsChannelPrice
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsChannelPriceRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 渠道运费预估
			 * /logisticsChannelPrice/estimate/carriagePrice
			 */
			export namespace estimateCarriagePrice {
				export class Params {
					/** 渠道编号 */
					channelCode: string
					/** 渠道商编号 */
					providerCode: string
					/** 目标国家简码 */
					targetCountryCode: string
					/** 重量 */
					weight: number
				}

				export type Response = defs.wms.ResponseDto<bigdecimal>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 渠道计费规则报表导出
			 * /logisticsChannelPrice/export
			 */
			export namespace exporting {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 物流渠道编号 */
					channelCode?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 物流商编号 */
					providerCode?: string
					/** 目标国家简码 */
					targetCountryCode?: string
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据渠道商编号和渠道编号查询
			 * /logisticsChannelPrice/getLogisticsChannelPriceModel
			 */
			export namespace getLogisticsChannelPriceModel {
				export class Params {
					/** 渠道编号 */
					channelCode: string
					/** 渠道商编号 */
					providerCode: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsChannelPriceModel>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 渠道计费规则报表导入
			 * /logisticsChannelPrice/import
			 */
			export namespace importExcel {
				export type Response = defs.wms.ResponseDto
				export function request(body: string, options?: any): Promise<Response>
			}

			/**
			 * 渠道计费规则删除
			 * /logisticsChannelPrice/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelPriceResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流渠道仓库关系
		 */
		export namespace logisticsChannelWarehouse {
			/**
			 * 物流渠道仓库关系列表
			 * /logisticsChannelWarehouse
			 */
			export namespace list {
				export class Params {
					/** 物流渠道编号 */
					channelCode?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 物流商编号 */
					providerCode?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 仓库编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsChannelWarehouseResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 物流渠道仓库关系新增
			 * /logisticsChannelWarehouse
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsChannelWarehouseRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 物流渠道仓库关系修改
			 * /logisticsChannelWarehouse
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsChannelWarehouseRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 物流渠道维度批量对物流仓库关系进行维护
			 * /logisticsChannelWarehouse/batchByLogisticsChannel
			 */
			export namespace updateBatchByLogisticsChannel {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelWarehouseResponseDto>
				export function request(body: defs.wms.BatchUpdateLogisticsWareParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 物流商维度批量对物流仓库关系进行维护
			 * /logisticsChannelWarehouse/batchByLogisticsPro
			 */
			export namespace updateBatchByLogisticsPro {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelWarehouseResponseDto>
				export function request(body: defs.wms.BatchUpdateLogisticsWareParamsDto, options?: any): Promise<Response>
			}

			/**
			 * 物流渠道仓库关系按id查询一个
			 * /logisticsChannelWarehouse/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelWarehouseResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 物流渠道仓库关系根据id删除
			 * /logisticsChannelWarehouse/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsChannelWarehouseResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流分组
		 */
		export namespace logisticsGroup {
			/**
			 * 查询物流分组列表
			 * /logisticsGroup
			 */
			export namespace list {
				export class Params {
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 物流分组编号 */
					logisticsGroupCode?: string
					/** 物流分组名称 */
					logisticsGroupName?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsGroupResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 添加新的分组
			 * /logisticsGroup
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsGroupRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 修改物流分组名称
			 * /logisticsGroup/groupName/{logisticsGroupName}
			 */
			export namespace modifyGroupName {
				export type Response = defs.wms.ResponseDto
				export function request(logisticsGroupName: string, body: defs.wms.LogisticsGroupModifyRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 通过分组编号查询分组信息
			 * /logisticsGroup/{logisticsGroupCode}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsGroupResponseDto>
				export function request(logisticsGroupCode: string, options?: any): Promise<Response>
			}

			/**
			 * 修改分组状态，禁用/启用
			 * /logisticsGroup/{status}
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(status: number, body: defs.wms.LogisticsGroupModifyRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 渠道商
		 */
		export namespace logisticsProvider {
			/**
			 * 获取渠道商列表-分页
			 * /logisticsProvider
			 */
			export namespace list {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 创建人 */
					createBy?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 物流商编号 */
					providerCode?: string
					/** 物流商名称 */
					providerName?: string
					/** 业务属性分类 10:toB 20:toC */
					serviceProperty?: number
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 适用仓库编码 */
					warehouseCode?: string
					/** 适用仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsProviderResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取渠道商列表-不分页
			 * /logisticsProvider/channelList
			 */
			export namespace getProviderlist {
				export class Params {
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 创建人 */
					createBy?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 物流商编号 */
					providerCode?: string
					/** 物流商名称 */
					providerName?: string
					/** 业务属性分类 10:toB 20:toC */
					serviceProperty?: number
					/** 状态 1:启用 0:停用 */
					status?: number
					/** 适用仓库编码 */
					warehouseCode?: string
					/** 适用仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsProviderResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改面单要求
			 * /logisticsProvider/labelStandard/{providerCode}
			 */
			export namespace modifyLabelStandard {
				export class Params {
					/** 面单要求 */
					labelStandard: string
					/** 渠道商编号 */
					providerCode: string
				}

				export type Response = defs.wms.ResponseDto
				export function request(providerCode: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 修改渠道商状态
			 * /logisticsProvider/status/{providerCode}
			 */
			export namespace modifyStatus {
				export class Params {
					/** 渠道商编号 */
					providerCode: string
					/** 状态 */
					status: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(providerCode: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据编号获取渠道商信息
			 * /logisticsProvider/{providerCode}
			 */
			export namespace getProviderForCode {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsProviderResponseDto>
				export function request(providerCode: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 渠道退件记录
		 */
		export namespace logisticsReturnRecord {
			/**
			 * 渠道退件记录列表
			 * /logisticsReturnRecord
			 */
			export namespace list {
				export class Params {
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 处理结果 10:入库 20:报损 30:重发 */
					handleResult?: number
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 备注 */
					remark?: string
					/** 退件记录号 */
					returnNo?: string
					/** 退件签收时间 */
					signTime?: string
					/** 来源单号 */
					sourceNo?: string
					/** 来源类型 10:销售订单 20:调拨单 */
					sourceType?: number
					/** 状态 10:未处理 20:已处理 */
					status?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsReturnRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 关税起征点配置
		 */
		export namespace logisticsTariffThreshold {
			/**
			 * 关税起征点配置列表
			 * /logisticsTariffThreshold
			 */
			export namespace list {
				export class Params {
					/** 起始国家简码 */
					originCountryCode?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 目标国家简码 */
					targetCountryCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.LogisticsTariffThresholdResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 关税起征点配置新增
			 * /logisticsTariffThreshold
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto<number>
				export function request(body: defs.wms.LogisticsTariffThresholdRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 关税起征点配置修改
			 * /logisticsTariffThreshold
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.LogisticsTariffThresholdRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 关税起征点配置查看详情
			 * /logisticsTariffThreshold/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsTariffThresholdResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 关税起征点配置删除
			 * /logisticsTariffThreshold/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.LogisticsTariffThresholdResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 物流面单
		 */
		export namespace logisticsWaybillLabel {
			/**
			 * getWaybillLabelMerge
			 * /logisticsWaybillLabel/getWaybillLabelMerge
			 */
			export namespace getWaybillLabelMerge {
				export type Response = any
				export function request(body: Array<string>, options?: any): Promise<Response>
			}

			/**
			 * getByPicknoAndWaybillNo
			 * /logisticsWaybillLabel/waybillLabel
			 */
			export namespace getByPicknoAndWaybillNo {
				export class Params {
					/** 捡货单号 */
					pickno?: string
					/** 物流单号 */
					waybillNo?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.LogisticsWaybillLabelResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * NS请求记录表
		 */
		export namespace nsRequestRecord {
			/**
			 * NS请求记录列表
			 * /nsRequestRecord
			 */
			export namespace list {
				export class Params {
					/** 请求编号 */
					apiCode?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 操作单号 */
					operationNo?: string
					/** 单据类型 10:入库单 20:出库单 30:调拨单 40:装柜单 50:盘点单 60:报损单 70:移库 */
					operationOrderType?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 请求body */
					requestBody?: string
					/** 请求流水ID */
					requestId?: string
					/** 请求状态 10:处理中 20:处理成功 30:处理失败 */
					requestStatus?: number
					/** 返回数据 */
					resultData?: string
					/** 重试次数 */
					retryTimes?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.NsRequestRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 忽略/恢复 请求记录
			 * /nsRequestRecord/ignoreOrRecovery/{requestId}
			 */
			export namespace ignoreOrRecovery {
				export type Response = defs.wms.ResponseDto
				export function request(requestId: string, options?: any): Promise<Response>
			}

			/**
			 * 失败请求重新推送
			 * /nsRequestRecord/pushAgain/{requestId}
			 */
			export namespace pushAgain {
				export type Response = defs.wms.ResponseDto
				export function request(requestId: string, options?: any): Promise<Response>
			}

			/**
			 * 批量失败请求重新推送
			 * /nsRequestRecord/pushAgainBatch
			 */
			export namespace pushAgainBatch {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<string>, options?: any): Promise<Response>
			}
		}

		/**
		 * 虚拟库存表
		 */
		export namespace nsStorage {
			/**
			 * 虚拟库存列表
			 * /nsStorage
			 */
			export namespace list {
				export class Params {
					/** 条码 装箱条码/SKU */
					barcode?: string
					/** 库位编号 */
					positionCode?: string
					/** sku */
					sku?: string
					/** 仓库编号 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.NsStorageResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 新增虚拟库存
			 * /nsStorage
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.NsStorageRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 操作记录表
		 */
		export namespace operationRecord {
			/**
			 * 操作记录列表
			 * /operationRecord
			 */
			export namespace list {
				export class Params {
					/** 开始操作日期 */
					beginCreateDate?: string
					/** 开始操作时间 */
					beginCreateTime?: string
					/** 操作人 */
					createBy?: string
					/** 结束操作日期 */
					endCreateDate?: string
					/** 结束操作时间 */
					endCreateTime?: string
					/** id */
					id?: number
					/** 操作描述 */
					operationDescribe?: string
					/** 操作单号 */
					operationNo?: string
					/** 操作类型  */
					operationType?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 来源单号 */
					sourceNo?: string
					/** 来源类型 10:交货单 20:退货入库 30:调拨入库 40:借调入库 50:销售订单 60:采购退货出库 70:调拨出库 80:借调出库 */
					sourceType?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.OperationRecordResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 出库单
		 */
		export namespace outMaster {
			/**
			 * 出库单列表
			 * /outMaster
			 */
			export namespace list {
				export class Params {
					/** 地址 */
					address?: string
					/** 开始创建日期 */
					beginCreateDate?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 开始更新日期 */
					beginUpdateDate?: string
					/** 开始更新时间 */
					beginUpdateTime?: string
					/** 物流渠道服务编号 */
					channelCode?: string
					/** 城市 */
					city?: string
					/** 国家 */
					country?: string
					/** 国家简码 */
					countryCode?: string
					/** 发货时间 */
					deliveryTime?: string
					/** 出库单号 */
					dono?: string
					/** 邮箱地址 */
					email?: string
					/** 结束创建日期 */
					endCreateDate?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 结束更新日期 */
					endUpdateDate?: string
					/** 结束更新时间 */
					endUpdateTime?: string
					/** id */
					id?: number
					/** 物流面单文件路径 */
					logisticsLabelPath?: string
					/** 物流状态 0:初始化 10:未处理 20:已处理 */
					logisticStatus?: number
					/** 移动电话 */
					mobilePhone?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 拣货单号 */
					pickno?: string
					/** 平台编号 */
					platformCode?: string
					/** 平台名称 */
					platformName?: string
					/** 平台订单号 */
					platformOrderId?: string
					/** 邮编 */
					postcode?: string
					/** 物流渠道商编号 */
					providerCode?: string
					/** 省份 */
					province?: string
					/** 数量 */
					qty?: number
					/** 收件人 */
					recipient?: string
					/** 备注 */
					remark?: string
					/** 平台编号 */
					shopCode?: string
					/** 店铺名称 */
					shopName?: string
					/** 来源单号 */
					sourceNo?: string
					/** 来源订单状态 10:正常 20:订单取消 */
					sourceStatus?: number
					/** 来源类型 10:销售订单 20:采购退货单 30:调拨单 40:借调单 */
					sourceType?: number
					/** 状态 0:未分配 10:待拣货 20:已拣货 30:已校验 40:校验失败 45:已还货 50:已称重 60:已扫描 70:已出库 80:待还货 */
					status?: number
					/** 收件人纳税号 */
					taxid?: string
					/** 固定电话 */
					telephone?: string
					/** 最终跟踪号 */
					trackingNo?: string
					/** 仓库编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
					/** 运单号 */
					waybillNo?: string
					/** 出库重量 */
					weight?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.OutMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建出库单
			 * /outMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<defs.wms.OutMasterCreateRequestDto>, options?: any): Promise<Response>
			}

			/**
			 * 出库单校验
			 * /outMaster/check/{dono}
			 */
			export namespace check {
				export type Response = defs.wms.ResponseDto
				export function request(dono: string, body: Array<defs.wms.OutDetailCheckRequestDto>, options?: any): Promise<Response>
			}

			/**
			 * 出库校验获取出库单明细
			 * /outMaster/check/{number}
			 */
			export namespace getCheckList {
				export type Response = defs.wms.ResponseDto<defs.wms.OutCheckResponseDto>
				export function request(number: string, options?: any): Promise<Response>
			}

			/**
			 * 获取出库单还货数据
			 * /outMaster/return/{code}
			 */
			export namespace getReturnByDono {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.OutReturnResponseDto>>
				export function request(code: string, options?: any): Promise<Response>
			}

			/**
			 * 提交还货数据
			 * /outMaster/return/{dono}
			 */
			export namespace returnPush {
				export type Response = defs.wms.ResponseDto
				export function request(dono: string, body: defs.wms.OutReturnRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 退件签收
			 * /outMaster/signing/{dono}
			 */
			export namespace signing {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.OutReturnSignRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 运单号/出库单号/跟踪单号 退件签收查询出库单信息
			 * /outMaster/signing/{number}
			 */
			export namespace getInfoByNumber {
				export type Response = defs.wms.ResponseDto<defs.wms.OutMasterResponseDto>
				export function request(number: string, options?: any): Promise<Response>
			}

			/**
			 * 出库单称重
			 * /outMaster/weight/{dono}
			 */
			export namespace weight {
				export class Params {
					/** 出库单号 */
					dono: string
					/** 重量 */
					weight: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(dono: string, params: Params, options?: any): Promise<Response>
			}

			/**
			 * 出库称重获取出库单校验明细
			 * /outMaster/weight/{number}
			 */
			export namespace getWeightList {
				export type Response = defs.wms.ResponseDto<defs.wms.OutCheckResponseDto>
				export function request(number: string, options?: any): Promise<Response>
			}

			/**
			 * 出库单详情
			 * /outMaster/{dono}
			 */
			export namespace getByDono {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.OutInfoSkuResponseDto>>
				export function request(dono: string, options?: any): Promise<Response>
			}
		}

		/**
		 * rpc-出库单
		 */
		export namespace outStorageFacadeImpl {
			/**
			 * intercept
			 * /outStorage/outStorage/intercept
			 */
			export namespace intercept {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.OutStorageInterceptRequestDto, options?: any): Promise<Response>
			}

			/**
			 * add
			 * /outStorage/outStorage/outPlan
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.OutMasterCreateFromSaleRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 包裹分拣管理
		 */
		export namespace packageMaster {
			/**
			 * 包裹分拣管理分页查询
			 * /packageMaster
			 */
			export namespace list {
				export class Params {
					/** 开始出库时间 */
					beginDeliveryTime?: string
					/** 出库单号 */
					dono?: string
					/** 结束出库时间 */
					endDeliveryTime?: string
					/** 主键 */
					id?: number
					/** 物流商编号 */
					logisticsProviderCode?: string
					/** 物流商名称 */
					logisticsProviderName?: string
					/** 订单号 */
					orderNo?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** pkg号 */
					pkg?: string
					/** 状态 10:未扫描 20:已扫描 30:已发运 40:已取消 */
					status?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.PackageMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 包裹分拣新增
			 * /packageMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(options?: any): Promise<Response>
			}

			/**
			 * 取消分拣包裹
			 * /packageMaster/cancel
			 */
			export namespace cancel {
				export class Params {
					/** pkgs */
					pkgs?: Array<string>
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 分拣包裹确认发货
			 * /packageMaster/confirm/{pkg}
			 */
			export namespace confirm {
				export type Response = defs.wms.ResponseDto
				export function request(pkg: string, options?: any): Promise<Response>
			}

			/**
			 * pkg号查询包裹分拣信息
			 * /packageMaster/package/{pkg}
			 */
			export namespace getDetailByPkg {
				export type Response = defs.wms.ResponseDto<defs.wms.PackageMasterDetailResponseDto>
				export function request(pkg: string, options?: any): Promise<Response>
			}

			/**
			 * 分拣包裹明细导出
			 * /packageMaster/packageDetailReport
			 */
			export namespace packageDetailReport {
				export class Params {
					/** endDate */
					endDate: string
					/** startDate */
					startDate: string
				}

				export type Response = any
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 通过pkg确认扫描
			 * /packageMaster/scan/{pkg}
			 */
			export namespace scanByPkg {
				export type Response = defs.wms.ResponseDto
				export function request(pkg: string, options?: any): Promise<Response>
			}

			/**
			 * 运单号or跟踪号绑定pkg
			 * /packageMaster/waybill
			 */
			export namespace getByWaybillNo {
				export class Params {
					/** pkg */
					pkg: string
					/** waybillNo */
					waybillNo: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PackageWaybillResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 拣货单
		 */
		export namespace pickMaster {
			/**
			 * 前端-拣货单列表
			 * /pickMaster
			 */
			export namespace list {
				export class Params {
					/** 库位数量 */
					binNum?: number
					/** 包裹数量 */
					boxNum?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 总数量 */
					num?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 拣货单号 */
					pickno?: string
					/** 打印人 */
					printBy?: string
					/** 打印标识 0：否1：是 */
					printed?: boolean
					/** 打印时间 */
					printTime?: string
					/** 产品数量 (sku+批次) */
					productNum?: number
					/** 备注 */
					remark?: string
					/** 状态 0:未拣货 1:已拣货 */
					status?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 仓库编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.PickMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 前端-创建拣货单
			 * /pickMaster
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.PickAddRequestDto, options?: any): Promise<Response>
			}

			/**
			 * PDA-确认拣货数据
			 * /pickMaster/confirmPick/{pickno}
			 */
			export namespace confirmPick {
				export type Response = defs.wms.ResponseDto
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * 前端-创建拣货单-筛选出库单
			 * /pickMaster/filterPickDetail
			 */
			export namespace filterPickDetail {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.PickDetailFilterResponseDto>>
				export function request(body: defs.wms.PickDetailFilterRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 查看库存占用
			 * /pickMaster/getStorageOfOccupy
			 */
			export namespace getStorageOfOccupy {
				export class Params {
					/** sku */
					sku: string
					/** 仓库编号 */
					warehouseCode: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.StorageOfOccupyResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 前端-获取出库单信息
			 * /pickMaster/outInfo
			 */
			export namespace getOutInfo {
				export class Params {
					/** 出库单号 */
					dono?: string
					/** 拣货单号 */
					pickno?: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.OutInfoResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * PDA-获取拣货单拣货数据
			 * /pickMaster/pick/{pickno}
			 */
			export namespace getPickList {
				export type Response = defs.wms.ResponseDto<defs.wms.PickWaitInfoResponseDto>
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * PDA-提交拣货数据
			 * /pickMaster/pick/{pickno}
			 */
			export namespace pick {
				export type Response = defs.wms.ResponseDto<defs.wms.PickWaitInfoResponseDto>
				export function request(pickno: string, body: defs.wms.PickRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 前端-拣货单明细列表
			 * /pickMaster/pickDetail
			 */
			export namespace getPickMasterPickDetail {
				export class Params {
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 配货位 */
					distribute?: number
					/** 出库单号 */
					dono?: string
					/** id */
					id?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 拣货单号 */
					pickno?: string
					/** 备注 */
					remark?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.PickDetailResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 前端-获取拣货单信息
			 * /pickMaster/pickInfo/{pickno}
			 */
			export namespace getPickInfo {
				export type Response = defs.wms.ResponseDto<defs.wms.PickInfoResponseDto>
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * PDA-重置拣货数据
			 * /pickMaster/resetPick/{pickno}
			 */
			export namespace resetPick {
				export type Response = defs.wms.ResponseDto
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * 前端-拣货单明细序列
			 * /pickMaster/serial/{pickno}
			 */
			export namespace serialList {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.PickDetailSerialResponseDto>>
				export function request(pickno: string, options?: any): Promise<Response>
			}

			/**
			 * 前端-更新拣货单打印信息
			 * /pickMaster/updatePrint/{pickno}
			 */
			export namespace updatePrint {
				export type Response = defs.wms.ResponseDto
				export function request(pickno: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品
		 */
		export namespace product {
			/**
			 * list
			 * /product
			 */
			export namespace list {
				export class Params {
					/** 提交人备注 */
					applyMemo?: string
					/** 提交人ID */
					applyUserId?: number
					/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
					approvalStatus?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 首次采购金额 */
					firstPurchasePrice?: number
					/** id */
					id?: number
					/** 物流分组 */
					logisticsGroup?: string
					/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
					netsuitePushStatus?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 工作流实例id */
					processInstanceId?: number
					/** 产品简称 */
					productAbbr?: string
					/** 增值税率 */
					productAddedTax?: number
					/** 附件链接 */
					productAttr?: string
					/** 品牌 */
					productBrand?: string
					/** 类目 */
					productCategory?: string
					/** 产品编号 */
					productCode?: string
					/** 申报名称(中文) */
					productDeclareCn?: string
					/** 申报名称(英文) */
					productDeclareEn?: string
					/** 申报要素 */
					productDeclareMemo?: string
					/** 事业部 */
					productDepartment?: string
					/** 质保期(月) */
					productExpirydate?: number
					/** HSCODE(国内) */
					productHscodeCn?: string
					/** HSCODE(国外) */
					productHscodeEn?: string
					/** 制造国家 */
					productMadeCountry?: string
					/** 产品名称 */
					productNameCn?: string
					/** 英文名称 */
					productNameEn?: string
					/** 产品材质 */
					productNature?: string
					/** 产品负责人 */
					productOwner?: string
					/** 副产品负责人 */
					productOwner2?: string
					/** 计划员 */
					productPlanner?: string
					/** 采购负责人 */
					productPurchaser?: string
					/** sku */
					productSku?: string
					/** 状态 有效 无效 */
					productStatus?: string
					/** 退税率 */
					productTaxrebates?: number
					/** 产品类型 */
					productType?: string
					/** 产品用途 */
					productUse?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.ProductInfoDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * productSave
			 * /product
			 */
			export namespace productSave {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ProductInfoDto, options?: any): Promise<Response>
			}

			/**
			 * 审批
			 * /product/approval
			 */
			export namespace approval {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ProductWorkflowDto, options?: any): Promise<Response>
			}

			/**
			 * 提交审批
			 * /product/commit
			 */
			export namespace commit {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ProductWorkflowDto, options?: any): Promise<Response>
			}

			/**
			 * productByCode
			 * /product/productByCode
			 */
			export namespace productByCode {
				export class Params {
					/** productCode */
					productCode: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.ProductInfoDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * productList
			 * /product/productList
			 */
			export namespace productList {
				export class Params {
					/** productCodeList */
					productCodeList: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.ProductInfoDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * list
			 * /product/sku
			 */
			export namespace getProductSku {
				export class Params {
					/** 提交人备注 */
					applyMemo?: string
					/** 提交人ID */
					applyUserId?: number
					/** 审批状态 -1:未提交审批 0:已驳回 1:已通过 2:审批中 */
					approvalStatus?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 产品交期 */
					deliveryDay?: number
					/** id */
					id?: number
					/** NS同步状态 -1:未推送 1:推送成功 0:推送失败 */
					netsuitePushStatus?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 工作流实例id */
					processInstanceId?: number
					/** 产品编号 */
					productCode?: string
					/** 产品初始分级 */
					productInitGrading?: string
					/** 产品负责人 */
					productOwner?: string
					/** SKU编号 */
					productSku?: string
					/** SKU简称 */
					productSkuAbbr?: string
					/** 单个产品计费重量(g) */
					productSkuBillingWeight?: number
					/** 装箱箱高(CM) */
					productSkuBoxHeight?: number
					/** 装箱箱长(CM) */
					productSkuBoxLong?: number
					/** 装箱箱宽(CM) */
					productSkuBoxWidth?: number
					/** 描述 */
					productSkuDescribe?: string
					/** 是否需要厂检 */
					productSkuFactoryCheck?: string
					/** 产品分级 */
					productSkuGrading?: string
					/** 产品高(cm) */
					productSkuHeight?: number
					/** 图片链接 */
					productSkuImageUrl?: string
					/** 物流周期(天) */
					productSkuLogisticsCycle?: number
					/** 产品长(cm) */
					productSkuLong?: number
					/** 每箱数量(MPQ) */
					productSkuMpq?: number
					/** SKU中文标题 */
					productSkuName?: string
					/** SKU英文标题 */
					productSkuNameEn?: string
					/** 单个产品装箱重量(g) */
					productSkuPackingWeight?: number
					/** 单个产品装箱体积(m3) */
					productSkuSingleVolume?: number
					/** 默认运输方式 */
					productSkuTransport?: string
					/** 默认供应商 */
					productSkuVendor?: string
					/** 体积重(g) */
					productSkuVolumeWeight?: number
					/** 是否需要质检 */
					productSkuWarehouseCheck?: string
					/** 产品重量(g) */
					productSkuWeight?: number
					/** 产品宽(cm) */
					productSkuWidth?: number
					/** 计量单位 */
					productUnitsOfMeasure?: string
					/** 单位类型 */
					productUnitsType?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.ProductSkuInfoDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * skuSave
			 * /product/sku
			 */
			export namespace skuSave {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ProductSkuInfoDto, options?: any): Promise<Response>
			}

			/**
			 * skuInfo
			 * /product/skuInfo
			 */
			export namespace skuInfo {
				export class Params {
					/** sku */
					sku: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.ProductSkuInfoDto>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * skuList
			 * /product/skuList
			 */
			export namespace skuList {
				export class Params {
					/** skuList */
					skuList: string
				}

				export type Response = defs.wms.ResponseDto<Array<defs.wms.ProductSkuInfoDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 产品计量单位
		 */
		export namespace productUnitsMeasure {
			/**
			 * 获取计量单位
			 * /productUnitsMeasure/getUnitsMeasure
			 */
			export namespace getUnitsMeasure {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.ProductUnitsMeasureAllResponseDto>>
				export function request(options?: any): Promise<Response>
			}

			/**
			 * 获取单位类型
			 * /productUnitsMeasure/getUnitsType/{measureCode}
			 */
			export namespace getUnitsType {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.ProductUnitsMeasureResponseDto>>
				export function request(measureCode: string, options?: any): Promise<Response>
			}
		}

		/**
		 * 店铺and事业部
		 */
		export namespace shopDepartmentMapping {
			/**
			 * 列表查询
			 * /shopDepartmentMapping
			 */
			export namespace list {
				export class Params {
					/** 地址 */
					address?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 事业部 */
					department?: string
					/** id */
					id?: number
					/** 名称 */
					name?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 货代信息 */
					representativesInformation?: string
					/** 店铺 */
					shopName?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.ShopDepartmentMappingResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 新增
			 * /shopDepartmentMapping
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ShopDepartmentMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 修改
			 * /shopDepartmentMapping
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ShopDepartmentMappingRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 删除
			 * /shopDepartmentMapping/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.ShopDepartmentMappingResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 回传NS接口参数展示及测试
		 */
		export namespace showNsResultContorller {
			/**
			 * 调拨分箱信息回传NS
			 * /showNsResult/allocationBoxResult
			 */
			export namespace allocationBoxResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<defs.wms.AllocationBoxResponseDto>, options?: any): Promise<Response>
			}

			/**
			 * 调拨装柜信息回传NS
			 * /showNsResult/allocationContainerResult
			 */
			export namespace allocationContainerResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.AllocationContainerResultNsDto, options?: any): Promise<Response>
			}

			/**
			 * 调拨结果回传NS
			 * /showNsResult/allocationMasterResult
			 */
			export namespace allocationMasterResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.AllocationMasterResultNsDto, options?: any): Promise<Response>
			}

			/**
			 * 报损信息回传NS
			 * /showNsResult/breakageResult
			 */
			export namespace breakageResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StorageReportDamageResultNsDto, options?: any): Promise<Response>
			}

			/**
			 * 入库结果回传NS
			 * /showNsResult/inMasterResult
			 */
			export namespace inMasterResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.InMasterResultDto, options?: any): Promise<Response>
			}

			/**
			 * 盘点结果回传NS
			 * /showNsResult/inventoryMasterResult
			 */
			export namespace inventoryMasterResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: Array<defs.wms.InventoryMasterResultNsDto>, options?: any): Promise<Response>
			}

			/**
			 * 移库回传NS
			 * /showNsResult/moveStock
			 */
			export namespace moveStock {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StockMoveRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 出库结果回传NS
			 * /showNsResult/outMasterResult
			 */
			export namespace outMasterResult {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.OutMasterResultNsDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 库存报损
		 */
		export namespace storageReportDamage {
			/**
			 * 分页查询
			 * /storageReportDamage
			 */
			export namespace list {
				export class Params {
					/** 审核人 */
					auditor?: string
					/** 条码 装箱条码/SKU */
					barcode?: string
					/** 开始审核时间 */
					beginAuditTime?: string
					/** 开始创建时间 */
					beginCreateTime?: string
					/** 创建人 */
					createBy?: string
					/** 当前审批步骤 */
					currentApprovalStep?: string
					/** 事业部 */
					department?: string
					/** 结束审核时间 */
					endAuditTime?: string
					/** 结束创建时间 */
					endCreateTime?: string
					/** 报损单号 */
					fono?: string
					/** id */
					id?: number
					/** 数量 */
					num?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 库位编号 */
					positionCode?: string
					/** 工作流实例id */
					processInstanceId?: number
					/** 驳回人 */
					rejecter?: string
					/** sku */
					sku?: string
					/** 报损状态 10:待审核 20:已审核 30:已驳回 */
					status?: number
					/** 库存成本 */
					storageCost?: number
					/** 类型 1:已装箱 2:未装箱 */
					type?: number
					/** 仓库编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.StorageReportDamageResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 创建库存报损单
			 * /storageReportDamage
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StorageReportDamageRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 审批
			 * /storageReportDamage/approval
			 */
			export namespace approval {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StorageDamagetWorkflowDto, options?: any): Promise<Response>
			}

			/**
			 * fono获取报损单信息
			 * /storageReportDamage/getStorageReportDamage
			 */
			export namespace getStorageReportDamage {
				export class Params {
					/** fono */
					fono: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.StorageReportDamageResponseDto>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}

		/**
		 * 库区and货架and货架组
		 */
		export namespace storageUnit {
			/**
			 * 新增库区
			 * /storageUnit/areaAdd
			 */
			export namespace areaAdd {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StorageUnitAreaRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据ID删除库区
			 * /storageUnit/deleteAreaById
			 */
			export namespace deleteAreaById {
				export class Params {
					/** id */
					id: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据ID删除货架组
			 * /storageUnit/deleteByGroupId
			 */
			export namespace deleteByGroupId {
				export class Params {
					/** id */
					id: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据ID删除货架
			 * /storageUnit/deleteShelvesById
			 */
			export namespace deleteShelvesById {
				export class Params {
					/** id */
					id: number
				}

				export type Response = defs.wms.ResponseDto
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 获取库区and货架and货架组列表
			 * /storageUnit/getStorageUnitList
			 */
			export namespace storageUnitList {
				export class Params {
					/** 库区编号 */
					areaCode?: string
					/** 库区类型 10:自营 20:FBA */
					areaType?: number
					/** 编号 */
					code?: string
					/** 列数 (货架组必填) */
					columns?: number
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** id */
					id?: number
					/** 层数 (货架组必填) */
					layers?: number
					/** 名称 */
					name?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 关联编号(弃用) */
					relationCode?: string
					/** 行数 (货架组必填 默认1) */
					rows?: number
					/** 货架编号 */
					shelvesCode?: string
					/** 状态 0:停用 1:启用 */
					status?: number
					/** 存储类型 10:库区 20:货架 30:货架组 */
					storageType?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 仓库编号 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.StorageUnitResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 库区修改
			 * /storageUnit/modifyArea
			 */
			export namespace modifyStorageUnit {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.StorageUnitAreaRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 货架修改
			 * /storageUnit/modifyShelves
			 */
			export namespace modifyShelves {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ShelvesAddRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 新增货架&货架组
			 * /storageUnit/shelvesAdd
			 */
			export namespace shelvesAdd {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.ShelvesAddRequestDto, options?: any): Promise<Response>
			}
		}

		/**
		 * 测试
		 */
		export namespace test {
			/**
			 * test
			 * /test
			 */
			export namespace test {
				export type Response = defs.wms.ResponseDto
				export function request(options?: any): Promise<Response>
			}
		}

		/**
		 * 仓库
		 */
		export namespace warehouse {
			/**
			 * 仓库列表
			 * /warehouse
			 */
			export namespace list {
				export class Params {
					/** 地址 */
					address?: string
					/** 区 */
					area?: string
					/** 城市 */
					city?: string
					/** 联系人 */
					contacts?: string
					/** 国家 */
					country?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 邮箱 */
					email?: string
					/** id */
					id?: number
					/** 移动电话 */
					mobilePhone?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 邮编 */
					postcode?: string
					/** 省份 */
					province?: string
					/** 状态 0:停用 1:启用 */
					status?: number
					/** 固定电话 */
					telephone?: string
					/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
					type?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
					/** 重量单位 10:g 20:kg */
					weightUnit?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.WarehouseResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 添加仓库
			 * /warehouse
			 */
			export namespace add {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.WarehouseRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 修改仓库
			 * /warehouse
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.WarehouseRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 可用仓库列表
			 * /warehouse/availableWarehouse
			 */
			export namespace availableList {
				export class Params {
					/** 地址 */
					address?: string
					/** 区 */
					area?: string
					/** 城市 */
					city?: string
					/** 联系人 */
					contacts?: string
					/** 国家 */
					country?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 邮箱 */
					email?: string
					/** id */
					id?: number
					/** 移动电话 */
					mobilePhone?: string
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 邮编 */
					postcode?: string
					/** 省份 */
					province?: string
					/** 状态 0:停用 1:启用 */
					status?: number
					/** 固定电话 */
					telephone?: string
					/** 仓库类型 10:自营 20:FBA 30:第三方仓 */
					type?: number
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 编号 */
					warehouseCode?: string
					/** 仓库名称 */
					warehouseName?: string
					/** 重量单位 10:g 20:kg */
					weightUnit?: number
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.WarehouseResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 根据ID查询仓库
			 * /warehouse/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.WarehouseResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}

			/**
			 * 删除仓库
			 * /warehouse/{id}
			 */
			export namespace deleteById {
				export type Response = defs.wms.ResponseDto<defs.wms.WarehouseResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 库位
		 */
		export namespace warehousePosition {
			/**
			 * 库位列表
			 * /warehousePosition
			 */
			export namespace list {
				export class Params {
					/** 库区编号 */
					areaCode?: string
					/** 列 */
					column?: number
					/** 货架组编号 */
					groupCode?: string
					/** 层 */
					layer?: number
					/** 拣货顺序 */
					order?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 库位编号 */
					positionCode?: string
					/** 货架编号 */
					shelvesCode?: string
					/** 体积(mm3) */
					volume?: number
					/** 仓库编号 */
					warehouseCode?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.WarehousePositionResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}

			/**
			 * 库位修改
			 * /warehousePosition
			 */
			export namespace modify {
				export type Response = defs.wms.ResponseDto
				export function request(body: defs.wms.WarehousePositionRequestDto, options?: any): Promise<Response>
			}

			/**
			 * 根据库位编号查询明细
			 * /warehousePosition/position/{positionCode}
			 */
			export namespace getWarehousePosition {
				export type Response = defs.wms.ResponseDto<defs.wms.WarehousePositionResponseDto>
				export function request(positionCode: string, options?: any): Promise<Response>
			}

			/**
			 * 根据货架组编号查询库位
			 * /warehousePosition/storageLocationList
			 */
			export namespace storageLocationList {
				export type Response = defs.wms.ResponseDto<Array<defs.wms.CodeAndNameListResponseDto>>
				export function request(body: Array<defs.wms.StorageLocationListRequestDto>, options?: any): Promise<Response>
			}

			/**
			 * 根据ID查询库位
			 * /warehousePosition/{id}
			 */
			export namespace getById {
				export type Response = defs.wms.ResponseDto<defs.wms.WarehousePositionResponseDto>
				export function request(id: number, options?: any): Promise<Response>
			}
		}

		/**
		 * 运单表
		 */
		export namespace waybillMaster {
			/**
			 * list
			 * /waybillMaster
			 */
			export namespace list {
				export class Params {
					/** 地址 */
					address?: string
					/** 城市 */
					city?: string
					/** 关联单号 */
					correlationNo?: string
					/** 国家 */
					country?: string
					/** 国家简码 */
					countryCode?: string
					/** 创建人 */
					createBy?: string
					/** 创建时间 */
					createTime?: string
					/** 申报价格USD */
					declarePrice?: number
					/** 妥投时间 */
					deliveredTime?: string
					/** 发货时间 */
					deliveryTime?: string
					/** 邮箱地址 */
					email?: string
					/** 预估费用 */
					estimatePrice?: number
					/** 预估重量 */
					estimateWeight?: number
					/** id */
					id?: number
					/** 物流渠道服务编号 */
					logisticsChannelCode?: string
					/** 物流渠道服务名称 */
					logisticsChannelName?: string
					/** 物流商运费 */
					logisticsPrice?: number
					/** 物流渠道商编号 */
					logisticsProviderCode?: string
					/** 物流渠道商名称 */
					logisticsProviderName?: string
					/** 物流状态 10:未发运 20:已发运 30:已妥投 40:已退回 */
					logisticsStatus?: number
					/** 物流商重量 */
					logisticsWeight?: number
					/** 移动电话 */
					mobilePhone?: string
					/** 操作单号 */
					operationNo?: string
					/** 单据类型 10:入库单 20:出库单 */
					operationOrderType?: number
					/** pageNumber */
					pageNumber?: number
					/** pageSize */
					pageSize?: number
					/** 邮编 */
					postcode?: string
					/** 产品集合 */
					productJson?: string
					/** 省份 */
					province?: string
					/** 出库数量 */
					qty?: number
					/** 实际费用 */
					realityPrice?: number
					/** 实际重量 */
					realityWeight?: number
					/** 收件人 */
					recipient?: string
					/** 备注 */
					remark?: string
					/** 销售价格USD */
					salePrice?: number
					/** 固定电话 */
					telephone?: string
					/** 跟踪号 */
					trackingNo?: string
					/** 更新人 */
					updateBy?: string
					/** 更新时间 */
					updateTime?: string
					/** 运单号 */
					waybillNo?: string
				}

				export type Response = defs.wms.ResponseDto<defs.wms.PageInfo<defs.wms.WaybillMasterResponseDto>>
				export function request(params: Params, options?: any): Promise<Response>
			}
		}
	}
}
