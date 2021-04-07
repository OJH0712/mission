// 选择配置
import { isNil, isEmpty, concat, equals, map, includes, head, not } from 'ramda'
import { Component, Model, Prop, Vue, Watch } from 'vue-property-decorator'
import { UploadFile } from 'ant-design-vue/types/upload'
import { notification } from 'ant-design-vue'
import { policyToken, isArray, OssPolicyDto, isString, sizeToM } from '@/utils'
interface UploadChangeParam {
	file: UploadFile
	fileList: Array<UploadFile>
}
let ossData: OssPolicyDto | undefined
function getExtraData(file: File) {
	return isNil(ossData)
		? null
		: {
				key: ossData.path + '/' + file.name,
				OSSAccessKeyId: ossData.accessKey,
				policy: ossData.policy,
				Signature: ossData.signature
		  }
}
function hdBeforeUpload(file: UploadFile) {
	if (ossData) {
		const ok = file.size < ossData.maxSize
		if (not(ok)) {
			notification.error({
				description: `${file.name}大小(${sizeToM(file.size)})超出文件上限(${sizeToM(ossData.maxSize)})`,
				message: '文件超标'
			})
		}
		return ok
	}
	return true
}
async function getAction() {
	ossData = await policyToken.getOssData()
	return isNil(ossData) ? '' : ossData.host
}
const fileStatus = ['removed', 'done']
/**
 * 图片上传 支持多上传
 * 支持双向绑定 如果是 多上传 请传入一个数组 且  multiple = true
 * maxLength 最多上传多少
 */
@Component({
	name: 'upload-image'
})
export default class UploadImage extends Vue {
	@Model('change', { type: [String, Array] }) readonly value!: string | Array<string>
	@Prop({ type: Boolean, default: false }) readonly multiple: boolean | undefined
	fileList: Array<UploadFile> = []
	previewVisible = false
	@Prop({ type: Number, default: 1 }) readonly maxLength!: number
	previewImage = ''
	get childValue(): string | Array<string> | undefined {
		return this.value
	}
	set childValue(newValue: string | Array<string> | undefined) {
		this.$emit('change', newValue)
	}
	destroy() {
		this.fileList = []
	}
	@Watch('value')
	onChangeChildValue() {
		this.setfileList()
	}
	mounted() {
		this.setfileList()
	}
	setfileList() {
		if (isNil(this.childValue) || isEmpty(this.childValue)) {
			this.fileList = []
		} else {
			this.fileList = map(
				(item) => {
					return {
						uid: item,
						url: item,
						name: item,
						type: 'image/png',
						size: 120
					}
				},
				isString(this.childValue) ? [this.childValue] : this.childValue
			)
		}
	}
	change({ file, fileList }: UploadChangeParam) {
		// 上传成功的时候 添加url
		if (equals(file.status as string, 'done')) {
			if (ossData) {
				const host = ossData.host + ossData.path + '/'
				fileList = map((item) => {
					if (isNil(item.url)) {
						item.url = concat(host, item.name)
					}
					return item
				}, fileList)
			}
		}
		// 上传失败需要处理一下 错误信息 免得错误太长 阻挡删除按钮
		if (equals(file.status as string, 'error')) {
			fileList = map((item) => {
				if (equals(item.status as string, 'error')) {
					item.response = '上传失败'
				}
				return item
			}, fileList)
		}
		// 删除或者传成功都通知的表单更新
		if (includes(file.status as string, fileStatus)) {
			if (isArray(this.childValue)) {
				this.childValue = map((item) => item.url || '', fileList)
			} else {
				const data = head(fileList)
				this.childValue = data ? data.url : undefined
			}
		}
		this.fileList = fileList
	}
	get ifUpload() {
		return this.fileList.length >= this.maxLength
	}
	render() {
		return (
			<a-upload-dragger action={getAction} beforeUpload={hdBeforeUpload} disabled={this.ifUpload} data={getExtraData} multiple={this.multiple} on-change={this.change} fileList={this.fileList}>
				<p class="ant-upload-drag-icon">
					<a-icon type="inbox" />
				</p>
				<p class="ant-upload-text">点击或者拖拽 即可上传文件</p>
			</a-upload-dragger>
		)
	}
}
