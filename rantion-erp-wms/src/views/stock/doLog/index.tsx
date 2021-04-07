import { Component } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'

/*
 * @Description: 库存操作记录
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-01 11:25:10
 */
@Component({
	name: 'DoLog'
})
export default class DoLog extends TablePage {
	public tableData: Array<defs.wms.StorageReportDamageResponseDto> = []
	public searchForm: API.wms.storageReportDamage.list.Params = {}
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
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<div id="components-form-demo-advanced-search" style="padding-top: 20px;">
						<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
							<a-row>
								<a-col span={6}>
									<a-form-item prop="" label="仓库">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="SKU">
										<a-input />
									</a-form-item>
								</a-col>
								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="" label="产品名称">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="操作类型">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="操作单号">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="操作人">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="操作时间">
												<a-input />
											</a-form-item>
										</a-col>
									</span>
								) : null}
								<a-col span={6}>
									<a-button type="primary" on-click={this.search}>
										搜索
									</a-button>
									<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
										清除
									</a-button>
									<a class="expand" on-click={this.toggle.bind(this)}>
										{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
									</a>
								</a-col>
							</a-row>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="plus">
						导出
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="仓库" dataIndex="" />
							<a-table-column title="SKU" dataIndex=""></a-table-column>
							<a-table-column title="产品名称" dataIndex=""></a-table-column>
							<a-table-column title="操作类型" dataIndex=""></a-table-column>
							<a-table-column title="操作单号" dataIndex=""></a-table-column>
							<a-table-column title="操作数量" dataIndex=""></a-table-column>
							<a-table-column title="库位信息" dataIndex=""></a-table-column>
							<a-table-column title="操作人" dataIndex=""></a-table-column>
							<a-table-column title="操作时间" dataIndex=""></a-table-column>
							<a-table-column title="操作" dataIndex=""></a-table-column>
						</a-table>
					</a-spin>
				</div>
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
