import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil, map } from 'ramda'
import { options } from '@/dictionaries/config'
import BoxDetails from './components/boxDetails'
/*
 * @Description: 托盘管理
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-06 10:47:35
 */

@Component({
	name: 'Tray',
	components: { BoxDetails }
})
export default class Tray extends TablePage {
	@Ref('boxDetails') readonly boxDetailsRef!: HTMLFormElement
	public tableData: any = [
		{
			key: '1'
		},
		{
			key: '2'
		},
		{
			key: '3'
		},
		{
			key: '4'
		},
		{
			key: '5'
		},
		{
			key: '6'
		},
		{
			key: '7'
		},
		{
			key: '8'
		},
		{
			key: '9'
		},
		{
			key: '19'
		},
		{
			key: '29'
		},
		{
			key: '39'
		}
	]

	public searchForm: any = {}
	public rowSelection = {
		selectedRowKeys: [],
		selections: true,
		// type: 'checkbox',
		hideDefaultSelections: true,
		selectedRows: [],
		onChange: (selectedRowKeys: Array<number>, selectedRows: any) => {
			this.$set(this.rowSelection, 'selectedRowKeys', selectedRowKeys)
			this.$set(this.rowSelection, 'selectedRows', selectedRows)
		}
	}
	showDetails(val: any) {
		this.boxDetailsRef.init(val)
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<a-row type="flex" justify="space-around" align="middle">
						<a-col span={2} push={1}>
							<span class="title">订单状态</span>
						</a-col>
						<a-col span={22}>
							<a-radio-group v-model={this.searchForm.status} on-change={this.search} button-style="solid">
								<a-radio-button value="">全部</a-radio-button>
								{map(
									(item: any) => (
										<a-radio-button value={item.value}>{item.label}</a-radio-button>
									),
									options.boardStatus
								)}
							</a-radio-group>
						</a-col>
					</a-row>

					<div id="components-form-demo-advanced-search" style="padding-top: 20px;">
						<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
							<a-row>
								<a-col span={6}>
									<a-form-item prop="warehourseName" label="托盘号">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="warehourseName" label="BOX">
										<a-input />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="warehourseName" label="SKU">
												<a-input />
											</a-form-item>
										</a-col>
									</span>
								) : null}
								<a-col span={6}>
									<a-form-item label="">
										<a-button type="primary" on-click={this.search}>
											查询
										</a-button>
										<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
											清除
										</a-button>
										<a class="expand" on-click={this.toggle.bind(this)}>
											{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
										</a>
									</a-form-item>
								</a-col>
							</a-row>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="plus">
						添加
					</a-button>
					<a-button type="primary" icon="printer">
						打印
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="托盘编号" dataIndex="" />
							<a-table-column title="托盘状态" dataIndex=""></a-table-column>
							<a-table-column title="关联箱号" dataIndex="key">
								{(record: any) => (
									<a-button type="link" onClick={() => this.showDetails(record)}>
										详情
									</a-button>
								)}
							</a-table-column>
							<a-table-column title="箱数" dataIndex=""></a-table-column>
							<a-table-column title="产品数" dataIndex=""></a-table-column>
							<a-table-column title="件数" dataIndex=""></a-table-column>
						</a-table>
					</a-spin>
				</div>
				<boxDetails ref="boxDetails" />
				{this.paginationJsx()}
			</div>
		)
	}

	public async getInit(params: API.wms.storageReportDamage.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.storageReportDamage.list.request(params)
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
