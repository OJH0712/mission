declare module '*.vue' {
	import Vue from 'vue'
	export default Vue
}
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.css'
declare module '*.scss'
interface ZhCN {
	[key: string]: any
}
declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
	import zh from 'ant-design-vue/lib/locale-provider/zh_CN'
	const zh_CN: ZhCN

	export default zh_CN
}

declare module 'el-cascader-multi'
