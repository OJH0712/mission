import Vue from 'vue'
export default Vue.extend({
	name: 'NotFind',
	functional: true,
	render() {
		return (
			<div class="wscn-http404-container">
				<div class="wscn-http404">
					<div class="bullshit">
						<div class="bullshit__oops">页面找不到了!</div>
						<router-link class="bullshit__return-home" tag="li" to="/index">
							返回首页
						</router-link>
					</div>
				</div>
			</div>
		)
	}
})
