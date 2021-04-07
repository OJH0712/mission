import Vue, { VNode } from 'vue'

declare global {
	namespace JSX {
		type Element = VNode
		type ElementClass = Vue
		interface IntrinsicElements {
			[elem: string]: any
		}
	}
	declare let __webpack_public_path__
}
declare let __webpack_public_path__: string
