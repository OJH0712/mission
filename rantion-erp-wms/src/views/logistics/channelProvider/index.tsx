/*
 * @Author: Chan
 * @Date: 2021-02-19 14:37:57
 * @LastEditTime: 2021-03-08 20:36:51
 * @LastEditors: Please set LastEditors
 * @Description: 渠道商管理
 */

import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import { channelProviderServicePropertyFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'
import SetWarehouse from './components/setWarehouse'

@Component({
	name: 'ChannelProvider',
	components: { SetWarehouse }
})
export default class ChannelProvider extends TablePage {
	public tableData: Array<defs.wms.LogisticsProviderResponseDto> = []
	public searchForm: API.wms.logisticsProvider.list.Params = {}
	@Ref('setWarehouse') readonly setWarehouseRef!: HTMLFormElement
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
						<a-form-modelItem prop="providerName" label="渠道商名称/代号">
							<a-input v-model={this.searchForm.providerName} placeholder="请填写渠道商名称/代号" />
						</a-form-modelItem>
						<a-form-model-item prop="status" label="状态">
							<form-config allowClear prop="channelProviderStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="serviceProperty" label="业务类别">
									<form-config allowClear prop="channelProviderServiceProperty" v-model={this.searchForm.serviceProperty} placeholder="请选择业务类别" />
								</a-form-model-item>
								<a-form-model-item prop="providerCode" label="渠道编号">
									<a-input v-model={this.searchForm.providerCode} placeholder="请填写渠道编号" />
								</a-form-model-item>
								<a-form-model-item prop="warehouseCode" label="适用仓库">
									<form-warehouse-code allowClear showSearch v-model={this.searchForm.warehouseCode} placeholder="请选择适用仓库" />
								</a-form-model-item>
								<a-form-model-item prop="createBy" label="创建人">
									<form-sysUser allowClear showSearch v-model={this.searchForm.createBy} placeholder="请选择创建人" />
								</a-form-model-item>
								<a-form-model-item prop="beginCreateDate" label="创建时间">
									<a-range-picker allowClear v-model={this.searchForm.beginCreateDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始时间', '请选择结束时间']} />
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
				<a-table dataSource={this.tableData} scroll={{ x: 1500 }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="序号" width={100} dataIndex="id" key="id" align="center" />
					<a-table-column title="渠道商" key="providerName" align="center">
						{(record: defs.wms.LogisticsProviderResponseDto) => <span>{`${record.providerCode}/${record.providerName}`}</span>}
					</a-table-column>
					<a-table-column title="业务类别" key="serviceProperty" align="center">
						{(record: defs.wms.LogisticsProviderResponseDto) => <span>{channelProviderServicePropertyFilter(record.serviceProperty)}</span>}
					</a-table-column>
					<a-table-column title="联系方式" dataIndex="contact" key="contact" align="center" />
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" key="createTime" align="center">
						{(text: string) => <span>{timestampToTime(text)}</span>}
					</a-table-column>
					<a-table-column title="操作" width={300} dataIndex="" align="center">
						{(record: defs.wms.LogisticsProviderResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.checkServe(record.providerCode)}>查看渠道服务</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<set-warehouse ref="setWarehouse" on-search={this.search} />
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsProvider.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsProvider.list.request(params)
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
		if (!isEmpty(this.searchForm.beginCreateDate)) {
			params.beginCreateDate = this.searchForm.beginCreateDate?.[0]
			params.endCreateDate = this.searchForm.beginCreateDate?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	// 查看渠道服务
	public checkServe(providerCode: string) {
		this.$router.push({
			path: '/logistics/channelService/' + providerCode
		})
	}

	// 调整适用仓库
	public async setStorage(storage: Array<defs.wms.LogisticsChannelWarehouseResponseDto> | undefined, providerCode: string) {
		let list = clone(storage)
		if (isNil(list)) {
			list = []
		} else {
			list?.forEach((item) => {
				return item.warehouseCode
			})
		}
		this.setWarehouseRef.init(list, providerCode)
	}

	// 调整状态
	public async setStatus(status: number, providerCode: string) {
		const changedStatus = equals(status, 0) ? 1 : 0
		const { success } = await API.wms.logisticsProvider.modifyStatus.request(providerCode, { status: changedStatus, providerCode })
		if (success) {
			this.search()
		}
	}
}
