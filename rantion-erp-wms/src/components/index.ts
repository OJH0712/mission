import Vue from 'vue'

import { equals } from 'ramda'
import uploadDragger from './upload/uploadDragger'
import uploadImage from './upload/uploadImage'
import editor from './editor'
import elCascaderMulti from 'el-cascader-multi'
Vue.use(elCascaderMulti)
// /\.vue$/
const requireComponent = require.context('./Form', false)
Vue.component('upload-image', uploadImage)
Vue.component('upload-dragger', uploadDragger)
Vue.component('a-editor', editor)
/**
 * 把form 查询的组件 注册全局
 */
requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName)
	// 兼容class跟普通写法
	// 判断是函数还是对象  使用class 写法的组件就是一个函数 这个时候name属性不再挂载到default里面 需要去 extendOptions 获取name
	const name = equals(typeof componentConfig.default, 'function') ? componentConfig.default.extendOptions.name : componentConfig.default.name
	Vue.component(name, componentConfig.default || componentConfig)
})
