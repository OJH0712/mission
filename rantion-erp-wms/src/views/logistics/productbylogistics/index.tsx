/*
 * @Author: Chan
 * @Date: 2021-02-24 17:38:22
 * @LastEditTime: 2021-02-24 17:53:30
 * @LastEditors: Chan
 * @Description: 对应产品列表
 */
import { Component } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil, last } from 'ramda'
const columns = [
	{
		dataIndex: 'id',
		title: '序号',
		key: 'id',
		width: 80
	},
	{
		dataIndex: 'logisticsGroupCode',
		title: '商品SKU',
		key: 'logisticsGroupCode'
	},
	{
		dataIndex: 'logisticsGroupName',
		title: '产品标题',
		key: 'logisticsGroupName'
	},
	{
		dataIndex: 'status',
		key: 'SPU',
		title: '启用状态'
	},
	{
		dataIndex: 'status',
		key: 'SPU',
		title: '产品名称'
	}
]
@Component({
	name: 'Productbylogistics'
})
export default class Productbylogistics extends TablePage {
	// 接口未确定
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
