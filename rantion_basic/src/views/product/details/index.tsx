/*
 * @Description:SPU详情页
 * @Author: hyx
 * @Date: 2021-03-08 18:15
 */
import { isNil, isEmpty, equals, forEach, findIndex, clone } from 'ramda'
import { computed, defineComponent, onMounted, reactive, toRaw, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

interface SearchForm extends defs.basics.ProductMasterResponseDto {
	skuModelList?: Array<defs.basics.ProductSkuModelObject | Partial<defs.basics.ProductSkuModelObject>>
	newSkuModelList?: Array<defs.basics.ProductSkuModelObject | Partial<defs.basics.ProductSkuModelObject>>
}
interface TableColumn extends defs.basics.ProductSkuResponseDto {
	editable?: boolean //表格当前行是否可编辑
	isNew?: boolean //是否新增行
	annexUrlList?: [] //SKU附件集合
	imageUrlList?: [] //SKU图片集合
}
import '../styles/product.scss'
import { shippingTypeFilter } from '@/dictionaries/filter'
import { isArray, isString } from 'rantion-tools'
interface TreeData extends defs.basics.ProductCategroyTreeResponseDto {
	annexUrl?: string | Array<string>
}
interface ProductImage {
	name?: string
	url?: string
}

const rules = {
	productNameCn: [{ required: true, trigger: 'change', message: '请输入产品名称' }],
	productNameEn: [{ required: true, trigger: 'change', message: '请输入英文名称' }],
	brandNo: [{ required: true, trigger: 'change', message: '请选择品牌' }],
	categoryNo: [{ required: true, trigger: 'change', message: '请选择品类' }],
	materialNo: [{ required: true, trigger: 'change', message: '请选择产品材质' }],
	productOwner: [{ required: true, trigger: 'change', message: '请选择产品负责人' }],
	purchaser: [{ required: true, trigger: 'change', message: '请选择采购负责人' }],
	organizationNo: [{ required: true, trigger: 'change', message: '请选择事业部' }],
	status: [{ required: true, type: 'number', trigger: 'change', message: '请选择状态' }],
	logisticsGroupNo: [{ required: true, trigger: 'change', message: '请选择物流分组' }],
	hscodeCn: [{ required: true, trigger: 'change', message: '请输入HSCODE(国内)' }],
	expirydate: [{ required: true, type: 'number', trigger: 'change', message: '请输入质保期(月)' }],
	productUse: [{ required: true, trigger: 'change', message: '请输入产品用途' }],
	declareMemo: [{ required: true, trigger: 'change', message: '请输入申报要素' }],
	firstPurchasePrice: [{ required: true, type: 'number', trigger: 'change', message: '请输入首次采购金额' }],
	vatRate: [{ required: true, type: 'number', trigger: 'change', message: '请输入增值税率' }],
	taxRebateRate: [{ required: true, type: 'number', trigger: 'change', message: '请输入退税率' }]
}
interface State {
	tableData: Array<TableColumn>
	searchForm: Partial<SearchForm>
	cascaderOption: Array<TreeData>
	productAnnexUrl: Array<ProductImage>
}
export default defineComponent({
	name: 'ProductDetails',
	setup() {
		const searchFormRef = ref()
		const state = reactive<State>({
			tableData: [],
			searchForm: {},
			cascaderOption: [],
			productAnnexUrl: []
		})
		const $route = useRoute()
		const $router = useRouter()
		const { type: queryType, productNo } = $route.query
		//获取品类列表
		async function getProductCategroyList() {
			const { data, success } = await API.basics.productCategroy.listTree.request({})
			if (success && !isNil(data)) {
				state.cascaderOption = data
			}
		}

		onMounted(() => {
			search(productNo as string)
			getProductCategroyList()
		})
		async function search(productNo: string) {
			if (!isNil(productNo)) {
				const searchForm = {
					productNo
				}
				// 查询产品的sku   以及sku列表
				const [product, productSkuList] = await Promise.all([
					API.basics.productMaster.byUnique.request(productNo),
					API.basics.productSku.list.request(searchForm)
				])
				if (product.success && !isNil(product.data)) {
					state.searchForm = {
						...product.data
						// categoryNo: product.data.categoryNo ? (product.data.categoryNo as string).split('|') : ['']
					}
					if (product.data.categoryNoFull && isString(product.data.categoryNoFull)) {
						state.searchForm.categoryNoFull = product.data.categoryNoFull.split('|')
					}
					try {
						state.productAnnexUrl = JSON.parse(state.searchForm.annexUrl as string)
					} catch (error) {
						state.productAnnexUrl = [
							{
								name: state.searchForm.annexUrl as string,
								url: state.searchForm.annexUrl as string
							}
						]
					}
				}
				const { data, success } = productSkuList

				if (success && !isNil(data)) {
					state.tableData = data
					state.searchForm.skuModelList = clone(data)
					try {
						forEach((item) => {
							item.annexUrlList = JSON.parse(item.annexUrl as string)
							item.imageUrlList = JSON.parse(item.imageUrl as string)
						}, toRaw(state.tableData))
					} catch (error) {
						console.log('老旧数据', state.tableData)
					}
				}
			}
		}

		function cascaderChange(value: Array<string>, options: any[]) {
			// console.log(value, options)
			state.searchForm.categoryNo = [...value].pop()
			state.searchForm.categoryName = options.pop().label
		}

		//保存产品
		async function save() {
			if (computeCount.value.isShow) {
				$router.go(-1)
				return
			}
			const pass = await searchFormRef.value.validate()
			if (!pass) {
				return
			}
			const params = toRaw(state.searchForm)
			if (isEmpty(state.productAnnexUrl) || isNil(state.productAnnexUrl)) {
				message.error('请上传附件')
				return
			}
			const tableData = clone(state.tableData)
			if (isEmpty(tableData)) {
				message.error('请添加SKU')
				return
			}
			const index = findIndex((item: TableColumn): any => {
				if (item.editable) {
					message.error('请保存SKU')
					return item
				}
				if (isEmpty(item.imageUrlList) || isNil(item.imageUrlList)) {
					message.error('请上传SKU图片')
					return item
				}
				if (isEmpty(item.skuTitleCn) || isNil(item.skuTitleCn)) {
					message.error('请填写SKU中文标题')
					return item
				}
				if (isEmpty(item.skuTitleEn) || isNil(item.skuTitleEn)) {
					message.error('请填写SKU英文标题')
					return item
				}
				if (isEmpty(item.deliveryDay) || isNil(item.deliveryDay)) {
					message.error('请填写产品交期')
					return item
				}
			}, toRaw(tableData))
			if (!equals(index, -1)) {
				return
			}

			const oldSkuModelList: Array<TableColumn> = []
			const newSkuModelList: Array<TableColumn> = []
			forEach((item: TableColumn) => {
				item.annexUrl = JSON.stringify(item.annexUrlList)
				item.imageUrl = JSON.stringify(item.imageUrlList)
				delete item.editable
				delete item.annexUrlList
				delete item.imageUrlList
				if (item.isNew) {
					delete item.isNew
					delete item.id
					item.shippingMethodName = shippingTypeFilter(item.shippingMethodNo as string) as string
					newSkuModelList.push(item)
				} else {
					oldSkuModelList.push(item)
				}
			}, toRaw(tableData))

			params.skuModelList = oldSkuModelList
			params.newSkuModelList = newSkuModelList
			params.annexUrl = JSON.stringify(state.productAnnexUrl)
			if (params.categoryNo && isArray(params.categoryNo)) {
				params.categoryNo = params.categoryNo.join('|')
			}
			const { success } = await API.basics.productMaster.saveFull.request(params)
			if (success) {
				message.success('保存成功')
				$router.go(-1)
			}
		}
		//添加SKU
		async function addProductSku() {
			const params = {
				id: 0,
				deleted: 0,
				editable: true,
				isNew: true
			}
			let newId = 0
			if (isEmpty(state.tableData)) {
				params.id = newId
				state.tableData.push(params)
			} else {
				state.tableData.forEach((item: TableColumn) => {
					if (newId === item.id) {
						newId++
					}
				})
				params.id = newId
				state.tableData.push(params)
			}
		}
		//修改SKU
		function update(index: number) {
			state.tableData[index].editable = true
		}

		//保存SKU
		function saveRow(index: number) {
			state.tableData[index].editable = false
		}

		//取消
		function cancel() {
			$router.go(-1)
		}

		const computeCount = computed(() => {
			return {
				isShow: equals('show', queryType)
			}
		})
		return () => (
			<div>
				<div>
					<a-form model={state.searchForm} ref={searchFormRef} rules={rules}>
						<a-card title="主体信息">
							<div class="box_card_flex">
								<a-form-item v-show={!isNil(state.searchForm.id)} name="productNo" label="产品编号">
									<a-input v-model={[state.searchForm.productNo, 'value']} disabled />
								</a-form-item>
								<a-form-item name="productNameCn" label="产品名称">
									<a-input v-model={[state.searchForm.productNameCn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="productNameEn" label="英文名称">
									<a-input v-model={[state.searchForm.productNameEn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="productAbbreviation" label="产品简称">
									<a-input
										v-model={[state.searchForm.productAbbreviation, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="brandNo" label="产品品牌">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.brandName, 'value']} disabled />
									) : (
										<form-brand
											allowClear
											v-models={[
												[state.searchForm.brandNo, 'value'],
												[state.searchForm.brandName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="categoryNo" label="品类名称">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.categoryNameCnFull, 'value']} disabled />
									) : (
										<a-cascader
											options={state.cascaderOption}
											fieldNames={{ label: 'categoryNameCn', value: 'categoryNo', children: 'nextLevelList' }}
											onChange={cascaderChange}
											changeOnSelect
											v-model={[state.searchForm.categoryNoFull, 'value']}
										/>
									)}
								</a-form-item>
								<a-form-item name="materialNo" label="产品材质">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.materialName, 'value']} disabled />
									) : (
										<form-material
											allowClear
											v-models={[
												[state.searchForm.materialNo, 'value'],
												[state.searchForm.materialName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="materialNo" label="产品类型">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.typeName, 'value']} disabled />
									) : (
										<form-spuType
											allowClear
											v-models={[
												[state.searchForm.typeNo, 'value'],
												[state.searchForm.typeName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="productOwner" label="产品负责人">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.productOwnerName, 'value']} disabled />
									) : (
										<form-sysUser
											allowClear
											v-models={[
												[state.searchForm.productOwner, 'value'],
												[state.searchForm.productOwnerName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="purchaser" label="采购负责人">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.purchaserName, 'value']} disabled />
									) : (
										<form-sysUser
											allowClear
											v-models={[
												[state.searchForm.purchaser, 'value'],
												[state.searchForm.purchaserName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="secondOwner" label="副产品负责人">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.secondOwnerName, 'value']} disabled />
									) : (
										<form-sysUser
											allowClear
											v-models={[
												[state.searchForm.secondOwner, 'value'],
												[state.searchForm.secondOwnerName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="planner" label="计划员">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.plannerName, 'value']} disabled />
									) : (
										<form-sysUser
											allowClear
											v-models={[
												[state.searchForm.planner, 'value'],
												[state.searchForm.plannerName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="organizationNo" label="事业部">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.organizationNane, 'value']} disabled />
									) : (
										<form-organiza
											allowClear
											v-models={[
												[state.searchForm.organizationNo, 'value'],
												[state.searchForm.organizationNane, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="status" label="状态">
									<form-config
										v-model={[state.searchForm.status, 'value']}
										prop="status"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item v-show={!isNil(state.searchForm.id)} name="approvalStatus" label="审批状态">
									<form-config v-model={[state.searchForm.approvalStatus, 'value']} prop="approvalStatus" disabled />
								</a-form-item>
								<a-form-item v-show={!isNil(state.searchForm.id)} name="mqSendStatus" label="MQ推送状态">
									<form-config v-model={[state.searchForm.mqSendStatus, 'value']} prop="mqSendStatusStatus" disabled />
								</a-form-item>
								<a-form-item v-show={!isNil(state.searchForm.id)} prop="nsConsumeStatus" label="NS消费状态">
									<form-config
										v-model={[state.searchForm.nsConsumeStatus, 'value']}
										prop="nsConsumeStatusStatus"
										disabled
									/>
								</a-form-item>
								<a-form-item name="logisticsGroupNo" label="物流分组">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.logisticsGroupName, 'value']} disabled />
									) : (
										<form-logGroup
											allowClear
											v-models={[
												[state.searchForm.logisticsGroupNo, 'value'],
												[state.searchForm.logisticsGroupName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="hscodeCn" label="HSCODE(国内)">
									<a-input v-model={[state.searchForm.hscodeCn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="hscodeEn" label="HSCODE(国外)">
									<a-input v-model={[state.searchForm.hscodeEn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
							</div>
						</a-card>
						<a-card title="补充信息" style="margin-top: 15px;">
							<div class="box_card_flex">
								<a-form-item name="countrySecondWord" label="制造国家">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.countryName, 'value']} disabled />
									) : (
										<form-country
											allowClear
											v-models={[
												[state.searchForm.countrySecondWord, 'value'],
												[state.searchForm.countryName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="expirydate" label="质保期(月)">
									<a-input v-model={[state.searchForm.expirydate, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="productUse" label="产品用途">
									<a-input v-model={[state.searchForm.productUse, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="declareMemo" label="申报要素">
									<a-input v-model={[state.searchForm.declareMemo, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="declareNameCn" label="申报名称(CN)">
									<a-input v-model={[state.searchForm.declareNameCn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="declareNameEn" label="申报名称(EN)">
									<a-input v-model={[state.searchForm.declareNameEn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="firstPurchasePrice" label="首次采购金额">
									<a-input
										v-model={[state.searchForm.firstPurchasePrice, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="vatRate" label="增值税率">
									<a-input v-model={[state.searchForm.vatRate, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="taxRebateRate" label="退税率">
									<a-input v-model={[state.searchForm.taxRebateRate, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="applyUserMemo" label="提交人备注">
									<a-textarea
										v-model={[state.searchForm.applyUserMemo, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
							</div>
						</a-card>
						<a-card title="附件" style="margin-top: 15px;">
							<r-upload-dragger
								v-model={[state.productAnnexUrl, 'value']}
								disabled={computeCount.value.isShow}
								multiple
								maxLength={12}
							/>
						</a-card>
						<a-card title="SKU" style="margin-top: 15px;">
							<div>
								<div v-show={!computeCount.value.isShow} class="table-top">
									<a-button type="primary" onClick={addProductSku}>
										添加
									</a-button>
								</div>
								<a-table dataSource={state.tableData} rowKey="id" align="center" scroll={{ x: 2500 }} bordered>
									<a-table-column
										title="图片"
										key="imageUrlList"
										width="135px"
										customRender={(item: Rantion.RableSlotScope<TableColumn>) => (
											<r-upload-image
												v-model={[item.record.imageUrlList, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
											/>
										)}
									></a-table-column>
									<a-table-column title="SKU编号" key="skuNo" align="center" dataIndex="skuNo" />
									<a-table-column title="SKU中文标题" key="skuTitleCn" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => {
											return (
												<a-input
													v-model={[item.record.skuTitleCn, 'value']}
													disabled={computeCount.value.isShow || !item.record.editable}
													style="text-align: center;"
												/>
											)
										}}
									</a-table-column>
									<a-table-column title="SKU英文标题" key="skuTitleEn" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.skuTitleEn, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="SKU简称" key="skuAbbreviation" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.skuAbbreviation, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="是否需要厂检" key="isFactoryCheck" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<form-config
												v-model={[item.record.isFactoryCheck, 'value']}
												prop="isFactoryCheck"
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="是否需要质检" key="isWarehouseCheck" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<form-config
												v-model={[item.record.isWarehouseCheck, 'value']}
												prop="isFactoryCheck"
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="物流周期(天)" key="logisticsCycle" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.logisticsCycle, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="默认运输方式" key="shippingMethodNo" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<form-config
												v-model={[item.record.shippingMethodNo, 'value']}
												prop="shippingType"
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="产品交期" key="deliveryDay" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.deliveryDay, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="装箱重量" key="singlePackingWeight" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.singlePackingWeight, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="装箱体积" key="singleBoxVolumeWeight" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.singleBoxVolumeWeight, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="产品重量(g)" key="weight" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.weight, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="产品长" key="longCm" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.longCm, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="产品宽" key="widthCm" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.widthCm, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="产品高" key="heightCm" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.heightCm, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="体积重" key="volumeWeight" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.volumeWeight, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column title="默认供应商" key="vendorName" width="180px" align="center">
										{(item: Rantion.RableSlotScope<TableColumn>) => (
											<a-input
												v-model={[item.record.vendorName, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												style="text-align: center;"
											/>
										)}
									</a-table-column>
									<a-table-column
										title="附件"
										key="annexUrlList"
										align="center"
										customRender={(item: Rantion.RableSlotScope<TableColumn>) => (
											<r-upload-files
												v-model={[item.record.annexUrlList, 'value']}
												disabled={computeCount.value.isShow || !item.record.editable}
												multiple
												maxLength={2}
											/>
										)}
									></a-table-column>
									<a-table-column title="操作" align="center" width="140px">
										{(item: Rantion.RableSlotScope<TableColumn>) =>
											computeCount.value.isShow ? null : item.record.editable ? (
												<a-space size="middle">
													<a onClick={() => saveRow(item.index)}>保存</a>
												</a-space>
											) : (
												<a-space size="middle">
													<a onClick={() => update(item.index)}>修改</a>
												</a-space>
											)
										}
									</a-table-column>
								</a-table>
							</div>
						</a-card>
						<a-form-item align="center">
							<a-button type="primary" onClick={save}>
								确定
							</a-button>
							<a-button onClick={cancel}>取消</a-button>
						</a-form-item>
					</a-form>
				</div>
			</div>
		)
	}
})
