/*
 * @Description:调拨批次查看
 * @Author: owen
 * @Date: 2021-03-02 11:39:01
 * @LastEditTime: 2021-03-15 15:54:43
 */
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T } from 'ramda'
import { timestampToTime } from '../../../utils/date'

@Component({
	name: 'BatchDetail'
})
export default class BatchDetail extends Vue {
	public tableData: any = []
	public calcVisible = F()
	async init(record: any) {
		this.calcVisible = T()
		const { data } = await API.wms.allocationBatch.getDetailByAbno.request(record.abno)
		this.tableData = data?.allocationMasterResponseDtos
	}
	close() {
		this.calcVisible = F()
	}

	public render() {
		return (
			<div>
				<a-modal title="调拨批次单明细" align="center" visible={this.calcVisible} footer={null} ok-text="确定" cancel-text="关闭" on-cancel={this.close} width={600}>
					<a-table dataSource={this.tableData} rowKey="id" pagination={false} align="center">
						<a-table-column
							title="序号"
							key="index"
							customRender={(x: any, y: any, z: number) => {
								console.log(x, y)
								return <span>{z + 1}</span>
							}}
						/>
						<a-table-column title="调拨单号" dataIndex="aono" key="aono" />
						<a-table-column title="箱数" dataIndex="boxQty" key="boxQty" />
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
