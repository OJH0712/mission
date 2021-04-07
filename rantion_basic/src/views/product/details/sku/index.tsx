/*
 * @Description:SKU详情页
 * @Author: hyx
 * @Date: 2021-03-22 14:20
 */
import { isNil, isEmpty, equals, map, clone } from 'ramda'
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import '../../styles/product.scss'
interface ProductImage {
	uid?: string
	name?: string
	url?: string
}

const rules = {
	skuTitleCn: [{ required: true, trigger: 'change', message: '请输入SKU标题' }],
	skuTitleEn: [{ required: true, trigger: 'change', message: '请输入英文标题' }],
	productNo: [{ required: true, trigger: 'change', message: '请输入产品编号' }],
	deliveryDay: [{ required: true, trigger: 'change', message: '请输入产品交期' }],
	productOwner: [{ required: true, trigger: 'change', message: '请选择产品负责人' }],
	secondOwner: [{ required: true, trigger: 'change', message: '请选择副产品负责人' }],
	status: [{ required: true, type: 'number', trigger: 'change', message: '请选择状态' }],
	unitNo: [{ required: true, trigger: 'change', message: '请选择计量单位' }],
	unitTypeNo: [{ required: true, trigger: 'change', message: '请选择单位类型' }]
}

interface State {
	searchForm: Partial<defs.basics.ProductSkuResponseDto>
	skuAnnexUrl: Array<ProductImage>
	skuImageUrl: Array<ProductImage>
}
export default defineComponent({
	name: 'SkuDetails',
	setup() {
		const searchFormRef = ref()
		const state = reactive<State>({
			searchForm: {},
			skuAnnexUrl: [],
			skuImageUrl: []
		})
		const $route = useRoute()
		const $router = useRouter()
		const { type: queryType, skuNo } = $route.query
		onMounted(() => {
			search(skuNo as string)
		})
		async function search(skuNo: string) {
			if (!isNil(skuNo)) {
				const searchForm = {
					skuNo
				}
				// 查询产品的sku   以及sku列表
				const { success, data } = await API.basics.productSku.list.request(searchForm)
				if (success && !isNil(data)) {
					state.searchForm = data[0]
					const skuAnnexUrl = JSON.parse(state.searchForm.annexUrl as string)
					const skuImageUrl = JSON.parse(state.searchForm.imageUrl as string)
					//附件
					state.skuAnnexUrl = map((item) => {
						return {
							uid: item.uid,
							name: item.name,
							url: item.url
						}
					}, skuAnnexUrl)
					//图片
					state.skuImageUrl = map((item) => {
						return {
							uid: item.uid,
							name: item.name,
							url: item.url
						}
					}, skuImageUrl)
				}
			}
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
			const params = clone(state.searchForm)
			if (isEmpty(state.skuAnnexUrl) || isNil(state.skuAnnexUrl)) {
				message.error('请上传附件')
				return
			}
			if (isEmpty(state.skuImageUrl) || isNil(state.skuImageUrl)) {
				message.error('请上传图片')
				return
			}
			params.annexUrl = JSON.stringify(state.skuAnnexUrl)
			params.imageUrl = JSON.stringify(state.skuImageUrl)
			const { success } = await API.basics.productSku.save.request(params)
			if (success) {
				message.success('保存成功')
				$router.go(-1)
			}
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
					<a-form model={state.searchForm} rules={rules} ref={searchFormRef}>
						<a-card title="主体信息">
							<div class="box_card_flex">
								<a-form-item v-show={!isNil(state.searchForm.id)} name="skuNo" label="SKU">
									<a-input v-model={[state.searchForm.skuNo, 'value']} disabled />
								</a-form-item>
								<a-form-item name="skuTitleCn" label="SKU标题">
									<a-input v-model={[state.searchForm.skuTitleCn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="skuTitleEn" label="英文标题">
									<a-input v-model={[state.searchForm.skuTitleEn, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="skuAbbreviation" label="SKU简称">
									<a-input v-model={[state.searchForm.skuAbbreviation, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="productNo" label="产品编号">
									<a-input v-model={[state.searchForm.productNo, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="deliveryDay" label="产品交期">
									<a-input v-model={[state.searchForm.deliveryDay, 'value']} disabled={computeCount.value.isShow} />
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
								<a-form-item name="status" label="状态">
									<form-config
										v-model={[state.searchForm.status, 'value']}
										prop="status"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="isFactoryCheck" label="是否研发产品">
									<form-config
										v-model={[state.searchForm.isDevolopFlag, 'value']}
										prop="isFactoryCheck"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="isFactoryCheck" label="是否需要厂检">
									<form-config
										v-model={[state.searchForm.isFactoryCheck, 'value']}
										prop="isFactoryCheck"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="isFactoryCheck" label="是否需要质检">
									<form-config
										v-model={[state.searchForm.isWarehouseCheck, 'value']}
										prop="isFactoryCheck"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="vendorName" label="默认供应商">
									<a-input v-model={[state.searchForm.vendorName, 'value']} disabled={computeCount.value.isShow} />
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
							</div>
						</a-card>
						<a-card title="补充信息" style="margin-top: 15px;">
							<div class="box_card_flex">
								<a-form-item name="unitNo" label="计量单位">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.unitName, 'value']} disabled />
									) : (
										<form-meterUnit
											allowClear
											v-models={[
												[state.searchForm.unitNo, 'value'],
												[state.searchForm.unitName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="unitTypeNo" label="单位类型">
									{computeCount.value.isShow ? (
										<a-input v-model={[state.searchForm.unitTypeName, 'value']} disabled />
									) : (
										<form-unitType
											allowClear
											v-models={[
												[state.searchForm.unitTypeNo, 'value'],
												[state.searchForm.unitTypeName, 'label']
											]}
										/>
									)}
								</a-form-item>
								<a-form-item name="boxHeightCm" label="装箱高">
									<a-input v-model={[state.searchForm.boxHeightCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="boxLongCm" label="装箱长">
									<a-input v-model={[state.searchForm.boxLongCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="boxWidthCm" label="装箱宽">
									<a-input v-model={[state.searchForm.boxWidthCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="heightCm" label="产品高">
									<a-input v-model={[state.searchForm.heightCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="longCm" label="产品长">
									<a-input v-model={[state.searchForm.longCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="widthCm" label="产品宽">
									<a-input v-model={[state.searchForm.widthCm, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="volumeWeight" label="体积重">
									<a-input v-model={[state.searchForm.volumeWeight, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="weight" label="产品重量(g)">
									<a-input v-model={[state.searchForm.weight, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="mpq" label="每箱数量(MPQ)">
									<a-input v-model={[state.searchForm.mpq, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
								<a-form-item name="singleBillingWeight" label="单个产品计费重(g)">
									<a-input
										v-model={[state.searchForm.singleBillingWeight, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="singleBoxVolumeWeight" label="单个产品装箱体积重(m3)">
									<a-input
										v-model={[state.searchForm.singleBoxVolumeWeight, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="singlePackingWeight" label="单个产品装箱重量(g)">
									<a-input
										v-model={[state.searchForm.singlePackingWeight, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="shippingType" label="默认运输方式">
									<form-config
										v-model={[state.searchForm.shippingMethodNo, 'value']}
										prop="shippingType"
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="applyUserMemo" label="提交人备注">
									<a-textarea
										v-model={[state.searchForm.applyUserMemo, 'value']}
										disabled={computeCount.value.isShow}
									/>
								</a-form-item>
								<a-form-item name="description" label="描述">
									<a-textarea v-model={[state.searchForm.description, 'value']} disabled={computeCount.value.isShow} />
								</a-form-item>
							</div>
						</a-card>
						<a-card title="附件" style="margin-top: 15px;">
							<r-upload-dragger
								v-model={[state.skuAnnexUrl, 'value']}
								disabled={computeCount.value.isShow}
								multiple
								maxLength={12}
							/>
						</a-card>
						<a-card title="图片" style="margin-top: 15px;">
							<r-upload-image v-model={[state.skuImageUrl, 'value']} disabled={computeCount.value.isShow} />
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
