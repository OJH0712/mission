/*
 * @Description:SKU列表
 * @Author: hyx
 * @Date: 2021-03-22 14:20
 */
import { timeArrayToTimeString } from '@/utils/date'
import { productSkuStatusFilter } from '@/dictionaries/filter'
import { defineComponent, toRaw } from 'vue'
import { useRequest, useSearch } from 'rantion'
import { useRouter } from 'vue-router'
import { notification } from 'ant-design-vue'
export default defineComponent({
	name: 'SkuList',
	setup() {
		const $router = useRouter()
		const { searchForm, expand, expandToggle } = useSearch<API.basics.productSku.page.Params>({})
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.productSku.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		function search() {
			const data = {
				...getPagination(true),
				...toRaw(searchForm.value)
			}
			run(data)
		}
		function clear() {
			searchForm.value = {}
			search()
		}
		function addSku(type: string) {
			$router.push({
				name: 'SkuDetails',
				query: { type }
			})
		}

		async function statusChange(code: string, status: number) {
			const params = {
				code,
				enable: status ? false : true
			}
			const { success } = await API.basics.productSku.enable.request(params)
			if (success) {
				notification.success({ description: '保存成功' })
				refresh()
			}
		}

		function update(skuNo: string, type: string) {
			$router.push({
				name: 'SkuDetails',
				query: { type, skuNo }
			})
		}
		async function deleteOne(code: string) {
			const { success } = await API.basics.productSku.deleteOne.request({ code })
			if (success) {
				notification.success({ description: '删除成功' })
				refresh()
			}
		}

		const columns: Rantion.TableColumns[] = [
			{
				title: 'SKU编号',
				dataIndex: 'skuNo',
				required: true,
				key: 'skuNo',
				align: 'center'
			},
			{
				title: 'SKU标题',
				dataIndex: 'skuTitleCn',
				required: true,
				key: 'skuTitleCn',
				align: 'center'
			},
			{
				title: '状态',
				dataIndex: 'status',
				required: true,
				key: 'status',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => productSkuStatusFilter(text),
				align: 'center'
			},
			{
				title: '产品编号',
				dataIndex: 'productNo',
				required: true,
				key: 'productNo',
				align: 'center'
			},
			{
				title: '产品负责人',
				dataIndex: 'productOwnerName',
				required: true,
				key: 'productOwnerName',
				align: 'center'
			},
			{
				title: '创建人',
				dataIndex: 'createBy',
				required: true,
				key: 'createBy',
				align: 'center'
			},
			{
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text),
				align: 'center'
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductSkuResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record.skuNo as string, 'show')}>查看</a>
						<a onClick={() => statusChange(record.skuNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record.skuNo as string, 'edit')}>修改</a>
						<a-popconfirm
							title="确定删除吗?"
							ok-text="Yes"
							ok-type="danger"
							cancel-text="No"
							onConfirm={() => deleteOne(record.skuNo as string)}
						>
							<a href="#">删除</a>
						</a-popconfirm>
					</a-space>
				),
				align: 'center'
			}
		]

		function tableHeader() {
			return (
				<a-button type="primary" onClick={() => addSku('add')}>
					添加
				</a-button>
			)
		}

		return () => (
			<div>
				<div class="top-search-from">
					<a-form model={searchForm.value} labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
						<a-row>
							<a-col span={6}>
								<a-form-item name="skuNo" label="SKU编号">
									<a-input v-model={[searchForm.value.skuNo, 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="skuTitleCn" label="SKU标题">
									<a-input v-model={[searchForm.value.skuTitleCn, 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="productNo" label="产品编号">
									<a-input v-model={[searchForm.value.productNo, 'value']} />
								</a-form-item>
							</a-col>
							{expand.value ? (
								<>
									<a-col span={6}>
										<a-form-item name="unitNo" label="计量单位">
											<form-meterUnit allowClear v-model={[searchForm.value.unitNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="unitTypeNo" label="单位类型">
											<form-unitType allowClear v-model={[searchForm.value.unitTypeNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="vendorNo" label="供应商编号">
											<a-input v-model={[searchForm.value.vendorNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="shippingMethodName" label="运输方式">
											<form-config v-model={[searchForm.value.shippingMethodNo, 'value']} prop="shippingType" />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="status" label="状态">
											<form-config v-model={[searchForm.value.status, 'value']} prop="status" />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="approvalStatus" label="审批状态">
											<form-config v-model={[searchForm.value.approvalStatus, 'value']} prop="approvalStatus" />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="productOwner" label="产品负责人">
											<form-sysUser allowClear v-model={[searchForm.value.productOwner, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="createBy" label="创建人">
											<form-sysUser allowClear v-model={[searchForm.value.createBy, 'value']} />
										</a-form-item>
									</a-col>
								</>
							) : null}
							<a-col span={6}>
								<a-form-item class="right">
									<a-button type="primary" loading={loading.value} onClick={search} html-type="submit">
										查询
									</a-button>
									<a-button onClick={clear}>清除</a-button>
									<a class="expand" onClick={expandToggle}>
										{expand.value ? '收起' : '更多'} <a-icon type={expand.value ? 'up' : 'down'} />
									</a>
								</a-form-item>
							</a-col>
						</a-row>
					</a-form>
				</div>
				<r-table
					columns={columns}
					v-slots={{ header: tableHeader }}
					dataSource={data.value.data?.records}
					rowKey="id"
					loading={loading.value}
					refresh={refresh}
				/>
				{renderPagination()}
			</div>
		)
	}
})
