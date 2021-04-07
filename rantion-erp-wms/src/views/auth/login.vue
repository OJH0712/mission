<template>
	<div class="loginBj">
		<div class="loginFormlayout">
			<a-form-model :model="loginForm" :rules="loginRules" autocomplete="on" label-position="left" ref="loginForm">
				<div class="loginlogo">
					<img :src="logo" alt="蓝深科技" />
				</div>

				<a-form-model-item prop="userName">
					<a-input autocomplete="on" class="login" name="userName" placeholder="请输入工号/手机号码/邮箱" type="text" v-model="loginForm.userName">
						<span slot="prefix">
							<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
						</span>
					</a-input>
				</a-form-model-item>
				<a-form-model-item prop="password">
					<a-input :type="pwdType" @keyup.enter.native="handleLogin" autocomplete="on" class="login" name="password" placeholder="请输入密码" v-model="loginForm.password">
						<span slot="prefix">
							<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
						</span>
						<!-- <span @click="showPwd" slot="suffix">
							<svg-icon class="color-main" icon-class="eye" />
						</span> -->
					</a-input>
				</a-form-model-item>
				<a-form-model-item>
					<a-checkbox v-model="rememberPwd" style="color: #fff">记住密码</a-checkbox>
				</a-form-model-item>
				<a-form-model-item style="margin:30px 0;">
					<a-button class="loginButton" :loading="loading" @click.native.prevent="handleLogin" style="width: 100%" type="primary">登录</a-button>
				</a-form-model-item>
			</a-form-model>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import logo from '@/assets/favicon.png'
import { equals, isNil } from 'ramda'
import { PermissionModule } from '@/store/modules/permission'
interface IntLoginForm {
	userName: string
	password: string
}

@Component({
	name: 'login'
})
export default class extends Vue {
	private loginForm: IntLoginForm = {
		userName: '',
		password: ''
	}
	// beforeCreate() {
	// 	location.href = 'http://portal.rantion.com'
	// }
	private validatePass = (rule: any, value: string, callback: Function) => {
		if (value.length < 3) {
			callback(new Error('密码不能小于3位'))
		} else {
			callback()
		}
	}

	public loginRules = {
		username: [
			{
				required: true,
				message: '请输入账户名',
				trigger: 'blur'
			}
		],
		password: [
			{
				required: true,
				trigger: 'blur',
				validator: this.validatePass
			}
		]
	}

	public loading = false
	private pwdType = 'password'
	public logo = logo
	private rememberPwd = false

	mounted() {
		// 判断之前是否有记住密码
		if (equals('true', localStorage.rememberPwd)) {
			this.rememberPwd = true
			this.loginForm.userName = localStorage.userName
			this.loginForm.password = localStorage.passWord
		} else {
			this.rememberPwd = false
		}
	}

	public showPwd() {
		if (this.pwdType === 'password') {
			this.pwdType = ''
		} else {
			this.pwdType = 'password'
		}
	}

	public async handleLogin() {
		try {
			await (this.$refs.loginForm as HTMLFormElement).validate()
			this.loading = true
			// eslint-disable-next-line no-undef
			const { success, data } = await API.ucenter.sysUserLogin.login.request(this.loginForm)
			if (success && !isNil(data)) {
				localStorage.setItem('rantion-erp-accessToken', data.accessToken)
				localStorage.setItem('rantion-erp-userNo', data.userNo)
				if (this.rememberPwd) {
					localStorage.rememberPwd = this.rememberPwd ? 'true' : 'false'
					localStorage.userName = this.loginForm.userName
					localStorage.passWord = this.loginForm.password
				} else {
					localStorage.removeItem('rememberPwd')
					localStorage.removeItem('userName')
					localStorage.removeItem('passWord')
				}
				await PermissionModule.InitRoutes()
				const path = this.$route.query.redirect || '/'
				await this.$router.push(path as string)
			}
			// await UserModule.login(this.loginForm)
			// 记住密码
		} finally {
			this.loading = false
		}
	}
}
</script>
