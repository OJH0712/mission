import { Component } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
/*
 * @Description: 库存
 * @Author: owen
 * @Date: 2021-03-31 15:43:11
 * @LastEditTime: 2021-04-06 10:48:49
 */
@Component({
	name: 'Instock'
})
export default class Instock extends TablePage {
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
									<a-form-item prop="" label="SPU">
										<a-input />
									</a-form-item>
								</a-col>

								{this.expand ? (
									<span>
										<a-col span={6}>
											<a-form-item prop="" label="SKU">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="产品名称">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="库内总库存">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="锁定库存">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="冻结库存">
												<a-input />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item prop="" label="中转库存">
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
					<a-button type="primary">导出</a-button>
					<a-button type="primary">冻结库存</a-button>
					<a-button type="primary">解冻库存</a-button>
					<a-button type="primary">库存领用</a-button>
					<a-button type="primary">打印条码</a-button>
					<a-button type="primary">查看库存变动</a-button>
					<a-button type="primary">查看库存变动统计</a-button>
					<a-button type="primary">查看库位库存</a-button>
					<a-button type="primary">查看FNSKU库存</a-button>
					<a-button type="primary">查看锁定库存</a-button>
				</div>
				<div class="a-table-column">
					<a-spin spinning={false}>
						<a-table rowSelection={this.rowSelection} dataSource={this.tableData} loading={this.loading} scroll={{ x: 2500 }} rowKey="key" pagination={false}>
							<a-table-column title="仓库" dataIndex="" />
							<a-table-column title="SPU" dataIndex=""></a-table-column>
							<a-table-column title="SKU" dataIndex=""></a-table-column>
							<a-table-column title="图片" dataIndex=""></a-table-column>
							<a-table-column title="产品名称" dataIndex=""></a-table-column>
							<a-table-column title="库内总库存" dataIndex=""></a-table-column>
							<a-table-column title="锁定库存" dataIndex=""></a-table-column>
							<a-table-column title="冻结库存" dataIndex=""></a-table-column>
							<a-table-column title="中转库存" dataIndex=""></a-table-column>
							<a-table-column title="蓝深科技库存" dataIndex=""></a-table-column>
							<a-table-column title="蓝深贸易库存" dataIndex=""></a-table-column>
							<a-table-column title="0~7天" dataIndex=""></a-table-column>
							<a-table-column title="8~14天" dataIndex=""></a-table-column>
							<a-table-column title="15~30天" dataIndex=""></a-table-column>
							<a-table-column title="31~60天" dataIndex=""></a-table-column>
							<a-table-column title="61~90天" dataIndex=""></a-table-column>
							<a-table-column title="91天以上" dataIndex=""></a-table-column>
							<a-table-column title="备注" dataIndex=""></a-table-column>
							<a-table-column title="操作" align="center" width={270} fixed="right">
								{(record: defs.wms.AllocationMasterResponseDto) => (
									<a-space size="middle">
										<a type="link">查看分箱</a>
										<a type="link">查看sku明细</a>
										<a-dropdown trigger={['click']}>
											<a type="link" class="ant-dropdown-link" onclick={(e: { preventDefault: () => any }) => e.preventDefault()}>
												更多操作 <a-icon type="down" />
											</a>
											<a-menu slot="overlay">
												<a-menu-item>
													<a-button icon="share-alt" type="link">
														导出发票
													</a-button>
												</a-menu-item>
											</a-menu>
										</a-dropdown>
									</a-space>
								)}
							</a-table-column>
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
