/*
 * @Description:SPU列表
 * @Author: hyx
 * @Date: 2021-03-19 16:20
 */
import { timeArrayToTimeString } from '@/utils/date'
import { productSkuStatusFilter } from '@/dictionaries/filter'
import { defineComponent, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { notification } from 'ant-design-vue'
import { useSearch, useRequest } from 'rantion'
export default defineComponent({
	name: 'ProductList',
	setup() {
		const $router = useRouter()
		const { searchForm, expand, expandToggle } = useSearch<API.basics.productMaster.page.Params>({})
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.productMaster.page.request,
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
		function addProductMaster(type: string) {
			$router.push({
				name: 'ProductDetails',
				query: { type }
			})
		}

		async function statusChange(code: string, status: number) {
			const params = {
				code,
				enable: status ? false : true
			}
			const { success } = await API.basics.productMaster.enable.request(params)
			if (success) {
				notification.success({ description: '保存成功' })
				refresh()
			}
		}

		function update(type: string, productNo: string) {
			$router.push({
				name: 'ProductDetails',
				query: { type, productNo }
			})
		}
		async function deleteOne(code: string) {
			const { success } = await API.basics.productMaster.deleteOne.request({ code })
			if (success) {
				notification.success({ description: '删除成功' })
				refresh()
			}
		}

		const columns: Rantion.TableColumns[] = [
			{
				title: '产品编号',
				dataIndex: 'productNo',
				required: true,
				key: 'productNo',
				align: 'center'
			},
			{
				title: '产品名称',
				dataIndex: 'productNameCn',
				required: true,
				key: 'productNameCn',
				align: 'center'
			},
			{
				title: '产品品牌',
				dataIndex: 'brandName',
				required: true,
				key: 'brandName',
				align: 'center'
			},
			{
				title: '产品品类',
				dataIndex: 'categoryName',
				required: true,
				key: 'categoryName',
				align: 'center'
			},
			{
				title: '产品类型',
				dataIndex: 'typeName',
				required: true,
				key: 'typeName',
				align: 'center'
			},
			{
				title: '国家',
				dataIndex: 'countryName',
				required: true,
				key: 'countryName',
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
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductMasterResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update('show', record.productNo as string)}>查看</a>
						<a onClick={() => statusChange(record.productNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update('edit', record.productNo as string)}>修改</a>
						<a-popconfirm
							title="确定删除吗?"
							ok-text="Yes"
							ok-type="danger"
							cancel-text="No"
							onConfirm={() => deleteOne(record.productNo as string)}
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
				<a-button type="primary" onClick={() => addProductMaster('add')}>
					添加
				</a-button>
			)
		}

		return () => (
			<div>
				<div class="top-search-from">
					<a-form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} model={searchForm.value}>
						<a-row>
							<a-col span={6}>
								<a-form-item name="productNo" label="产品编号">
									<a-input v-model={[searchForm.value.productNo, 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="productNameCn" label="产品名称">
									<a-input v-model={[searchForm.value.productNameCn, 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="brandNo" label="产品品牌">
									<form-brand allowClear v-model={[searchForm.value.brandNo, 'value']} />
								</a-form-item>
							</a-col>

							{expand.value ? (
								<>
									<a-col span={6}>
										<a-form-item name="typeNo" label="产品类型">
											<form-spuType allowClear v-model={[searchForm.value.typeNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="countrySecondWord" label="国家">
											<form-country allowClear v-model={[searchForm.value.countrySecondWord, 'value']} />
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
										<a-form-item name="logisticsGroupNo" label="物流分组编号">
											<form-logGroup v-model={[searchForm.value.logisticsGroupNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="materialNo" label="产品材质">
											<form-material allowClear v-model={[searchForm.value.materialNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="organizationNo" label="事业部名称">
											<form-organiza allowClear v-model={[searchForm.value.organizationNo, 'value']} />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="createBy" label="创建人">
											<form-sysUser
												allowClear
												v-model={[searchForm.value.createBy, 'value']}
												placeholder="请选择创建人"
											/>
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
