/*
 * @Author: Chan
 * @Date: 2021-02-24 18:14:36
 * @LastEditTime: 2021-02-25 10:53:08
 * @LastEditors: Chan
 * @Description: 物流跟踪详情
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import CheckRecord from './components/checkRecord'
import { importStatement } from '@/utils'
import { waybillMasterRecordExport } from '@/utils/downloadApi'
import { timestampToTime } from '@/utils/date'
import { logisticsStatus } from '@/dictionaries/filter'
const columns = [
	{
		dataIndex: 'id',
		title: '序号',
		key: 'id',
		width: 80
	},
	{
		dataIndex: 'waybillNo',
		title: '运单号',
		key: 'waybillNo'
	},
	{
		dataIndex: 'correlationNo',
		title: '订单号',
		key: 'correlationNo'
	},
	{
		dataIndex: 'operationNo',
		title: '出库单号',
		key: 'operationNo'
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
		dataIndex: 'logisticsStatus',
		title: '物流状态',
		key: 'logisticsStatus',
		customRender: function(text: string) {
			return <span>{logisticsStatus(text)}</span>
		}
	},
	{
		dataIndex: 'deliveryTime',
		title: '发运时间',
		key: 'deliveryTime',
		customRender: function(text: string) {
			return <span>{timestampToTime(text)}</span>
		}
	},
	{
		dataIndex: 'deliveredTime',
		title: '投妥时间',
		key: 'deliveredTime',
		customRender: function(text: string) {
			return <span>{timestampToTime(text)}</span>
		}
	},
	{
		dataIndex: 'timeConsuming',
		title: '投妥耗时',
		key: 'timeConsuming'
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
	dono?: string
}
@Component({
	name: 'Tracking',
	components: { CheckRecord }
})
export default class Tracking extends TablePage {
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
						<a-form-modelItem prop="logisticsStatus" label="物流状态">
							<form-config v-model={this.searchForm.logisticsStatus} prop="logisticsStatus" placeholder="请选择物流状态" onChange={() => this.selectStatus()} />
						</a-form-modelItem>
						<a-form-modelItem prop="dono" label="出库单号">
							<a-input v-model={this.searchForm.dono} placeholder="请填写出库单号" />
						</a-form-modelItem>
						<a-form-model-item prop="correlationNo" label="订单编号">
							<a-input v-model={this.searchForm.correlationNo} placeholder="请填写订单编号" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="waybillNo" label="运单号">
									<a-input v-model={this.searchForm.waybillNo} placeholder="请填写运单号" />
								</a-form-model-item>
								<a-form-model-item prop="logisticsProviderCode" label="渠道商/渠道服务">
									<form-logistics-channel-list v-model={this.searchForm.logisticsProviderCode} placeholder="请选择渠道商/渠道服务" />
								</a-form-model-item>
								<a-form-model-item prop="beginCreateDate" label="发运时间">
									<a-range-picker allowClear v-model={this.searchForm.beginDeliveryDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始时间', '请选择结束时间']} />
								</a-form-model-item>
								{/* <a-form-model-item label="投妥耗时">
                <a-input-group compact>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.beginTimeConsuming} />
										<span style={{ width: '12px', textAlign: 'center' }}> - </span>
										<a-input-number style={{ width: '81px' }} v-model={this.searchForm.endTimeConsuming} />
									</a-input-group>
                </a-form-model-item> */}
								{/* <a-form-model-item prop="beginCreateDate" label="投妥时间">
									<a-range-picker allowClear v-model={this.searchForm.beginDeliveredDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始时间', '请选择结束时间']} />
								</a-form-model-item> */}
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
							导入修改
						</a-button>
						<a-button type="primary" on-click={() => this.exportReport()}>
							导出列表
						</a-button>
						<a-button type="primary" on-click={() => this.downloadTemplate()}>
							下载模板
						</a-button>
					</a-space>
				</div>
				<a-table dataSource={this.tableData} columns={columns} scroll={{ x: 2200 }} loading={this.loading} rowKey="id" pagination={false}>
					<span slot="action">{(record: defs.wms.WaybillMasterResponseDto) => <a on-click={() => this.checkDetailRecord(record.address)}>查看详情</a>}</span>
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

	public selectStatus() {
		this.search()
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
		// if (!isEmpty(this.searchForm.beginDeliveredDate)) {
		// 	params.beginDeliveredDate = this.searchForm.beginDeliveredDate?.[0]
		// 	params.endDeliveredDate = this.searchForm.beginDeliveredDate?.[1]
		// }
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	public checkDetailRecord(list: string) {
		// 接口暂不完善,应用字段 checkpoints
		console.log(list)
		this.checkRecordRef.init()
	}

	public async importReport() {
		this.fileRef.click()
	}

	public downloadTemplate() {
		saveAs('https://rantion-shopify.oss-cn-shenzhen.aliyuncs.com/shopify/196f25cd631a4d798825648a01bb1395.xlsx', '物流跟踪详情.xlsx')
	}

	public async hdUpload() {
		const curFiles = this.fileRef.files
		const form = new FormData()
		if (isNil(curFiles)) return
		form.append('file', curFiles[0])
		await importStatement(form, '/waybillMaster/import', (data) => {
			console.log(data)
		})
	}

	public async exportReport() {
		await waybillMasterRecordExport({
			logisticsStatus: this.searchForm.logisticsStatus
		})
	}
}
