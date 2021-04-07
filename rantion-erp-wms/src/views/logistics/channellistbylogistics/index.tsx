/*
 * @Author: Chan
 * @Date: 2021-02-24 17:12:06
 * @LastEditTime: 2021-02-24 17:45:47
 * @LastEditors: Chan
 * @Description: 渠道列表
 */
//todo  应该没有产品
import { Component } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil, last } from 'ramda'
import { groupStatus } from '@/dictionaries/filter'
const columns = [
	{
		dataIndex: 'id',
		title: '序号',
		key: 'id',
		width: 80
	},
	{
		dataIndex: 'providerName',
		title: '渠道商',
		key: 'providerName'
	},
	{
		dataIndex: 'channelName',
		title: '渠道服务',
		key: 'channelName'
	},
	{
		dataIndex: 'status',
		key: 'status',
		title: '启用状态',
		customRender: (text: string | number) => groupStatus(text)
	}
]
@Component({
	name: 'ChannellCistbylogistics'
})
export default class ChannellCistbylogistics extends TablePage {
	public tableData: Array<defs.wms.LogisticsChannelResponseDto> = []
	public searchForm: API.wms.logisticsChannelGroup.getChannelList.Params = {
		logisticsGroupCode: ''
	}
	async mounted() {
		this.search()
	}
	public render() {
		return (
			<div>
				<div class="table-top">
					<a-space size="middle">
						<a-button icon="arrow-left" type="primary" on-click={() => this.$router.back()}>
							返回
						</a-button>
					</a-space>
				</div>
				<a-table dataSource={this.tableData} columns={columns} scroll={{ x: true }} loading={this.loading} rowKey="id" pagination={false}></a-table>
				{this.paginationJsx()}
				<set-group ref="setGroup" on-search={this.search} />
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsChannelGroup.getChannelList.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsChannelGroup.getChannelList.request(params)
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
		const code = this.routerParser()
		this.searchForm = {
			logisticsGroupCode: isNil(code) ? '' : code
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination()))
	}

	public clear() {
		this.search()
	}

	public routerParser() {
		return last(this.$route.fullPath.split('/'))
	}
}
