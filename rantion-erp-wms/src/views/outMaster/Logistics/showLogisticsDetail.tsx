/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-04 20:51:22
 * @LastEditTime: 2021-03-08 16:18:13
 */
import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { VNode } from 'vue'
import { F, T, isNil } from 'ramda'
import { timestampToTime } from '@/utils/date'
import http from '@/http'

@Component({
	name: 'LogisticsDetail'
})
export default class LogisticsDetail extends TablePage {
	public tableData: any = []
	public visible = F()

	async init(record: any) {
		this.visible = T()
		console.log(record)
		const { data, success } = await API.wms.packageMaster.getDetailByPkg.request(record.pkg)
		if (success && !isNil(data)) {
			console.log(data, 'jianhuoda')
			this.tableData = data.detailResponseDtos
		}
		this.getShopList()
	}
	async getShopList() {
		// const requestBody = {
		// 	page: 1,
		// 	pageSize: 20
		// }
		// const parms = {
		// 	apiCode: 'shopList',
		// 	requestBody: requestBody
		// }
		const URL = '/rantion-wmsuser'
		const { data } = await http(`${URL}/nsRequest?apiCode=shopList&&pageSize=999&pageNumber=1`)
		console.log(data)
	}
	cancel() {
		this.visible = F()
	}
	public render(): VNode {
		return (
			<div>
				<a-modal title="拣货单" align="center" visible={this.visible} footer={null} on-cancel={this.cancel} ok-text="确定" width={1200}>
					<a-table rowKey="sku" pagination={false} dataSource={this.tableData}>
						<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" />
						<a-table-column title="运单号" dataIndex="waybillNo" key="waybillNo" />
						<a-table-column title="订单号" dataIndex="orderNo" key="orderNo" />
						<a-table-column title="出库单号" dataIndex="dono" key="dono" />
						<a-table-column title="渠道服务" dataIndex="channelName" key="channelName" />
						<a-table-column title="目标国家" dataIndex="country" key="country" />
						<a-table-column title="目的城市" dataIndex="city" key="city" />
						<a-table-column title="收货地址" dataIndex="address" key="address" />
						<a-table-column title="发货数量" dataIndex="qty" key="qty" />
						<a-table-column title="发货时间" dataIndex="deliveryTime" key="deliveryTime" customRender={(time: string) => timestampToTime(time)} />
					</a-table>
				</a-modal>
			</div>
		)
	}
	public search(): void {
		// throw new Error('Method not implemented.')
		console.log('233')
	}
	public clear(): void {
		console.log('233')
	}
}
