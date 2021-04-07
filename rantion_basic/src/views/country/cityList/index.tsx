/**
 * 国家列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/3/3 下午14:26
 */
import { clone } from 'ramda'
import { countryStatus } from '@/dictionaries/filter'
import { timeArrayToTimeString } from '@/utils/date'
import { defineComponent, ref, toRaw } from 'vue'
import { useRequest, useSearch } from 'rantion'
import { notification } from 'ant-design-vue'
import ShowDetail from './components/addModal'
interface ShowDetailRef {
	init: (data?: defs.basics.BaseCityRequestDto, type?: string) => void
}
export default defineComponent({
	name: 'cityList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.baseCity.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		const { searchForm, expand, expandToggle } = useSearch<API.basics.baseCity.page.Params>({})

		// 启停用
		async function enable(secondWord: string, status: number) {
			const params = { enable: false, code: '' }
			params.code = secondWord
			if (status == 0) {
				params.enable = true
			} else {
				params.enable = false
			}
			const { success } = await API.basics.baseCity.enable.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '状态修改成功'
				})
			}
			refresh()
		}
		const showDetailRef = ref<ShowDetailRef>()
		function search() {
			const data = {
				...getPagination(true),
				...toRaw(searchForm)
			}
			run(data)
		}
		function clear() {
			searchForm.value = {}
			search()
		}
		function update(dto: defs.basics.BaseCityResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			showDetailRef.value?.init()
		}
		async function deleteOne(No: string) {
			const params = { code: '' }
			params.code = No
			const { success } = await API.basics.baseCity.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '中文名称',
				dataIndex: 'cityNameCn',
				required: true,
				key: 'cityNameCn',
				align: 'center'
			},
			{
				title: '英文名称',
				dataIndex: 'cityNameEn',
				key: 'cityNameEn',
				align: 'center'
			},
			{
				title: '数字码',
				dataIndex: 'cityCode',
				key: 'cityCode',
				align: 'center'
			},
			{
				title: '二字码',
				required: true,
				dataIndex: 'secondWord',
				key: 'secondWord',
				align: 'center'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				align: 'center',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => countryStatus(text)
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
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.BaseCityResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.secondWord as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.secondWord as string)}>删除</a>
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
								<a-form-item name="cityNameCn" label="中文名称">
									<a-input v-model={[searchForm.value.cityNameCn, 'value']} placeholder="请输入中文名称" />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="cityNameEn" label="英文名称">
									<a-input v-model={[searchForm.value.cityNameEn, 'value']} placeholder="请输入英文名称" />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="cityCode" label="数字码">
									<a-input v-model={[searchForm.value.cityCode, 'value']} placeholder="请输入数字码" />
								</a-form-item>
							</a-col>
							{expand.value ? (
								<>
									<a-col span={6}>
										<a-form-item name="secondWord" label="二字码">
											<a-input v-model={[searchForm.value.secondWord, 'value']} placeholder="请输入二字码" />
										</a-form-item>
									</a-col>
									<a-col span={6}>
										<a-form-item name="updateBy" label="修改人">
											<form-sysUser
												allowClear
												v-model={[searchForm.value.updateBy, 'value']}
												placeholder="请选择修改人"
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
				<showDetail ref={showDetailRef} onSearch={search} />
				{renderPagination()}
			</div>
		)
	}
})
