/*
 * @Description:查看拣货单详情
 * @Author: owen
 * @Date: 2021-03-04 15:14:22
 * @LastEditTime: 2021-03-04 20:54:50
 */
import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { F, T, isNil } from 'ramda'
import { deepCopy } from '@/utils'
import { sourceTypeFilter } from '@/dictionaries/filter'

@Component({
	name: 'PickDetail'
})
export default class PickDetail extends TablePage {
	public visible = F()
	public formData: defs.wms.PickMasterResponseDto
	public tableData1: any = []
	public tableData2: any = []
	public skuData: any = []
	public pickno: any
	async init(record: defs.wms.PickMasterResponseDto) {
		console.log(record)
		this.visible = T()
		this.formData = deepCopy(record)
		this.pickno = record.pickno
		const { data, success } = await API.wms.pickMaster.getPickMasterPickDetail.request({ pickno: record.pickno })
		if (success && !isNil(data)) {
			console.log(data.list, '包裹明细')
			this.tableData1 = data.list
		}
		this.getPakage()
	}
	async getPakage() {
		const { data, success } = await API.wms.pickMaster.serialList.request(this.pickno)
		if (success && !isNil(data)) {
			console.log(data, '拣货明细')
			this.tableData2 = data
		}
	}
	cancel() {
		this.visible = F()
		this.clear()
	}

	public render() {
		return (
			<div>
				<a-modal title="拣货单" align="center" visible={this.visible} footer={null} on-cancel={this.cancel} ok-text="确定" width={1200}>
					{!isNil(this.formData) && (
						<div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>拣货单号 :</span>
									<span>{this.formData.pickno}</span>
								</div>
								<div class="app-flex-1">
									<span>包裹数量:</span>
									<span>{this.formData.boxNum}</span>
								</div>
								<div class="app-flex-1">
									<span>仓库数量:</span>
									<span>{this.formData.binNum}</span>
								</div>
								<div class="app-flex-1">
									<span>产品数:</span>
									<span>{this.formData.productNum}</span>
								</div>
							</div>
							<div class="app-flex-sb">
								<div class="app-flex-1">
									<span>总数量:</span>
									<span>{this.formData.num}</span>
								</div>
								<div class="app-flex-1">
									<span>状态:</span>
									<span>{this.formData.status === 0 ? '未拣货' : '已拣货'}</span>
								</div>
							</div>

							<a-tabs defaultActiveKey="1" align="left" style="margin-top:30px">
								<a-tab-pane key="1" tab="包裹明细">
									<a-table rowKey="sku" pagination={false} dataSource={this.tableData1}>
										<a-table-column title="出库单号" dataIndex="dono" key="dono" />
										<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" />
										<a-table-column title="来源类型" dataIndex="sourceType" key="sourceType" customRender={(val: string | number) => sourceTypeFilter(val)} />
										<a-table-column title="状态" dataIndex="status" key="status" />
										<a-table-column title="销售平台" dataIndex="platformName" key="platformName" />
										<a-table-column title="销售店铺" dataIndex="shopName" key="shopName" />
										<a-table-column title="目的地" dataIndex="address" key="address" />
										<a-table-column title="运单号" dataIndex="waybillNo" key="waybillNo" />
										<a-table-column title="物流渠道" dataIndex="logisticsChannel" key="logisticsChannel" />
										<a-table-column title="拣货单号" dataIndex="pickno" key="pickno" />
										<a-table-column title="配货位" dataIndex="distribute" key="distribute" />
									</a-table>
								</a-tab-pane>
								<a-tab-pane key="id" tab="拣货明细">
									<a-table rowKey="title" pagination={false} dataSource={this.tableData2}>
										<a-table-column title="拣货顺序" dataIndex="order" key="order" />
										<a-table-column title="库位" dataIndex="positionCode" key="positionCode" />
										<a-table-column title="SKU" dataIndex="sku" key="sku" />
										<a-table-column
											title="图片"
											dataIndex="productImageUrl"
											key="productImageUrl"
											customRender={(productImageUrl: string) => {
												return <a-Avatar src={productImageUrl} shape="square" />
											}}
										/>
										<a-table-column title="产品标题" dataIndex="productTitle" key="productTitle" />
										<a-table-column title="规格" dataIndex="num" key="num" />
										<a-table-column title="配货位" dataIndex="distribute" key="distribute" />
									</a-table>
								</a-tab-pane>
							</a-tabs>
							<div style="margin-top : 30px">
								<a-button type="primary" on-click={this.cancel}>
									确定
								</a-button>
							</div>
						</div>
					)}
				</a-modal>
			</div>
		)
	}
	clear() {
		console.log('clear')
	}
	search() {
		console.log('clear')
	}
}
