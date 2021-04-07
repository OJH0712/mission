/*
 * @Description:一健入库
 * @Author: owen
 * @Date: 2021-04-01 16:58:40
 * @LastEditTime: 2021-04-06 10:09:43
 */

import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import { F, T } from 'ramda'

@Component({
	name: 'OnekeyEntry'
})
export default class OnekeyEntry extends TablePage {
	public tableData: any = []
	public tableData2: Array<any> = []
	public tableData3: Array<any> = []
	public visible = F()

	async init() {
		this.visible = T()
	}

	clear() {
		console.log('clear')
	}
	hangdleClick(val: any) {
		console.log('click', val)
	}

	public render() {
		return (
			<div>
				<a-modal title="入库单" align="center" visible={this.visible} footer={null} on-ok={() => (this.visible = F())} on-cancel={() => (this.visible = F())} width={1200}>
					<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
						<a-row class="ant-record">
							<a-col span={6}>
								<a-form-item prop="" label="仓库">
									仓库
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="入库单号">
									入库单号
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="来源类型">
									来源类型
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="来源单号">
									来源单号
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="运单号">
									运单号
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="状态">
									状态
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="计划入库数量">
									计划入库数量
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="箱数">
									箱数
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="采购员">
									采购员
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="供应商名称">
									供应商名称
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="交易主体">
									交易主体
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="创建时间">
									创建时间
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="签收时间">
									签收时间
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item prop="" label="预计到货时间">
									预计到货时间
								</a-form-item>
							</a-col>
						</a-row>
					</a-form>

					<a-table dataSource={this.tableData} rowKey="id" pagination={false}>
						<a-table-column title="SKU" dataIndex="" key="" align="center" />
						<a-table-column title="图片" dataIndex="" key="" align="center" />
						<a-table-column title="产品标题" dataIndex="" key="" align="center" />
						<a-table-column title="计划入库数量" dataIndex="" key="" align="center" />
						<a-table-column title="已收货数量" dataIndex="" key="" align="center" />
						<a-table-column title="已上架数量" dataIndex="" key="" align="center">
							{() => <input type="text" />}
						</a-table-column>
						<a-table-column title="库位" dataIndex="" key="" align="center">
							{() => <input type="text" />}
						</a-table-column>
					</a-table>
				</a-modal>
			</div>
		)
	}
	public search() {
		console.log('search')
	}
}
