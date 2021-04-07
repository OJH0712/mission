/*
 * @Description:详情
 * @Author: owen
 * @Date: 2021-04-06 10:18:51
 * @LastEditTime: 2021-04-06 10:42:51
 */
import { Component } from 'vue-property-decorator'

import { F, T } from 'ramda'

import TablePage, { PageType } from '@/interface/TablePage'

@Component({
	name: 'BoxDetails'
})
export default class BoxDetails extends TablePage {
	public search(type?: PageType): void {
		throw new Error('Method not implemented.')
	}
	public clear(): void {
		throw new Error('Method not implemented.')
	}
	public tableData: any = []
	public visible = F()
	public async init(val: any) {
		this.visible = T()
	}

	public render() {
		return (
			<div>
				<a-modal title="详情" align="center" visible={this.visible} footer={null} on-ok={() => (this.visible = F())} on-cancel={() => (this.visible = F())} width={1200}>
					<a-table dataSource={this.tableData} rowKey="key" pagination={false}>
						<a-table-column title="箱号" dataIndex="" />
						<a-table-column title="SKU" dataIndex="" />
						<a-table-column title="图片" dataIndex="" />
						<a-table-column title="产品名称" dataIndex="" />
						<a-table-column title="数量" dataIndex="" />
					</a-table>
				</a-modal>
			</div>
		)
	}
}
