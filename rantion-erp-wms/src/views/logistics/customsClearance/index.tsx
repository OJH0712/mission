/*
 * @Author: Chan
 * @Date: 2021-02-23 16:39:57
 * @LastEditTime: 2021-02-24 17:05:35
 * @LastEditors: Chan
 * @Description: 报关管理
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import TariffThresholdSetting from './components/tariffThresholdSetting'
import { importStatement } from '@/utils'
// import { waybillTariffRecordExport } from '@/utils/downloadApi'
import { timestampToTime } from '@/utils/date'
const columns = [
	{
		dataIndex: 'index',
		title: '序号',
		key: 'index'
	},
	{
		dataIndex: 'warehouseName',
		title: '仓库',
		key: 'warehouseName'
	},
	{
		dataIndex: 'waybillNo',
		title: '运单号',
		key: 'waybillNo'
	},
	{
		dataIndex: 'sourceNo',
		title: '订单编号',
		key: 'sourceNo'
	},
	{
		dataIndex: 'dono',
		title: '出库单号',
		key: 'dono'
	},
	{
		title: '渠道编号/名称-渠道服务',
		key: 'logisticsChannelCode',
		customRender: function(record: defs.wms.WaybillMasterResponseDto) {
			return <span>{`${record.logisticsChannelName}`}</span>
			// logisticsProviderCode + logisticsChannelCode
		}
	},
	{
		dataIndex: 'weight',
		title: '重量（kg）',
		key: 'weight'
	},
	{
		dataIndex: 'waybillCost',
		title: '邮费',
		key: 'waybillCost'
	},
	{
		dataIndex: 'deliveryTime',
		key: 'deliveryTime',
		title: '发货时间',
		customRender: function(text: string) {
			return <span>{timestampToTime(text)}</span>
		}
	},
	{
		dataIndex: 'delivery',
		title: '发货人',
		key: 'delivery'
	},
	{
		dataIndex: 'recipient',
		title: '收件人',
		key: 'recipient'
	},
	{
		dataIndex: 'country',
		title: '目的地',
		key: 'country'
	},
	{
		dataIndex: 'address',
		title: '收件地址',
		key: 'address'
	},
	{
		dataIndex: 'city',
		title: '收件城市',
		key: 'city'
	},
	{
		dataIndex: 'province',
		title: '收件省州',
		key: 'province'
	},
	{
		dataIndex: 'mobilePhone',
		title: '收件电话',
		key: 'mobilePhone'
	},
	{
		dataIndex: 'postcode',
		title: '收件邮编',
		key: 'postcode'
	},
	{
		dataIndex: 'productNameCnList',
		title: '物品中文名',
		key: 'productNameCnList'
	},
	{
		dataIndex: 'productNameEnList',
		title: '物品英文名',
		key: 'productNameEnList'
	},
	{
		dataIndex: 'salePrice',
		title: '销售价格（USD）',
		key: 'salePrice'
	},
	{
		dataIndex: 'declarePrice',
		title: '声明价值（申报价值）',
		key: 'declarePrice'
	}
]
interface SearchForm extends API.wms.waybillMaster.list.Params {
	beginDeliveryDate?: Array<string> | string
	endDeliveryDate?: string
	sourceNo?: string
	dono?: string
}
@Component({
	name: 'Reconciliation',
	components: { TariffThresholdSetting }
})
export default class Reconciliation extends TablePage {
	public tableData: Array<defs.wms.WaybillMasterResponseDto> = []
	public searchForm: SearchForm = {}
	@Ref('tariffThresholdSettingRef') readonly tariffThresholdSettingRef!: HTMLFormElement
	@Ref('file') readonly fileRef!: HTMLInputElement
	async mounted() {
		this.search()
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.searchForm
							}
						}}
					>
						<a-form-modelItem prop="providerCode" label="渠道商">
							<form-logistics-single-channel-list v-model={this.searchForm.logisticsChannelCode} placeholder="请填写出库单号" />
						</a-form-modelItem>
						<a-form-model-item prop="sourceNo" label="订单编号">
							<a-input v-model={this.searchForm.sourceNo} placeholder="请填写订单编号" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-modelItem prop="dono" label="出库单号">
									<a-input v-model={this.searchForm.dono} placeholder="请填写出库单号" />
								</a-form-modelItem>
								<a-form-model-item prop="waybillNo" label="运单号">
									<a-input v-model={this.searchForm.waybillNo} placeholder="请填写运单号" />
								</a-form-model-item>
								<a-form-model-item label="重量（kg）" style="">
									<a-input-group compact>
										{/* beginWeight */}
										{/* endWeight */}
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
									</a-input-group>
								</a-form-model-item>
								<a-form-model-item label="邮费" style="">
									<a-input-group compact>
										{/* beginWaybillCost */}
										{/* endWaybillCost */}
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
									</a-input-group>
								</a-form-model-item>
								<a-form-model-item label="销售价格" style="">
									<a-input-group compact>
										{/* beginSalePrice */}
										{/* endSalePrice */}
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
									</a-input-group>
								</a-form-model-item>
								<a-form-model-item label="申报价值" style="">
									<a-input-group compact>
										{/* beginDeclarePrice */}
										{/* endDeclarePrice */}
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.waybillNo} />
									</a-input-group>
								</a-form-model-item>
								<a-form-model-item prop="address" label="收货地址">
									<a-input v-model={this.searchForm.address} placeholder="请填写收货地址" />
								</a-form-model-item>
								<a-form-model-item prop="address" label="收货邮编">
									<a-input v-model={this.searchForm.address} placeholder="请填写收货邮编" />
								</a-form-model-item>
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
					<a-space size="middle">
						<a-button type="primary" icon="plus" on-click={() => this.setting()}>
							关税起征点设置
						</a-button>
						{/* <form-export-tariffRecord-file downloadApi={waybillTariffRecordExport} text="导出报关信息" /> */}
					</a-space>
				</div>
				<a-table dataSource={this.tableData} columns={columns} scroll={{ x: 2200 }} loading={this.loading} rowKey="id" pagination={false}></a-table>
				{this.paginationJsx()}
				<tariff-threshold-setting ref="tariffThresholdSettingRef" />
				<input ref="file" type="file" class="file" onChange={this.hdUpload} hidden />
			</div>
		)
	}

	public async getInit(params: API.wms.waybillMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.waybillMaster.list.request(params)
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
		if (!isEmpty(this.searchForm.beginDeliveryDate)) {
			params.beginDeliveryDate = this.searchForm.beginDeliveryDate?.[0]
			params.endDeliveryDate = this.searchForm.beginDeliveryDate?.[1]
		}
		if (!isEmpty(this.searchForm.logisticsProviderCode)) {
			params.logisticsProviderCode = this.searchForm.logisticsProviderCode?.[0]
			params.logisticsChannelCode = this.searchForm.logisticsProviderCode?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	public async setting() {
		this.tariffThresholdSettingRef.init()
	}

	public downloadTemplate() {
		saveAs('https://rantion-shopify.oss-cn-shenzhen.aliyuncs.com/shopify/2f8f056461114b1f808fde3e2c74f3bd.xlsx', '对账导入模板.xlsx')
	}

	public async hdUpload() {
		const curFiles = this.fileRef.files
		const form = new FormData()
		if (isNil(curFiles)) return
		form.append('file', curFiles[0])
		await importStatement(form, '/waybillCostRecord/import', (data) => {
			console.log(data)
		})
	}
}
