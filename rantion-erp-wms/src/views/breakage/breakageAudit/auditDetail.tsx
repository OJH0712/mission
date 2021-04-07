/*
 * @Description:查看报损审核
 * @Author: owen
 * @Date: 2021-03-03 10:12:33
 * @LastEditTime: 2021-03-06 17:36:13
 */
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { F, T } from 'ramda'
import { timestampToTime } from '@/utils/date'
import { breakageStatusFilter } from '@/dictionaries/filter'
import '@/styles/app.scss'
// import { timestampToTime } from '../../../utils/date';
import http from '@/http'

@Component({
	name: 'AuditDetail'
})
export default class AuditDetail extends Vue {
	public tableData: any = []
	public calcVisible = F()
	public auditData: any = []
	async init(record: any) {
		this.calcVisible = T()
		const { data } = await API.wms.storageReportDamage.getStorageReportDamage.request({ fono: record.fono })
		this.tableData = data
		//获取审批信息
		http(`/rantion-activiti/business/historyInstanceByBusinessKey?businessKey=FO.${this.tableData.fono}`).then((res) => {
			this.auditData = res.data[0].instanceTaskList
			//	console.log('auditData,', this.auditData)
		})
	}
	close() {
		this.calcVisible = F()
	}

	public render() {
		return (
			<div class="box">
				<a-modal title={`${this.tableData.fono}审批`} align="center" visible={this.calcVisible} footer={null} ok-text="确定" cancel-text="关闭" on-cancel={this.close} width={1000}>
					<a-card title="审批信息">
						<div slot="header" class="clearfix">
							<span>审批信息</span>
						</div>
						<div>
							<a-steps current={this.auditData.length - 1} style="text-align:left">
								{this.auditData.map((item: any) => {
									return item.endTime ? (
										<a-step title={item.activityName} description={`在${timestampToTime(item.endTime)}提审`} key={item.id} />
									) : (
										<a-step title={item.activityName} description={`进行中`} key={item.id} />
									)
								})}
							</a-steps>
						</div>
					</a-card>
					<a-card class=" clearfix" title="报损信息" style="margin-top:30px">
						<div slot="header" class="clearfix">
							<span>报损信息</span>
						</div>
						<div>
							<div class="app-flex-sb align-items-left ">
								<div class="app-flex-1">
									<span>当前审批步骤 :</span>
									<span>{this.tableData.currentApprovalStep}</span>
								</div>
								<div class="app-flex-1">
									<span>审核时间:</span>
									<span>{timestampToTime(this.tableData.auditTime as string)}</span>
								</div>
								<div class="app-flex-1">
									<span>审核人:</span>
									<span>{this.tableData.auditor}</span>
								</div>
							</div>
							<div class="app-flex-sb align-items-left ">
								<div class="app-flex-1">
									<span>报损单号:</span>
									<span>{this.tableData.fono}</span>
								</div>
								<div class="app-flex-1">
									<span>报损状态:</span>
									<span>{breakageStatusFilter(this.tableData.status as string)}</span>
								</div>
								<div class="app-flex-1">
									<span>事业部:</span>
									<span>{this.tableData.department}</span>
								</div>
							</div>
							<div class="app-flex-sb align-items-left ">
								<div class="app-flex-1">
									<span>数量:</span>
									<span>{this.tableData.num}</span>
								</div>

								<div class="app-flex-1">
									<span>仓库名称 :</span>
									<span>{this.tableData.warehouseName}</span>
								</div>
								<div class="app-flex-1">
									<span>库位编号 :</span>
									<span>{this.tableData.positionCode}</span>
								</div>
							</div>
							<div class="app-flex-sb align-items-left ">
								<div class="app-flex-1">
									<span>库存成本:</span>
									<span>{this.tableData.storageCost}</span>
								</div>
								<div class="app-flex-1">
									<span>创建人:</span>
									<span>{this.tableData.createBy}</span>
								</div>
								<div class="app-flex-1">
									<span>创建时间:</span>
									<span>{timestampToTime(this.tableData.createTime as string)}</span>
								</div>
							</div>
						</div>
					</a-card>
				</a-modal>
			</div>
		)
	}
}
