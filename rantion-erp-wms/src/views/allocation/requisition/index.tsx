/*
 * @Description:调拨单
 * @Author: owen
 * @Date: 2021-02-23 09:55:33
 * @LastEditTime: 2021-03-15 17:28:43
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, F, forEach, isEmpty, isNil, not, pickAll, pipe } from 'ramda'
import { timestampToTime } from '@/utils/date'
import { requisitionStatusFilter, requisitionTypeFilter, shippingTypeFilter } from '@/dictionaries/filter'
import { options } from '@/dictionaries/config'
import BoxDetail from './components/boxdetail'
import AllocationDetail from './components/skuDetail'
import { BoxingBillExport, invoiceExport, requisitionExport } from '@/utils/downloadApi'
import { printBox, SelectPrinter } from '@/plugin/print'
import { readerBlob } from '@/utils'
import { getBoxInfo } from '@/api/nsApi'

const equals40 = equals(40)
const isUsMx = equals('US_MX')
const notUsMx = pipe(isUsMx, not)
export enum printerType {
	FNSKU,
	SKU
}
@Component({
	name: 'Requisition',
	components: { BoxDetail, AllocationDetail }
})
export default class Requisition extends TablePage {
	public printerSize: SelectPrinter = {
		printer: '',
		size: 'A5',
		intOrient: 2,
		isSave: false,
		qty: 1
	}
	public tableData: Array<defs.wms.AllocationMasterResponseDto> = []
	public searchForm: API.wms.allocationMaster.list.Params = {}
	public statusList = []
	public expVisible = false
	public boxLabelPath = ''
	// TODO 批量操作 不需要了  但保留代码
	get getAonos() {
		return [''] // map(({ aono }) => aono, this.multipleSelection)
	}
	@Ref('boxDetail') readonly boxDetailRef!: HTMLFormElement
	@Ref('allocationDetail') readonly allocationDetailRef!: HTMLFormElement
	@Ref('pickPrint') readonly pickPrintRef!: HTMLFormElement
	@Ref('selectPrinter') readonly selectPrinterRef!: HTMLFormElement
	mounted() {
		this.search()
	}
	onChange(date: any, dateString: any) {
		console.log(date, dateString)
	}
	showBox(record: object) {
		this.boxDetailRef.init(record)
	}
	showSku(record: object) {
		this.allocationDetailRef.init(record)
	}

	// print(record: IntPageData) {
	// 	const printList: Array<string> = [record.icno]
	// 	forEach((item) => {
	// 		printIcno(item)
	// 	}, printList)
	// }
	//导出当前查询
	async export() {
		this.$message.loading({ content: '导出中···', duration: 1 })

		const expData: API.wms.allocationMaster.exportAllocationReport.Params = {
			/** 调拨批次号 */
			abno: this.searchForm.abno,
			/** 调拨单号 */
			aono: this.searchForm.aono,
			/** 起始箱数 */
			beginBoxQty: this.searchForm.beginBoxQty,
			/** 开始创建时间 */
			beginCreateTime: this.searchForm.beginCreateTime
		}
		await requisitionExport(expData)
	}

	// 导出发票
	public async exportInvoice(aono: any) {
		this.$message.loading({ content: '导出中···', duration: 1 })
		await invoiceExport(aono)
		//	console.log(aono)
	}

	//导出装箱单 BoxingBillExport
	async exportBoxingBill(aono: string | null) {
		this.$message.loading({ content: '导出中···', duration: 1 })
		await BoxingBillExport(aono)
	}

	// 生成并打印拣货单  todo 打印拣货单ref未完成
	private async printCode(parm: defs.wms.AllocationMasterResponseDto) {
		let pickno: any = parm.pickno
		if (pickno) {
			const { data } = await API.wms.pickMaster.getPickInfo.request(pickno)
			this.pickPrintRef.print({
				...data,
				aono: parm.aono,
				referenceId: parm.referenceId,
				shipmentName: parm.shipmentName
			})
		} else {
			const response = await API.wms.allocationMaster.createPick.request(parm.aono)
			pickno = response.data?.pickno
			const { data } = await API.wms.pickMaster.getPickInfo.request(pickno)
			this.pickPrintRef.print({ ...data, aono: parm.aono })
		}
	}
	// 打印SKU\FSKU  todo  ref没搞
	public async printFnSku(aono: string, fbaAccount: string, type: printerType) {
		const { data, success } = await API.wms.allocationMaster.getAllocationetailByAono.request(aono)
		if (success && !isNil(data)) {
			console.log(data, fbaAccount, type)

			// let variants = ''
			// const func = pasrseMapJoin(' ', function(value: any) {
			// 	return value.value || ''
			// })
			// const list = map(
			// 	(item: PrintFnSkuInt): PrintFnSkuInt => {
			// 		if (item.variants) {
			// 			variants = func(item.variants)
			// 		}
			// 		return {
			// 			fnsku: item.fnsku,
			// 			msku: `${item.msku}-${fbaAccount || ''}`,
			// 			variants,
			// 			sku: item.sku,
			// 			qty: item.qty,
			// 			fbaAccount,
			// 			productTitle: item.productTitle
			// 		}
			// 	}
			// )(data)
			// this.PrintSelectRef.init(list, type)
		}
	}
	// 打印外箱条形码

	public async printBox(aono: string) {
		const { data, success } = await API.wms.allocationBox.getByAono.request(aono)
		if (success && !isNil(data)) {
			forEach((item) => {
				printBox(pickAll(['aono', 'barcode', 'boxNo'], item))
			}, data as any)
		}
	}

	public async selectPrinter(boxLabelPath: string) {
		if (isEmpty(this.printerSize.printer)) {
			this.selectPrinterRef.show()
			this.boxLabelPath = boxLabelPath
			return
		}
		this.printLabel(boxLabelPath)
	}
	// 打印条码 打印箱外标签
	public async printLabel(boxLabelPath: string, aono?: string) {
		const { data } = await API.wms.allocationMaster.getBoxLabel.request({ filePath: boxLabelPath })
		const arraybuffer = data
		if (equals(arraybuffer.byteLength, 0)) {
			this.$notification.error({
				message: '错误',
				description: `外箱标签下载失败`
			})
			return F()
		} else if (arraybuffer.byteLength < 200) {
			const blob = new Blob([arraybuffer], { type: 'application/json' })
			const data: any = await readerBlob(blob)
			if (!equals(data.code, 0)) {
				this.$notification.error({
					message: '异常',
					description: `外箱标签下载失败:${data.msg}`
				})
				return
			}
		}
		if (pipe(isNil, not)(aono)) {
			saveAs(new Blob([arraybuffer]), aono + '.zip')
			return
		}
		//todozip
		// const zip = new JSZip()
		// if (!isNil(zip)) {
		// 	const zipCenter = await zip.loadAsync(arraybuffer, {})
		// 	forEach(async (key) => {
		// 		const uint8array = await zip!.file(key)!.async('uint8array')
		// 		printPDFByA4(uint8array, this.printerSize)
		// 	}, Object.keys(zipCenter.files))
		// }
		return
	}

	async getBoxMore(info: string, aono: string) {
		if (info === 'amazonBoxInfo') {
			getBoxInfo({ action: info, aono })
			this.$notification.success({
				message: '成功',
				description: '执行成功'
			})
			return false
		}
		const loading = this.$loading({
			lock: true,
			text: '获取箱唛ing...',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		})
		try {
			const data = await getBoxInfo({ action: info, aono })
			if (data.code !== 0) {
				this.$message.success(data.msg)
			} else {
				this.$notification.success({
					message: '成功',
					description: '执行成功'
				})
			}
		} catch (error) {
			console.log(error)
		} finally {
			loading.close()
		}
		return
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<div style="marginBottom:20px">
						<span>状态：</span>
						<a-radio-group title="状态" v-model={this.searchForm.status} on-change={this.search}>
							<a-radio-button value="">全部</a-radio-button>
							{options.requisitionStatus.map((item) => (
								<a-radio-button value={item.value} key={item.label}>
									{item.label}
								</a-radio-button>
							))}
						</a-radio-group>
					</div>
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.searchForm
							}
						}}
					>
						<a-form-model-item prop="aono" label="调拨单号">
							<a-input allowClear v-model={this.searchForm.aono} />
						</a-form-model-item>
						<a-form-model-item prop="fbaAccount" label="FBA账号">
							<a-input allowClear v-model={this.searchForm.fbaAccount} />
						</a-form-model-item>

						{this.expand ? (
							<span>
								<a-form-model-item label="调拨类型" prop="requisitionType">
									<form-config v-model={this.searchForm.type} prop="requisitionType" />
								</a-form-model-item>
								<a-form-model-item prop="centerId" label="centerId">
									<a-input v-model={this.searchForm.centerId} />
								</a-form-model-item>
								<a-form-model-item prop="waybillNo" label="跟踪号">
									<a-input v-model={this.searchForm.waybillNo} />
								</a-form-model-item>
								<a-form-model-item prop="shipment" label="shipment">
									<a-input v-model={this.searchForm.shipment} />
								</a-form-model-item>
								{/* <a-form-model-item label="物流商" prop="logisticsProviderCode">
									<form-logisticsProvider v-model={this.searchForm.logisticsProviderCode} prop="logisticsProviderCode" />
								</a-form-model-item> */}
								<a-form-model-item prop="sku" label="SKU">
									<a-input v-model={this.searchForm.sku} prop="sku" />
								</a-form-model-item>
								<a-form-model-item label="运输方式" prop="shippingType">
									<form-config v-model={this.searchForm.shippingType} prop="shippingType" />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="来源仓">
									<form-warehouse-code v-model={this.searchForm.sourceWarehouseCode} />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="目标仓">
									<form-warehouse-code v-model={this.searchForm.targetWarehouseCode} />
								</a-form-model-item>
								<a-form-model-item prop="pickno" label="拣货单号">
									<a-input v-model={this.searchForm.pickno} />
								</a-form-model-item>
								<a-form-model-item prop="pickBy" label="拣货人">
									<a-input v-model={this.searchForm.pickBy} />
								</a-form-model-item>
								<a-form-model-item prop="tradeCompanyCode" label="交易主体">
									<a-input v-model={this.searchForm.tradeCompanyCode} />
								</a-form-model-item>
								<a-form-model-item prop="boxQty" label="箱数">
									<a-input-group compact>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.boxQty} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.boxQty} />
									</a-input-group>
								</a-form-model-item>
								<a-form-modelItem prop="createTime" label="调拨创建时间">
									<a-range-picker v-model={this.searchForm.beginCreateTime} prop="createTime" />
								</a-form-modelItem>
								<a-form-modelItem prop="deliveryTime" label="出库时间">
									<a-range-picker v-model={this.searchForm.deliveryTime} prop="deliveryTime" />
								</a-form-modelItem>
							</span>
						) : null}

						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
							<a class="expand" on-click={this.toggle.bind(this)}>
								{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
							</a>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="share-alt" aligh="right" on-click={this.export}>
						导出当前查询
					</a-button>
				</div>
				<a-table dataSource={this.tableData} scroll={{ x: 3500 }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="调拨单号" dataIndex="aono" key="aono" align="center" width={150} />
					<a-table-column title="调拨类型" dataIndex="type" key="type" align="center" width={150} customRender={(val: string | number) => requisitionTypeFilter(val)} />
					<a-table-column title="运输方式" dataIndex="shippingType" key="shippingType" align="center" width={150} customRender={(val: string | number) => shippingTypeFilter(val)} />
					<a-table-column title="物流商/渠道" align="center" width={200}>
						{(record: defs.wms.AllocationMasterResponseDto) => (
							<a-space>
								<span>{record.logisticsProviderName + '/' + record.logisticsChannelName}</span>
							</a-space>
						)}
					</a-table-column>
					{/* <a-table-column title="物流商/渠道" dataIndex="logisticsChannelName" key="logisticsChannelName" align="center" width={150} /> */}
					{/* <span>{record.areaCode + ' /' + record.column}</span> */}
					<a-table-column title="跟踪号" dataIndex="waybillNo" key="waybillNo" align="center" width={150} />
					<a-table-column title="备注" dataIndex="remark" key="remark" align="center" width={150} />
					<a-table-column title="状态" dataIndex="status" key="status" align="center" width={150} customRender={(val: string | number) => requisitionStatusFilter(val)} />
					<a-table-column title="来源仓" dataIndex="sourceWarehouseCode" key="sourceWarehouseCode" align="center" width={150} />
					<a-table-column title="目标仓" dataIndex="targetWarehouseCode" key="targetWarehouseCode" align="center" width={150} />
					<a-table-column title="referenceld" dataIndex="referenceId" key="referenceId" align="center" width={150} />
					<a-table-column title="是否含税" dataIndex="taxFlag" key="taxFlag" align="center" width={150} />
					<a-table-column title="交易主体" dataIndex="tradeCompanyCode" key="tradeCompanyCode" align="center" width={150} />
					<a-table-column title="FBA账号" dataIndex="fbaAccount" key="fbaAccount" align="center" width={150} />
					<a-table-column title="shipment" dataIndex="shipment" key="shipment" align="center" width={150} />
					<a-table-column title="shipment Name" dataIndex="shipmentName" key="shipmentName" align="center" width={150} />
					<a-table-column title="centerld" dataIndex="centerId" key="centerId" align="center" width={150} />
					<a-table-column title="拣货单号" dataIndex="pickno" key="pickno" align="center" width={150} />
					<a-table-column title="调拨批次号" dataIndex="abno" key="abno" align="center" width={150} />
					<a-table-column title="sku数" dataIndex="skuQty" key="skuQty" align="center" width={150} />
					<a-table-column title="总数" dataIndex="qty" key="qty" align="center" width={150} />
					<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" align="center" width={150} />
					<a-table-column title="总体积" dataIndex="volume" key="volume" align="center" width={150} />
					<a-table-column title="总重量" dataIndex="weight" key="weight" align="center" width={150} />
					<a-table-column title="抛重5k" dataIndex="chargeWeight5k" key="chargeWeight5k" align="center" width={150} />
					<a-table-column title="抛重6k" dataIndex="chargeWeight6k" key="chargeWeight6k" align="center" width={150} />
					<a-table-column title="调拨人" dataIndex="createBy" key="createBy" align="center" width={150} />
					<a-table-column title="出库时间" dataIndex="deliveryTime" key="deliveryTime" align="center" width={150} customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center" width={150} customRender={(time: any) => timestampToTime(time)} />
					<a-table-column title="操作" align="center" width={270} fixed="right">
						{(record: defs.wms.AllocationMasterResponseDto) => (
							<a-space size="middle">
								<a type="link" on-click={() => this.showBox(record)}>
									查看分箱
								</a>
								<a type="link" on-click={() => this.showSku(record)}>
									查看sku明细
								</a>
								<a-dropdown trigger={['click']}>
									<a type="link" class="ant-dropdown-link" onclick={(e: { preventDefault: () => any }) => e.preventDefault()}>
										更多操作 <a-icon type="down" />
									</a>
									<a-menu slot="overlay">
										<a-menu-item>
											<a-button icon="share-alt" type="link" on-click={() => this.exportInvoice(record.aono)}>
												导出发票
											</a-button>
										</a-menu-item>
										<a-menu-item>
											<a-button icon="share-alt" type="link" on-click={() => this.exportBoxingBill(record.aono)}>
												导出装箱单
											</a-button>
										</a-menu-item>
										<a-menu-item>
											<a-button icon="printer" type="link" on-click={() => this.printCode(record)}>
												{isEmpty(record.pickno) ? '生成并打印拣货单' : '打印拣货单'}
											</a-button>
										</a-menu-item>
										<a-menu-item>
											<a-button
												icon="printer"
												type="link"
												on-click={() => {
													const type = equals(20, record.type) ? printerType.FNSKU : printerType.SKU
													this.printFnSku(record.aono, record.fbaAccount, type)
												}}
											>
												{equals(20, record.type) ? '打印FNSKU' : '打印SKU'}
											</a-button>
										</a-menu-item>
										{notUsMx(record.sourceWarehouseCode) && (
											<a-menu-item>
												<a-button icon="printer" type="link" on-click={() => this.printBox(record.aono)}>
													打印外箱条码
												</a-button>
											</a-menu-item>
										)}

										{!isEmpty(record.boxLabelPath) && notUsMx(record.sourceWarehouseCode) ? (
											<a-menu-item class="color-bule" icon="el-icon-printer">
												<a-button
													type="link"
													icon="printer"
													on-click={() => {
														this.selectPrinter(record.boxLabelPath)
													}}
												>
													打印箱唛
												</a-button>
											</a-menu-item>
										) : null}
										{!isEmpty(record.boxLabelPath) ? (
											<a-menu-item class="color-bule" icon="el-icon-printer">
												<a-button
													type="link"
													icon="download"
													on-click={() => {
														this.printLabel(record.boxLabelPath, record.aono)
													}}
												>
													下载箱唛
												</a-button>
											</a-menu-item>
										) : null}
										{isEmpty(record.boxLabelPath) && record.status === 40 ? (
											<a-menu-item class="color-bule" icon="el-icon-link">
												<a-button
													type="link"
													icon="link"
													on-click={() => {
														this.getBoxMore('amazonFeedStatus', record.aono)
													}}
												>
													获取箱唛
												</a-button>
											</a-menu-item>
										) : null}
										{isEmpty(record.boxLabelPath) && equals40(record.status) ? (
											<a-menu-item class="color-bule" icon="el-icon-upload">
												<a-button
													type="link"
													icon="reload"
													on-click={() => {
														this.getBoxMore('amazonBoxInfo', record.aono)
													}}
												>
													重新上传装箱信息
												</a-button>
											</a-menu-item>
										) : null}
										{!isEmpty(record.logisticsLabelPath) ? (
											<a-menu-item class="color-bule" icon="el-icon-printer">
												<a-button
													type="link"
													icon="printer"
													on-click={() => {
														this.printLabel(record.logisticsLabelPath)
													}}
												>
													打印面单
												</a-button>
											</a-menu-item>
										) : null}
										<a-menu-item>
											<a-button icon="redo" type="link">
												回滚调拨单
											</a-button>
										</a-menu-item>
										<a-menu-item>
											<a-button icon="printer" type="link">
												打印欧代
											</a-button>
										</a-menu-item>
									</a-menu>
								</a-dropdown>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				<pickPrint ref="pickPrint" />
				{this.paginationJsx()}
				<boxDetail ref="boxDetail" />
				<allocationDetail ref="allocationDetail" />
			</div>
		)
	}

	public async getInit(params: API.wms.allocationMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.allocationMaster.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}
}
