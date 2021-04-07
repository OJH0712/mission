/*
 * @Description:入库单详情
 * @Author: owen
 * @Date: 2021-04-01 16:58:40
 * @LastEditTime: 2021-04-06 16:43:45
 */

import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { F, T, isNil } from 'ramda'
import { entrySourceTypeFilter, entryStatusFilter } from '@/dictionaries/filter'
import { timestampToTime } from '@/utils/date'

@Component({
	name: 'EntryDetail'
})
export default class EntryDetail extends TablePage {
	public formData: any = []
	public tableData: any = []
	public tableData2: any = []
	public tableData3: Array<any> = []
	public visible = F()

	async init(record: any) {
		console.log(record, 'record')
		this.formData = record
		this.visible = T()
		const { data, success } = await API.wms.inDetail.list.request(record.iono)
		if (success && !isNil(data)) {
			this.tableData = data.list
		}
	}

	clear() {
		console.log('clear')
	}
	async hangdleClick(val: any) {
		if (val === '2') {
			console.log('vla', 2)
			const { data, success } = await API.wms.inMaster.getDetailByIono.request(this.formData.iono)
			if (success && !isNil(data)) {
				console.log(data, 'data2')
				this.tableData2 = data.inDetailResponseDtoList
			}
		} else if (val === '3') {
			const params: any = {
				barcode: this.formData.sku,
				number: this.formData.iono
			}
			const { data, success } = await API.wms.inMaster.getPutOnInfo.request(this.formData.iono, params)
			if (success && !isNil(data)) {
				console.log(data, 'data3')
				// this.tableData2 = data.inDetailResponseDtoList
			}
			console.log(3)
		}
	}

	public render() {
		return (
			<div>
				<a-modal title="入库单明细" align="center" visible={this.visible} footer={null} on-ok={() => (this.visible = F())} on-cancel={() => (this.visible = F())} width={1200}>
					<div class="form-display ">
						<div>
							<a-row type="flex">
								<a-col span={6}>仓库：{this.formData.warehouseName}</a-col>
								<a-col span={6}>入库单号：{this.formData.iono}</a-col>
								<a-col span={6}>来源类型：{entrySourceTypeFilter(this.formData.sourceType)}</a-col>
								<a-col span={6}>来源单号：{this.formData.sourceNo}</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6}>运单号：{this.formData.waybillNo}</a-col>
								<a-col span={6}>状态：{entryStatusFilter(this.formData.status)}</a-col>
								<a-col span={6}>计划入库数量：{this.formData.planQty}</a-col>
								<a-col span={6}>箱数：{this.formData.boxNum}</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6}>采购员：{this.formData.purchaser}</a-col>
								<a-col span={6}>供应商名称：{this.formData.supplierName}</a-col>
								<a-col span={6}>交易主体：{this.formData.tradeCompanyName}</a-col>
								<a-col span={6}>创建时间：{timestampToTime(this.formData.createTime)}</a-col>
							</a-row>
							<a-row type="flex">
								<a-col span={6}>签收时间：{timestampToTime(this.formData.signingTime)}</a-col>
								<a-col span={6}>预计到货时间：{timestampToTime(this.formData.estimateTime)}</a-col>
							</a-row>
						</div>
					</div>

					<a-tabs defaultActiveKey="1" align="left" onChange={(val: number) => this.hangdleClick(val)}>
						<a-tab-pane key="1" tab="产品明细" name="first">
							<a-table dataSource={this.tableData} rowKey="id" pagination={false}>
								<a-table-column title="SKU" dataIndex="sku" align="center" />
								<a-table-column
									title="图片"
									dataIndex="productImageUrl"
									align="center"
									customRender={(productImageUrl: string) => {
										return <a-Avatar src={productImageUrl} shape="square" />
									}}
								/>
								<a-table-column title="产品标题" dataIndex="productTitle" align="center" />
								<a-table-column title="计划入库数量" dataIndex="planQty" align="center" />
								<a-table-column title="已收货数量" dataIndex="receivedQty" align="center" />
								<a-table-column title="已上架数量" dataIndex="shelvesQty" align="center" />
							</a-table>
						</a-tab-pane>
						<a-tab-pane key="2" tab="收货记录" force-render name="second">
							<a-table dataSource={this.tableData2} rowKey="id" pagination={false}>
								<a-table-column title="操作人" dataIndex="signatory" align="center" />
								<a-table-column title="操作时间" dataIndex="signingTime" align="center" customRender={(time: string) => timestampToTime(time)} />
								<a-table-column title="SKU" dataIndex="sku" align="center" />
								<a-table-column title="产品标题" dataIndex="productTitle" align="center" />
							</a-table>
						</a-tab-pane>
						<a-tab-pane key="3" tab="上架记录" name="third">
							<a-table dataSource={this.tableData3} rowKey="id" pagination={false}>
								<a-table-column title="操作人" dataIndex="" key="" align="center" />
								<a-table-column title="操作时间" dataIndex="" key="" align="center" />
								<a-table-column title="SKU" dataIndex="" key="" align="center" />
								<a-table-column title="产品标题" dataIndex="" key="" align="center" />
							</a-table>
						</a-tab-pane>
					</a-tabs>
				</a-modal>
			</div>
		)
	}
	public search() {
		console.log('search')
	}
}
