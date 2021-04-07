/*
 * @Description:计量单位列表
 * @Author: hyx
 * @Date: 2021-03-04 9:40
 */
/**
 * 计量单位列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/11 下午2:38
 */
import { clone } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import ShowDetail from './components/showMeteringDetail'
import { notification } from 'ant-design-vue'
import { defineComponent, ref, toRaw } from 'vue'
import { useRequest, useSearch } from 'rantion'

interface ShowDetailRef {
	init: (data?: defs.basics.BaseUnitRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'baseUnitList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.baseUnit.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		const { searchForm, expand, expandToggle } = useSearch<API.basics.baseUnit.page.Params>({})

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
		const showDetailRef = ref<ShowDetailRef>()
		async function enable(No: string, status: number) {
			const params = { enable: false, code: '' }
			params.code = No
			if (status == 0) {
				params.enable = true
			} else {
				params.enable = false
			}
			const { success } = await API.basics.baseUnit.enable.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '状态修改成功'
				})
			}
			refresh()
		}
		async function deleteOne(No: string) {
			const params = { code: '' }
			params.code = No
			const { success } = await API.basics.baseUnit.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.BaseUnitResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			showDetailRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '计量单位编号',
				dataIndex: 'unitNo',
				required: true,
				key: 'unitNo',
				align: 'center'
			},
			{
				title: '计量单位中文名',
				dataIndex: 'unitNameCn',
				required: true,
				key: 'unitNameCn',
				align: 'center'
			},
			{
				title: '计量单位英文名',
				dataIndex: 'unitNameEn',
				key: 'unitNameEn',
				align: 'center'
			},
			{
				title: '计量单位简称',
				dataIndex: 'unitAbbreviation',
				key: 'unitAbbreviation',
				align: 'center'
			},
			{
				title: '单位类型',
				dataIndex: 'unitTypeNo',
				key: 'unitTypeNo',
				align: 'center',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => <form-unitType value={text} disabled />
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				align: 'center',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => productBandStatusFilter(text)
			},
			{
				title: '创建人',
				dataIndex: 'createBy',
				key: 'createBy',
				align: 'center'
			},
			{
				title: '创建时间',
				dataIndex: 'createTime',
				align: 'center',
				key: 'createTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '修改人',
				dataIndex: 'updateBy',
				key: 'updateBy',
				align: 'center'
			},
			{
				title: '修改时间',
				dataIndex: 'updateTime',
				align: 'center',
				key: 'updateTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '操作',
				dataIndex: 'action',
				align: 'center',
				key: 'action',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.BaseUnitResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.unitNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.unitNo as string)}>删除</a>
					</a-space>
				)
			}
		]
		function tableHeader() {
			return (
				<a-button type="primary" onClick={add}>
					添加
				</a-button>
			)
		}
		return () => (
			<div>
				<div class="top-search-from">
					<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
						<a-row>
							<a-col span={6}>
								<a-form-item name="unitNo" label="计量单位编号">
									<a-input v-model={[searchForm.value['unitNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="unitNameCn" label="计量单位名称">
									<a-input v-model={[searchForm.value['unitNameCn'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="unitTypeNo" label="单位类型">
									<form-unitType allowClear v-model={[searchForm.value['unitTypeNo'], 'value']}></form-unitType>
								</a-form-item>
							</a-col>
							{expand.value ? (
								<>
									<a-col span={6}>
										<a-form-item name="status" label="状态">
											<a-select v-model={[searchForm.value['status'], 'value']}>
												<a-select-option value={0}>停用</a-select-option>
												<a-select-option value={1}>启用</a-select-option>
											</a-select>
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
									<a-button type="primary" loading={loading.value} onClick={search}>
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
				<showDetail ref={showDetailRef} onSearch={search} />
				{renderPagination()}
			</div>
		)
	}
})
