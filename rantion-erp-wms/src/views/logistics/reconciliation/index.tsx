/*
 * @Author: Chan
 * @Date: 2021-02-23 11:55:57
 * @LastEditTime: 2021-02-24 17:04:39
 * @LastEditors: Chan
 * @Description: 对账管理
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import CheckRecord from './components/checkRecord'
import { importStatement } from '@/utils'
import { waybillCostRecordExport } from '@/utils/downloadApi'
import { timestampToTime } from '@/utils/date'
const columns = [
	{
		dataIndex: 'warehouseName',
		title: '仓库',
		key: 'warehouseName'
	},
	{
		dataIndex: 'pkg',
		title: 'PKG',
		key: 'pkg'
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
		dataIndex: 'trackingNo',
		title: '最终跟踪号',
		key: 'trackingNo'
	},
	{
		dataIndex: 'logisticsProviderName',
		title: '渠道商',
		key: 'logisticsProviderName'
	},
	{
		dataIndex: 'logisticsChannelName',
		title: '渠道服务',
		key: 'logisticsChannelName'
	},
	{
		dataIndex: 'country',
		title: '目标国家',
		key: 'country'
	},
	{
		dataIndex: 'city',
		title: '目标城市',
		key: 'city'
	},
	{
		dataIndex: 'address',
		title: '收货地址',
		key: 'address'
	},
	{
		dataIndex: 'qty',
		title: '发货数量',
		key: 'qty'
	},
	{
		dataIndex: 'estimateWeight',
		title: '预估重量',
		key: 'estimateWeight'
	},
	{
		dataIndex: 'estimatePrice',
		title: '预估运费',
		key: 'estimatePrice'
	},
	{
		dataIndex: 'realityWeight',
		title: '出库重量',
		key: 'realityWeight'
	},
	{
		dataIndex: 'realityPrice',
		title: '出库运费',
		key: 'realityPrice'
	},
	{
		dataIndex: 'logisticsProviderWeight',
		title: '物流商重量',
		key: 'logisticsProviderWeight'
	},
	{
		dataIndex: 'logisticsProviderPrice',
		title: '物流商运费',
		key: 'logisticsProviderPrice'
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
		title: '操作',
		dataIndex: '',
		scopedSlots: { customRender: 'action' }
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
	components: { CheckRecord }
})
export default class Reconciliation extends TablePage {
	public tableData: Array<defs.wms.WaybillMasterResponseDto> = []
	public searchForm: SearchForm = {}
	@Ref('checkRecordRef') readonly checkRecordRef!: HTMLFormElement
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
						<a-form-modelItem prop="dono" label="出库单号">
							<a-input v-model={this.searchForm.dono} placeholder="请填写出库单号" />
						</a-form-modelItem>
						<a-form-model-item prop="sourceNo" label="订单编号">
							<a-input v-model={this.searchForm.sourceNo} placeholder="请填写订单编号" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="waybillNo" label="运单号">
									<a-input v-model={this.searchForm.waybillNo} placeholder="请填写运单号" />
								</a-form-model-item>
								<a-form-model-item prop="country" label="目标国家">
									<a-input v-model={this.searchForm.country} placeholder="请填写目标国家" />
								</a-form-model-item>
								<a-form-model-item prop="city" label="目标城市">
									<a-input v-model={this.searchForm.city} placeholder="请填写目标城市" />
								</a-form-model-item>
								<a-form-model-item prop="logisticsProviderCode" label="渠道商/渠道服务">
									<form-logistics-channel-list v-model={this.searchForm.logisticsProviderCode} placeholder="请选择渠道商/渠道服务" />
								</a-form-model-item>
								<a-form-model-item prop="address" label="收货地址">
									<a-input v-model={this.searchForm.address} placeholder="请填写收货地址" />
								</a-form-model-item>
								<a-form-model-item prop="beginCreateDate" label="发货时间">
									<a-range-picker allowClear v-model={this.searchForm.beginDeliveryDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始时间', '请选择结束时间']} />
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
						<a-button type="primary" on-click={() => this.importReport()}>
							导入
						</a-button>
						<form-export-waybill-file ref="formExportFileRef" downloadApi={waybillCostRecordExport} text="导出对账信息" />
						<a-button type="primary" on-click={() => this.downloadTemplate()}>
							下载导入模板
						</a-button>
					</a-space>
				</div>
				<a-table dataSource={this.tableData} columns={columns} scroll={{ x: 2200 }} loading={this.loading} rowKey="id" pagination={false}>
					<span slot="action">{(id: number, record: defs.wms.WaybillMasterResponseDto) => <a on-click={this.checkDetailRecord(record.waybillNo)}>查看修改记录</a>}</span>
				</a-table>
				{this.paginationJsx()}
				<check-record ref="checkRecordRef" />
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

	public checkDetailRecord(waybillNo: string) {
		console.log(waybillNo)
	}

	public async importReport() {
		this.fileRef.click()
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
