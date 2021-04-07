/*
 * @Description:
 * @Author: owen
 * @Date: 2021-03-02 16:18:35
 * @LastEditTime: 2021-03-15 15:54:25
 */
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T } from 'ramda'
import { timestampToTime } from '../../../utils/date'
import { requisitionTypeFilter } from '@/dictionaries/filter'

@Component({
	name: 'CabinetDetail'
})
export default class CabinetDetail extends Vue {
	public tableData: any = []
	public calcVisible = F()
	async init(record: any) {
		this.calcVisible = T()
		const { data } = await API.wms.allocationMaster.list.request(record.containerNo)

		this.tableData = data?.list
		console.log('this.tableData', this.tableData)
	}
	close() {
		this.calcVisible = F()
	}

	public render() {
		return (
			<div>
				<a-modal title="装柜信息" align="center" visible={this.calcVisible} footer={null} ok-text="确定" cancel-text="关闭" on-cancel={this.close} width={1500}>
					<a-table dataSource={this.tableData} rowKey="id" pagination={false} align="center">
						<a-table-column
							title="序号"
							key="index"
							customRender={(x: any, y: any, z: number) => {
								console.log(x, y)
								return <span>{z + 1}</span>
							}}
						/>
						<a-table-column title="调拨批次号" dataIndex="abno" key="abno" />
						<a-table-column title="调拨单号" dataIndex="aono" key="aono" />
						<a-table-column title="运单号" dataIndex="waybillNo" key="waybillNo" />
						<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" />
						<a-table-column title="申报价格" dataIndex="declarePrice" key="declarePrice" />
						<a-table-column title="申报币种" dataIndex="declareCurrency" key="declareCurrency" />
						<a-table-column title="目标仓库" dataIndex="targetWarehouseCode" key="targetWarehouseCode" />
						<a-table-column title="交易主体名称" dataIndex="tradeCompanyName" key="tradeCompanyName" />
						<a-table-column title="调拨类型" dataIndex="type" key="type" customRender={(val: string | number) => requisitionTypeFilter(val)} />
						<a-table-column title="重量" dataIndex="weight" key="weight" />
						<a-table-column title="体积" dataIndex="volume" key="volume" />
						<a-table-column title="创建人" dataIndex="createBy" key="createBy" />
						<a-table-column title="创建时间" dataIndex="createTime" key="createTime" customRender={(createTime: any) => timestampToTime(createTime)} />
					</a-table>
					<div class="table-footer">
						<a-button on-click={this.close}>取消</a-button>
						<span> </span>
						<a-button type="primary" on-click={this.close}>
							确定
						</a-button>
					</div>
				</a-modal>
			</div>
		)
	}
}
