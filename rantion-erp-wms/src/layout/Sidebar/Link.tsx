import { isExternal } from '@/utils/verification'
import { CreateElement, RenderContext } from 'vue'
import Vue from 'vue'
interface PropsInterface {
	to: string
}
export default Vue.extend({
	name: 'AppLink',
	functional: true,
	render(h: CreateElement, context: RenderContext<PropsInterface>) {
		const { to } = context.props
		return isExternal(to) ? (
			<a href={to} target="_blank" rel="noopener">
				{context.children}
			</a>
		) : (
			<router-link to={to}>{context.children}</router-link>
		)
	}
})
