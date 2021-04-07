import { Component } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
/*
 * @Description: 收货
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-01 10:30:10
 */

@Component({
	name: 'Receiv'
})
export default class Receiv extends TablePage {
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
					<a-row>
						<a-col span="18">
							<a-form>
								<a-row>
									<a-col span="6">
										<a-form-item>入库单号：</a-form-item>
									</a-col>
									<a-col span="6">
										<a-form-item>总数量：</a-form-item>
									</a-col>
									<a-col span="6">
										<a-form-item>供应商：</a-form-item>
									</a-col>
								</a-row>
								<a-row>
									<a-col span="6">
										<a-form-item>运单号：</a-form-item>
									</a-col>
									<a-col span="6">
										<a-form-item>箱数：</a-form-item>
									</a-col>
									<a-col span="6">
										<a-form-item>采购员：</a-form-item>
									</a-col>
								</a-row>
							</a-form>
						</a-col>
						<a-col span="6">
							<a-form>
								<span>备注：</span>
								<a-textarea row={3}></a-textarea>

								<a-form-item>
									<a-input-search type="search" placeholder="搜索SKU、标题、规格"></a-input-search>
								</a-form-item>
							</a-form>
						</a-col>
					</a-row>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="printer">
						打印条码
					</a-button>
					<a-button type="primary" icon="printer">
						全部打印
					</a-button>
					<a-button type="primary" icon="upload">
						完成收货
					</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} rowKey="key" pagination={false}>
							<a-table-column title="SKU" dataIndex="" />
							<a-table-column title="图片" dataIndex=""></a-table-column>
							<a-table-column title="产品名称" dataIndex=""></a-table-column>
							<a-table-column title="规格描述" dataIndex=""></a-table-column>
							<a-table-column title="应收数量" dataIndex=""></a-table-column>
							<a-table-column title="应收箱数" dataIndex=""></a-table-column>
							<a-table-column title="实收数量" dataIndex=""></a-table-column>
							<a-table-column title="装箱数量" dataIndex=""></a-table-column>
							<a-table-column title="每箱数量" dataIndex=""></a-table-column>
							<a-table-column title="余值" dataIndex=""></a-table-column>
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
