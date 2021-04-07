import { Component } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
/*
 * @Description: 库位库存
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-01 11:14:12
 */
@Component({
	name: 'PositionStock'
})
export default class PositionStock extends TablePage {
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
						<a-form class="ant-advanced-search-form" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
							<a-row>
								<a-col span={6}>
									<a-form-item prop="" label="仓库">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="库位">
										<a-input />
									</a-form-item>
								</a-col>

								<a-col span={6}>
									<a-form-item prop="" label="SKU">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-form-item prop="" label="箱号">
										<a-input />
									</a-form-item>
								</a-col>
								<a-col span={6}>
									<a-button type="primary" on-click={this.search}>
										查询
									</a-button>
									<a-button style={{ marginLeft: '8px' }} on-click={this.clear}>
										清除
									</a-button>
								</a-col>
							</a-row>
						</a-form>
					</div>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="plus">
						库存报损
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="仓库" dataIndex="" />
							<a-table-column title="库位" dataIndex=""></a-table-column>
							<a-table-column title="SKU" dataIndex=""></a-table-column>
							<a-table-column title="产品名称" dataIndex=""></a-table-column>
							<a-table-column title="库存总数" dataIndex=""></a-table-column>
							<a-table-column title="蓝深科技库存数" dataIndex=""></a-table-column>
							<a-table-column title="蓝深贸易库存数" dataIndex=""></a-table-column>
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
