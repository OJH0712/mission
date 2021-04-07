/*
 * @Author: Chan
 * @Date: 2021-02-25 20:05:24
 * @LastEditTime: 2021-03-08 20:36:42
 * @LastEditors: Please set LastEditors
 * @Description: 渠道服务
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import { channelProviderServicePropertyFilter, channelProviderStatusFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'
import { channelTypeFilter } from '@/dictionaries/filter'
import ChannelServiceCom from './components/channelService'
import SetWarehouse from '@/views/logistics/channelProvider/components/setWarehouse'
import UpdateChannelService from './components/updateChannelService'
import PlatformMapService from './components/platformMapService'
export interface AddParam {
	providerCode: string
	providerName: string
}
@Component({
	name: 'ChannelService',
	components: { ChannelServiceCom, SetWarehouse, UpdateChannelService, PlatformMapService }
})
export default class ChannelService extends TablePage {
	public tableData: Array<defs.wms.LogisticsChannelResponseDto> = []
	public searchForm: API.wms.logisticsChannel.list.Params = {}
	public addParam?: AddParam
	@Ref('cerviceCom') readonly cerviceComRef!: HTMLFormElement
	@Ref('setWarehouse') readonly setWarehouseRef!: HTMLFormElement
	@Ref('updateChannel') readonly updateChannelRef!: HTMLFormElement
	@Ref('platformMap') readonly platformMapRef!: HTMLFormElement

	async mounted() {
		this.search()
		// 根据渠道代码查询渠道名称
		API.wms.logisticsProvider.list.request({ providerCode: this.$route.params.providerCode }).then(({ success, data }) => {
			if (success && !isNil(data) && !isNil(data.list)) {
				this.addParam = {
					providerCode: data.list[0].providerCode,
					providerName: data.list[0].providerName
				}
			}
		})
	}
	addChannelService() {
		this.cerviceComRef.init(this.addParam)
	}
	updateChannelService(data: defs.wms.LogisticsProviderResponseDto) {
		this.updateChannelRef.init(data)
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
						<a-form-model-item prop="channelName" label="渠道服务">
							<a-input v-model={this.searchForm.channelName} placeholder="请填写渠道服务" />
						</a-form-model-item>
						<a-form-model-item prop="status" label="状态">
							<form-config allowClear prop="logisticsChannelStatus" v-model={this.searchForm.status} placeholder="请选择状态" />
						</a-form-model-item>
						<a-form-model-item prop="serviceProperty" label="业务类别">
							<form-config allowClear prop="channelProviderServiceProperty" v-model={this.searchForm.serviceProperty} placeholder="请选择业务类别" />
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
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button icon="plus" type="primary" on-click={() => this.addChannelService()}>
						新建渠道服务
					</a-button>
				</div>
				<a-table dataSource={this.tableData} scroll={{ x: 1500 }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="序号" width={100} dataIndex="id" key="id" align="center" />
					<a-table-column title="渠道服务" key="channelName" align="center" dataIndex="channelName" />
					<a-table-column
						title="业务类别"
						key="serviceProperty"
						align="center"
						customRender={(value: defs.wms.LogisticsProviderResponseDto) => channelProviderServicePropertyFilter(value.serviceProperty)}
					/>
					<a-table-column title="适用仓库" key="warehouseName" align="center" ellipsis={true}>
						{(record: defs.wms.LogisticsProviderResponseDto) => (
							<a-tooltip placement="topLeft">
								<span slot="title">{this.usingTheWarehouseFilter(record.logisticsChannelWarehouseResponseDtos)}</span>
								{this.usingTheWarehouseFilter(record.logisticsChannelWarehouseResponseDtos)}
							</a-tooltip>
						)}
					</a-table-column>
					<a-table-column title="状态" key="status" align="center">
						{(record: defs.wms.LogisticsProviderResponseDto) => <span>{channelProviderStatusFilter(record.status)}</span>}
					</a-table-column>
					<a-table-column title="平均时效（天）" dataIndex="averageDay" align="center" />
					<a-table-column title="物流分组" key="groupList" align="center" ellipsis={true}>
						{(record: defs.wms.LogisticsProviderResponseDto) => (
							<a-tooltip placement="topLeft">
								<span slot="title">{this.logisticsGroupFilter(record.groupList)}</span>
								{this.logisticsGroupFilter(record.groupList)}
							</a-tooltip>
						)}
					</a-table-column>
					<a-table-column title="渠道类型" dataIndex="channelType" align="center" customRender={(value: string) => channelTypeFilter(value)} />
					<a-table-column title="联系方式" dataIndex="contact" align="center" />
					<a-table-column title="创建人" dataIndex="createBy" align="center" />
					<a-table-column title="创建时间" dataIndex="createTime" align="center">
						{(text: string) => <span>{timestampToTime(text)}</span>}
					</a-table-column>
					<a-table-column title="操作" width={300} dataIndex="" align="center">
						{(record: defs.wms.LogisticsProviderResponseDto) => (
							<a-space size="middle" style="display: flex; flex-wrap: wrap;">
								<a on-click={() => this.handlePlatformMap(record?.channelName, record.providerCode, record.channelCode)}>添加/修改平台映射</a>
								<a on-click={() => this.setStorage(record?.logisticsChannelWarehouseResponseDtos, record.providerCode, record.channelCode)}>调整适用仓库</a>
								<a on-click={() => this.setStatus(record.status, record.providerCode, record.channelCode)}>{channelProviderStatusFilter(equals(record.status, 0) ? 1 : 0)}</a>
								<a on-click={() => this.updateChannelService(record)}>修改</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<channel-service-com ref="cerviceCom" on-search={this.search} />
				<set-warehouse ref="setWarehouse" on-search={this.search} />
				<update-channel-service ref="updateChannel" on-search={this.search} />
				<platform-map-service ref="platformMap" on-search={this.search} />
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsChannel.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsChannel.list.request(params)
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
		params.providerCode = this.$route.params.providerCode
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	// 查看渠道服务
	public checkServe(id: number) {
		console.log(id)
	}

	// 添加/修改平台映射
	handlePlatformMap(channelName: string, providerCode: string, channelCode: string) {
		this.platformMapRef.init(channelName, providerCode, channelCode)
	}

	// 调整适用仓库
	public async setStorage(storage: Array<defs.wms.LogisticsChannelWarehouseResponseDto> | undefined, providerCode: string, channelCode: string) {
		let list = clone(storage)
		if (isNil(list)) {
			list = []
		} else {
			list?.forEach((item) => {
				return item.warehouseCode
			})
		}
		this.setWarehouseRef.init(list, providerCode, channelCode)
	}

	// 调整状态
	public async setStatus(status: number, providerCode: string, channelCode: string) {
		const changedStatus = equals(status, 0) ? 1 : 0
		const { success } = await API.wms.logisticsChannel.modifyStatus.request(channelCode, providerCode, { status: changedStatus })
		if (success) {
			this.search()
		}
	}

	public usingTheWarehouseFilter(list: Record<string, any>[] | undefined) {
		let str = ''
		if (list && list.length) {
			for (let i = 0; i < list.length; i++) {
				if (i === 0) {
					str = list[i].warehouseName
				} else {
					str += ',' + list[i].warehouseName
				}
			}
			return str
		}
		return ''
	}

	public logisticsGroupFilter(groupList: Record<string, any>[]) {
		let str = ''
		if (groupList && groupList.length) {
			for (let i = 0; i < groupList.length; i++) {
				if (i === 0) {
					str = groupList[i].logisticsGroupName
				} else {
					str += ',' + groupList[i].logisticsGroupName
				}
			}
			return str
		}
		return ''
	}
}
