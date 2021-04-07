/*
 * @Description: 查看分箱明细组件
 * @Author: owen
 * @Date: 2021-03-01 14:13:33
 * @LastEditTime: 2021-03-15 16:03:28
 */
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T, isNil } from 'ramda'

@Component({
	name: 'Boxdetail'
})
export default class Boxdetail extends Vue {
	public list: any = []
	public calcVisible = F()
	async init(record: any) {
		this.calcVisible = T()
		this.getInit(record.aono)
	}
	close() {
		this.calcVisible = F()
	}
	public async getInit(key: string) {
		const { data, success } = await API.wms.allocationMaster.getBoxDetailByAono.request(key)
		if (success && !isNil(data)) {
			this.list = data || []
		}
	}
	public render() {
		return (
			<div>
				<a-modal title="调拨单分箱明细" align="center" visible={this.calcVisible} footer={null} ok-text="确定" cancel-text="关闭" on-ok={this.close} on-cancel={this.close} width={1500}>
					<a-table dataSource={this.list} rowKey="sku" pagination={false}>
						<a-table-column title="箱号" dataIndex="boxNo" key="boxNo" />
						<a-table-column title="sku" dataIndex="sku" key="sku" />
						<a-table-column title="SKU名称" dataIndex="skuName" key="skuName" />
						<a-table-column title="MSKU" dataIndex="msku" key="msku" />
						<a-table-column title="FNSKU" dataIndex="fnsku" key="fnsku" />
						<a-table-column title="ASIN" dataIndex="asin" key="asin" />
						<a-table-column title="数量" dataIndex="qty" key="qty" />
						<a-table-column title="重量" dataIndex="weight" key="weight" />
						<a-table-column title="长度" dataIndex="length" key="length" />
						<a-table-column title="宽度" dataIndex="width" key="width" />
						<a-table-column title="高度" dataIndex="height" key="height" />
						<a-table-column title="体积重" dataIndex="chargeWeight" key="chargeWeight" />
						<a-table-column title="体积" dataIndex="volume" key="volume" />
						<a-table-column title="型号" dataIndex="model" key="model" />
						<a-table-column title="品牌" dataIndex="brandName" key="brandName" />
						<a-table-column title="用途" dataIndex="purpose" key="purpose" />
						<a-table-column title="抛货率基数" dataIndex="volumeGoodsBase" key="volumeGoodsBase" />
						<a-table-column title="备注" dataIndex="remark" key="remark" />
					</a-table>
					<div class="table-footer">
						<a-button type="primary" on-click={this.close}>
							确定
						</a-button>
					</div>
				</a-modal>
			</div>
		)
	}
}
