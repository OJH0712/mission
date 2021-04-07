/*
 * @Author: gtlong
 * @Date: 2021-03-04 16:14:31
 * @LastEditTime: 2021-03-05 15:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rantion-admind:\project\rantion-erp-wms\src\views\order\orderRules\components\addOrEditRules.tsx
 */
interface PostTypeJson {
	provider_code: string
	channel_code: string
}
import { isArray, unique } from '@/utils'
import { clone, equals, find, head, isNil, map } from 'ramda'
import { Component, Vue, Ref } from 'vue-property-decorator'
import data, { ListDate } from './data'
import { RulerCondition, RulerOption } from '../interface'
import { addOrUpdateRuler } from '@/api/sale/order'
interface VerifiForm {
	rulerName?: string
	orderAutoOperate?: string
	preferredType?: string
	id?: string
	postTypeJson?: string
	matchOtherWarehouses?: number
	warehouse?: string
}
interface ThisComponent {
	components?: any
	optionType?: string
	type?: string
	dialogClose?: boolean
	rangeType?: string
}
import { StorageModule } from '@/store/modules/storage'
@Component({
	name: 'AddOrEditRulesModel'
})
export default class AddOrEditRulesModel extends Vue {
	@Ref('ruleFormRef') readonly ruleFormRef!: HTMLFormElement
	@Ref('refsComponents') readonly refsComponentsRef!: HTMLFormElement

	public visible = false
	public searchForm: VerifiForm = {
		rulerName: '',
		orderAutoOperate: 'postType',
		preferredType: 'price',
		id: '',
		postTypeJson: '',
		matchOtherWarehouses: 0,
		warehouse: ''
	}
	shouSelect = false // 选择框是否弹出
	public names: { [index: string]: Partial<RulerOption>[] } = {}

	public isSelect: any[] = [] // 选择的ID
	public thisComponent: ThisComponent = {}
	public shipMethodList: Array<string> = [] // 邮寄方式
	public shipMethodListName: Array<string> = [] // 邮寄方式名称
	rulerConditions: Partial<RulerOption>[] = []
	public updateData: { [index: string]: any } = []
	public init(id: number, res: any) {
		this.visible = true
		if (id) {
			this.searchForm = {
				orderAutoOperate: res.orderAutoOperate,
				id: res.id,
				rulerName: res.rulerName,
				postTypeJson: res.postTypeJson,
				preferredType: res.preferredType
			}
			const postTypeJson = res.postTypeJson
			if (postTypeJson) {
				if (res.orderAutoOperate === 'warehouseType') {
					this.searchForm.matchOtherWarehouses = res.matchOtherWarehouses
					const house = JSON.parse(postTypeJson)
					this.searchForm.warehouse = house[0].code
				}
				if (res.orderAutoOperate === 'postType') {
					const postType: PostTypeJson | PostTypeJson[] = JSON.parse(postTypeJson)
					let provider_code: string
					let channel_code: string
					if (isArray(postType)) {
						provider_code = (head(postType) as any).provider_code
						channel_code = (head(postType) as any).channel_code
					} else {
						provider_code = (postType as any).provider_code
						channel_code = (postType as any).channel_code
					}
					const shipMethodList = [provider_code, channel_code]
					if (shipMethodList.length > 0) {
						this.shipMethodList = shipMethodList
					}
				}
			}

			this.isSelect = unique(res.rulerConditions.map((_: { optionType: any }) => _.optionType))
			this.getUpdateData(res.rulerConditions)
		} else {
			this.searchForm = {
				orderAutoOperate: 'postType',
				rulerName: '',
				matchOtherWarehouses: 0,
				preferredType: 'price'
			}
			this.shipMethodList = []
			this.rulerConditions = []
			this.updateData = []
			this.names = {}
		}
	}
	getUpdateData(data: RulerCondition[]) {
		const updateData: { [index: string]: any } = []
		data.forEach((res) => {
			this.setName({
				optionType: res.optionType,
				rulerOptions: res.rulerOptions
			})
			const dataObj = this.names[res.optionType] || []
			const obb: { [index: string]: any } = {}
			// 设置点击里面的选中
			dataObj.forEach((_) => {
				if (!isNil(_.optionType)) {
					const lsit = obb[_.optionType] || []
					if (_.valueRange && _.valueRange !== '') {
						lsit.push({ value: _.value, valueRange: _.valueRange })
					} else {
						lsit.push(_.value)
					}
					obb[_.optionType] = lsit
				}
			})
			updateData[res.optionType] = obb
		})
		this.updateData = updateData
		this.rulerConditions = data.map((res) => {
			return {
				optionType: res.optionType,
				rulerOptions: res.rulerOptions.map((_) => {
					if (_.valueRange && _.valueRange !== '') {
						return {
							optionType: _.optionType,
							value: _.value,
							valueFullName: _.valueFullName || _.value,
							valueRange: _.valueRange
						}
					} else {
						return {
							optionType: _.optionType,
							value: _.value,
							valueFullName: _.valueFullName || _.value
						}
					}
				})
			}
		})
	}
	setName(obj: { optionType: string; rulerOptions: RulerOption[] }) {
		let list: Partial<RulerOption>[] = []
		if (obj.optionType === 'orderSource') {
			obj.rulerOptions.forEach((_) => {
				if (_.superfluousField) {
					const li = _.superfluousField.split('|')
					const index = list.findIndex((res) => res.value === li[0] && res.optionType === 'platform' && res.valueFullName === li[1])
					if (index === -1) {
						list.push({
							optionType: 'platform',
							value: li[0],
							valueFullName: li[1]
						})
					}
					list.push({
						optionType: _.optionType,
						value: _.value,
						platformId: li[0] || null,
						valueFullName: _.valueFullName
					})
				} else {
					list.push({
						optionType: _.optionType,
						value: _.value,
						valueFullName: _.valueFullName
					})
				}
			})
		} else {
			list = obj.rulerOptions.map((_) => {
				return {
					optionType: _.optionType,
					value: _.value,
					valueFullName: _.valueFullName,
					valueRange: _.valueRange
				}
			})
		}
		const ob = {
			[obj.optionType]: list
		}
		this.names = Object.assign(this.names, ob)
	}
	get optional() {
		// 选择条件，过滤仓库
		if (this.searchForm.orderAutoOperate === 'warehouseType') {
			const optData = clone(data)
			data.forEach((val, idx1) => {
				if (val.name === '物流') {
					val.list.forEach((item: { optionType: string }, idx2: number) => {
						if (item.optionType === 'warehouse') {
							optData[idx1].list.splice(idx2, 1)
							return
						}
					})
				}
			})
			return optData
		} else {
			return data
		}
	}

