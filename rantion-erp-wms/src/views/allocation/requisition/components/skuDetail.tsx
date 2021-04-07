/*
 * @Description: 查看SKU明细
 * @Author: owen
 * @Date: 2021-03-01 20:44:31
 * @LastEditTime: 2021-03-15 16:03:58
 */

import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T, isNil } from 'ramda'

@Component({
	name: 'AllocationDetail'
})
export default class AllocationDetail extends Vue {
	public list: any = []
	public calcVisible = F()
	async init(record: any) {
		this.calcVisible = T()
		this.getInit(record.aono)
	}
	close() {
		this.calcVisible = F()
	}
	public async getInit(key: number | string) {
		const { data, success } = await API.wms.allocationMaster.getAllocationetailByAono.request(key as string)
		if (success && !isNil(data)) {
			this.list = data || []
		}
	}
	public render() {
		return (
			<div>
				<a-modal title="调拨单分箱明细" align="center" visible={this.calcVisible} footer={null} ok-text="确定" cancel-text="关闭" on-cancel={this.close} width={1500}>
					<a-table dataSource={this.list} rowKey="sku" pagination={false}>
						<a-table-column title="sku" dataIndex="sku" key="sku" />
						<a-table-column title="ASIN" dataIndex="asin" key="asin" />
						<a-table-column title="FNSKU" dataIndex="fnsku" key="fnsku" />
						<a-table-column title="MSKU" dataIndex="msku" key="msku" />
						<a-table-column
							title="图片"
							dataIndex="productImageUrl"
							key="productImageUrl"
							customRender={(productImageUrl: string) => {
								return (
									<a-popover placement="right">
										<template slot="content">
											<img src={productImageUrl} alt="productImageUrl" style="width:400px" />
										</template>
										<a-avatar src={productImageUrl} shape="square" />
									</a-popover>
								)
							}}
						/>
						<a-table-column title="产品标题" dataIndex="productTitle" key="productTitle" />
						<a-table-column title="物流分组" dataIndex="logisticsGroup" key="logisticsGroup" />
						<a-table-column title="产品重量" dataIndex="productWeight" key="productWeight" />
						<a-table-column title="数量" dataIndex="qty" key="qty" />
						<a-table-column title="创建人" dataIndex="createBy" key="createBy" />
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
