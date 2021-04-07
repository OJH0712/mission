// 选择配置
import { Component, Model, Prop, Vue, Ref } from 'vue-property-decorator'
import { upload } from '@/utils'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import Quill from 'quill'
import { forEach, isEmpty, isNil } from 'ramda'
const defaultOptions = {
	theme: 'snow',
	boundary: document.body,
	modules: {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			[{ header: 1 }, { header: 2 }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ direction: 'rtl' }],
			[{ size: ['small', false, 'large', 'huge'] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ color: [] }, { background: [] }],
			[{ font: [] }],
			[{ align: [] }],
			['clean'],
			['link', 'image', 'video']
		]
	},
	readOnly: false
}
const BlockEmbed = Quill.import('blots/block/embed')

class ImageBlot extends BlockEmbed {
	static create(value: { src: string; 'data-src': string }) {
		const node = super.create()
		node.setAttribute('data-src', value['data-src'])
		node.setAttribute('src', value.src)
		return node
	}
	static value(node: HTMLInputElement) {
		return node.getAttribute('data-src')
		// {
		// 	'data-src': node.getAttribute('data-src'),
		// 	src: node.getAttribute('src')
		// }
	}
}
ImageBlot.blotName = 'myImage'
ImageBlot.tagName = 'img'

Quill.register(ImageBlot, true)
/**
 *
 *  文本编辑器
 */
@Component({
	name: 'a-editor'
})
export default class Editor extends Vue {
	@Model('change', { type: [String, Array] }) readonly value!: string
	@Prop({ type: Boolean, default: false }) readonly multiple: boolean | undefined
	@Ref('editor') editorRef!: HTMLInputElement
	@Ref('inputRef') inputRef!: HTMLInputElement
	editor?: Quill
	readonly allowClear!: boolean // 清除
	get childValue(): string {
		return this.value
	}
	set childValue(newValue: string) {
		this.$emit('change', newValue)
	}

	mounted() {
		const editor = new Quill(this.editorRef, defaultOptions)
		editor.on('text-change', () => {
			let html = this.editorRef.children[0].innerHTML
			if (html === '<p><br></p>') html = ''
			const div = document.createElement('DIV')
			div.innerHTML = html
			const imgs = div.querySelectorAll('img')
			forEach((item) => {
				const dataSrc = item.getAttribute('data-src')
				if (dataSrc) {
					item.setAttribute('src', dataSrc)
				}
			}, Array.from(imgs))
			this.$nextTick(() => {
				this.childValue = div.innerHTML
			})
		})
		const toolbar = editor.getModule('toolbar')
		toolbar.addHandler('image', function() {
			const imgData = document.getElementById('imgData')
			if (imgData) {
				imgData.click()
			}
		})
		this.editor = editor

		// 初始化内容
		if (!isNil(this.childValue) && !isEmpty(this.childValue)) {
			this.editorRef.children[0].innerHTML = this.childValue
		}
	}
	destroyed() {
		if (this.editor) {
			this.editor = undefined
		}
	}
	change() {
		const files = this.inputRef.files
		if (!isEmpty(files) && !isNil(files)) {
			const form = new FormData()
			form.append('file', files[0])
			upload(form, (fil) => {
				if (!isNil(this.editor)) {
					const range = this.editor.getSelection()
					if (range) {
						this.editor.insertEmbed(range.index, 'myImage', { src: fil[0], 'data-src': fil[0] }, 'api') //将上传好的图片，插入到富文本的range.index（当前光标处）
					}
				}
			})
		}
	}
	render() {
		return (
			<div class="quill-editor">
				<slot name="toolbar"></slot>
				<div ref="editor">
					<p></p>
				</div>
				<form enctype="multipart/form-data" id="imgFrom" style="position: absolute;top: -9999px;">
					<input name="imgData" type="file" ref="inputRef" on-change={this.change} id="imgData" />
				</form>
			</div>
		)
	}
}
