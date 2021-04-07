/*
 * @Author: Chan
 * @Date: 2021-02-24 18:16:03
 * @LastEditTime: 2021-02-25 10:52:38
 * @LastEditors: Chan
 * @Description: 物流追踪
 */

import { timestampToTime } from '@/utils/date'
import { Component, Vue } from 'vue-property-decorator'
interface MockListItem {
	dateTime?: string | number
	message?: string
}
@Component
export default class CheckRecord extends Vue {
	recordVisible = false
	code: string
	// 接口未定义，暂用这个
	public list: Array<MockListItem> = []
	init() {
		this.recordVisible = true
		this.list = [
			{
				dateTime: 1568038816000,
				message: 'Item received by [GUANGZHOU] Logistics Centre'
			}
		]
	}
	cancel() {
		this.recordVisible = false
	}

	public render() {
		return (
			<a-modal title="物流追踪" visible={this.recordVisible} on-ok={this.cancel} on-cancel={this.cancel} ok-text="确定" cancel-text="关闭">
				<a-table row-key={(record: MockListItem) => record.dateTime} pagination={false} data-source={this.list}>
					<a-table-column title="时间" dataIndex="dateTime" key="dateTime" align="center">
						{(text: string) => <span>{timestampToTime(text)}</span>}
					</a-table-column>
					<a-table-column title="信息" dataIndex="message" key="message" align="center"></a-table-column>
				</a-table>
			</a-modal>
		)
	}
}
