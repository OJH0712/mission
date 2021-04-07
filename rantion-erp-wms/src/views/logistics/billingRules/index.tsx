/*
 * @Author: Chan
 * @Date: 2021-02-19 14:37:57
 * @LastEditTime: 2021-02-25 10:36:27
 * @LastEditors: Chan
 * @Description: 计费管理
 */

import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import SetDiscount from './components/setDiscount'
import CalcCost from './components/calcCost'
import { importStatement } from '@/utils'
import { billingRulesExport } from '@/utils/downloadApi'
import { timestampToTime } from '@/utils/date'
const columns = [
	{
		dataIndex: 'id',
		title: '序号',
		key: 'id',
		width: 80
	},
	{
		title: '渠道商',
		key: 'providerName',
		dataIndex: 'providerName'
	},
	{
		dataIndex: 'channelName',
		title: '渠道服务',
		key: 'channelName'
	},
	{
		dataIndex: 'channelNameStatus',
		title: '平台映射情况',
		key: 'channelNameStatus'
	},
	{
		dataIndex: 'createBy',
		title: '创建人',
		key: 'createBy'
	},
	{
		dataIndex: 'discount',
		title: '折扣',
		key: 'discount'
	},
	{
		dataIndex: 'createTime',
		title: '创建时间',
		key: 'createTime',
		customRender: (text: string) => timestampToTime(text)
	},
	{
		title: '操作',
		dataIndex: '',
		scopedSlots: { customRender: 'action' }
	}
]
@Component({
	name: 'BillingRules',
	components: { SetDiscount, CalcCost }
})
export default class BillingRules extends TablePage {
	public tableData: Array<defs.wms.LogisticsChannelResponseDto> = []
	public searchForm: API.wms.logisticsChannel.list.Params = {
		status: 1
	}
	@Ref('setDiscount') readonly setDiscountRef!: HTMLFormElement
	@Ref('calcCost') readonly calcCostRef!: HTMLFormElement
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
						<a-form-modelItem prop="providerName" label="渠道商">
							<a-input v-model={this.searchForm.providerName} placeholder="请填写渠道商" />
						</a-form-modelItem>
						<a-form-modelItem prop="channelName" label="渠道服务">
							<a-input v-model={this.searchForm.channelName} placeholder="请填写渠道服务" />
						</a-form-modelItem>
						<a-form-model-item prop="createBy" label="创建人">
							<form-sysUser allowClear v-model={this.searchForm.createBy} placeholder="请选择创建人" />
						</a-form-model-item>
						<a-form-model-item prop="beginCreateDate" label="创建时间">
							<a-range-picker allowClear v-model={this.searchForm.beginCreateDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始时间', '请选择开始时间']} />
						</a-form-model-item>
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-space size="middle">
						<a-button type="primary" on-click={() => this.importReport()}>
							导入报表
						</a-button>
						<form-export-file ref="formExportFileRef" downloadApi={billingRulesExport} text="导出报表" />
						<a-button type="primary" on-click={() => this.downloadTemplate()}>
							下载模板
						</a-button>
					</a-space>
				</div>
				<a-table
					dataSource={this.tableData}
					{...{
						scopedSlots: {
							action: this.actionSlot
						}
					}}
					columns={columns}
					scroll={{ x: true }}
					loading={this.loading}
					rowKey="id"
					pagination={false}
				/>
				{this.paginationJsx()}
				<set-discount ref="setDiscount" on-search={this.search} />
				<calc-cost ref="calcCost" />
				<input ref="file" type="file" class="file" onChange={this.hdUpload} hidden />
			</div>
		)
	}
	actionSlot(id: number, record: defs.wms.LogisticsChannelResponseDto) {
		return (
			<a-space size="middle">
				<a on-click={() => this.checkDetail(record, 'read')}>查看</a>
				<a on-click={() => this.checkDetail(record, 'edit')}>修改</a>
				<a on-click={() => this.costCalc(record)}>运费试算</a>
				<a on-click={() => this.discount(record)}>折扣</a>
			</a-space>
		)
	}
	public async getInit(params: API.wms.logisticsChannel.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsChannel.list.request(params)
		this.loading = false
		if (success) {
			this.tableData = data?.list || []
			this.total = data?.total || 0
		}
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		if (!isEmpty(this.searchForm.beginCreateDate)) {
			params.beginCreateDate = this.searchForm.beginCreateDate?.[0]
			params.endCreateDate = this.searchForm.beginCreateDate?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {
			status: 1
		}
		this.search()
	}

	public checkDetail(data: defs.wms.LogisticsChannelResponseDto, key: string) {
		sessionStorage.setItem('LogisticsChannelResponseDto', JSON.stringify(data))
		this.$router.push({
			path: `/logistics/billingSet/${data.providerCode}/${data.channelCode}${key === 'edit' ? '?mode=edit' : ''}`
		})
	}

	public costCalc(item: defs.wms.LogisticsChannelResponseDto) {
		const { providerCode, channelCode } = item
		this.calcCostRef.init([providerCode, channelCode])
	}

	public discount(item: defs.wms.LogisticsChannelResponseDto) {
		this.setDiscountRef.init(item)
	}

	public async importReport() {
		this.fileRef.click()
	}

	public downloadTemplate() {
		saveAs('https://rantion-shopify.oss-cn-shenzhen.aliyuncs.com/null/c22c0b61d9734aef821de3db3c6b98c8.xlsx', '导入模板.xlsx')
	}

	public async hdUpload() {
		const curFiles = this.fileRef.files
		const form = new FormData()
		if (isNil(curFiles)) return
		form.append('file', curFiles[0])
		await importStatement(form, '/logisticsChannelPrice/import', (data) => {
			console.log(data)
		})
	}
}