	public cancel() {
		this.visible = false
		this.searchForm = {}
		this.shipMethodList = []
		this.rulerConditions = []
		this.updateData = []
		this.names = {}
	}

	public hasOwnProp(res: string) {
		return find((_) => equals(_, res), this.isSelect)
	}

	public hdSelect(type: any) {
		this.thisComponent = type
		this.shouSelect = true
	}
	hdChangeLabel(arr: any) {
		this.shipMethodListName = arr
	}
	handleOrderAutoOperate() {
		if (this.searchForm.orderAutoOperate === 'postType') {
			// 邮寄方式
			if (this.shipMethodList.length > 0) {
				const postTypeJson = {
					provider_code: this.shipMethodList[0],
					provider_name: this.shipMethodListName[0],
					channel_code: this.shipMethodList[1],
					channel_name: this.shipMethodListName[1]
				}
				this.searchForm.postTypeJson = JSON.stringify([postTypeJson])
				delete this.searchForm.matchOtherWarehouses
				return true
			} else {
				this.$message.error('请完善邮寄方式')
				return false
			}
		} else {
			// 分配发货仓库
			if (this.searchForm.warehouse) {
				const data = StorageModule.warehouse.find((_) => _.warehouseCode === this.searchForm.warehouse)
				if (data) {
					const { warehouseCode, warehouseName, type } = data
					this.searchForm.postTypeJson = JSON.stringify([{ code: warehouseCode, name: warehouseName, type }])
				}
				return true
			} else {
				this.$message.error('请选择分配发货仓库')
				return false
			}
		}
	}
	public async onSubmit() {
		let rulerConditions: any[] = []
		this.rulerConditions.forEach((_) => {
			if (this.isSelect.findIndex((res) => res === _.optionType) !== -1) {
				rulerConditions.push(_)
			}
		})
		if (rulerConditions.length === 0) {
			this.$message.error('请选择匹配规则')
			return false
		}
		if (!this.handleOrderAutoOperate()) {
			return
		}
		if (this.searchForm.orderAutoOperate === 'warehouseType') {
			rulerConditions = rulerConditions.filter((cond) => cond.optionType !== 'warehouse')
			delete this.searchForm.preferredType
		}
		const data = {
			...this.searchForm,
			rulerConditions
		}
		// console.log(data);
		const { success } = await addOrUpdateRuler(data)
		if (success) {
			this.$message.success('添加规则成功')
			this.$emit('search')
			this.visible = false
		}

		return true
	}
	getLinkText(data: ListDate) {
		let str = ''
		if (this.names[data.optionType]) {
			if (data.optionType === 'orderSource') {
				const platformList = this.names[data.optionType].filter((_) => _.optionType === 'platform')
				platformList.forEach((_) => {
					str += _.valueFullName
					const list = this.names[data.optionType].filter((res) => res.optionType !== 'platform' && res.platformId === _.value)
					if (list && list.length > 0) {
						list.forEach((res, index) => {
							if (index === 0) {
								str += ' [ '
							}
							str += res.valueFullName
							if (index === list.length - 1) {
								str += ' ] '
							} else {
								str += '; '
							}
						})
					} else {
						str += '; '
					}
				})
				// 版本兼容
				const list = this.names[data.optionType].filter((_) => _.optionType !== 'platform' && !_.platformId)
				str += list.map((_) => _.valueFullName).join(';')
			} else {
				str = this.names[data.optionType].map((_) => _.valueFullName).join(';')
			}
		} else {
			str = data.linkText
		}
		return str || data.linkText
	}
	public render() {
		return (
			<div>
				<a-modal visible={this.visible} destroyOnClose on-ok={this.onSubmit} title="规则设置" wrapClassName="order-model" width="50%" on-cancel={this.cancel}>
					<a-row>
						<a-col span={16}>
							<div class="model-left">
								<p class="h5">已选条件</p>
								{map(
									(item) =>
										map(
											(res) =>
												this.hasOwnProp(res.optionType) && (
													<div key={'select' + res.optionType} class="selectList">
														{res.name}
														<span class="kyckick" on-click={() => this.hdSelect(res)}>
															{this.getLinkText(res)}
														</span>
													</div>
												),
											item.list
										),
									this.optional
								)}
								<p class="h5">设定动作</p>
								<a-form
									ref="ruleFormRef"
									{...{
										attrs: {
											// model: this.searchForm,
											labelCol: { span: 6 },
											wrapperCol: { span: 14 }
										}
									}}
								>
									<a-form-item label="订单自动处理动作：">
										<a-radio-group v-model={this.searchForm.orderAutoOperate}>
											<a-radio value="postType">匹配邮寄方式</a-radio>
											<a-radio value="warehouseType">匹配仓库方式</a-radio>
										</a-radio-group>
									</a-form-item>
									<div v-show={this.searchForm.orderAutoOperate === 'postType'}>
										<a-form-item label="邮寄方式：">
											<form-logistics-channel-list changeOnSelect on-changeLabel={this.hdChangeLabel} v-model={this.shipMethodList} />
										</a-form-item>
										<a-form-item label="选择物流比较规则：">
											<a-radio-group v-model={this.searchForm.preferredType}>
												<a-radio value="price">价格优先</a-radio>
												<a-radio value="aging">时效优先</a-radio>
											</a-radio-group>
										</a-form-item>
									</div>
									<div v-show={this.searchForm.orderAutoOperate !== 'postType'}>
										<a-form-item label="分配发货仓库：">
											<form-warehouse v-model={this.searchForm.warehouse} />
										</a-form-item>
									</div>

									<a-form-item label="规则名称：" required prop="rulerName">
										<a-input v-model={this.searchForm.rulerName} />
									</a-form-item>
								</a-form>
							</div>
						</a-col>
						<a-col span={8}>
							<div class="model-right">
								<p class="h5">可选条件</p>
								<a-checkbox-group v-model={this.isSelect}>
									{map(
										(item) => (
											<div key={item.key}>
												<p class="h5">{item.name}</p>

												{map(
													(res) => (
														<a-checkbox value={res.optionType} key={res.type + '' + res.id}>
															{res.name} <span style="color:#1890ff;">{res.linkText}</span> {res.id}
														</a-checkbox>
													),
													item.list
												)}
											</div>
										),
										this.optional
									)}
								</a-checkbox-group>
							</div>
						</a-col>
					</a-row>
				</a-modal>
				<a-modal visible={this.shouSelect} destroyOnClose on-ok={this.cancelShouSelect} title="规则设置" wrapClassName="order-model" width="50%" on-cancel={this.cancelShouSelect}>
					{/* <keep-alive> */}
					<this.thisComponent.components
						ref="refsComponents"
						on-changeDate={this.setData}
						option-type={this.thisComponent.optionType}
						type={this.thisComponent.type}
						options={this.updateData[this.thisComponent.optionType || '']}
						dialog-close={this.thisComponent.dialogClose}
						range-type={this.thisComponent.rangeType}
						show={this.shouSelect}
						on-cancel={() => (this.shouSelect = false)}
					/>
					{/* </keep-alive> */}
				</a-modal>
			</div>
		)
	}
	cancelShouSelect() {
		this.shouSelect = false
	}
	setData(data: { optionType: string; rulerOptions: RulerOption[] }) {
		this.setName(data)
		if (this.rulerConditions.length === 0) {
			if (Object.prototype.toString.call(data) === '[object Array]') {
				this.rulerConditions.concat(data)
			} else {
				this.rulerConditions.push(data)
			}
		} else {
			// 判断是否已经存在
			const index = this.rulerConditions.findIndex((_) => _.optionType === data.optionType)
			if (index !== -1) {
				// 存在
				if (data.rulerOptions.length > 0) {
					// 有值替换
					this.rulerConditions[index] = data
				} else {
					// 没值 删除
					this.rulerConditions.splice(index, 1)
				}
			} else {
				// 不存在直接 添加
				this.rulerConditions.push(data)
			}
		}
		// 保存已选条件
		const dataObj = this.names[data.optionType] || []
		const obb: { [index: string]: any } = {}
		dataObj.forEach((_) => {
			if (_.optionType) {
				const list = obb[_.optionType] || []
				if (_.valueRange && _.valueRange !== '') {
					list.push({ value: _.value, valueRange: _.valueRange })
				} else {
					list.push(_.value)
				}
				obb[_.optionType] = list
			}
		})
		this.updateData[data.optionType] = obb
	}
}
