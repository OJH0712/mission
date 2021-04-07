/*
 * @Author: Chan
 * @Date: 2021-02-24 14:55:14
 * @LastEditTime: 2021-02-24 17:29:38
 * @LastEditors: Chan
 * @Description: 物流分组
 */
import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import SetGroup from './components/setGroup'
import { groupStatus } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'
const columns = [
	{
		dataIndex: 'id',
		title: '序号',
		key: 'id',
		width: 80
	},
	{
		dataIndex: 'logisticsGroupCode',
		title: '物流代码分组',
		key: 'logisticsGroupCode'
	},
	{
		dataIndex: 'logisticsGroupName',
		title: '物流分组名称',
		key: 'logisticsGroupName'
	},
	{
		dataIndex: 'status',
		key: 'status',
		title: '状态',
		customRender: (text: number | string) => groupStatus(text)
	},
	{
		dataIndex: 'createBy',
		title: '创建人'
	},
	{
		dataIndex: 'createTime',
		title: '创建时间',
		customRender: (text: string) => timestampToTime(text)
	},
	{
		title: '操作',
		dataIndex: '',
		scopedSlots: { customRender: 'action' }
	}
]
@Component({
	name: 'LogisticsGroup',
	components: { SetGroup }
})
export default class LogisticsGroup extends TablePage {
	public tableData: Array<defs.wms.LogisticsGroupResponseDto> = []
	public searchForm: API.wms.logisticsGroup.list.Params = {}
	@Ref('setGroup') readonly setGroupRef!: HTMLFormElement
	async mounted() {
		this.search()
	}
	actionSlot(id: number, record: defs.wms.LogisticsGroupResponseDto) {
		return (
			<a-space size="middle">
				<a on-click={() => this.checkList(record.logisticsGroupCode, 'channellistbylogistics')}>对应渠道列表</a>
				{/* <a on-click={() => this.checkList(record.logisticsGroupCode, 'productbylogistics')}>对应产品列表</a> */}
				<a on-click={() => this.editGroupStatus(record.status, record.logisticsGroupCode)}>{groupStatus(record.status ? 0 : 1)}</a>
				<a on-click={() => this.editGroup(record.logisticsGroupCode, record.logisticsGroupName)}>修改</a>
			</a-space>
		)
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
						<a-form-modelItem prop="logisticsGroupCode" label="物流分组代码">
							<a-input v-model={this.searchForm.logisticsGroupCode} placeholder="请填写物流分组代码" />
						</a-form-modelItem>
						<a-form-modelItem prop="status" label="状态">
							<form-config prop="groupStatus" v-model={this.searchForm.status} allowClear placeholder="请选择状态" />
						</a-form-modelItem>
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
						<a-button icon="plus" type="primary" on-click={() => this.editGroup()}>
							创建
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
				></a-table>
				{this.paginationJsx()}
				<set-group ref="setGroup" on-search={this.search} />
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsChannel.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsGroup.list.request(params)
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

	public async editGroup(code?: string, name?: string) {
		this.setGroupRef.init(code, name)
	}

	public checkList(code: string, urlPrefix: string) {
		this.$router.push({
			path: `/logistics/${urlPrefix}/${code}`
		})
	}

	public async editGroupStatus(status: number, logisticsGroupCode: string) {
		const i = equals(status, 0) ? 1 : 0
		const { success } = await API.wms.logisticsGroup.modify.request(i, { logisticsGroupCode })
		if (success) {
			this.search()
		}
	}
}
